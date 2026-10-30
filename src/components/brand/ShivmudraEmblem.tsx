import React from 'react';

interface ShivmudraEmblemProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

/**
 * Royal Shivmudra Octagonal Archival Seal (शिवमुद्रा अष्टकोन)
 * Inspired by the historic 17th-century seal of Chhatrapati Shivaji Maharaj.
 * Replaces unstyled AI placeholder circular avatars with an authentic Maratha heritage emblem.
 */
export const ShivmudraEmblem: React.FC<ShivmudraEmblemProps> = ({
  size = 36,
  className = '',
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div
        className="relative shrink-0 flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 40 40"
          width={size}
          height={size}
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Royal Octagon */}
          <polygon
            points="12,3 28,3 37,12 37,28 28,37 12,37 3,28 3,12"
            fill="#121218"
            stroke="#C5A059"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Inner Inset Octagon with Vermilion Fill */}
          <polygon
            points="13,6 27,6 34,13 34,27 27,34 13,34 6,27 6,13"
            fill="#D95D39"
            stroke="#C5A059"
            strokeWidth="0.8"
            strokeOpacity="0.6"
            strokeLinejoin="round"
          />

          {/* Subtle Archival Sunburst Accent */}
          <circle cx="20" cy="20" r="10" stroke="#FFF8ED" strokeWidth="0.5" strokeDasharray="1 2" opacity="0.4" />

          {/* Authentic Calligraphic Devanagari 'इ' */}
          <text
            x="20"
            y="25"
            textAnchor="middle"
            fill="#FFF8ED"
            fontFamily="'Tiro Devanagari Marathi', 'Noto Serif Devanagari', serif"
            fontSize="15"
            fontWeight="bold"
            letterSpacing="0"
          >
            इ
          </text>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg tracking-tight text-[#FDFCFB] font-medium leading-none">
              Itihas Swadhay
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1A1A24] text-[#C5A059] border border-[#C5A059]/30 font-medium">
              इयत्ता १० वी
            </span>
          </div>
          <span className="text-[11px] text-[#A8A29E] tracking-normal font-marathi-serif mt-0.5">
            महाराष्ट्र राज्य पाठ्यपुस्तक अभ्यासपीठ
          </span>
        </div>
      )}
    </div>
  );
};

export default ShivmudraEmblem;
