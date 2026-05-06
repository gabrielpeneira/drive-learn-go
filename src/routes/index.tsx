import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, GraduationCap, ArrowRight, Zap, MapPin, Shield } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-20">
          <header className="flex items-center justify-between">
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

          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                2 em 1 · Mobilidade & Educação
              </span>
              <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
                Alugue. Aprenda. <span className="text-gradient">Dirija melhor.</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-md">
                Carros elétricos compartilhados por minuto, com cursos de direção integrados que te dão
                desconto a cada conquista.
              </p>
              <div className="mt-8 flex gap-3">
                <Link
                  to="/app"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition"
                >
                  Abrir o app <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card/60 px-6 py-3.5 font-semibold hover:bg-card transition"
                >
                  Criar conta
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                <Stat value="2.4k" label="Carros ativos" />
                <Stat value="38" label="Cursos" />
                <Stat value="4.9★" label="Avaliação" />
              </div>
            </div>

            {/* Phone mockup */}
            <div className="relative mx-auto">
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-25" />
              <div className="relative w-[280px] h-[560px] rounded-[3rem] bg-card border border-border shadow-elegant p-3">
                <div className="h-full w-full rounded-[2.4rem] bg-gradient-hero overflow-hidden relative">
                  <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                    <div className="mt-2 h-4 w-24 rounded-full bg-background" />
                  </div>
                  <div className="pt-10 px-5">
                    <p className="text-xs text-muted-foreground">Olá, Marina</p>
                    <h3 className="font-display text-xl font-bold">Pronta para dirigir?</h3>
                    <div className="mt-4 rounded-2xl bg-gradient-primary p-4 text-primary-foreground shadow-glow">
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <MapPin className="h-3.5 w-3.5" /> 6 carros próximos
                      </div>
                      <p className="mt-2 font-display text-2xl font-bold">R$ 0,65/min</p>
                      <p className="text-xs opacity-80">Fiat Mobi · 120m</p>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <MiniCard icon={<Car className="h-4 w-4" />} label="Alugar" />
                      <MiniCard icon={<GraduationCap className="h-4 w-4" />} label="Cursos" />
                    </div>
                    <div className="mt-3 rounded-2xl border border-border bg-card/60 p-3">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Próxima recompensa
                      </p>
                      <p className="text-sm font-semibold mt-1">15% off ao concluir Direção Defensiva</p>
                      <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-2/3 bg-gradient-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-3 gap-5">
        <Feature
          icon={<Car />}
          title="Aluguel por minuto"
          desc="Encontre, desbloqueie e dirija. Sem burocracia, sem filas."
        />
        <Feature
          icon={<GraduationCap />}
          title="Cursos integrados"
          desc="Direção defensiva, legislação, EV. Conclua e ganhe descontos."
        />
        <Feature
          icon={<Shield />}
          title="Reputação DRV"
          desc="Quanto mais você aprende, melhores tarifas e benefícios."
        />
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
          <p>© 2026 DRV Mobility. Mobilidade urbana inteligente.</p>
          <Link to="/app" className="text-primary font-medium">
            Experimentar agora →
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold text-gradient">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function MiniCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="rounded-xl bg-card/70 border border-border p-3">
      <div className="text-primary">{icon}</div>
      <p className="mt-1 text-xs font-semibold">{label}</p>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-border bg-gradient-card p-6 hover:shadow-glow transition">
      <div className="h-11 w-11 rounded-2xl bg-primary/10 grid place-items-center text-primary">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
