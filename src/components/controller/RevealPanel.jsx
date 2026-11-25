import { actions } from "@/lib/presentationStore";

export default function RevealPanel({ reveal, total, polo }) {
  const done = reveal >= total;

  return (
    <div className="rounded-2xl border border-[#0B2027]/10 bg-[#0B2027]/[0.03] p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.26em] text-[#0B2027]/35">
            Revelação passo a passo
          </p>
          <p className="mt-1 font-display text-lg font-semibold">
            {reveal} de {total}
          </p>
        </div>
        <button
          onClick={actions.resetReveal}
          className="min-h-9 rounded-full border border-[#0B2027]/10 px-3 text-[10px] uppercase tracking-[0.2em] text-[#0B2027]/40"
        >
          limpar
        </button>
      </div>

      <div className="mt-3 flex gap-1.5">
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 flex-1 rounded-full transition-colors"
            style={{ background: index < reveal ? polo.color : "rgba(11, 32, 39,0.1)" }}
          />
        ))}
      </div>

      <button
        onClick={() => actions.revealNext(total)}
        disabled={done}
        className="mt-3 min-h-12 w-full rounded-xl text-sm font-bold transition disabled:opacity-40"
        style={{ background: polo.color, color: "#0B2027" }}
      >
        {done ? "Tudo revelado" : "Revelar próximo dado"}
      </button>
    </div>
  );
}