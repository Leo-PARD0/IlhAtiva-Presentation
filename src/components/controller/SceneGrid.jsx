import { cn } from "@/lib/utils";
import { actions } from "@/lib/presentationStore";

export default function SceneGrid({ epic, activeScene, polo }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {epic.scenes.map((scene) => {
        const isActive = activeScene === scene.id;
        return (
          <button
            key={scene.id}
            onClick={() => actions.setScene(scene.id)}
            className={cn(
              "relative min-h-[92px] rounded-2xl border p-3.5 text-left transition",
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
            <div className="flex items-center justify-between">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: isActive ? polo.color : "rgba(11, 32, 39,0.3)" }}
              >
                MVP {scene.code}
              </span>
              {isActive ? (
                <span
                  className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: polo.color }}
                >
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full"
                    style={{ background: polo.color }}
                  />
                  no ar
                </span>
              ) : null}
            </div>
            <p className="mt-1.5 font-display text-base font-semibold leading-tight">
              {scene.title}
            </p>
            <p className="mt-1 text-[11px] leading-tight text-[#0B2027]/35">{scene.hint}</p>
          </button>
        );
      })}
    </div>
  );
}