#!/usr/bin/env node
// tests/e2e/runner.js
// Central E2E Test Runner for Itihas Swadhay (Tiers 1-4)
// Exits with code 0 on complete pass, non-zero on failure.

import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '../..')

const ANSI = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  coral: '\x1b[38;2;204;120;92m', // #cc785c
  amber: '\x1b[38;2;232;165;90m', // #e8a55a
  teal: '\x1b[38;2;93;184;166m',  // #5db8a6
  green: '\x1b[32m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
}

const TEST_TIERS = [
  {
    tier: 'Tier 1',
    name: 'Feature Coverage',
    file: 'tests/e2e/tier1_feature_tests.test.js',
    description: 'Discrete verification across 10 core features (Navigation, 3D Hero/SVG, Chapter Switcher, Filters, Accordions, Search, Bookmarks, Telemetry, Micro-Stripe, Zero-Shadow)',
    minExpectedTests: 50,
  },
  {
    tier: 'Tier 2',
    name: 'Boundary & Corner Cases',
    file: 'tests/e2e/tier2_boundary_tests.test.js',
    description: 'Resilience under adverse edge cases (empty search, rapid switching, quota simulation, rapid keyboard events, normalization, extreme viewports)',
    minExpectedTests: 18,
  },
  {
    tier: 'Tier 3',
    name: 'Cross-Feature Combinations',
    file: 'tests/e2e/tier3_combination_tests.test.js',
    description: 'Pairwise and multi-feature interaction workflows (search -> filter -> bookmark, back navigation state persistence, subject boundaries)',
    minExpectedTests: 16,
  },
  {
    tier: 'Tier 4',
    name: 'Real-World Application Scenarios',
    file: 'tests/e2e/tier4_application_tests.test.js',
    description: 'Realistic end-to-end student study sessions for all 9 curriculum chapters and comprehensive board exam revision',
    minExpectedTests: 10,
  },
]

function printHeader() {
  console.log('')
  console.log(`${ANSI.coral}================================================================================${ANSI.reset}`)
  console.log(`${ANSI.bold}${ANSI.coral}           ITIHAS SWADHAY — E2E TEST RUNNER & VERIFICATION HARNESS              ${ANSI.reset}`)
  console.log(`${ANSI.amber}  Class 10 Maharashtra Board History & Political Science • Trinity Architecture ${ANSI.reset}`)
  console.log(`${ANSI.teal}  Node.js v24 Native ESM • Opaque-Box 4-Tier Test Matrix                        ${ANSI.reset}`)
  console.log(`${ANSI.coral}================================================================================${ANSI.reset}`)
  console.log('')
}

function parseTestSummary(output) {
  const passMatch = output.match(/ℹ\s+pass\s+(\d+)/)
  const failMatch = output.match(/ℹ\s+fail\s+(\d+)/)
  const durationMatch = output.match(/ℹ\s+duration_ms\s+([\d.]+)/)

  return {
    pass: passMatch ? parseInt(passMatch[1], 10) : 0,
    fail: failMatch ? parseInt(failMatch[1], 10) : 0,
    durationMs: durationMatch ? parseFloat(durationMatch[1]) : 0,
  }
}

async function runSuite() {
  const filterArg = process.argv[2]?.toLowerCase()
  const activeTiers = filterArg
    ? TEST_TIERS.filter((t) => t.tier.toLowerCase().includes(filterArg) || t.name.toLowerCase().includes(filterArg))
    : TEST_TIERS

  if (activeTiers.length === 0) {
    console.error(`${ANSI.red}Error: No test tiers matched filter "${process.argv[2]}"${ANSI.reset}`)
    process.exit(1)
  }

  printHeader()
  const startTime = Date.now()

  let totalPassed = 0
  let totalFailed = 0
  const tierResults = []

  for (const tierConfig of activeTiers) {
    const fullPath = path.resolve(rootDir, tierConfig.file)
    if (!fs.existsSync(fullPath)) {
      console.error(`${ANSI.red}[FAIL] Missing test file: ${tierConfig.file}${ANSI.reset}`)
      totalFailed++
      tierResults.push({ ...tierConfig, status: 'MISSING', pass: 0, fail: 1, durationMs: 0 })
      continue
    }

    console.log(`${ANSI.bold}${ANSI.amber}▶ [RUNNING] ${tierConfig.tier}: ${tierConfig.name}${ANSI.reset}`)
    console.log(`  ${ANSI.dim}${tierConfig.description}${ANSI.reset}`)

    const proc = spawnSync('node', ['--test', tierConfig.file], {
      cwd: rootDir,
      encoding: 'utf8',
      env: { ...process.env, FORCE_COLOR: '1' },
    })

    const summary = parseTestSummary(proc.stdout)
    const exitCode = proc.status

    if (exitCode === 0 && summary.fail === 0) {
      console.log(`  ${ANSI.green}✔ ${tierConfig.tier} PASSED: ${summary.pass} tests OK (${summary.durationMs.toFixed(1)}ms)${ANSI.reset}\n`)
      totalPassed += summary.pass
      tierResults.push({ ...tierConfig, status: 'PASSED', pass: summary.pass, fail: 0, durationMs: summary.durationMs })
    } else {
      console.log(`  ${ANSI.red}✖ ${tierConfig.tier} FAILED: ${summary.fail} failures, ${summary.pass} passed${ANSI.reset}`)
      if (proc.stdout) console.log(proc.stdout)
      if (proc.stderr) console.error(proc.stderr)
      console.log('')
      totalPassed += summary.pass
      totalFailed += (summary.fail || 1)
      tierResults.push({ ...tierConfig, status: 'FAILED', pass: summary.pass, fail: (summary.fail || 1), durationMs: summary.durationMs })
    }
  }

  const totalTime = Date.now() - startTime

  // Print Executive Summary Table
  console.log(`${ANSI.coral}--------------------------------------------------------------------------------${ANSI.reset}`)
  console.log(`${ANSI.bold}E2E EXECUTION SUMMARY:${ANSI.reset}`)
  console.log(`${ANSI.coral}--------------------------------------------------------------------------------${ANSI.reset}`)
  tierResults.forEach((res) => {
    const statusColor = res.status === 'PASSED' ? ANSI.green : ANSI.red
    const icon = res.status === 'PASSED' ? '✔' : '✖'
    console.log(
      `  ${icon} ${statusColor}${res.tier.padEnd(8)}${ANSI.reset} | ${res.name.padEnd(32)} | Passed: ${String(res.pass).padStart(3)} | Failed: ${String(res.fail).padStart(2)} | Duration: ${res.durationMs.toFixed(1)}ms`
    )
  })

  console.log(`${ANSI.coral}--------------------------------------------------------------------------------${ANSI.reset}`)
  console.log(
    `${ANSI.bold}TOTAL: ${totalPassed} passed, ${totalFailed} failed | Total Time: ${(totalTime / 1000).toFixed(2)}s${ANSI.reset}`
  )

  if (totalFailed === 0) {
    console.log(`\n${ANSI.bold}${ANSI.green}🎉 ALL E2E TEST TIERS PASSED PERFECTLY WITH ZERO DEFECTS!${ANSI.reset}\n`)
    process.exit(0)
  } else {
    console.log(`\n${ANSI.bold}${ANSI.red}🚨 E2E TEST RUNNER FINISHED WITH ${totalFailed} FAILING ASSERTIONS.${ANSI.reset}\n`)
    process.exit(1)
  }
}

runSuite().catch((err) => {
  console.error(`${ANSI.red}Fatal Runner Error:${ANSI.reset}`, err)
  process.exit(1)
})
