import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { POLOS } from "@/utils/presentationData";
import { spring } from "@/utils/motion";

export default function PolarityBadge({ active = "vitoria", size = "md", className }) {
  const items = [POLOS.vitoria, POLOS.leo];
  const isLarge = size === "lg";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border-2 border-[#0B2027] bg-white p-1",
        className,
      )}
    >
      {items.map((polo) => {
        const isActive = active === polo.id;
        return (
          <div
            key={polo.id}
            className={cn(
              "relative flex items-center gap-2 rounded-full",
              isLarge ? "px-4 py-2" : "px-3 py-1.5",
            )}
          >
            {isActive ? (
              <motion.span
                layoutId={`polo-pill-${size}`}
                className="absolute inset-0 rounded-full"
                style={{
                  background: polo.gradient,
                }}
                transition={spring}
              />
            ) : null}
            <motion.span
              className="relative h-2 w-2 rounded-full"
              style={{
                background: isActive ? "#0B2027" : polo.color,
              }}
              animate={isActive ? { scale: [1, 1.35, 1] } : { scale: 1 }}
              transition={
                isActive
                  ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.2 }
              }
            />
            <span
              className={cn(
                "relative font-display font-semibold tracking-tight",
                isActive ? "text-[#0B2027]" : "text-[#0B2027]/45",
                isLarge ? "text-base" : "text-xs",
              )}
            >
              {polo.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}