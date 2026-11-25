import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { actions } from "@/lib/presentationStore";
import { EPICS } from "@/utils/presentationData";

export default function EpicTabs({ activeEpic, polo }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {EPICS.map((epic) => {
        const isActive = activeEpic === epic.id;
        return (
          <button
            key={epic.id}
            onClick={() => actions.setEpic(epic.id)}
            className={cn(
              "relative min-h-[84px] overflow-hidden rounded-2xl border px-3 py-2.5 text-left transition",
              isActive
                ? "border-transparent text-[#0B2027]"
                : "border-[#0B2027]/10 bg-[#0B2027]/[0.02] text-[#0B2027]/70 hover:border-[#0B2027]/20",
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="epic-tab"
                className="absolute inset-0"
                style={{ background: polo.gradient }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              />
            ) : null}
            <span className="relative block text-[9px] font-bold uppercase tracking-[0.22em] opacity-60">
              {epic.label}
            </span>
            <span className="relative mt-1 block font-display text-[13px] font-semibold leading-tight">
              {epic.title}
            </span>
            <span
              className={cn(
                "relative mt-1 block text-[10px] leading-tight",
                isActive ? "text-[#0B2027]/60" : "text-[#0B2027]/30",
              )}
            >
              {epic.subtitle}
            </span>
          </button>
        );
      })}
    </div>
  );
}