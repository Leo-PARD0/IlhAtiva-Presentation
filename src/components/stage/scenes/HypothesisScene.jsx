import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { IMAGES, POLOS } from "@/utils/presentationData";
import { cardVariants, staggerContainer } from "@/utils/motion";

export default function HypothesisScene() {
  const coral = POLOS.vitoria.color;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={IMAGES.hero}
        alt="Quadra de areia pública vazia em Ilhabela no fim da tarde"
        fittingType="fill"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F0]/95 via-[#F5F5F0]/75 to-[#F5F5F0]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F0]/50 via-transparent to-transparent" />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate="show"
        className="relative flex h-full flex-col justify-center px-24"
      >
        <motion.div
          variants={cardVariants}
          className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em]"
          style={{ background: `${coral}1F`, color: coral }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: coral }} />
          Polo Vitória · vivência real
        </motion.div>

        <motion.blockquote
          variants={cardVariants}
          className="mt-8 max-w-[880px] font-display text-[3.4rem] font-semibold leading-[1.08] tracking-[-0.02em]"
        >
          “Chego com a bola debaixo do braço e a quadra tá tomada. Ou tá sem rede,
          sem luz, sem ninguém pra dividir o jogo.”
        </motion.blockquote>

        <motion.p variants={cardVariants} className="mt-8 text-lg text-[#0B2027]/60">
          Camila, 29 · vôlei de areia · Praia Grande
        </motion.p>

        <motion.p
          variants={cardVariants}
          className="mt-2 max-w-lg text-sm leading-relaxed text-[#0B2027]/35"
        >
          A dor não é a falta de espaço. É chegar sem saber o que vai encontrar.
        </motion.p>
      </motion.div>
    </div>
  );
}