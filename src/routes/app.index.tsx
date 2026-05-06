import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, GraduationCap, MapPin, Zap, TrendingUp, Award, ChevronRight } from "lucide-react";
import { cars, courses } from "@/data/mock";

export const Route = createFileRoute("/app/")({
  component: HomeScreen,
});

function HomeScreen() {
  const available = cars.filter((c) => c.status === "available");
  const nearest = available[0];

  return (
    <div className="px-5 pt-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Olá, Marina</p>
          <h1 className="font-display text-2xl font-bold">Bom dia ☀️</h1>
        </div>
        <Link to="/app/profile" className="h-11 w-11 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground font-bold shadow-glow">
          M
        </Link>
      </div>

      {/* Reputation */}
      <div className="mt-5 rounded-3xl bg-gradient-card border border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
              Reputação DRV
            </span>
          </div>
          <span className="text-xs text-primary font-bold">Nível 3</span>
        </div>
        <div className="mt-3 flex items-end justify-between">
          <p className="font-display text-3xl font-bold text-gradient">820 pts</p>
          <p className="text-xs text-muted-foreground">+180 p/ próx. nível</p>
        </div>
        <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-primary" />
        </div>
      </div>

      {/* Quick actions */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <Link to="/app/map" className="group rounded-3xl bg-gradient-primary p-4 shadow-glow hover:scale-[1.02] transition">
          <Car className="h-7 w-7 text-primary-foreground" strokeWidth={2.4} />
          <p className="mt-6 text-xs font-medium text-primary-foreground/80">Aluguel rápido</p>
          <p className="font-display text-lg font-bold text-primary-foreground">Pegar carro</p>
        </Link>
        <Link to="/app/courses" className="rounded-3xl bg-card border border-border p-4 hover:border-primary transition">
          <GraduationCap className="h-7 w-7 text-primary" strokeWidth={2.4} />
          <p className="mt-6 text-xs font-medium text-muted-foreground">Aprender</p>
          <p className="font-display text-lg font-bold">Ver cursos</p>
        </Link>
      </div>

      {/* Nearest car */}
      {nearest && (
        <Link to="/app/map" className="block mt-5 rounded-3xl border border-border bg-card p-4 hover:shadow-glow transition">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Disponível agora
            </span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-14 w-14 rounded-2xl bg-gradient-primary/20 grid place-items-center">
              <Car className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-display font-bold">{nearest.model}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                <MapPin className="h-3 w-3" /> {nearest.distance}m · <Zap className="h-3 w-3" /> {nearest.battery}%
              </p>
            </div>
            <div className="text-right">
              <p className="font-display font-bold">R$ {nearest.pricePerMin.toFixed(2)}</p>
              <p className="text-[10px] text-muted-foreground">por minuto</p>
            </div>
          </div>
        </Link>
      )}

      {/* Recommended courses */}
      <div className="mt-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> Recomendado pra você
            </p>
            <h2 className="font-display text-lg font-bold mt-0.5">Cursos em alta</h2>
          </div>
          <Link to="/app/courses" className="text-xs text-primary font-semibold">
            Ver todos
          </Link>
        </div>
        <div className="mt-3 flex gap-3 overflow-x-auto -mx-5 px-5 pb-2 scrollbar-hide">
          {courses.slice(0, 3).map((c) => (
            <Link
              key={c.id}
              to="/app/courses/$id"
              params={{ id: c.id }}
              className="min-w-[200px] rounded-3xl border border-border bg-gradient-card p-4 hover:border-primary transition"
            >
              <div className="text-3xl">{c.image}</div>
              <p className="mt-3 font-display font-bold text-sm leading-tight">{c.title}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{c.duration} · {c.lessons} aulas</p>
              <p className="mt-3 text-[11px] font-semibold text-primary">🎁 {c.benefit}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
