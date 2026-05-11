import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Portfolio enseignes & façades | Kaboudi Design" },
      { name: "description", content: "Portfolio complet : enseignes lumineuses, lettres 3D, habillage de façades, totems et créations sur mesure réalisés en Tunisie par Kaboudi Design." },
      { property: "og:title", content: "Portfolio — Kaboudi Design Tunisie" },
      { property: "og:description", content: "Découvrez nos enseignes et habillages réalisés en Tunisie." },
    ],
  }),
  component: Realisations,
});

function Realisations() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
        <div className="text-sm text-primary font-semibold uppercase tracking-widest">Portfolio</div>
        <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold">Nos <span className="text-neon glow-text">réalisations</span>.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Une sélection de projets livrés à travers la Tunisie : commerces, restaurants, salons et espaces professionnels.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group glass rounded-2xl overflow-hidden hover:border-primary/40 transition">
              <div className="relative overflow-hidden">
                <img src={p.src} alt={p.title + " — réalisation Kaboudi Design"} loading="lazy" className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-5">
                <div className="text-xs text-primary uppercase tracking-wider font-semibold">{p.category}</div>
                <h2 className="mt-1 font-bold text-lg">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-neon p-10 sm:p-14 text-center shadow-neon">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-background">Votre projet sera le prochain.</h2>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-semibold hover:scale-105 transition">
            Discutons-en <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
