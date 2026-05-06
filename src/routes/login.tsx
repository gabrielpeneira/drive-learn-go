import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Zap, Mail, Lock, User, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black flex items-start justify-center">
      <div className="relative w-full max-w-md min-h-screen bg-gradient-hero px-5 py-8 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[280px] w-[280px] rounded-full bg-primary/25 blur-[100px]" />

        <div className="relative w-full">
        <Link to="/" className="flex items-center gap-2 justify-center mb-8">
          <div className="h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
            <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-2xl">DRV</span>
        </Link>

        <div className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-7 shadow-elegant">
          <h1 className="font-display text-2xl font-bold">
            {mode === "login" ? "Bem-vindo de volta" : "Crie sua conta"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "login" ? "Entre para dirigir e aprender." : "Em 30s você está na rua."}
          </p>

          <div className="mt-6 inline-flex p-1 rounded-2xl bg-muted">
            <button
              onClick={() => setMode("login")}
              className={`px-4 py-1.5 text-sm font-medium rounded-xl transition ${mode === "login" ? "bg-card shadow text-foreground" : "text-muted-foreground"}`}
            >
              Entrar
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`px-4 py-1.5 text-sm font-medium rounded-xl transition ${mode === "signup" ? "bg-card shadow text-foreground" : "text-muted-foreground"}`}
            >
              Cadastrar
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/app" });
            }}
            className="mt-6 space-y-3"
          >
            {mode === "signup" && (
              <Field icon={<User />} placeholder="Nome completo" />
            )}
            <Field icon={<Mail />} placeholder="Email" type="email" />
            {mode === "signup" && <Field icon={<User />} placeholder="CPF" />}
            <Field icon={<Lock />} placeholder="Senha" type="password" />

            <button
              type="submit"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-primary py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition"
            >
              {mode === "login" ? "Entrar" : "Criar conta"}
              <ArrowRight className="h-4 w-4" />
            </button>

            {mode === "login" && (
              <button
                type="button"
                className="w-full text-xs text-muted-foreground hover:text-primary"
              >
                Esqueci minha senha
              </button>
            )}
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Modo demonstração · qualquer dado funciona
        </p>
      </div>
      </div>
    </div>
  );
}

function Field({
  icon,
  ...props
}: { icon: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground [&>svg]:h-4 [&>svg]:w-4">
        {icon}
      </span>
      <input
        {...props}
        className="w-full rounded-2xl bg-input border border-border pl-10 pr-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
