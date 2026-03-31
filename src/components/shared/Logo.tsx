/**
 * Octopai Logo — Minimalist octopus head
 * Simple, elegant, works at any size from favicon to hero.
 * The octopus: intelligent alien of the ocean, 8 arms, adaptive.
 */
export function Logo({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Head — rounded dome */}
      <ellipse cx="18" cy="14" rx="10" ry="11" fill="currentColor" />

      {/* Eyes */}
      <ellipse cx="14" cy="13" rx="2.2" ry="2.5" fill="var(--bg-primary, #fafaf7)" />
      <ellipse cx="22" cy="13" rx="2.2" ry="2.5" fill="var(--bg-primary, #fafaf7)" />
      <circle cx="14.5" cy="13.2" r="1.1" fill="currentColor" />
      <circle cx="22.5" cy="13.2" r="1.1" fill="currentColor" />

      {/* Tentacles — 8 flowing lines with amber tips */}
      <g strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M10 22C8 25 5 27 4 30" stroke="currentColor" />
        <path d="M12 23C11 26 9 29 8 32" stroke="currentColor" />
        <path d="M15 24C14.5 27 14 30 13 33" stroke="currentColor" />
        <path d="M18 24.5C18 28 18 31 18 34" stroke="currentColor" />
        <path d="M21 24C21.5 27 22 30 23 33" stroke="currentColor" />
        <path d="M24 23C25 26 27 29 28 32" stroke="currentColor" />
        <path d="M26 22C28 25 31 27 32 30" stroke="currentColor" />
        <path d="M27.5 20C30 22 32 23 34 25" stroke="currentColor" />
      </g>

      {/* Amber tips on tentacles */}
      <g fill="#d4620a">
        <circle cx="4" cy="30" r="1.3" />
        <circle cx="8" cy="32" r="1.3" />
        <circle cx="13" cy="33" r="1.3" />
        <circle cx="18" cy="34" r="1.3" />
        <circle cx="23" cy="33" r="1.3" />
        <circle cx="28" cy="32" r="1.3" />
        <circle cx="32" cy="30" r="1.3" />
        <circle cx="34" cy="25" r="1.3" />
      </g>
    </svg>
  );
}
