export default function MagpieLogo({ className, size = 35 }) {
  return (
    <svg
      className={className}
      width={size * 2.5}
      height={size}
      viewBox="0 0 250 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
    >
      {/* Head - solid black cap */}
      <path
        d="M175,22 Q182,14 192,16 Q200,18 202,26 L200,30 Q196,28 192,30
           Q186,32 180,36 Q174,38 170,36 Q166,32 168,26 Z"
        fill="currentColor"
        stroke="none"
      />
      {/* Eye - white crescent */}
      <path
        d="M188,24 Q190,22 192,24 Q190,26 188,24 Z"
        fill="var(--paper-white, #FAFAFA)"
        stroke="none"
      />
      {/* Beak */}
      <path
        d="M200,26 L212,24 L202,30"
        fill="currentColor"
        stroke="none"
      />
      {/* Body outline - white breast */}
      <path
        d="M170,36 Q160,42 156,52 Q154,62 160,70 Q166,76 176,76
           Q184,76 190,70 Q194,64 192,56 Q190,46 184,38"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Back/mantle - dark */}
      <path
        d="M170,36 Q176,40 180,38 Q186,36 190,40 Q192,44 190,50
           Q188,54 184,56"
        fill="currentColor"
        stroke="none"
        opacity="0.9"
      />
      {/* Belly dark patch */}
      <path
        d="M176,68 Q180,74 176,76 Q170,76 164,72 Q160,68 160,64
           Q162,66 168,68 Z"
        fill="currentColor"
        stroke="none"
        opacity="0.8"
      />
      {/* Wing strokes */}
      <path d="M164,44 Q148,54 138,60" fill="none" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M166,46 Q150,56 136,64" fill="none" strokeWidth="1.3" strokeLinecap="round" opacity="0.8" />
      <path d="M168,48 Q152,58 134,66" fill="none" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
      <path d="M170,50 Q154,60 132,68" fill="none" strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
      <path d="M172,52 Q156,62 134,70" fill="none" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M174,54 Q158,64 138,72" fill="none" strokeWidth="0.9" strokeLinecap="round" opacity="0.3" />
      {/* Wing edge - dark stroke */}
      <path
        d="M160,42 Q146,50 132,60 Q126,64 128,68 Q130,72 140,72"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Tail - long sweeping lines */}
      <path
        d="M140,72 Q110,78 70,82 Q40,86 18,90 Q10,92 8,88"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M136,70 Q106,76 68,80 Q38,84 16,86 Q8,88 6,84"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M134,68 Q104,74 66,78 Q36,82 14,84"
        fill="none"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M132,66 Q102,72 64,76 Q34,80 16,82"
        fill="none"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Tail curl */}
      <path
        d="M8,88 Q4,92 6,96 Q8,98 12,96"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Legs */}
      <path
        d="M172,76 L170,88 M170,88 L166,92 M170,88 L174,92 M174,92 L176,91"
        fill="none"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M178,74 L178,86 M178,86 L174,90 M178,86 L182,90 M182,90 L184,89"
        fill="none"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
