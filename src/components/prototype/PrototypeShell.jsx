import { BatteryMedium, Home, MapPin, User, Users, Wifi, Signal } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "home", label: "Início", icon: Home },
  { id: "spaces", label: "Espaços", icon: MapPin },
  { id: "groups", label: "Grupos", icon: Users },
  { id: "profile", label: "Perfil", icon: User },
];

export default function PrototypeShell({ subtitle, title, activeTab = "spaces", children }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#F5F5F0] font-body text-[#0B2027]">
      <div className="flex shrink-0 items-center justify-between px-5 pb-1 pt-3 text-[10px] font-semibold text-[#0B2027]/55">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <Signal className="h-3 w-3" />
          <Wifi className="h-3 w-3" />
          <BatteryMedium className="h-3.5 w-3.5" />
        </span>
      </div>

      <header className="shrink-0 px-5 pt-1.5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#0B2027]/35">
          {subtitle}
        </p>
        <h1 className="mt-1 font-display text-[22px] font-extrabold leading-tight tracking-tight">
          {title}
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto px-5 pb-6 pt-3">{children}</main>

      <nav className="shrink-0 border-t border-[#0B2027]/10 bg-white px-3 pb-3 pt-2">
        <div className="flex items-center justify-around">
          {NAV.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <span
                key={item.id}
                className={cn("flex flex-col items-center gap-1")}
                style={{ color: isActive ? "#FF8800" : "rgba(11,32,39,0.35)" }}
              >
                <item.icon className="h-4 w-4" />
                <span className="text-[9px] font-semibold">{item.label}</span>
              </span>
            );
          })}
        </div>
      </nav>
    </div>
  );
}