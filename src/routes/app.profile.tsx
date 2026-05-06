import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Settings, LogOut, Car, GraduationCap, Gift, ChevronRight } from "lucide-react";
import { trips } from "@/data/mock";

export const Route = createFileRoute("/app/profile")({
  component: ProfileScreen,
});

function ProfileScreen() {
  return (
    <div className="px-5 pt-10 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">Perfil</h1>
        <button className="h-10 w-10 rounded-2xl border border-border grid place-items-center">
          <Settings className="h-4 w-4" />
        </button>
      </div>

      {/* Card */}
      <div className="mt-5 rounded-3xl bg-gradient-primary p-5 text-primary-foreground shadow-glow">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-3xl bg-background/20 backdrop-blur grid place-items-center font-display font-bold text-2xl">
            M
          </div>
          <div className="flex-1">
            <p className="font-display text-xl font-bold">Marina Souza</p>
            <p className="text-xs opacity-80">marina@drv.app</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider opacity-80">Nível</p>
            <p className="font-display text-xl font-bold">3</p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          <Mini value="820" label="Pontos" />
          <Mini value="23" label="Corridas" />
          <Mini value="4" label="Cursos" />
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-5 rounded-3xl border border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <Gift className="h-4 w-4 text-primary" />
          <h2 className="font-display font-bold">Benefícios ativos</h2>
        </div>
        <div className="mt-3 space-y-2">
          <Benefit label="15% off em corridas" sub="Direção Defensiva concluída" />
          <Benefit label="1ª corrida grátis do mês" sub="Curso de EV concluído" />
        </div>
      </div>

      {/* History */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-display font-bold">Histórico de corridas</h2>
          <span className="text-xs text-muted-foreground">Últimos 30 dias</span>
        </div>
        <div className="space-y-2">
          {trips.map((t) => (
            <div key={t.id} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <Car className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{t.carModel}</p>
                <p className="text-[11px] text-muted-foreground">{t.date} · {t.duration}</p>
              </div>
              <p className="font-display font-bold text-sm">R$ {t.cost.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      <Link to="/app/courses" className="mt-5 flex items-center justify-between rounded-2xl bg-gradient-card border border-border p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <p className="font-display font-bold text-sm">Meus cursos</p>
            <p className="text-[11px] text-muted-foreground">3 em andamento</p>
          </div>
        </div>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </Link>

      <Link to="/" className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-destructive/30 text-destructive py-3 text-sm font-semibold">
        <LogOut className="h-4 w-4" /> Sair
      </Link>
    </div>
  );
}

function Mini({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-background/15 backdrop-blur py-2">
      <p className="font-display font-bold">{value}</p>
      <p className="text-[10px] opacity-80">{label}</p>
    </div>
  );
}

function Benefit({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-background p-3">
      <Award className="h-4 w-4 text-primary" />
      <div className="flex-1">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-[11px] text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}
