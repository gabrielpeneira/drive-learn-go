import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Users, Car, GraduationCap, BarChart3, Pencil, Trash2, Plus, Search } from "lucide-react";
import { adminUsers, cars as carsData, courses as coursesData } from "@/data/mock";

export const Route = createFileRoute("/app/admin")({
  component: AdminScreen,
});

const tabs = [
  { id: "dash", label: "Visão", icon: BarChart3 },
  { id: "users", label: "Usuários", icon: Users },
  { id: "cars", label: "Carros", icon: Car },
  { id: "courses", label: "Cursos", icon: GraduationCap },
] as const;

type Tab = (typeof tabs)[number]["id"];

function AdminScreen() {
  const [tab, setTab] = useState<Tab>("dash");

  return (
    <div className="px-5 pt-10">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-bold text-primary uppercase tracking-wider">
          Admin
        </span>
        <h1 className="font-display text-2xl font-bold">Painel</h1>
      </div>
      <p className="text-sm text-muted-foreground">CRUD completo · DRV Operations</p>

      {/* Tabs */}
      <div className="mt-4 flex gap-1 rounded-2xl bg-card border border-border p-1">
        {tabs.map((t) => {
          const Icon = t.icon;
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-semibold transition ${
                active ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-5">
        {tab === "dash" && <Dashboard />}
        {tab === "users" && <UsersTable />}
        {tab === "cars" && <CarsTable />}
        {tab === "courses" && <CoursesTable />}
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <Kpi label="Corridas hoje" value="248" trend="+12%" />
        <Kpi label="Receita" value="R$ 4.2k" trend="+8%" />
        <Kpi label="Usuários ativos" value="1.2k" trend="+22%" />
        <Kpi label="Conclusões" value="83" trend="+5%" />
      </div>

      <div className="rounded-3xl border border-border bg-card p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
          Cursos mais acessados
        </p>
        <div className="mt-3 space-y-2.5">
          {coursesData.slice(0, 4).map((c, i) => (
            <div key={c.id} className="flex items-center gap-3">
              <span className="text-xs font-bold text-muted-foreground w-4">{i + 1}</span>
              <span className="text-2xl">{c.image}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{c.title}</p>
                <div className="mt-1 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-gradient-primary" style={{ width: `${90 - i * 18}%` }} />
                </div>
              </div>
              <p className="text-xs font-display font-bold">{(900 - i * 180)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-card p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
          Status da frota
        </p>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <FleetStat label="Disponíveis" count={carsData.filter((c) => c.status === "available").length} color="success" />
          <FleetStat label="Em uso" count={carsData.filter((c) => c.status === "in_use").length} color="warning" />
          <FleetStat label="Manutenção" count={carsData.filter((c) => c.status === "maintenance").length} color="destructive" />
        </div>
      </div>
    </div>
  );
}

function FleetStat({ label, count, color }: { label: string; count: number; color: "success" | "warning" | "destructive" }) {
  const cls = color === "success" ? "text-success" : color === "warning" ? "text-warning" : "text-destructive";
  return (
    <div className="rounded-2xl bg-background border border-border p-3 text-center">
      <p className={`font-display text-2xl font-bold ${cls}`}>{count}</p>
      <p className="text-[10px] text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

function Kpi({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-3xl border border-border bg-gradient-card p-4">
      <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
        {label}
      </p>
      <p className="mt-2 font-display text-2xl font-bold">{value}</p>
      <p className="text-[11px] text-success font-semibold mt-1">↑ {trend}</p>
    </div>
  );
}

function UsersTable() {
  return (
    <Crud title="Usuários" addLabel="Novo usuário">
      {adminUsers.map((u) => (
        <Row
          key={u.id}
          title={u.name}
          subtitle={u.email}
          right={
            <span className={`text-[10px] font-semibold ${u.status === "Ativo" ? "text-success" : "text-destructive"}`}>
              {u.status}
            </span>
          }
          tag={u.role}
        />
      ))}
    </Crud>
  );
}

function CarsTable() {
  return (
    <Crud title="Veículos" addLabel="Adicionar carro">
      {carsData.map((c) => (
        <Row
          key={c.id}
          title={c.model}
          subtitle={`${c.plate} · ${c.battery}% bateria`}
          tag={c.status === "available" ? "Livre" : c.status === "in_use" ? "Em uso" : "Manutenção"}
          right={<span className="text-xs font-display font-bold">R$ {c.pricePerMin.toFixed(2)}/min</span>}
        />
      ))}
    </Crud>
  );
}

function CoursesTable() {
  return (
    <Crud title="Cursos" addLabel="Criar curso">
      {coursesData.map((c) => (
        <Row
          key={c.id}
          title={c.title}
          subtitle={`${c.duration} · ${c.lessons} aulas`}
          tag={c.level}
          right={<span className="text-xs">★ {c.rating}</span>}
        />
      ))}
    </Crud>
  );
}

function Crud({ title, addLabel, children }: { title: string; addLabel: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 flex items-center gap-2 rounded-2xl bg-input border border-border px-3 py-2">
          <Search className="h-3.5 w-3.5 text-muted-foreground" />
          <input
            placeholder={`Buscar em ${title.toLowerCase()}...`}
            className="bg-transparent text-xs flex-1 outline-none placeholder:text-muted-foreground"
          />
        </div>
        <button className="inline-flex items-center gap-1 rounded-2xl bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow">
          <Plus className="h-3.5 w-3.5" /> {addLabel}
        </button>
      </div>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}

function Row({ title, subtitle, tag, right }: { title: string; subtitle: string; tag?: string; right?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-3 flex items-center gap-3">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold truncate">{title}</p>
          {tag && (
            <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          )}
        </div>
        <p className="text-[11px] text-muted-foreground truncate">{subtitle}</p>
      </div>
      {right}
      <button className="h-8 w-8 rounded-lg hover:bg-muted grid place-items-center">
        <Pencil className="h-3.5 w-3.5 text-muted-foreground" />
      </button>
      <button className="h-8 w-8 rounded-lg hover:bg-destructive/10 grid place-items-center">
        <Trash2 className="h-3.5 w-3.5 text-destructive" />
      </button>
    </div>
  );
}
