// tests/stress/loader.mjs
// Lightweight Node.js ESM resolution hook for extensionless imports in TypeScript files
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context);
  } catch (err) {
    if (err.code === 'ERR_MODULE_NOT_FOUND' && (specifier.startsWith('.') || specifier.startsWith('/'))) {
      const parentUrl = context.parentURL;
      if (parentUrl && parentUrl.startsWith('file:')) {
        const parentDir = path.dirname(fileURLToPath(parentUrl));
        const candidateBase = path.resolve(parentDir, specifier);
        for (const ext of ['.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.js']) {
          const candidatePath = candidateBase + ext;
          if (fs.existsSync(candidatePath) && fs.statSync(candidatePath).isFile()) {
            return nextResolve(pathToFileURL(candidatePath).href, context);
          }
        }
      }
    }
    throw err;
  }
}
