import { motion } from "framer-motion";
import IlhaMap from "@/components/shared/IlhaMap";
import { POLOS } from "@/utils/presentationData";
import { cardVariants, spring, staggerContainer } from "@/utils/motion";

export default function OpeningScene({ polo }) {
  const active = POLOS[polo] ?? POLOS.vitoria;

  return (
    <div className="grid h-full grid-cols-[1.05fr_0.95fr] items-center gap-8 px-20 pb-2">
      <motion.div variants={staggerContainer(0.08)} initial="hidden" animate="show">
        <motion.div
          variants={cardVariants}
          className="inline-flex items-center gap-2 rounded-full border border-[#0B2027]/10 bg-[#0B2027]/[0.04] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0B2027]/50"
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: active.color }} />
          Palestra ao vivo · UX Design
        </motion.div>

        <motion.h1
          variants={cardVariants}
          className="mt-6 font-display text-[7.5rem] font-extrabold leading-[0.82] tracking-[-0.045em]"
        >
          Ilh<span style={{ color: active.color }}>Ativa</span>
        </motion.h1>

        <motion.p
          variants={cardVariants}
          className="mt-6 max-w-xl text-2xl leading-snug text-[#0B2027]/60"
        >
          UX Design aplicado à experiência do esportista nos espaços públicos de
          Ilhabela.
        </motion.p>

        <motion.div variants={cardVariants} className="mt-8 flex flex-wrap gap-3">
          {[POLOS.vitoria, POLOS.leo].map((host) => (
            <span
              key={host.id}
              className="flex items-center gap-3 rounded-2xl border border-[#0B2027]/10 bg-[#0B2027]/[0.03] px-4 py-3"
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: host.color }}
              />
              <span>
                <span className="block font-display text-sm font-semibold">{host.name}</span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-[#0B2027]/35">
                  {host.role}
                </span>
              </span>
            </span>
          ))}
        </motion.div>

        <motion.p
          variants={cardVariants}
          className="mt-8 text-[11px] uppercase tracking-[0.34em] text-[#0B2027]/25"
        >
          Ato 1 · O Jogo Travado
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...spring, delay: 0.1 }}
        className="relative flex h-full items-center justify-center"
      >
        <IlhaMap color={active.color} className="h-[540px] w-auto" />
        <div className="absolute bottom-4 right-0 text-right">
          <p className="font-display text-4xl font-extrabold leading-none">9</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#0B2027]/30">
            espaços públicos mapeados
          </p>
        </div>
      </motion.div>
    </div>
  );
}