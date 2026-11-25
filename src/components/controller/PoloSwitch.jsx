import { cn } from "@/lib/utils";
import { actions } from "@/lib/presentationStore";
import { POLOS } from "@/utils/presentationData";

export default function PoloSwitch({ active }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {Object.values(POLOS).map((polo) => {
        const isActive = active === polo.id;
        return (
          <button
            key={polo.id}
            onClick={() => actions.setPolo(polo.id)}
            className={cn(
              "relative min-h-[72px] overflow-hidden rounded-2xl border-2 p-3 text-left transition",
              isActive
                ? "shadow-[3px_3px_0px_#0B2027]"
                : "border-[#0B2027]/15 bg-white hover:border-[#0B2027]/40",
            )}
            style={
              isActive
                ? { background: `${polo.color}1F`, borderColor: polo.color }
                : undefined
            }
          >
            <span
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em]"
              style={{ color: isActive ? polo.color : "rgba(11, 32, 39,0.35)" }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: polo.color }}
              />
              {polo.name}
            </span>
            <span className="mt-1 block text-[11px] leading-tight text-[#0B2027]/45">
              {polo.role}
            </span>
          </button>
        );
      })}
    </div>
  );
}