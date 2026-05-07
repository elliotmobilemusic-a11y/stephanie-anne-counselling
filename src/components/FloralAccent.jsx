export default function FloralAccent({ className = '', size = 180 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 180 180"
      className={`pointer-events-none text-rose ${className}`}
      fill="none"
    >
      <path
        d="M88 129c-18-26-18-55 0-87 18 32 18 61 0 87Z"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.42"
      />
      <path
        d="M71 119C42 109 25 87 22 53c31 13 47 35 49 66Z"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.3"
      />
      <path
        d="M105 119c29-10 46-32 49-66-31 13-47 35-49 66Z"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.3"
      />
      <path
        d="M89 130c-9 14-24 22-44 24M89 130c8 15 23 23 45 25"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.35"
      />
      <circle cx="89" cy="129" r="4" fill="currentColor" opacity="0.22" />
    </svg>
  )
}
