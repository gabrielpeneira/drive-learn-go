import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Car, MapPin, Zap, Search, Filter, Battery } from "lucide-react";
import { cars, type Car as CarT } from "@/data/mock";

export const Route = createFileRoute("/app/map")({
  component: MapScreen,
});

function MapScreen() {
  const [selected, setSelected] = useState<CarT | null>(null);
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Map */}
      <div className="relative h-[60vh] overflow-hidden bg-gradient-hero">
        {/* faux streets */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="12" height="12" patternUnits="userSpaceOnUse">
              <path d="M 12 0 L 0 0 0 12" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
          <path d="M0 30 L100 35" stroke="currentColor" strokeWidth="1.2" className="text-primary/40" />
          <path d="M0 65 L100 60" stroke="currentColor" strokeWidth="1.2" className="text-primary/40" />
          <path d="M30 0 L35 100" stroke="currentColor" strokeWidth="1.2" className="text-primary/40" />
          <path d="M70 0 L65 100" stroke="currentColor" strokeWidth="1.2" className="text-primary/40" />
        </svg>

        {/* user location */}
        <div className="absolute" style={{ left: "48%", top: "48%" }}>
          <div className="relative">
            <div className="absolute inset-0 animate-pulse-ring h-4 w-4 rounded-full" />
            <div className="h-4 w-4 rounded-full bg-primary border-2 border-background shadow-glow" />
          </div>
        </div>

        {/* car pins */}
        {cars.map((car) => (
          <button
            key={car.id}
            onClick={() => setSelected(car)}
            className="absolute -translate-x-1/2 -translate-y-1/2 transition hover:scale-110"
            style={{ left: `${car.x}%`, top: `${car.y}%` }}
          >
            <div
              className={`h-10 w-10 rounded-2xl grid place-items-center border-2 shadow-elegant ${
                car.status === "available"
                  ? "bg-gradient-primary border-primary-foreground/30"
                  : car.status === "in_use"
                  ? "bg-warning/80 border-background"
                  : "bg-destructive/70 border-background"
              }`}
            >
              <Car className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
          </button>
        ))}

        {/* Top search */}
        <div className="absolute top-10 inset-x-5 flex gap-2">
          <div className="flex-1 flex items-center gap-2 rounded-2xl bg-card/90 backdrop-blur border border-border px-4 py-3 shadow-elegant">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Para onde você vai?"
              className="bg-transparent text-sm flex-1 outline-none placeholder:text-muted-foreground"
            />
          </div>
          <button className="h-12 w-12 rounded-2xl bg-card/90 backdrop-blur border border-border grid place-items-center">
            <Filter className="h-4 w-4 text-primary" />
          </button>
        </div>
      </div>

      {/* List bottom-sheet */}
      <div className="relative -mt-6 rounded-t-3xl bg-card border-t border-border px-5 pt-4">
        <div className="mx-auto h-1 w-10 rounded-full bg-muted mb-4" />
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-bold">
            {cars.filter((c) => c.status === "available").length} carros próximos
          </h2>
          <span className="text-xs text-muted-foreground">Ordenado por distância</span>
        </div>

        <div className="mt-3 space-y-2.5">
          {cars
            .slice()
            .sort((a, b) => a.distance - b.distance)
            .map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c)}
                className="w-full text-left flex items-center gap-3 rounded-2xl border border-border bg-background p-3 hover:border-primary transition"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-primary/20 grid place-items-center">
                  <Car className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{c.model}</p>
                  <p className="text-[11px] text-muted-foreground flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {c.distance}m
                    </span>
                    <span className="flex items-center gap-1">
                      <Battery className="h-3 w-3" />
                      {c.battery}%
                    </span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold text-sm">R$ {c.pricePerMin.toFixed(2)}</p>
                  <span
                    className={`text-[10px] font-semibold ${
                      c.status === "available"
                        ? "text-success"
                        : c.status === "in_use"
                        ? "text-warning"
                        : "text-destructive"
                    }`}
                  >
                    {c.status === "available" ? "Livre" : c.status === "in_use" ? "Em uso" : "Manutenção"}
                  </span>
                </div>
              </button>
            ))}
        </div>
      </div>

      {/* Selected sheet */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm flex items-end" onClick={() => setSelected(null)}>
          <div
            className="w-full max-w-md mx-auto rounded-t-3xl bg-card border-t border-border p-6 animate-in slide-in-from-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto h-1 w-10 rounded-full bg-muted mb-5" />
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
                <Car className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display text-lg font-bold">{selected.model}</p>
                <p className="text-xs text-muted-foreground">{selected.plate}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <Stat label="Bateria" value={`${selected.battery}%`} />
              <Stat label="Autonomia" value={`${selected.range}km`} />
              <Stat label="Distância" value={`${selected.distance}m`} />
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl bg-muted p-4">
              <div>
                <p className="text-xs text-muted-foreground">Preço</p>
                <p className="font-display text-xl font-bold">R$ {selected.pricePerMin.toFixed(2)}/min</p>
              </div>
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <button
              disabled={selected.status !== "available"}
              onClick={() => navigate({ to: "/app/trip" })}
              className="mt-5 w-full rounded-2xl bg-gradient-primary py-4 font-semibold text-primary-foreground shadow-glow disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] transition"
            >
              {selected.status === "available" ? "Desbloquear carro" : "Indisponível"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border p-3 text-center">
      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</p>
      <p className="mt-1 font-display font-bold">{value}</p>
    </div>
  );
}
