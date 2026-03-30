/**
 * Octopai Logo — Octopus + Code
 * 8 tentacles radiating from a central hub = 8 capabilities
 * Each tentacle ends with a code symbol: { } < > / * = #
 * Represents: agent hub that reaches into every part of your stack
 */
export function Logo({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central hub — rounded hexagon */}
      <path
        d="M20 4L32 10V22L20 28L8 22V10L20 4Z"
        fill="url(#hub-fill)"
        stroke="url(#hub-stroke)"
        strokeWidth="1.2"
      />
      {/* Inner eye / core */}
      <circle cx="20" cy="16" r="4" fill="url(#core-grad)" opacity="0.9" />
      <circle cx="20" cy="16" r="1.8" fill="#09090b" />
      <circle cx="21" cy="15" r="0.7" fill="#fafafa" />

      {/* Tentacles — 8 lines radiating outward */}
      <g stroke="url(#tentacle-grad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7">
        <path d="M12 10L6 5" />
        <path d="M20 7L20 1" />
        <path d="M28 10L34 5" />
        <path d="M32 16L38 16" />
        <path d="M28 22L34 28" />
        <path d="M20 26L20 34" />
        <path d="M12 22L6 28" />
        <path d="M8 16L2 16" />
      </g>

      {/* Code symbols at tentacle tips */}
      <g fontSize="5" fontFamily="monospace" fontWeight="700" fill="#a78bfa">
        <text x="2" y="5" textAnchor="middle">{'{'}</text>
        <text x="20" y="1" textAnchor="middle">/</text>
        <text x="37" y="5" textAnchor="middle">{'}'}</text>
        <text x="39" y="17.5" textAnchor="middle">&gt;</text>
        <text x="36" y="30" textAnchor="middle">*</text>
        <text x="20" y="37" textAnchor="middle">=</text>
        <text x="3.5" y="30" textAnchor="middle">#</text>
        <text x="0.5" y="17.5" textAnchor="middle">&lt;</text>
      </g>

      <defs>
        <linearGradient id="hub-fill" x1="8" y1="4" x2="32" y2="28">
          <stop stopColor="#1e1e26" />
          <stop offset="1" stopColor="#141418" />
        </linearGradient>
        <linearGradient id="hub-stroke" x1="8" y1="4" x2="32" y2="28">
          <stop stopColor="#a78bfa" stopOpacity="0.5" />
          <stop offset="1" stopColor="#67e8f9" stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id="core-grad" cx="20" cy="16" r="4">
          <stop stopColor="#a78bfa" />
          <stop offset="1" stopColor="#67e8f9" />
        </radialGradient>
        <linearGradient id="tentacle-grad" x1="0" y1="0" x2="40" y2="40">
          <stop stopColor="#a78bfa" />
          <stop offset="1" stopColor="#67e8f9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
