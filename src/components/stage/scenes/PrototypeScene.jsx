import { motion } from "framer-motion";
import PhoneMockup from "@/utils/PhoneMockup";
import { POLOS, STORIES, UX_TAGS } from "@/utils/presentationData";
import { cardVariants, staggerContainer } from "@/utils/motion";

export default function PrototypeScene({ story = 0, polo }) {
  const current = STORIES[story] ?? STORIES[0];
  const accent = POLOS[polo]?.color ?? POLOS.leo.color;

  return (
    <div className="relative h-full w-full">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate="show"
        className="absolute left-16 top-1/2 w-[300px] -translate-y-1/2"
      >
        <motion.p
          variants={cardVariants}
          className="text-[10px] uppercase tracking-[0.32em] text-[#0B2027]/30"
        >
          Ato 4 · MVP 4.3
        </motion.p>
        <motion.h2
          variants={cardVariants}
          className="mt-3 font-display text-[3rem] font-extrabold leading-[0.95] tracking-[-0.03em]"
        >
          Protótipo em palco
        </motion.h2>
        <motion.p
          variants={cardVariants}
          className="mt-4 text-sm leading-relaxed text-[#0B2027]/40"
        >
          Navegação livre. O telão acompanha a tela do protótipo enquanto a conversa
          acontece.
        </motion.p>
        <motion.div
          variants={cardVariants}
          className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.24em]"
          style={{ background: `${accent}14`, color: accent }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {current.proto.split("/").pop()}
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <PhoneMockup
          layoutId="stage-phone"
          src={current.proto}
          width={300}
        />
      </div>

      <motion.div
        variants={staggerContainer(0.08, 0.15)}
        initial="hidden"
        animate="show"
        className="absolute right-16 top-1/2 w-[352px] -translate-y-1/2"
      >
        <motion.p
          variants={cardVariants}
          className="text-[10px] uppercase tracking-[0.32em] text-[#0B2027]/30"
        >
          Experiência do esportista
        </motion.p>
        <motion.h3 variants={cardVariants} className="mt-2 font-display text-2xl font-bold">
          O que está em jogo
        </motion.h3>
        <div className="mt-4 space-y-2">
          {UX_TAGS.map((tag) => (
            <motion.div
              key={tag.label}
              variants={cardVariants}
              className="rounded-2xl border border-[#0B2027]/10 bg-[#0B2027]/[0.03] px-4 py-2.5"
            >
              <p
                className="font-display text-sm font-semibold"
                style={{ color: POLOS.leo.color }}
              >
                {tag.label}
              </p>
              <p className="mt-0.5 text-xs text-[#0B2027]/40">{tag.note}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}