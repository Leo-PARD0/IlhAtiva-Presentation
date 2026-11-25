import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function BallWipeTransition({ trigger }) {
  const [activeTrigger, setActiveTrigger] = useState(null);

  useEffect(() => {
    if (!trigger) return undefined;
    setActiveTrigger(trigger);
    const timeout = setTimeout(() => setActiveTrigger(null), 1550);
    return () => clearTimeout(timeout);
  }, [trigger]);

  return (
    <AnimatePresence>
      {activeTrigger !== null ? (
        <motion.div
          key={`basketball-wipe-${activeTrigger}`}
          className="pointer-events-none absolute inset-0 z-[60] overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div className="absolute inset-x-0 bottom-[-90px] flex justify-center">
            <motion.div
              aria-hidden="true"
              className="h-[180px] w-[180px]"
              initial={{
                y: -1050,
                rotate: -250,
                scaleX: 0.85,
                scaleY: 1.1,
              }}
              animate={{
                y: [-1050, 0, 0, -170, 0, 0],
                rotate: [-250, 0, 28, 180, 420, 540],
                scaleX: [0.85, 1, 1.15, 0.96, 30, 0],
                scaleY: [1.1, 1, 0.85, 1.05, 30, 0],
              }}
              transition={{
                duration: 1.5,
                times: [0, 0.32, 0.38, 0.53, 0.76, 1],
                ease: ["easeIn", "linear", "easeOut", "easeIn", "easeOut"],
              }}
            >
              <svg viewBox="0 0 180 180" className="h-full w-full">
                <defs>
                  <clipPath id="basketball-shape">
                    <circle cx="90" cy="90" r="85" />
                  </clipPath>
                </defs>
                <circle
                  cx="90"
                  cy="90"
                  r="85"
                  fill="#FF8800"
                  stroke="#0B2027"
                  strokeWidth="5"
                />
                <g
                  clipPath="url(#basketball-shape)"
                  fill="none"
                  stroke="#0B2027"
                  strokeWidth="5"
                  strokeLinecap="round"
                >
                  <path d="M90 4c-29 26-40 54-40 86s11 60 40 86" />
                  <path d="M90 4c29 26 40 54 40 86s-11 60-40 86" />
                  <path d="M5 64c25 15 53 23 85 23s60-8 85-23" />
                  <path d="M5 116c25-15 53-23 85-23s60 8 85 23" />
                </g>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
