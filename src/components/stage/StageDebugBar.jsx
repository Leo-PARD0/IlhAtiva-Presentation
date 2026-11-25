import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bug, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { actions, usePresentation } from "@/lib/presentationStore";
import {
  EPICS,
  METRICS,
  POLOS,
  STORIES,
  findEpic,
  findScene,
} from "@/utils/presentationData";
import { spring } from "@/utils/motion";

const PERSONA_SETS = [
  [
    {
      name: "Camila",
      sport: "Vôlei de areia",
      frequency: "3x por semana",
      barreira: "Chegar e a quadra estar ocupada",
      frustration: 82,
    },
    {
      name: "Diego",
      sport: "Futebol society",
      frequency: "2x por semana",
      barreira: "Fechar time e levar o material",
      frustration: 64,
    },
  ],
  [
    {
      name: "Rafa",
      sport: "Basquete",
      frequency: "1x por semana",
      barreira: "Não conhecer grupos do meu nível",
      frustration: 71,
    },
    {
      name: "Marina",
      sport: "Beach tennis",
      frequency: "4x por semana",
      barreira: "A agenda dos espaços muda sem aviso",
      frustration: 58,
    },
  ],
];

function Btn({ active, color, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex min-h-8 items-center gap-1 rounded-lg border px-2.5 text-[11px] font-semibold transition",
        active
          ? "border-transparent text-[#0B2027]"
          : "border-[#0B2027]/15 text-[#0B2027]/60 hover:border-[#0B2027]/35 hover:text-[#0B2027]",
      )}
      style={active ? { background: color ?? "#FFFFFF" } : undefined}
    >
      {children}
    </button>
  );
}

function Row({ label, children }) {
  return (
    <div className="mt-2.5 flex items-start gap-2">
      <span className="mt-2 w-11 shrink-0 text-[9px] font-bold uppercase tracking-[0.18em] text-[#0B2027]/30">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

export default function StageDebugBar() {
  const state = usePresentation();
  const [open, setOpen] = useState(false);
  const [setIndex, setSetIndex] = useState(0);

  const epic = findEpic(state.epic);
  const scene = findScene(state.scene) ?? epic.scenes[0];
  const polo = POLOS[state.polo] ?? POLOS.vitoria;

  const fillPersonas = () => {
    actions.setPersonas(PERSONA_SETS[setIndex % PERSONA_SETS.length]);
    setSetIndex((current) => current + 1);
  };

  return (
    <div className="absolute bottom-[104px] left-5 z-[80] flex flex-col items-start gap-2">
      <AnimatePresence>
        {open ? (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={spring}
            className="w-[452px] rounded-2xl border-2 border-[#0B2027] bg-[#F5F5F0] p-3 text-[#0B2027] shadow-[4px_4px_0px_#0B2027]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#0B2027]/45">
                  Barra de teste
                </p>
                <p className="mt-0.5 text-[11px] text-[#0B2027]/35">
                  MVP {scene.code} · {scene.title}
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={actions.reset}
                  className="rounded-lg border border-[#0B2027]/15 px-2 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#0B2027]/40 hover:text-[#0B2027]"
                >
                  reiniciar
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar barra de teste"
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#0B2027]/15 text-[#0B2027]/50 hover:text-[#0B2027]"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <Row label="Épico">
              {EPICS.map((item) => (
                <Btn
                  key={item.id}
                  active={state.epic === item.id}
                  color={polo.color}
                  onClick={() => actions.setEpic(item.id)}
                >
                  Ato {item.id}
                </Btn>
              ))}
            </Row>

            <Row label="Cena">
              {epic.scenes.map((item) => (
                <Btn
                  key={item.id}
                  active={state.scene === item.id}
                  color={polo.color}
                  onClick={() => actions.setScene(item.id)}
                >
                  {item.code}
                </Btn>
              ))}
            </Row>

            <Row label="Polo">
              <Btn
                active={state.polo === "vitoria"}
                color={POLOS.vitoria.color}
                onClick={() => actions.setPolo("vitoria")}
              >
                Vitória
              </Btn>
              <Btn
                active={state.polo === "leo"}
                color={POLOS.leo.color}
                onClick={() => actions.setPolo("leo")}
              >
                Leo
              </Btn>
            </Row>

            <Row label="Ações">
              <Btn color={polo.color} onClick={() => actions.revealNext(METRICS.length)}>
                + revelar
              </Btn>
              <Btn color={POLOS.vitoria.color} onClick={fillPersonas}>
                preencher personas
              </Btn>
              <Btn active={state.breath} color="#FFD166" onClick={actions.toggleBreath}>
                modo respiro
              </Btn>
            </Row>

            {state.epic === 3 ? (
              <Row label="História">
                {STORIES.map((item, index) => (
                  <Btn
                    key={item.id}
                    active={state.story === index}
                    color={polo.color}
                    onClick={() => actions.setStory(index)}
                  >
                    {index + 1} · {item.feature.split(" ").slice(0, 2).join(" ")}
                  </Btn>
                ))}
              </Row>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        onClick={() => setOpen((current) => !current)}
        className="flex items-center gap-2 rounded-full border-2 border-[#0B2027] bg-[#FFD166] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B2027] shadow-[3px_3px_0px_#0B2027] transition hover:translate-y-0.5"
      >
        <Bug className="h-3.5 w-3.5" style={{ color: polo.color }} />
        {open ? "fechar teste" : "testar telão"}
      </button>
    </div>
  );
}