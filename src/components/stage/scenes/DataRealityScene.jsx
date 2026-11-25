import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import KineticCard from "@/utils/KineticCard";
import { METRICS, POLOS } from "@/utils/presentationData";
import { spring } from "@/utils/motion";

function MetricSlot({ metric, active, accent }) {
  return (
    <KineticCard
      accent={active ? accent : undefined}
      className={cn(
        "flex h-full flex-col p-7",
        active ? "" : "border-dashed border-[#0B2027]/12 bg-[#0B2027]/[0.015]",
      )}
    >
      <AnimatePresence mode="wait">
        {active ? (
          <motion.div
            key="on"
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={spring}
            className="flex h-full flex-col justify-between"
          >
            <div>
              <p className="font-display text-[6.2rem] font-extrabold leading-[0.85] tracking-[-0.05em]">
                {metric.value}
              </p>
              <p className="mt-5 text-xl leading-snug text-[#0B2027]/70">{metric.label}</p>
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-[0.28em] text-[#0B2027]/25">
              {metric.foot}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="off"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex h-full items-center justify-center"
          >
            <div className="flex flex-col items-center gap-3 text-[#0B2027]/20">
              <span className="font-display text-3xl tracking-[0.3em]">•••</span>
              <span className="text-[10px] uppercase tracking-[0.3em]">Aguardando</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </KineticCard>
  );
}

export default function DataRealityScene({ reveal = 0, polo }) {
  const accent = POLOS[polo]?.color ?? POLOS.leo.color;

  return (
    <div className="flex h-full flex-col px-20 pb-2">
      <div className="flex shrink-0 items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-[#0B2027]/30">
            Pesquisa quantitativa · Ilhabela 2025
          </p>
          <h2 className="mt-3 font-display text-[3.4rem] font-extrabold leading-none tracking-[-0.03em]">
            A realidade em dados
          </h2>
        </div>
        <p className="text-right text-sm text-[#0B2027]/30">
          {Math.min(reveal, METRICS.length)} de {METRICS.length} revelados
        </p>
      </div>

      <div className="mt-8 grid flex-1 grid-cols-3 gap-5">
        {METRICS.map((metric, index) => (
          <MetricSlot
            key={metric.label}
            metric={metric}
            accent={accent}
            active={index < reveal}
          />
        ))}
      </div>
    </div>
  );
}