import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { spring } from "@/utils/motion";

export default function PhoneMockup({
  src,
  width = 340,
  layoutId,
  enterFrom,
  className,
  children,
}) {
  return (
    <motion.div
      layoutId={layoutId}
      initial={enterFrom ? { y: enterFrom, opacity: 0, rotate: -2 } : false}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ ...spring, layout: { ...spring, delay: 0.42 } }}
      style={{ width }}
      className={cn("relative shrink-0", className)}
    >
      <div
        className="relative rounded-[2.7rem] border-[3px] border-[#0B2027] bg-white p-2.5 shadow-[8px_8px_0px_#0B2027]"
      >
        <div
          className="relative overflow-hidden rounded-[2.1rem] bg-white"
          style={{ aspectRatio: "390 / 844" }}
        >
          {src ? (
            <iframe
              src={src}
              title="Protótipo IlhAtiva"
              loading="lazy"
              className="h-full w-full border-0"
            />
          ) : (
            children
          )}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-2 h-[18px] w-24 -translate-x-1/2 rounded-full bg-[#0B2027]"
          />
        </div>
      </div>
    </motion.div>
  );
}