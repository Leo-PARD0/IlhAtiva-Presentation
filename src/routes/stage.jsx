import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { usePresentation } from "@/lib/presentationStore";
import { POLOS, findEpic, findScene } from "@/utils/presentationData";
import StageCanvas from "@/components/stage/StageCanvas";
import StageScene from "@/components/stage/StageScene";
import BreathOverlay from "@/components/stage/BreathOverlay";
import StageHeader from "@/components/shared/StageHeader";
import TopographicBackground from "@/components/shared/TopographicBackground";
import CourtLines from "@/components/shared/CourtLines";
import SportProgressBar from "@/utils/SportProgressBar";
import BallWipeTransition from "@/utils/BallWipeTransition";
import StageDebugBar from "@/components/stage/StageDebugBar";

export const Route = createFileRoute("/stage")({
  component: StagePage,
  head: () => ({
    meta: [
      { title: "IlhAtiva · Telão" },
      { name: "description", content: "Palco visual da apresentação IlhAtiva." },
    ],
  }),
});

function StagePage() {
  const state = usePresentation();
  const polo = POLOS[state.polo] ?? POLOS.vitoria;
  const epic = findEpic(state.epic);
  const scene = findScene(state.scene) ?? epic.scenes[0];

  return (
    <StageCanvas>
      <div className="relative h-full w-full overflow-hidden bg-[#F5F5F0] font-body text-[#0B2027]">
        <TopographicBackground accent={polo.color} />
        <CourtLines accent={polo.color} />

        <div className="relative flex h-full flex-col">
          <StageHeader epic={epic} scene={scene} polo={state.polo} />
          <main className="relative min-h-0 flex-1 pt-5">
            <StageScene state={state} />
          </main>
          <SportProgressBar epic={state.epic} color={polo.color} />
        </div>

        <BallWipeTransition trigger={state.epicTick} color={polo.color} />
        <AnimatePresence>{state.breath ? <BreathOverlay key="breath" /> : null}</AnimatePresence>
        <StageDebugBar />
      </div>
    </StageCanvas>
  );
}