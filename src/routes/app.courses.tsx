import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Star, Clock, Award } from "lucide-react";
import { courses } from "@/data/mock";

export const Route = createFileRoute("/app/courses")({
  component: CoursesScreen,
});

const cats = ["Todos", "Defensiva", "Teoria", "Prática", "EV", "Avançado"];

function CoursesScreen() {
  const [cat, setCat] = useState("Todos");
  const list = cat === "Todos" ? courses : courses.filter((c) => c.category === cat);

  return (
    <div className="px-5 pt-10">
      <h1 className="font-display text-2xl font-bold">Cursos</h1>
      <p className="text-sm text-muted-foreground">Aprenda e ganhe descontos.</p>

      {/* Search */}
      <div className="mt-4 flex items-center gap-2 rounded-2xl bg-input border border-border px-4 py-3">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          placeholder="Buscar curso, professor..."
          className="bg-transparent text-sm flex-1 outline-none placeholder:text-muted-foreground"
        />
      </div>

      {/* Categories */}
      <div className="mt-4 flex gap-2 overflow-x-auto -mx-5 px-5 pb-2 scrollbar-hide">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              cat === c
                ? "bg-gradient-primary text-primary-foreground shadow-glow"
                : "bg-card border border-border text-muted-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Featured */}
      {cat === "Todos" && (
        <Link
          to="/app/courses/$id"
          params={{ id: courses[0].id }}
          className="block mt-5 rounded-3xl bg-gradient-primary p-5 text-primary-foreground shadow-glow hover:scale-[1.01] transition"
        >
          <div className="flex items-center gap-2 text-xs font-semibold opacity-80">
            <Award className="h-3.5 w-3.5" /> Em destaque
          </div>
          <p className="mt-3 font-display text-xl font-bold leading-tight">
            {courses[0].title}
          </p>
          <p className="mt-1 text-xs opacity-80">{courses[0].description}</p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-background/20 px-3 py-1 text-xs font-semibold">
            🎁 {courses[0].benefit}
          </div>
        </Link>
      )}

      {/* Grid */}
      <div className="mt-5 space-y-3">
        {list.map((c) => (
          <Link
            key={c.id}
            to="/app/courses/$id"
            params={{ id: c.id }}
            className="flex gap-3 rounded-3xl border border-border bg-card p-4 hover:border-primary transition"
          >
            <div className="h-16 w-16 rounded-2xl bg-gradient-primary/15 grid place-items-center text-3xl">
              {c.image}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">
                  {c.level}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Star className="h-3 w-3 fill-primary text-primary" /> {c.rating}
                </span>
              </div>
              <p className="mt-1 font-display font-bold text-sm leading-tight truncate">
                {c.title}
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {c.duration}
                </span>
                <span>{c.lessons} aulas</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
