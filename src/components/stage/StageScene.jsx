import { AnimatePresence, motion } from "framer-motion";
import OpeningScene from "@/components/stage/scenes/OpeningScene";
import HypothesisScene from "@/components/stage/scenes/HypothesisScene";
import DataRealityScene from "@/components/stage/scenes/DataRealityScene";
import SynthesisScene from "@/components/stage/scenes/SynthesisScene";
import PersonaScoreboardScene from "@/components/stage/scenes/PersonaScoreboardScene";
import VoiceBridgeScene from "@/components/stage/scenes/VoiceBridgeScene";
import SketchbookScene from "@/components/stage/scenes/SketchbookScene";
import BeforeAfterScene from "@/components/stage/scenes/BeforeAfterScene";
import PrototypeScene from "@/components/stage/scenes/PrototypeScene";

const SCENES = {
  "1.1": OpeningScene,
  "1.2": HypothesisScene,
  "1.3": DataRealityScene,
  "2.1": SynthesisScene,
  "2.2": PersonaScoreboardScene,
  "3.1": VoiceBridgeScene,
  "4.1": SketchbookScene,
  "4.2": BeforeAfterScene,
  "4.3": PrototypeScene,
};

export default function StageScene({ state }) {
  const Scene = SCENES[state.scene] ?? OpeningScene;

  return (
    <div className="absolute inset-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={state.scene}
          className="absolute inset-0"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
        >
          <Scene {...state} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}