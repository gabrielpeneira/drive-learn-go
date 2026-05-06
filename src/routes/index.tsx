import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, GraduationCap, ArrowRight, Zap, MapPin, Shield } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen w-full bg-black flex items-start justify-center">
      <div className="relative w-full max-w-md min-h-screen bg-gradient-hero text-foreground overflow-hidden">
        {/* Glow accents */}
        <div className="pointer-events-none absolute -top-32 -right-24 h-[280px] w-[280px] rounded-full bg-primary/30 blur-[100px]" />
        <div className="pointer-events-none absolute top-1/2 -left-20 h-[260px] w-[260px] rounded-full bg-accent/20 blur-[100px]" />

        {/* Header */}
        <header className="relative flex items-center justify-between px-5 pt-6">
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
        <section className="relative px-5 pt-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            2 em 1 · Mobilidade & Educação
          </span>
          <h1 className="mt-4 font-display text-[2.5rem] leading-[1.05] font-bold tracking-tight">
            Alugue. Aprenda. <span className="text-gradient">Dirija melhor.</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Carros elétricos por minuto e cursos de direção que rendem desconto a cada conquista.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/app"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow active:scale-[0.98] transition"
            >
              Abrir o app <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/60 px-6 py-3.5 font-semibold active:scale-[0.98] transition"
            >
              Criar conta
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3">
            <Stat value="2.4k" label="Carros" />
            <Stat value="38" label="Cursos" />
            <Stat value="4.9★" label="Nota" />
          </div>
        </section>

        {/* Phone preview card */}
        <section className="relative px-5 mt-8">
          <div className="rounded-3xl border border-border bg-card/70 backdrop-blur p-4 shadow-elegant">
            <p className="text-xs text-muted-foreground">Olá, Marina</p>
            <h3 className="font-display text-lg font-bold">Pronta para dirigir?</h3>
            <div className="mt-3 rounded-2xl bg-gradient-primary p-4 text-primary-foreground shadow-glow">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <MapPin className="h-3.5 w-3.5" /> 6 carros próximos
              </div>
              <p className="mt-1.5 font-display text-2xl font-bold">R$ 0,65/min</p>
              <p className="text-xs opacity-80">Fiat Mobi · 120m</p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <MiniCard icon={<Car className="h-4 w-4" />} label="Alugar" />
              <MiniCard icon={<GraduationCap className="h-4 w-4" />} label="Cursos" />
            </div>
            <div className="mt-3 rounded-2xl border border-border bg-background/40 p-3">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Próxima recompensa
              </p>
              <p className="text-sm font-semibold mt-1">15% off ao concluir Direção Defensiva</p>
              <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative px-5 mt-8 grid gap-3">
          <Feature
            icon={<Car />}
            title="Aluguel por minuto"
            desc="Encontre, desbloqueie e dirija. Sem burocracia."
          />
          <Feature
            icon={<GraduationCap />}
            title="Cursos integrados"
            desc="Conclua módulos e ganhe descontos."
          />
          <Feature
            icon={<Shield />}
            title="Reputação DRV"
            desc="Aprenda mais, pague menos."
          />
        </section>

        <footer className="relative mt-10 px-5 pb-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© 2026 DRV Mobility</p>
          <Link to="/app" className="mt-2 inline-block text-sm text-primary font-semibold">
            Experimentar agora →
          </Link>
        </footer>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/40 px-3 py-2.5">
      <p className="font-display text-lg font-bold text-gradient leading-tight">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}

function MiniCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="rounded-xl bg-background/40 border border-border p-3">
      <div className="text-primary">{icon}</div>
      <p className="mt-1 text-xs font-semibold">{label}</p>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border bg-gradient-card p-4 flex items-start gap-3">
      <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 grid place-items-center text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-base font-bold">{title}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
