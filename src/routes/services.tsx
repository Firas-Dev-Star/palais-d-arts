import { createFileRoute, Link } from "@tanstack/react-router";
import { Lightbulb, Layers, Sparkles, Scissors, Building2, Palette, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Enseignes LED, façades & déco sur mesure | Kaboudi Design" },
      { name: "description", content: "Découvrez nos services : enseignes lumineuses LED, lettres 3D boîtier, habillage de façades ACM, totems publicitaires, découpe laser et articles décoratifs en Tunisie." },
      { property: "og:title", content: "Services — Kaboudi Design Tunisie" },
      { property: "og:description", content: "Enseignes lumineuses, habillage façades, déco sur mesure." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  { icon: Lightbulb, title: "Enseignes lumineuses LED", desc: "Lettres boîtier rétro-éclairées, néon flex, caissons lumineux. Visibilité maximale 24h/24, basse consommation, durée de vie longue." },
  { icon: Layers, title: "Habillage de façades", desc: "Revêtement composite alu (ACM), panneaux décoratifs, modernisation complète de votre devanture commerciale." },
  { icon: Building2, title: "Totems & enseignes drapeau", desc: "Totems publicitaires lumineux, enseignes drapeau double-face pour une visibilité depuis les deux côtés de la rue." },
  { icon: Scissors, title: "Découpe laser bois & plexi", desc: "Découpe précise au laser : logos, lettrages, motifs arabesques, signalétique intérieure." },
  { icon: Palette, title: "Création graphique & logo", desc: "Conception de logo, identité visuelle, déclinaison sur tous supports — du fichier au produit fini." },
  { icon: Sparkles, title: "Articles décoratifs sur mesure", desc: "Boîtes en bois sculptées, panneaux décoratifs, objets cadeaux personnalisés et pièces uniques." },
];

const PROCESS = [
  { n: "01", t: "Échange & brief", d: "On comprend votre commerce, votre vision, vos contraintes." },
  { n: "02", t: "Visite & relevé", d: "Mesures précises sur place, étude de la façade et de l'éclairage." },
  { n: "03", t: "Maquette 3D", d: "Présentation de visuels réalistes pour valider le rendu final." },
  { n: "04", t: "Fabrication atelier", d: "Production dans notre atelier avec matériaux premium." },
  { n: "05", t: "Pose & garantie", d: "Installation soignée par notre équipe + garantie sur ouvrage." },
];

function Services() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
        <div className="text-sm text-primary font-semibold uppercase tracking-widest">Nos services</div>
        <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold">Tout pour <span className="text-neon glow-text">faire briller</span><br />votre enseigne.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          De la conception graphique à la pose finale, nous maîtrisons toute la chaîne pour des enseignes durables et impactantes.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <div key={i} className="glass rounded-2xl p-7 hover:border-primary/40 transition">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neon shadow-neon mb-5">
              <s.icon className="h-6 w-6 text-background" />
            </div>
            <h2 className="text-xl font-bold">{s.title}</h2>
            <p className="mt-2 text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm text-primary font-semibold uppercase tracking-widest">Notre méthode</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Un processus en 5 étapes.</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {PROCESS.map((p) => (
            <div key={p.n} className="glass rounded-2xl p-6 relative">
              <div className="text-4xl font-black text-neon">{p.n}</div>
              <h3 className="mt-3 font-bold">{p.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-neon p-10 sm:p-14 text-center shadow-neon">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-background">Un projet en tête ?</h2>
          <p className="mt-3 text-background/80 max-w-xl mx-auto">Parlons-en. Devis gratuit, sans engagement.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-semibold hover:scale-105 transition">
            Démarrer mon projet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
