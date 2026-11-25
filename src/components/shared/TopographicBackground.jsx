import { cn } from "@/lib/utils";

export default function TopographicBackground({
  color = "#177A6E",
  accent,
  className,
  intensity = 1,
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <g fill="none" stroke={color} strokeWidth="2" opacity={0.08 * intensity}>
          <path d="M80 90h1440v720H80z" />
          <path d="M130 140h1340v620H130z" />
          <path d="M180 190h1240v520H180z" />
          <circle cx="800" cy="450" r="220" />
          <path d="M80 450h1440M800 90v720" />
        </g>
        {accent ? (
          <g fill="none" stroke={accent} strokeWidth="3" opacity={0.08 * intensity}>
            <path d="M80 450h1440" />
            <circle cx="800" cy="450" r="16" />
          </g>
        ) : null}
      </svg>
    </div>
  );
}