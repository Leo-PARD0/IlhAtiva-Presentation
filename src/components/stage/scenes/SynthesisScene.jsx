import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import KineticCard from "@/utils/KineticCard";
import { PATTERNS, POLOS, PROFILES, RAW_SIGNALS } from "@/utils/presentationData";
import { cardVariants, staggerContainer } from "@/utils/motion";

function ColumnTitle({ children }) {
  return (
    <motion.p
      variants={cardVariants}
      className="text-[10px] uppercase tracking-[0.3em] text-[#0B2027]/30"
    >
      {children}
    </motion.p>
  );
}

function Arrow({ delay = 0 }) {
  return (
    <motion.div variants={cardVariants} className="flex justify-center">
      <motion.span
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, delay, ease: "easeInOut" }}
      >
        <ArrowRight className="h-5 w-5 text-[#0B2027]/20" />
      </motion.span>
    </motion.div>
  );
}

export default function SynthesisScene({ polo }) {
  const accent = POLOS[polo]?.color ?? POLOS.leo.color;

  return (
    <div className="flex h-full flex-col px-20 pb-2">
      <div className="flex shrink-0 items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-[#0B2027]/30">
            Ato 2 · Síntese de dados
          </p>
          <h2 className="mt-3 font-display text-[3.4rem] font-extrabold leading-none tracking-[-0.03em]">
            Da resposta ao perfil
          </h2>
        </div>
        <p className="max-w-sm text-right text-sm leading-relaxed text-[#0B2027]/35">
          Nenhum dado sozinho vira decisão. O padrão é que vira perfil.
        </p>
      </div>

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate="show"
        className="mt-9 grid flex-1 grid-cols-[1fr_52px_1.2fr_52px_1fr] items-center gap-4"
      >
        <div className="flex flex-col gap-3">
          <ColumnTitle>Dados soltos</ColumnTitle>
          {RAW_SIGNALS.map((signal) => (
            <motion.span
              key={signal}
              variants={cardVariants}
              className="rounded-xl border border-[#0B2027]/10 bg-[#0B2027]/[0.03] px-4 py-2.5 text-sm text-[#0B2027]/55"
            >
              {signal}
            </motion.span>
          ))}
        </div>

        <Arrow />

        <div className="flex flex-col gap-3">
          <ColumnTitle>Padrões de comportamento</ColumnTitle>
          {PATTERNS.map((pattern, index) => (
            <KineticCard
              key={pattern.title}
              accent={index === 0 ? accent : undefined}
              className="p-4"
            >
              <p className="font-display text-lg font-semibold">{pattern.title}</p>
              <p className="mt-1 text-sm leading-snug text-[#0B2027]/45">{pattern.copy}</p>
            </KineticCard>
          ))}
        </div>

        <Arrow delay={0.3} />

        <div className="flex flex-col gap-3">
          <ColumnTitle>Perfis reais</ColumnTitle>
          {PROFILES.map((profile) => (
            <motion.div
              key={profile.name}
              variants={cardVariants}
              className="rounded-xl border border-[#0B2027]/10 bg-[#0B2027]/[0.03] px-4 py-3"
            >
              <p className="font-display text-sm font-semibold" style={{ color: accent }}>
                {profile.role}
              </p>
              <p className="mt-1 text-[11px] text-[#0B2027]/45">
                {profile.name} · {profile.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}