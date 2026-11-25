import { cn } from "@/lib/utils";

export default function CourtLines({ color = "#0B2027", accent, className }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        fill="none"
      >
        <g stroke={color} strokeWidth="3" opacity="0.11">
          <rect x="48" y="48" width="1504" height="804" rx="8" />
          <line x1="800" y1="48" x2="800" y2="852" />
          <circle cx="800" cy="450" r="150" />
          <circle cx="800" cy="450" r="10" fill={color} />
          <path d="M48 270h190v360H48M1552 270h-190v360h190" />
          <path d="M48 345h75v210H48M1552 345h-75v210h75" />
          <path d="M48 165a280 280 0 0 1 0 570M1552 165a280 280 0 0 0 0 570" />
          <path d="M48 85a120 120 0 0 0 120 120M1552 85a120 120 0 0 1-120 120M48 815a120 120 0 0 1 120-120m1384 120a120 120 0 0 0-120-120" />
        </g>
        {accent ? (
          <g stroke={accent} strokeWidth="4" opacity="0.12">
            <circle cx="800" cy="450" r="150" />
            <path d="M48 450h190m1314 0h-190" />
          </g>
        ) : null}
      </svg>
    </div>
  );
}