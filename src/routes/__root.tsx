import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O caminho que você procura não existe.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "DRV — Aluguel & Cursos de Direção" },
      { name: "description", content: "Alugue carros elétricos por minuto e aprenda a dirigir melhor. Tudo em um app." },
      { name: "theme-color", content: "#0d1b2a" },
      { property: "og:title", content: "DRV — Aluguel & Cursos de Direção" },
      { name: "twitter:title", content: "DRV — Aluguel & Cursos de Direção" },
      { property: "og:description", content: "Alugue carros elétricos por minuto e aprenda a dirigir melhor. Tudo em um app." },
      { name: "twitter:description", content: "Alugue carros elétricos por minuto e aprenda a dirigir melhor. Tudo em um app." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/34b21757-81af-49af-91b7-35b9816abf62/id-preview-4da1f6e7--d1a78e5d-2e9f-4394-b9c0-f575c5367417.lovable.app-1778084810117.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/34b21757-81af-49af-91b7-35b9816abf62/id-preview-4da1f6e7--d1a78e5d-2e9f-4394-b9c0-f575c5367417.lovable.app-1778084810117.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
