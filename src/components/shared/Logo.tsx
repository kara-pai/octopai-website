export function Logo({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Terminal window frame */}
      <rect
        x="1"
        y="3"
        width="30"
        height="26"
        rx="4"
        stroke="url(#logo-grad)"
        strokeWidth="1.5"
        fill="rgba(120, 60, 255, 0.08)"
      />
      {/* Title bar dots */}
      <circle cx="6" cy="7.5" r="1.2" fill="#ff5f57" />
      <circle cx="10" cy="7.5" r="1.2" fill="#febc2e" />
      <circle cx="14" cy="7.5" r="1.2" fill="#28c840" />
      {/* Code bracket: < */}
      <path
        d="M12 15L8 19L12 23"
        stroke="url(#logo-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Code bracket: / */}
      <path
        d="M15 24L18 14"
        stroke="url(#logo-grad2)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Code bracket: > */}
      <path
        d="M21 15L25 19L21 23"
        stroke="url(#logo-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#00e5ff" />
          <stop offset="1" stopColor="#7c3aff" />
        </linearGradient>
        <linearGradient id="logo-grad2" x1="15" y1="14" x2="18" y2="24">
          <stop stopColor="#7c3aff" />
          <stop offset="1" stopColor="#ff44aa" />
        </linearGradient>
      </defs>
    </svg>
  );
}
