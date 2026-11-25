import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import PrototypeShell from "@/components/prototype/PrototypeShell";

const TONES = {
  green: "bg-[#177A6E]/10 text-[#177A6E]",
  amber: "bg-amber-50 text-amber-700",
  rose: "bg-rose-50 text-rose-700",
};

const SPACES = [
  {
    id: "praia-grande",
    name: "Quadra de Areia · Praia Grande",
    status: "Livre agora",
    tone: "green",
    distance: "350 m",
    detail: "Livre até 21h",
    sports: ["Vôlei", "Futevôlei"],
  },
  {
    id: "pereque",
    name: "Arena do Perequê",
    status: "Ocupado · libera 19h",
    tone: "amber",
    distance: "1,2 km",
    detail: "2 grupos na fila",
    sports: ["Society"],
  },
  {
    id: "itaquanduba",
    name: "Quadra do Itaquanduba",
    status: "Fila · 2 grupos",
    tone: "rose",
    distance: "2,8 km",
    detail: "Chegada 18h30",
    sports: ["Basquete"],
  },
];

export default function SpaceStatusScreen() {
  const [booked, setBooked] = useState([]);

  const toggle = (id) =>
    setBooked((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );

  return (
    <PrototypeShell
      subtitle="Ilhabela · Praia Grande"
      title="Espaços ao vivo"
      activeTab="spaces"
    >
      <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[10px] font-medium text-[#0B2027]/50 shadow-sm">
        <MapPin className="h-3.5 w-3.5 text-[#FF8800]" />
        Perto de você · 3 espaços em 3 km
      </div>

      <div className="mt-3 space-y-2.5">
        {SPACES.map((space) => {
          const isBooked = booked.includes(space.id);
          return (
            <div
              key={space.id}
              className="rounded-2xl border border-[#0B2027]/10 bg-white p-3.5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[13px] font-semibold leading-tight">{space.name}</p>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2 py-1 text-[9px] font-bold",
                    TONES[space.tone],
                  )}
                >
                  {space.status}
                </span>
              </div>

              <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-[#0B2027]/45">
                <Clock className="h-3 w-3" />
                {space.detail}
                <span>·</span>
                {space.distance}
              </div>

              <div className="mt-2.5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {space.sports.map((sport) => (
                    <span
                      key={sport}
                      className="rounded-full bg-[#0B2027]/5 px-2 py-1 text-[9px] font-semibold text-[#0B2027]/55"
                    >
                      {sport}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => toggle(space.id)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[10px] font-bold transition",
                    isBooked
                      ? "bg-[#177A6E] text-[#F5F5F0]"
                      : "bg-[#FF8800] text-[#0B2027]",
                  )}
                >
                  {isBooked ? "Reservado ✓" : "Reservar"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-center text-[10px] text-[#0B2027]/35">
        Status atualizado por quem está na quadra.
      </p>
    </PrototypeShell>
  );
}