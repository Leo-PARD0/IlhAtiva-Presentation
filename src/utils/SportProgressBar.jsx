import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EPICS } from "@/utils/presentationData";
import { spring } from "@/utils/motion";

export default function SportProgressBar({ epic = 1, color = "#FF8800", className }) {
  const total = EPICS.length;
  const progress = ((epic - 1) / (total - 1)) * 100;

  return (
    <div className={cn("relative px-20 pb-7 pt-4", className)}>
      <div className="relative h-12">
        <div className="absolute inset-x-0 top-7 h-[3px] rounded-full bg-[#0B2027]/10" />
        <motion.div
          className="absolute left-0 top-7 h-[3px] rounded-full"
          style={{ background: color }}
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={spring}
        />

        {EPICS.map((item, index) => {
          const left = (index / (total - 1)) * 100;
          const done = index + 1 <= epic;
          return (
            <span
              key={item.id}
              className="absolute top-7 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                left: `${left}%`,
                background: done ? color : "#F5F5F0",
                boxShadow: "0 0 0 2px #0B2027",
              }}
            />
          );
        })}

        <motion.span
          className="absolute top-0 -translate-x-1/2"
          initial={false}
          animate={{ left: `${progress}%` }}
          transition={spring}
        >
          <span
            className="block h-3.5 w-3.5 rounded-full border-2 border-[#0B2027]"
            style={{ background: color }}
          />
        </motion.span>
      </div>

      <div className="grid grid-cols-4">
        {EPICS.map((item, index) => {
          const isActive = index + 1 === epic;
          return (
            <span
              key={item.id}
              className={cn(
                "text-[10px] uppercase tracking-[0.2em] transition-colors",
                isActive ? "font-semibold text-[#0B2027]" : "text-[#0B2027]/25",
              )}
              style={isActive ? { color } : undefined}
            >
              {item.label} · {item.title}
            </span>
          );
        })}
      </div>
    </div>
  );
}