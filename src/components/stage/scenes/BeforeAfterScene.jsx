import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import PhoneMockup from "@/utils/PhoneMockup";
import { IMAGES, STORIES } from "@/utils/presentationData";
import { cardVariants, staggerContainer } from "@/utils/motion";

export default function BeforeAfterScene({ story = 0 }) {
  const current = STORIES[story] ?? STORIES[0];

  return (
    <div className="relative flex h-full flex-col px-20 pb-2">
      <div className="flex shrink-0 items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-[#0B2027]/30">
            Ato 4 · Do esboço à tela
          </p>
          <h2 className="mt-3 font-display text-[3.4rem] font-extrabold leading-none tracking-[-0.03em]">
            Antes e depois
          </h2>
        </div>
        <p className="max-w-xs text-right text-sm leading-relaxed text-[#0B2027]/35">
          O que sobreviveu do papel: hierarquia, um toque por decisão e a fala da
          comunidade.
        </p>
      </div>

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate="show"
        className="relative mt-7 grid flex-1 grid-cols-2 items-center gap-10"
      >
        <motion.div variants={cardVariants}>
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#0B2027]/30">
            Antes · papel
          </p>
          <div className="overflow-hidden rounded-2xl border border-[#0B2027]/10 bg-[#0B2027]/5 p-2">
            <Image
              src={IMAGES.sketchPhones}
              alt="Wireframes desenhados à mão no papel"
              fittingType="fill"
              className="h-[330px] w-full rounded-xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="flex flex-col items-center">
          <p className="mb-3 self-start text-[10px] uppercase tracking-[0.3em] text-[#0B2027]/30">
            Depois · tela final
          </p>
          <PhoneMockup
            layoutId="phone-before-after"
            src={current.proto}
            width={240}
          />
        </motion.div>

        <motion.span
          className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#0B2027] bg-[#FFD166]"
          animate={{ x: [-3, 3, -3] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <MoveRight className="h-5 w-5 text-[#0B2027]/50" />
        </motion.span>
      </motion.div>
    </div>
  );
}