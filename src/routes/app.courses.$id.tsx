import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Star, Clock, Play, CheckCircle2, Award } from "lucide-react";
import { courses } from "@/data/mock";

export const Route = createFileRoute("/app/courses/$id")({
  component: CourseDetail,
});

function CourseDetail() {
  const { id } = useParams({ from: "/app/courses/$id" });
  const course = courses.find((c) => c.id === id) ?? courses[0];

  const lessons = Array.from({ length: course.lessons }).map((_, i) => ({
    title: `Aula ${i + 1} · ${course.category} ${i + 1}`,
    done: i < 3,
    duration: `${10 + i}min`,
  }));

  return (
    <div className="pb-10">
      {/* Hero */}
      <div className="relative h-56 bg-gradient-primary p-5 flex items-end">
        <Link
          to="/app/courses"
          className="absolute top-10 left-5 h-10 w-10 rounded-2xl bg-background/30 backdrop-blur grid place-items-center text-primary-foreground"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="absolute top-12 right-5 text-7xl">{course.image}</div>
        <div className="text-primary-foreground">
          <span className="text-[10px] uppercase tracking-wider opacity-80 font-semibold">
            {course.category}
          </span>
          <h1 className="font-display text-2xl font-bold leading-tight max-w-[14rem]">
            {course.title}
          </h1>
        </div>
      </div>

      <div className="px-5 mt-5">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" /> {course.rating}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {course.duration}
          </span>
          <span>{course.lessons} aulas</span>
          <span className="text-primary font-semibold">{course.level}</span>
        </div>

        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          {course.description}
        </p>

        {/* Benefit */}
        <div className="mt-5 rounded-3xl bg-gradient-card border border-primary/30 p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
            <Award className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <p className="font-display font-bold text-sm">Recompensa ao concluir</p>
            <p className="text-xs text-primary font-semibold">🎁 {course.benefit}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold">Progresso</p>
            <p className="text-xs text-muted-foreground">3 de {course.lessons} aulas</p>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div className="h-full bg-gradient-primary" style={{ width: `${(3 / course.lessons) * 100}%` }} />
          </div>
        </div>

        {/* Lessons */}
        <div className="mt-6 space-y-2">
          <h3 className="font-display text-lg font-bold mb-2">Conteúdo</h3>
          {lessons.map((l, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3"
            >
              <div className={`h-9 w-9 rounded-xl grid place-items-center ${l.done ? "bg-success/15 text-success" : "bg-primary/10 text-primary"}`}>
                {l.done ? <CheckCircle2 className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{l.title}</p>
                <p className="text-[11px] text-muted-foreground">{l.duration}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 w-full rounded-2xl bg-gradient-primary py-4 font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition">
          Continuar curso
        </button>
      </div>
    </div>
  );
}
