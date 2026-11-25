import { useEffect, useRef, useState } from "react";
import { actions, usePresentation } from "@/lib/presentationStore";
import { PERSONA_FIELDS, POLOS } from "@/utils/presentationData";

const PLACEHOLDERS = {
  name: "Camila",
  sport: "Vôlei de areia",
  frequency: "3x por semana",
  barreira: "Chegar e a quadra estar cheia",
};

const toDraft = (persona) => ({
  name: persona.name || "",
  sport: persona.sport || "",
  frequency: persona.frequency || "",
  barreira: persona.barreira || "",
  frustration: Number(persona.frustration) || 0,
});

export default function PersonaForm() {
  const { personas } = usePresentation();
  const [drafts, setDrafts] = useState(() => personas.map(toDraft));
  const prefilled = useRef(false);

  useEffect(() => {
    if (prefilled.current) return;
    const hasData = personas.some(
      (persona) =>
        persona.name || persona.sport || persona.frequency || persona.barreira,
    );
    if (hasData) {
      setDrafts(personas.map(toDraft));
      prefilled.current = true;
    }
  }, [personas]);

  const update = (index, key, value) => {
    setDrafts((current) =>
      current.map((draft, i) => (i === index ? { ...draft, [key]: value } : draft)),
    );
  };

  return (
    <div className="space-y-2">
      <div className="grid gap-2 sm:grid-cols-2">
        {drafts.map((draft, index) => {
          const color = index === 0 ? POLOS.vitoria.color : POLOS.leo.color;
          const sent = Boolean(personas[index]?.name);
          return (
            <div
              key={index}
              className="rounded-2xl border border-[#0B2027]/10 bg-[#0B2027]/[0.03] p-3.5"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.24em]"
                  style={{ color }}
                >
                  Perfil 0{index + 1}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#0B2027]/25">
                  {sent ? "no telão" : "vazio"}
                </span>
              </div>

              <div className="mt-2.5 space-y-2">
                {PERSONA_FIELDS.map((field) => (
                  <label key={field.key} className="block">
                    <span className="text-[9px] uppercase tracking-[0.22em] text-[#0B2027]/35">
                      {field.label}
                    </span>
                    <input
                      value={draft[field.key]}
                      onChange={(event) => update(index, field.key, event.target.value)}
                      placeholder={PLACEHOLDERS[field.key]}
                      className="mt-1 w-full rounded-xl border border-[#0B2027]/10 bg-[#F5F5F0]/70 px-3 py-2.5 text-base text-[#0B2027] placeholder:text-[#0B2027]/20 focus:border-[#0B2027]/30 focus:outline-none"
                    />
                  </label>
                ))}
              </div>

              <label className="mt-2 block">
                <span className="flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-[#0B2027]/35">
                  Barra de frustração
                  <span style={{ color }}>{draft.frustration}%</span>
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={draft.frustration}
                  onChange={(event) => update(index, "frustration", Number(event.target.value))}
                  className="mt-2 w-full"
                  style={{ accentColor: color }}
                />
              </label>

              <button
                onClick={() => actions.updatePersona(index, draft)}
                className="mt-2.5 min-h-11 w-full rounded-xl text-sm font-bold"
                style={{ background: color, color: "#0B2027" }}
              >
                Enviar ao telão
              </button>
            </div>
          );
        })}
      </div>

      <button
        onClick={actions.clearPersonas}
        className="min-h-10 w-full rounded-xl border border-[#0B2027]/10 text-[10px] uppercase tracking-[0.2em] text-[#0B2027]/35"
      >
        Limpar personas do telão
      </button>
    </div>
  );
}