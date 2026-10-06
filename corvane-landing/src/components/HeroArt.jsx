export function YCombinator({ className = '' }) {
  return (
    <svg viewBox="0 0 112 32" className={className} role="img" aria-label="Y Combinator">
      <rect x="0" y="1" width="30" height="30" fill="#000" />
      <path
        d="M8 8 L15 16 L22 8 M15 16 L15 24"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <text
        x="38"
        y="14"
        fill="#000"
        fontFamily="'PT Sans', Arial, sans-serif"
        fontSize="11"
        fontWeight="700"
        letterSpacing="0.4"
      >
        Y Combinator
      </text>
      <text
        x="38"
        y="27"
        fill="#000"
        fontFamily="'PT Sans', Arial, sans-serif"
        fontSize="8"
        letterSpacing="0.4"
      >
        Startup School
      </text>
    </svg>
  )
}

export function LiveDot({ className = '' }) {
  return (
    <svg viewBox="0 0 8 8" className={className} aria-hidden="true">
      <circle cx="4" cy="4" r="4" fill="#0d7d86" />
      <circle cx="4" cy="4" r="2" fill="#5fa9b2" />
    </svg>
  )
}

export function NavDot({ active = false, className = '' }) {
  return (
    <svg viewBox="0 0 8 8" className={className} aria-hidden="true">
      <circle cx="4" cy="4" r="2.4" fill={active ? '#5fa9b2' : '#5b7f92'} />
    </svg>
  )
}

export function ChartEndpoint({ className = '' }) {
  return (
    <svg viewBox="0 0 10 10" className={className} aria-hidden="true">
      <circle cx="5" cy="5" r="4.4" fill="#0d7d86" opacity="0.18" />
      <circle cx="5" cy="5" r="2.4" fill="#0d7d86" />
    </svg>
  )
}

export function OasTrend({ className = '' }) {
  return (
    <svg
      viewBox="0 0 254 92"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M2 68 C22 64 34 58 48 54 C64 50 76 40 92 38 C110 36 120 28 136 26 C154 24 166 30 182 28 C200 26 214 20 232 18 C240 17 246 15 252 14"
        stroke="#0d7d86"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M2 68 C22 64 34 58 48 54 C64 50 76 40 92 38 C110 36 120 28 136 26 C154 24 166 30 182 28 C200 26 214 20 232 18 C240 17 246 15 252 14 L252 92 L2 92 Z"
        fill="#0d7d86"
        opacity="0.08"
      />
      <path
        d="M2 44 C26 44 44 42 64 40 C86 38 104 34 124 32 C146 30 168 30 190 28 C212 26 232 26 252 26"
        stroke="#b8c7ca"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
    </svg>
  )
}

export function TypingIndicator({ className = '' }) {
  return (
    <svg viewBox="0 0 52 22" className={className} aria-hidden="true">
      <circle cx="6" cy="11" r="3.2" fill="#0d7d86" opacity="0.35" />
      <circle cx="18" cy="11" r="3.2" fill="#0d7d86" opacity="0.55" />
      <circle cx="30" cy="11" r="3.2" fill="#0d7d86" opacity="0.75" />
      <circle cx="42" cy="11" r="3.2" fill="#0d7d86" />
    </svg>
  )
}

export function PulseRing({ className = '' }) {
  return (
    <svg viewBox="0 0 8 8" className={className} aria-hidden="true">
      <circle cx="4" cy="4" r="3" fill="#5fa9b2" />
    </svg>
  )
}

export function StatusDot({ className = '' }) {
  return (
    <svg viewBox="0 0 8 8" className={className} aria-hidden="true">
      <circle cx="4" cy="4" r="3.4" fill="#0d7d86" />
    </svg>
  )
}