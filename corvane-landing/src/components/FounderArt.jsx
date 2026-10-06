const MARKS = {
  WF: (
    <>
      <rect width="24" height="24" fill="#D71E28" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fill="#fff"
        fontFamily="'PT Sans', Arial, sans-serif"
        fontSize="11"
        fontWeight="700"
      >
        WF
      </text>
    </>
  ),
  G: (
    <>
      <rect width="24" height="24" rx="3" fill="#0d7d86" />
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fill="#f5f9f9"
        fontFamily="'PT Serif', Georgia, serif"
        fontSize="15"
      >
        G
      </text>
    </>
  ),
  B: (
    <>
      <rect width="24" height="24" rx="3" fill="#0c2840" />
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fill="#f5f9f9"
        fontFamily="'PT Serif', Georgia, serif"
        fontSize="15"
      >
        B
      </text>
    </>
  ),
  P: (
    <>
      <rect width="24" height="24" fill="#13202a" />
      <path d="M6.5 17.5 L12 6.5 L17.5 17.5" stroke="#5fa9b2" strokeWidth="2.4" strokeLinecap="square" />
      <path d="M9.8 17.5 L12 13 L14.2 17.5" stroke="#f5f9f9" strokeWidth="2.4" strokeLinecap="square" />
    </>
  ),
}

export function CompanyMark({ mark }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
      {MARKS[mark]}
    </svg>
  )
}

/** Duotone portrait placeholder standing in for the founder photograph. */
export function FounderPortrait({ className = '' }) {
  return (
    <svg viewBox="0 0 302 302" className={className} role="img" aria-label="Portrait">
      <defs>
        <linearGradient id="fp-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#eef5f5" />
          <stop offset="100%" stopColor="#d4e4e4" />
        </linearGradient>
        <linearGradient id="fp-bust" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#1a4a68" />
          <stop offset="100%" stopColor="#0a1e30" />
        </linearGradient>
        <clipPath id="fp-clip">
          <rect width="302" height="302" />
        </clipPath>
      </defs>

      <g clipPath="url(#fp-clip)">
        <rect width="302" height="302" fill="url(#fp-bg)" />
        <circle cx="246" cy="52" r="88" fill="#0d7d86" opacity="0.09" />
        <rect y="248" width="302" height="54" fill="#0d7d86" opacity="0.07" />

        {/* bust silhouette: shoulders → neck → head */}
        <path
          d="M151 152c34 0 56 20 66 40 9 18 13 34 14 50 1 14 1 40 1 60H70c0-20 0-46 1-60 1-16 5-32 14-50 10-20 32-40 66-40z"
          fill="url(#fp-bust)"
        />
        <rect x="128" y="150" width="46" height="52" rx="20" fill="#0d3049" />
        <ellipse cx="151" cy="112" rx="42" ry="48" fill="#123449" />
        <path
          d="M109 108c0-28 19-48 42-48s42 20 42 48c0-7-16-17-42-17s-42 10-42 17z"
          fill="#0a1e30"
        />
        <path
          d="M70 302c0-30 12-52 34-64l20 64z"
          fill="#0d7d86"
          opacity="0.28"
        />
        <path
          d="M232 302c0-30-12-52-34-64l-20 64z"
          fill="#0d7d86"
          opacity="0.16"
        />
        <path d="M151 202l14 22-14 20-14-20z" fill="#f5f9f9" opacity="0.9" />
        <path d="M151 202l14 22-14 20z" fill="#0d7d86" opacity="0.25" />
      </g>
    </svg>
  )
}