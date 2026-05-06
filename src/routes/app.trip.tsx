import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Pause, Play, Square, Zap, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/app/trip")({
  component: TripScreen,
});

function TripScreen() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [running]);

  const minutes = seconds / 60;
  const cost = minutes * 0.65;
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="px-5 pt-10">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          Corrida em andamento
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold">Fiat Mobi Elétrico</h1>
        <p className="text-sm text-muted-foreground">DRV-2401</p>
      </div>

      {/* Big timer */}
      <div className="mt-8 mx-auto w-56 h-56 rounded-full bg-gradient-primary shadow-glow grid place-items-center relative">
        <div className="absolute inset-3 rounded-full bg-background grid place-items-center">
          <div className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Tempo</p>
            <p className="font-display text-5xl font-bold tabular-nums text-gradient">
              {mm}:{ss}
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-3">
        <Card icon={<Zap />} label="Custo" value={`R$ ${cost.toFixed(2)}`} />
        <Card icon={<MapPin />} label="Distância" value={`${(minutes * 0.4).toFixed(1)}km`} />
        <Card icon={<Clock />} label="Bateria" value="84%" />
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => setRunning((r) => !r)}
          className="h-14 w-14 rounded-2xl bg-card border border-border grid place-items-center hover:border-primary transition"
        >
          {running ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <button
          onClick={() => navigate({ to: "/app/profile" })}
          className="flex-1 max-w-xs h-14 rounded-2xl bg-destructive text-destructive-foreground font-semibold inline-flex items-center justify-center gap-2 hover:scale-[1.01] transition"
        >
          <Square className="h-4 w-4" /> Encerrar corrida
        </button>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-6">
        Estacione em local permitido para finalizar
      </p>
    </div>
  );
}

function Card({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-3 text-center">
      <div className="mx-auto h-7 w-7 rounded-xl bg-primary/10 text-primary grid place-items-center [&>svg]:h-3.5 [&>svg]:w-3.5">
        {icon}
      </div>
      <p className="mt-2 text-[10px] text-muted-foreground uppercase tracking-wider">{label}</p>
      <p className="font-display font-bold text-sm">{value}</p>
    </div>
  );
}
