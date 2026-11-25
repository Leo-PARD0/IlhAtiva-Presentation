import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { SKETCHES } from "@/utils/presentationData";
import { cardVariants, staggerContainer } from "@/utils/motion";

export default function SketchbookScene() {
  return (
    <div className="flex h-full flex-col px-20 pb-2">
      <div className="flex shrink-0 items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-[#0B2027]/30">
            Ato 4 · Wireframe
          </p>
          <h2 className="mt-3 font-display text-[3.4rem] font-extrabold leading-none tracking-[-0.03em]">
            Papel e caneta
          </h2>
        </div>
        <p className="max-w-xs text-right text-sm leading-relaxed text-[#0B2027]/35">
          Antes de qualquer pixel: rascunho, teste com quem joga e correção no traço.
        </p>
      </div>

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate="show"
        className="mt-8 grid flex-1 grid-cols-3 gap-6"
      >
        {SKETCHES.map((sketch) => (
          <motion.figure
            key={sketch.caption}
            variants={cardVariants}
            className="relative flex flex-col"
            style={{ rotate: sketch.rotate }}
          >
            <span className="absolute -top-2 left-8 z-10 h-5 w-16 -rotate-3 rounded-sm bg-[#0B2027]/25 backdrop-blur-sm" />
            <div className="overflow-hidden rounded-2xl border border-[#0B2027]/10 bg-[#0B2027]/5 p-2">
              <Image
                src={sketch.src}
                alt={sketch.caption}
                fittingType="fill"
                className="h-[300px] w-full rounded-xl object-cover"
              />
            </div>
            <figcaption className="mt-4">
              <p className="font-display text-lg font-semibold">{sketch.caption}</p>
              <p className="mt-1 text-xs text-[#0B2027]/35">{sketch.note}</p>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  );
}