import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import KineticCard from "@/utils/KineticCard";
import { POLOS } from "@/utils/presentationData";
import { elastic, spring } from "@/utils/motion";

function Field({ label, value, big }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#0B2027]/25">{label}</p>
      <AnimatePresence mode="wait">
        <motion.p
          key={value || `empty-${label}`}
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={elastic}
          className={cn(
            "mt-1.5 font-display leading-tight",
            big ? "text-[2.9rem] font-extrabold tracking-[-0.02em]" : "text-xl font-semibold",
          )}
          style={{ color: value ? "#0B2027" : "rgba(11, 32, 39,0.35)" }}
        >
          {value || "—"}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function PersonaCard({ persona, index, color }) {
  const level = Math.max(0, Math.min(100, Number(persona.frustration) || 0));
  const empty =
    !persona.name && !persona.sport && !persona.frequency && !persona.barreira;

  return (
    <KineticCard
      accent={empty ? undefined : color}
      className={cn("relative flex h-full flex-col p-7", empty && "border-dashed")}
    >
      <div className="flex items-center justify-between">
        <span
          className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em]"
          style={{ background: `${color}1F`, color }}
        >
          Perfil 0{index + 1}
        </span>
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#0B2027]/25">
          {empty ? "ficha em branco" : "ao vivo"}
        </span>
      </div>

      <div className="mt-5 flex flex-1 flex-col gap-5">
        <Field label="Nome" value={persona.name} big />
        <div className="grid grid-cols-2 gap-4">
          <Field label="Esporte" value={persona.sport} />
          <Field label="Frequência" value={persona.frequency} />
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#0B2027]/25">
              Barra de frustração
            </p>
            <span
              className="font-display text-sm font-bold"
              style={{ color: level ? color : "rgba(11, 32, 39,0.35)" }}
            >
              {level}%
            </span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-[#0B2027]/10">
            <motion.div
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${color}77, ${color})` }}
              initial={false}
              animate={{ width: `${level}%` }}
              transition={spring}
            />
          </div>
        </div>

        <Field label="Principal barreira" value={persona.barreira} />
      </div>

      <AnimatePresence>
        {empty ? null : (
          <motion.span
            key={persona.tick}
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{ boxShadow: `inset 0 0 0 2px ${color}` }}
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        )}
      </AnimatePresence>
    </KineticCard>
  );
}

export default function PersonaScoreboardScene({ personas = [] }) {
  const list = [personas[0] ?? {}, personas[1] ?? {}];

  return (
    <div className="flex h-full flex-col px-20 pb-2">
      <div className="flex shrink-0 items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-[#0B2027]/30">
            Dinâmica com a plateia · ao vivo
          </p>
          <h2 className="mt-3 font-display text-[3.4rem] font-extrabold leading-none tracking-[-0.03em]">
            Quem entra em quadra
          </h2>
        </div>
        <p className="max-w-xs text-right text-sm leading-relaxed text-[#0B2027]/35">
          Duas fichas de atleta em branco. A plateia dita, o telão preenche.
        </p>
      </div>

      <div className="mt-7 grid flex-1 grid-cols-2 gap-6">
        {list.map((persona, index) => (
          <PersonaCard
            key={index}
            persona={persona}
            index={index}
            color={index === 0 ? POLOS.vitoria.color : POLOS.leo.color}
          />
        ))}
      </div>
    </div>
  );
}