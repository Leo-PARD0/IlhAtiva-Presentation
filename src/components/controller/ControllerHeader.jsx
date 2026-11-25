import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { actions } from "@/lib/presentationStore";

export default function ControllerHeader({ breath, polo, epic, scene }) {
  return (
    <header className="sticky top-0 z-30 -mx-4 mb-4 border-b border-[#0B2027]/10 bg-[#F5F5F0]/85 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="font-display text-lg font-extrabold tracking-tight">
            Ilh<span style={{ color: polo.color }}>Ativa</span>
          </span>
          <span className="hidden items-center gap-1.5 rounded-full border border-[#0B2027]/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-[#0B2027]/40 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#177A6E]" />
            sincronizado
          </span>
        </div>

        <button
          onClick={actions.toggleBreath}
          className={cn(
            "flex min-h-11 items-center gap-2 rounded-full px-3.5 text-xs font-bold uppercase tracking-[0.14em] transition",
            breath
              ? "bg-white text-[#0B2027]"
              : "border border-[#0B2027]/15 text-[#0B2027]/60 hover:border-[#0B2027]/30",
          )}
        >
          {breath ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
          Respiro
        </button>
      </div>

      <div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
        <span
          className="rounded-full px-2 py-0.5 font-semibold"
          style={{ background: `${polo.color}1F`, color: polo.color }}
        >
          {epic.label}
        </span>
        <span className="truncate text-[#0B2027]/35">
          MVP {scene.code} · {scene.title}
        </span>
      </div>
    </header>
  );
}