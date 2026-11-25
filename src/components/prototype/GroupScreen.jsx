import { useState } from "react";
import { Check, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import PrototypeShell from "@/components/prototype/PrototypeShell";

const INITIAL_ITEMS = [
  { id: "rede", label: "Rede", owner: "Diego" },
  { id: "bola", label: "Bola", owner: "Ana" },
  { id: "coletes", label: "Coletes", owner: "Léo" },
  { id: "agua", label: "Água", owner: "Você" },
];

const PLAYERS = ["DC", "AN", "LP", "MR", "JS", "TB", "CS", "VC"];

export default function GroupScreen() {
  const [items, setItems] = useState(["rede", "bola"]);
  const [confirmed, setConfirmed] = useState(false);

  const toggle = (id) =>
    setItems((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );

  return (
    <PrototypeShell subtitle="Seu grupo" title="Pelada do Perequê" activeTab="groups">
      <div className="rounded-2xl border-2 border-[#0B2027] bg-[#0A3D44] p-4 text-[#F5F5F0] shadow-[4px_4px_0px_#0B2027]">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F5F5F0]/75">
          <Clock className="h-3 w-3" />
          Hoje · 19h30
        </div>
        <p className="mt-2 font-display text-lg font-bold leading-tight">
          Arena do Perequê · society
        </p>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex -space-x-2">
            {PLAYERS.slice(0, 5).map((player) => (
              <span
                key={player}
                className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#F5F5F0] bg-[#F5F5F0]/10 text-[9px] font-bold"
              >
                {player}
              </span>
            ))}
          </div>
          <span className="flex items-center gap-1 text-[10px] text-[#F5F5F0]/75">
            <Users className="h-3 w-3" />
            8 confirmados
          </span>
        </div>
      </div>

      <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#0B2027]/35">
        Material do jogo
      </p>
      <div className="mt-2 space-y-1.5">
        {INITIAL_ITEMS.map((item) => {
          const checked = items.includes(item.id);
          return (
            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between rounded-xl border border-[#0B2027]/10 bg-white px-3 py-2.5 text-left shadow-sm"
            >
              <span className="flex items-center gap-2.5">
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-md border",
                    checked
                      ? "border-[#177A6E] bg-[#177A6E] text-[#F5F5F0]"
                      : "border-black/15 text-transparent",
                  )}
                >
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-[12px] font-semibold">{item.label}</span>
              </span>
              <span className="text-[10px] text-[#0B2027]/40">{item.owner}</span>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => setConfirmed(true)}
        className={cn(
          "mt-4 w-full rounded-xl border-2 border-[#0B2027] py-3 text-[12px] font-bold transition",
          confirmed
            ? "bg-[#FFD166] text-[#0B2027]"
            : "bg-[#177A6E] text-[#F5F5F0]",
        )}
      >
        {confirmed ? "Presença confirmada ✓" : "Confirmar presença"}
      </button>
    </PrototypeShell>
  );
}