import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardVariants } from "@/utils/motion";

export default function KineticCard({
  children,
  className,
  accent,
  variants = cardVariants,
  as = "div",
  ...rest
}) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      variants={variants}
      className={cn(
        "relative overflow-hidden rounded-2xl border-2 border-[#0B2027] bg-white shadow-[4px_4px_0px_#0B2027]",
        className,
      )}
      {...rest}
    >
      {accent ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1.5"
          style={{
            background: accent,
          }}
        />
      ) : null}
      {children}
    </Component>
  );
}