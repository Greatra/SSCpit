/**
 * src/styles/motionTokens.ts
 * Awwwards Motion DNA & Editorial Physics Tokens
 *
 * Derived from award-winning editorial and cultural archives (Obys FORMAT, Columbia Oral History, House of Honey).
 * Governed by critically damped spring physics (zeta ~ 1.0) to eliminate layout jitter and shirorekha tearing.
 */

import type { Transition, Variants } from 'motion/react';

export const ARCHIVAL_TRANSITIONS = {
  // 1. Critically Damped Accordion & Drawer Physics (Zero vertical overshoot / layout jitter)
  accordion: {
    type: 'spring',
    stiffness: 260,
    damping: 32,
    mass: 0.8,
  } as Transition,

  // 2. High-Performance Monotonic Cubic-Bezier for Container Height (Guaranteed CLS = 0)
  monotonicHeight: {
    duration: 0.32,
    ease: [0.16, 1, 0.3, 1],
  } as Transition,

  // 3. High-Frequency Tactile Cockpit Switchgear (Buttons, Pills, Tabs)
  tactile: {
    type: 'spring',
    stiffness: 420,
    damping: 30,
    mass: 0.5,
  } as Transition,

  // 4. Institutional Archival Folio Chassis (SearchModal, HistoricalFiguresModal)
  modal: {
    type: 'spring',
    stiffness: 340,
    damping: 34,
    mass: 1.0,
  } as Transition,

  // 5. Obys Agency Editorial Deceleration Curve (Power4.out equivalent)
  editorialEase: {
    duration: 0.38,
    ease: [0.16, 1, 0.3, 1],
  } as Transition,

  // 6. Snappy Dial Rotation (Accordions, Chevrons)
  rotation: {
    type: 'spring',
    stiffness: 360,
    damping: 28,
  } as Transition,
};

export const ARCHIVAL_MICRO_INTERACTIONS = {
  // Primary Pill & Button Micro-Hover/Tap (No subpixel text distortion)
  button: {
    whileHover: { y: -1.5, scale: 1.015 },
    whileTap: { scale: 0.975, y: 0 },
    transition: ARCHIVAL_TRANSITIONS.tactile,
  },
  // Directional Back / Nav Button Shift
  backButton: {
    whileHover: { x: -3 },
    whileTap: { scale: 0.95 },
    transition: ARCHIVAL_TRANSITIONS.tactile,
  },
  // Icon Rotary Tap
  iconAction: {
    whileHover: { scale: 1.08, y: -1 },
    whileTap: { scale: 0.92 },
    transition: ARCHIVAL_TRANSITIONS.tactile,
  },
  // Spec Cell & Card Subtle Lift (Strict Zero-Shadow Law preserved)
  cardLift: {
    whileHover: { y: -1.5 },
    transition: ARCHIVAL_TRANSITIONS.tactile,
  },
};

export const ARCHIVAL_STAGGER_VARIANTS = {
  // Staggered Answer Points Disclosure inside Swadhay Questions
  pointsList: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.06,
      },
    },
  } as Variants,

  pointItem: {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 340,
        damping: 28,
      },
    },
  } as Variants,

  // Telemetry Spec-Cells Stagger Grid
  specGrid: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  } as Variants,

  specCell: {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 26,
      },
    },
  } as Variants,

  // Search Results Cascade
  searchResultsList: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
      },
    },
  } as Variants,

  searchResultItem: {
    hidden: { opacity: 0, x: -6 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 380,
        damping: 30,
      },
    },
  } as Variants,
};
