import { useState } from "react";
import { MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import PrototypeShell from "@/components/prototype/PrototypeShell";

const FILTERS = ["Basquete", "Iniciante", "Hoje à noite"];

const GROUPS = [
  {
    id: "g1",
    name: "Basquete da Ilha",
    spot: "Quadra do Itaquanduba",
    level: "Iniciante · aberto",
    time: "Hoje · 19h",
    spots: "3 vagas",
    color: "#177A6E",
  },
  {
    id: "g2",
    name: "Roda de Vôlei",
    spot: "Praia Grande",
    level: "Todos os níveis",
    time: "Amanhã · 7h",
    spots: "6 vagas",
    color: "#FF8800",
  },
];

export default function DiscoverScreen() {
  const [joined, setJoined] = useState([]);

  const toggle = (id) =>
    setJoined((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );

  return (
    <PrototypeShell subtitle="Match por nível" title="Encontrar grupo" activeTab="groups">
      <div className="flex flex-wrap gap-1.5">
        {FILTERS.map((filter) => (
          <span
            key={filter}
            className="rounded-full bg-[#FFD166] px-2.5 py-1.5 text-[10px] font-semibold text-[#0B2027]"
          >
            {filter}
          </span>
        ))}
        <span className="rounded-full border border-[#0B2027]/15 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-[#0B2027]/45">
          + filtro
        </span>
      </div>

      <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#0B2027]/35">
        3 grupos no seu horário
      </p>

      <div className="mt-2 space-y-2.5">
        {GROUPS.map((group) => {
          const isJoined = joined.includes(group.id);
          return (
            <div
              key={group.id}
              className="rounded-2xl border border-[#0B2027]/10 bg-white p-3.5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[13px] font-semibold leading-tight">{group.name}</p>
                <span
                  className="shrink-0 rounded-full px-2 py-1 text-[9px] font-bold text-[#0B2027]"
                  style={{ background: group.color }}
                >
                  {group.spots}
                </span>
              </div>

              <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-[#0B2027]/45">
                <MapPin className="h-3 w-3" />
                {group.spot}
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-[10px] text-[#0B2027]/45">
                <Users className="h-3 w-3" />
                {group.level} · {group.time}
              </div>

              <button
                onClick={() => toggle(group.id)}
                className={cn(
                  "mt-2.5 w-full rounded-xl py-2 text-[11px] font-bold transition",
                  isJoined
                    ? "bg-[#0B2027]/5 text-[#0B2027]/45"
                    : "bg-[#FF8800] text-[#0B2027]",
                )}
              >
                {isJoined ? "Solicitação enviada ✓" : "Entrar no grupo"}
              </button>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-center text-[10px] text-[#0B2027]/35">
        Ninguém fica de fora por não conhecer o grupo.
      </p>
    </PrototypeShell>
  );
}