import { cn } from "@/lib/utils";
import { actions } from "@/lib/presentationStore";
import { STORIES } from "@/utils/presentationData";

export default function StoryPicker({ active, polo }) {
  return (
    <div className="space-y-2">
      {STORIES.map((story, index) => {
        const isActive = active === index;
        return (
          <button
            key={story.id}
            onClick={() => actions.setStory(index)}
            className={cn(
              "flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left transition",
              isActive
                ? "border-transparent"
                : "border-[#0B2027]/10 bg-[#0B2027]/[0.02] hover:border-[#0B2027]/20",
            )}
            style={
              isActive
                ? { background: `${polo.color}1A`, boxShadow: `inset 0 0 0 1.5px ${polo.color}` }
                : undefined
            }
          >
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
              style={
                isActive
                  ? { background: polo.color, color: "#0B2027" }
                  : { border: "1px solid rgba(11, 32, 39,0.15)", color: "rgba(11, 32, 39,0.4)" }
              }
            >
              {index + 1}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold leading-tight">
                {story.feature}
              </span>
              <span className="mt-1 block text-xs leading-snug text-[#0B2027]/40">
                “{story.quote}”
              </span>
              <span className="mt-1.5 block font-mono text-[9px] uppercase tracking-[0.18em] text-[#0B2027]/25">
                {story.proto}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}