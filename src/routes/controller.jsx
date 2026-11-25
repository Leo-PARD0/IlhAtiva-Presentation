import { createFileRoute } from "@tanstack/react-router";
import { usePresentation } from "@/lib/presentationStore";
import { POLOS, findEpic, findScene } from "@/utils/presentationData";
import TopographicBackground from "@/components/shared/TopographicBackground";
import ControllerHeader from "@/components/controller/ControllerHeader";
import PoloSwitch from "@/components/controller/PoloSwitch";
import EpicTabs from "@/components/controller/EpicTabs";
import SceneGrid from "@/components/controller/SceneGrid";
import RevealPanel from "@/components/controller/RevealPanel";
import PersonaForm from "@/components/controller/PersonaForm";
import StoryPicker from "@/components/controller/StoryPicker";
import ControllerFooter from "@/components/controller/ControllerFooter";

export const Route = createFileRoute("/controller")({
  component: ControllerPage,
  head: () => ({
    meta: [
      { title: "IlhAtiva · Controle" },
      { name: "description", content: "Soundboard do apresentador da palestra IlhAtiva." },
    ],
  }),
});

function SectionLabel({ children, hint }) {
  return (
    <div className="mb-2 mt-6 flex items-baseline justify-between">
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0B2027]/35">
        {children}
      </p>
      {hint ? <span className="text-[10px] text-[#0B2027]/20">{hint}</span> : null}
    </div>
  );
}

function ControllerPage() {
  const state = usePresentation();
  const polo = POLOS[state.polo] ?? POLOS.vitoria;
  const epic = findEpic(state.epic);
  const scene = findScene(state.scene) ?? epic.scenes[0];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F5F5F0] font-body text-[#0B2027]">
      <TopographicBackground accent={polo.color} intensity={0.8} />
      <div className="relative mx-auto max-w-3xl px-4 pb-12 sm:px-6">
        <ControllerHeader breath={state.breath} polo={polo} epic={epic} scene={scene} />

        <SectionLabel hint="define a cor do telão">Polo ativo</SectionLabel>
        <PoloSwitch active={state.polo} />

        <SectionLabel hint="4 atos">Épicos</SectionLabel>
        <EpicTabs activeEpic={state.epic} polo={polo} />

        <SectionLabel hint={epic.subtitle}>Cenas do ato</SectionLabel>
        <SceneGrid epic={epic} activeScene={state.scene} polo={polo} />

        {scene.steps ? (
          <>
            <SectionLabel hint={`${scene.title}`}>Revelar dados</SectionLabel>
            <RevealPanel reveal={state.reveal} total={scene.steps} polo={polo} />
          </>
        ) : null}

        {state.epic === 2 ? (
          <>
            <SectionLabel hint="aterrissa no telão">Personas ao vivo</SectionLabel>
            <PersonaForm />
          </>
        ) : null}

        {state.epic === 3 ? (
          <>
            <SectionLabel hint="troca fala + protótipo">Histórias de usuário</SectionLabel>
            <StoryPicker active={state.story} polo={polo} />
          </>
        ) : null}

        <ControllerFooter />
      </div>
    </div>
  );
}