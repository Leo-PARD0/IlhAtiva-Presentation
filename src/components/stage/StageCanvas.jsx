import { useEffect, useState } from "react";

const BASE_WIDTH = 1600;
const BASE_HEIGHT = 900;

export default function StageCanvas({ children }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const compute = () => {
      const next = Math.min(
        window.innerWidth / BASE_WIDTH,
        window.innerHeight / BASE_HEIGHT,
      );
      setScale(Number.isFinite(next) && next > 0 ? next : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-[#F5F5F0]">
      <div
        className="relative shrink-0 origin-center"
        style={{
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}