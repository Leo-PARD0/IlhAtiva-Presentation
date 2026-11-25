import { useState } from "react";
import { actions } from "@/lib/presentationStore";

export default function ControllerFooter() {
  const [confirming, setConfirming] = useState(false);

  return (
    <div className="mt-10 border-t border-[#0B2027]/10 pt-5">
      <p className="text-[10px] leading-relaxed text-[#0B2027]/25">
        Abra o Telão em outra aba ou no telão do auditório. Tudo o que você dispara
        aqui aparece lá em tempo real.
      </p>
      <button
        onClick={() => {
          if (confirming) {
            actions.reset();
            setConfirming(false);
            return;
          }
          setConfirming(true);
          setTimeout(() => setConfirming(false), 4000);
        }}
        className="mt-3 min-h-10 w-full rounded-xl border border-[#0B2027]/10 text-[10px] uppercase tracking-[0.22em] text-[#0B2027]/35"
      >
        {confirming ? "tocar de novo para reiniciar" : "Reiniciar apresentação"}
      </button>
    </div>
  );
}