import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import KineticCard from "@/utils/KineticCard";
import PhoneMockup from "@/utils/PhoneMockup";
import { POLOS, STORIES } from "@/utils/presentationData";
import { cardVariants, staggerContainer } from "@/utils/motion";

function Connector() {
  return (
    <div className="flex justify-center">
      <motion.span
        variants={cardVariants}
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-4 w-4 text-[#0B2027]/20" />
      </motion.span>
    </div>
  );
}

export default function VoiceBridgeScene({ story = 0 }) {
  const current = STORIES[story] ?? STORIES[0];
  const coral = POLOS.vitoria.color;
  const cyan = POLOS.leo.color;

  return (
    <div className="grid h-full grid-cols-[1.08fr_0.92fr] items-center gap-8 px-20 pb-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: -16, transition: { duration: 0.2 } }}
          className="flex flex-col gap-2.5"
        >
          <KineticCard accent={coral} className="p-6">
            <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: coral }}>
              Fala da pesquisa · Vitória
            </p>
            <p className="mt-3 font-display text-[1.6rem] font-semibold leading-snug">
              “{current.quote}”
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-[#0B2027]/35">
              {current.person}
            </p>
          </KineticCard>

          <Connector />

          <KineticCard className="p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#0B2027]/30">
              História de usuário · Leo
            </p>
            <p className="mt-2.5 text-lg leading-snug text-[#0B2027]/80">{current.story}</p>
          </KineticCard>

          <Connector />

          <KineticCard accent={cyan} className="p-6">
            <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: cyan }}>
              Funcionalidade resultante
            </p>
            <p className="mt-2.5 font-display text-xl font-semibold" style={{ color: cyan }}>
              {current.feature}
            </p>
          </KineticCard>
        </motion.div>
      </AnimatePresence>

      <div className="flex h-full items-center justify-center">
        <PhoneMockup
          layoutId="stage-phone"
          src={current.proto}
          width={252}
          enterFrom="-100vh"
        />
      </div>
    </div>
  );
}