import { POLOS } from "@/utils/presentationData";
import PolarityBadge from "@/utils/PolarityBadge";

export default function StageHeader({ epic, scene, polo = "vitoria" }) {
  const active = POLOS[polo] ?? POLOS.vitoria;

  return (
    <header className="relative z-20 flex shrink-0 items-center justify-between px-20 pt-7">
      <div className="flex items-center gap-5">
        <span className="font-display text-xl font-extrabold tracking-tight">
          Ilh<span style={{ color: active.color }}>Ativa</span>
        </span>
        <span className="h-5 w-px bg-[#0B2027]/15" />
        <span className="rounded-full border border-[#0B2027]/10 bg-[#0B2027]/[0.04] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0B2027]/60">
          {epic.label} · {epic.title}
        </span>
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#0B2027]/25">
          MVP {scene.code} · {scene.title}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#0B2027]/25">
          {active.role}
        </span>
        <PolarityBadge active={polo} size="lg" />
      </div>
    </header>
  );
}