import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MonitorPlay, SlidersHorizontal, Radio } from "lucide-react";
import TopographicBackground from "@/components/shared/TopographicBackground";
import { spring } from "@/utils/motion";

export const Route = createFileRoute("/")({
  component: LaunchPage,
  head: () => ({
    meta: [
      { title: "IlhAtiva · Palco ao vivo" },
      {
        name: "description",
        content:
          "Apresentação ao vivo do IlhAtiva: UX Design aplicado à experiência do esportista nos espaços públicos de Ilhabela.",
      },
    ],
  }),
});

const cards = [
  {
    to: "/stage",
    icon: MonitorPlay,
    label: "Telão",
    kicker: "16:9 · auditório",
    copy: "O palco visual. Projetado para o público, sem barras de rolagem.",
    from: "#FF8800",
    toColor: "#FFD166",
  },
  {
    to: "/controller",
    icon: SlidersHorizontal,
    label: "Controle",
    kicker: "tablet · apresentador",
    copy: "O soundboard: dispara cenas, revela dados e preenche personas ao vivo.",
    from: "#1AB394",
    toColor: "#177A6E",
  },
];

function LaunchPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F5F5F0] text-[#0B2027]">
      <TopographicBackground accent="#1AB394" />

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring}
          className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#0B2027]/50"
        >
          <Radio className="h-4 w-4 text-[#FF8800]" />
          Apresentação ao vivo
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={spring}
          className="mt-6 font-display text-6xl font-bold leading-[0.9] tracking-tight sm:text-8xl"
        >
          Ilh<span className="text-[#FF8800]">Ativa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.08 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-[#0B2027]/60 sm:text-xl"
        >
          UX Design aplicado à experiência do esportista nos espaços públicos de
          Ilhabela — dois apresentadores, quatro atos, nenhum slide.
        </motion.p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.to}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...spring, delay: 0.12 + index * 0.08 }}
            >
              <Link
                to={card.to}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border-2 border-[#0B2027] bg-white p-7 shadow-[4px_4px_0px_#0B2027] transition-transform hover:-translate-y-1"
              >
                <div className="relative">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#0B2027]"
                    style={{ background: card.toColor }}
                  >
                    <card.icon className="h-6 w-6" style={{ color: card.from }} />
                  </div>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0B2027]/40">
                    {card.kicker}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
                    {card.label}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#0B2027]/55">{card.copy}</p>
                </div>
                <p className="relative mt-8 text-sm font-semibold" style={{ color: card.from }}>
                  Abrir →
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 max-w-2xl text-xs leading-relaxed text-[#0B2027]/35"
        >
          Abra o Telão na projeção e o Controle no tablet ou em outra aba do mesmo
          navegador. As duas telas compartilham o mesmo estado em tempo real.
        </motion.p>
      </main>
    </div>
  );
}