import React from 'react'

export interface ScholarSilhouetteSVGProps {
  className?: string
  priority?: boolean
  lightMode?: boolean
}

/**
 * High-fidelity vector artwork depicting the Scholar at the Scroll against the Deccan twilight horizon.
 * Serves as the zero-asset, instant-paint Tier 0 visual fallback for environments without WebGL or OffscreenCanvas support.
 * Complies strictly with the Zero-Shadow Law and WCAG accessibility standards.
 */
export const ScholarSilhouetteSVG: React.FC<ScholarSilhouetteSVGProps> = ({
  className = '',
  lightMode = false,
}) => {
  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none pointer-events-none ${className}`}
      style={{ boxShadow: 'none' }}
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="इतिहास संशोधक आणि प्राचीन हस्तलिखित पोथी, सह्याद्री टेकड्यांच्या पार्श्वभूमीवर"
      >
        <defs>
          {/* Twilight sky gradient */}
          <linearGradient id="twilightSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={lightMode ? '#cfe9f1' : '#140604'} />
            <stop offset="35%" stopColor={lightMode ? '#e5eee5' : '#300d08'} />
            <stop offset="65%" stopColor={lightMode ? '#f5d7a4' : '#631b11'} />
            <stop offset="85%" stopColor={lightMode ? '#eeb36c' : '#99341f'} />
            <stop offset="100%" stopColor={lightMode ? '#d9864d' : '#c24b2b'} />
          </linearGradient>

          {/* Soft haze layer */}
          <linearGradient id="horizonHaze" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={lightMode ? '#f3c98c' : '#c24b2b'} stopOpacity="0" />
            <stop offset="50%" stopColor={lightMode ? '#fff1c7' : '#e8a55a'} stopOpacity="0.15" />
            <stop offset="100%" stopColor={lightMode ? '#8a4c32' : '#0a0505'} stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* 1. Atmospheric Sky Plane */}
        <rect width="1440" height="800" fill="url(#twilightSky)" />

        {/* 2. Crisp horizon sun disc (no blur or bloom) */}
        <circle cx="720" cy="580" r="92" fill={lightMode ? '#f7b84c' : '#e88938'} opacity="0.96" />

        {/* 3. Distant Deccan Mountain Silhouettes (Layer 1) */}
        <path
          d="M0,520 Q180,480 360,510 T720,490 T1080,515 T1440,490 L1440,800 L0,800 Z"
          fill={lightMode ? '#bd7950' : '#401009'}
          opacity={lightMode ? '0.55' : '0.75'}
        />

        {/* 4. Sahyadri Fort Ramparts & Jagged Ridges (Layer 2) */}
        <path
          d="M0,560 
             L70,540 L140,555 L210,520 L270,535 L330,505 L370,515 
             L410,485 L440,490 L490,470 L530,480 L570,455 L610,470 
             L670,440 L730,465 L790,430 L840,450 L900,420 L960,450 
             L1020,410 L1070,435 L1130,405 L1190,440 L1260,415 L1330,445 
             L1400,420 L1440,435 L1440,800 L0,800 Z"
          fill={lightMode ? '#724534' : '#1f0705'}
        />

        {/* Bastion watchtower accents along the ridge */}
        <path
          d="M488,460 L488,470 L502,470 L502,460 L498,460 L498,456 L492,456 L492,460 Z"
          fill="#1f0705"
        />
        <path
          d="M898,410 L898,420 L912,420 L912,410 L908,410 L908,406 L902,406 L902,410 Z"
          fill="#1f0705"
        />

        {/* 5. Mid-ground Plateau with Warm Horizon Mist */}
        <rect y="480" width="1440" height="320" fill="url(#horizonHaze)" />

        {/* 6. Foreground Plateau Rocky Crest */}
        <path
          d="M0,800 L0,640 Q160,620 340,650 Q520,680 720,630 Q920,580 1120,630 Q1280,660 1440,610 L1440,800 Z"
          fill={lightMode ? '#583a2e' : '#0c0606'}
        />
        <path
          d="M240,800 L400,645 L520,635 L640,655 L740,610 L860,655 L1040,625 L1200,800 Z"
          fill={lightMode ? '#392820' : '#050303'}
        />

        {/* 7. SCHOLAR AT THE SCROLL SILHOUETTE (Positioned on the Right Promontory) */}
        <g transform="translate(980, 480) scale(0.9)">
          {/* Natural stone pedestal base */}
          <path d="M-60,185 Q30,165 140,185 L130,225 L-70,225 Z" fill="#000000" />

          {/* Seated Scholar Body (Contemplative Padmasana posture with draped robe / शेला) */}
          <path
            d="M35,178 
               C12,172 -10,166 -16,150 
               C-22,130 -18,105 -12,82 
               C-6,65 5,50 22,44 
               C26,27 24,16 35,9 
               C46,3 55,7 62,18 
               C68,27 64,38 62,46 
               C75,52 84,71 86,93 
               C88,120 90,147 97,158 
               C101,172 82,180 60,180 Z"
            fill="#000000"
          />

          {/* Maratha Pheta / Turban contour */}
          <path
            d="M33,11 
               C28,4 39,-7 52,-7 
               C63,-7 72,1 70,12 
               C66,19 44,22 33,11 Z"
            fill="#000000"
          />

          {/* Draped Angavastra (खांद्यावरील उपरणे) */}
          <path
            d="M17,52 Q-6,87 -11,130 Q-17,157 -20,174 Q-11,180 6,163 Q11,120 28,70 Z"
            fill="#000000"
          />

          {/* Arms holding the holy manuscript scroll (पोथी) */}
          <path
            d="M24,71 Q38,93 57,90 Q71,88 79,75"
            stroke="#000000"
            strokeWidth="13"
            strokeLinecap="round"
          />

          {/* The Ancient Manuscript Scroll (Unrolled horizontally) */}
          <g transform="translate(20, 77)">
            {/* Left rolled spindle */}
            <rect x="-9" y="-5" width="8" height="35" rx="4" fill="#e8a55a" opacity="0.95" />
            {/* Unrolled parchment leaf */}
            <rect x="-2" y="2" width="70" height="22" rx="2" fill="#faf9f5" opacity="0.98" />
            {/* Sanskrit / Modi calligraphy lines simulation */}
            <line x1="5" y1="7" x2="62" y2="7" stroke="#99341f" strokeWidth="1.6" strokeDasharray="4 2.5" />
            <line x1="5" y1="13" x2="62" y2="13" stroke="#99341f" strokeWidth="1.6" strokeDasharray="3 2" />
            <line x1="5" y1="19" x2="48" y2="19" stroke="#99341f" strokeWidth="1.6" strokeDasharray="4 2" />
            {/* Right rolled spindle */}
            <rect x="67" y="-5" width="8" height="35" rx="4" fill="#e8a55a" opacity="0.95" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ScholarSilhouetteSVG
