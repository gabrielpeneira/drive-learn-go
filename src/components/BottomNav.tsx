import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Map, GraduationCap, User, Shield, type LucideIcon } from "lucide-react";

type NavItem = { to: string; label: string; icon: LucideIcon; exact?: boolean };

const items: NavItem[] = [
  { to: "/app", label: "Início", icon: Home, exact: true },
  { to: "/app/map", label: "Mapa", icon: Map },
  { to: "/app/courses", label: "Cursos", icon: GraduationCap },
  { to: "/app/profile", label: "Perfil", icon: User },
  { to: "/app/admin", label: "Admin", icon: Shield },
];

export function BottomNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-md px-4 pb-4">
        <div className="bg-card/90 backdrop-blur-xl border border-border rounded-3xl shadow-elegant px-2 py-2 flex items-center justify-between">
          {items.map((it) => {
            const active = it.exact ? path === it.to : path.startsWith(it.to);
            const Icon = it.icon;
            return (
              <Link
                key={it.to}
                to={it.to}
                className="relative flex-1 flex flex-col items-center gap-1 py-2 rounded-2xl transition-colors"
              >
                {active && (
                  <span className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-15" />
                )}
                <Icon
                  className={`h-5 w-5 relative ${active ? "text-primary" : "text-muted-foreground"}`}
                  strokeWidth={active ? 2.4 : 1.8}
                />
                <span
                  className={`text-[10px] font-medium relative ${active ? "text-primary" : "text-muted-foreground"}`}
                >
                  {it.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
