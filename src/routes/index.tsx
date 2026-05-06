import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, GraduationCap, ArrowRight, Zap, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-md h-screen bg-gradient-hero text-foreground overflow-hidden flex flex-col">
        {/* Glow accents */}
        <div className="pointer-events-none absolute -top-32 -right-24 h-[280px] w-[280px] rounded-full bg-primary/30 blur-[100px]" />
        <div className="pointer-events-none absolute top-1/2 -left-20 h-[260px] w-[260px] rounded-full bg-accent/20 blur-[100px]" />

        {/* Header */}
        <header className="relative flex items-center justify-between px-5 pt-6 shrink-0">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
              <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">DRV</span>
          </div>
          <Link
            to="/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            Entrar
          </Link>
        </header>

        {/* Hero copy */}
        <section className="relative px-5 pt-6 shrink-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            2 em 1 · Mobilidade & Educação
          </span>
          <h1 className="mt-3 font-display text-[2rem] leading-[1.05] font-bold tracking-tight">
            Alugue. Aprenda. <span className="text-gradient">Dirija melhor.</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Carros elétricos por minuto e cursos que rendem desconto.
          </p>
        </section>

        {/* Phone preview card — flexible middle area */}
        <section className="relative px-5 mt-4 flex-1 min-h-0 flex items-center">
          <div className="w-full rounded-3xl border border-border bg-card/70 backdrop-blur p-4 shadow-elegant">
            <p className="text-xs text-muted-foreground">Olá, Marina</p>
            <h3 className="font-display text-base font-bold">Pronta para dirigir?</h3>
            <div className="mt-2 rounded-2xl bg-gradient-primary p-3 text-primary-foreground shadow-glow">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <MapPin className="h-3.5 w-3.5" /> 6 carros próximos
              </div>
              <p className="mt-1 font-display text-xl font-bold">R$ 0,65/min</p>
              <p className="text-[11px] opacity-80">Fiat Mobi · 120m</p>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <MiniCard icon={<Car className="h-4 w-4" />} label="Alugar" />
              <MiniCard icon={<GraduationCap className="h-4 w-4" />} label="Cursos" />
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="relative px-5 pb-6 pt-3 shrink-0 flex flex-col gap-2.5">
          <Link
            to="/app"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow active:scale-[0.98] transition"
          >
            Abrir o app <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/60 px-6 py-3 font-semibold active:scale-[0.98] transition"
          >
            Criar conta
          </Link>
        </section>
      </div>
    </div>
  );
}

function MiniCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="rounded-xl bg-background/40 border border-border p-2.5">
      <div className="text-primary">{icon}</div>
      <p className="mt-1 text-xs font-semibold">{label}</p>
    </div>
  );
}
