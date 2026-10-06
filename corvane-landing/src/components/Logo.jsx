export function BrandMark({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <rect width="32" height="32" fill="#0c2840" />
      <path
        d="M7.5 24.5 L16 7 L24.5 24.5"
        stroke="#5fa9b2"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
      <path
        d="M11.5 24.5 L16 16.5 L20.5 24.5"
        stroke="#f5f9f9"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
    </svg>
  )
}

export function Wordmark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 120 32"
      className={className}
      role="img"
      aria-label="Corvane"
      fill="none"
    >
      <path
        d="M2.5 28 L14.4 3.4 L26.3 28"
        stroke="#0c2840"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path
        d="M8.9 28 L14.4 17.6 L19.9 28"
        stroke="#0d7d86"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <text
        x="33"
        y="25.4"
        fill="#13202a"
        fontFamily="'PT Serif', Georgia, serif"
        fontSize="23"
        letterSpacing="-0.3"
      >
        Corvane
      </text>
    </svg>
  )
}

export function FooterMark({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M9 37 L24 9 L39 37" stroke="#f5f9f9" strokeWidth="3.4" strokeLinecap="square" />
      <path d="M16.5 37 L24 23.5 L31.5 37" stroke="#5fa9b2" strokeWidth="3.4" strokeLinecap="square" />
    </svg>
  )
}
