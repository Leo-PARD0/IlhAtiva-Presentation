import { motion } from "framer-motion";

export default function BreathOverlay() {
  return (
    <motion.div
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0A3D44] text-[#F5F5F0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="text-center"
        animate={{ scale: [1, 1.035, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="font-display text-8xl font-extrabold tracking-[-0.04em]">
          Ilh
          <span className="text-[#FFD166]">
            Ativa
          </span>
        </p>
        <p className="mt-8 text-[11px] uppercase tracking-[0.55em] text-[#F5F5F0]/70">
          Modo respiro
        </p>
      </motion.div>
      <div className="absolute bottom-16 flex items-center gap-3">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="h-1.5 w-1.5 rounded-full bg-[#F5F5F0]/60"
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              delay: dot * 0.35,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}