import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lightbulb, Layers, Sparkles, Phone, Star, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaboudi Design — Enseignes lumineuses LED en Tunisie | Monastir" },
      { name: "description", content: "Créateur d'enseignes lumineuses LED, lettres 3D, habillage de façades ACM et articles décoratifs sur mesure. Basé à Monastir, intervention dans toute la Tunisie." },
      { property: "og:title", content: "Kaboudi Design — Enseignes lumineuses LED en Tunisie" },
      { property: "og:description", content: "Créateur d'enseignes lumineuses, façades et décor sur mesure en Tunisie." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-neon opacity-[0.06] blur-3xl" aria-hidden />
        <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-24 pb-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/40 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Atelier de design — Monastir
            </div>
            <h1 className="mt-6 text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tight animate-fade-up delay-100">
              L'art de <span className="italic text-neon glow-text">faire briller</span><br />
              <span className="text-foreground/90">votre marque.</span>
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up delay-200">
              Conception et fabrication d'<strong className="text-foreground font-medium">enseignes lumineuses</strong>, lettres 3D,
              habillage de façades et articles décoratifs — entièrement sur mesure, pensés pour durer.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up delay-300">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 font-semibold text-background shadow-neon hover:scale-[1.03] transition animate-glow-pulse">
                Démarrer un projet <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/realisations" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-medium hover:border-primary hover:text-primary transition">
                Voir le portfolio <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md animate-fade-up delay-500">
              {[
                { n: "10+", l: "années" },
                { n: "500+", l: "enseignes" },
                { n: "100%", l: "sur mesure" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl sm:text-4xl font-semibold text-neon">{s.n}</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative animate-slide-in-right delay-200">
            <div className="absolute -inset-8 bg-neon opacity-25 blur-[80px] rounded-full" aria-hidden />
            <div className="relative grain rounded-3xl overflow-hidden shadow-neon">
              <img src={hero} alt="Enseigne lumineuse de luxe à Monastir — création Kaboudi Design" className="w-full object-cover aspect-[4/5]" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl px-5 py-4 shadow-soft hidden sm:block float">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-neon border-2 border-background" />
                  ))}
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Note moyenne</div>
                  <div className="font-semibold text-sm flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-primary text-primary" /> 4.9 / 5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="text-sm text-primary font-semibold uppercase tracking-widest">Nos services</div>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold">Une expertise complète,<br />de l'idée à l'installation.</h2>
          </div>
          <Link to="/services" className="text-primary hover:underline inline-flex items-center gap-1">Tout voir <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Lightbulb, title: "Enseignes lumineuses LED", desc: "Lettres boîtier, néon flex, rétro-éclairage : visibilité jour & nuit garantie." },
            { icon: Layers, title: "Habillage de façades", desc: "Panneaux ACM, composite alu, totems publicitaires durables et élégants." },
            { icon: Sparkles, title: "Décoration sur mesure", desc: "Découpe laser bois & plexi, articles décoratifs personnalisés." },
          ].map((s, i) => (
            <div key={i} className="reveal hover-lift glass rounded-2xl p-7 hover:border-primary/40 transition group" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neon shadow-neon mb-5 group-hover:scale-110 transition-transform duration-500">
                <s.icon className="h-6 w-6 text-background" />
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="text-sm text-primary font-semibold uppercase tracking-widest">Réalisations</div>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold">Quelques projets récents.</h2>
          </div>
          <Link to="/realisations" className="text-primary hover:underline inline-flex items-center gap-1">Tout le portfolio <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <article key={p.title} className="reveal group relative overflow-hidden rounded-2xl glass hover-lift" style={{ transitionDelay: `${i * 70}ms` }}>
              <img src={p.src} alt={p.title + " — réalisation Kaboudi Design"} loading="lazy" className="aspect-[4/3] w-full object-cover group-hover:scale-110 transition duration-[900ms] ease-out" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-xs text-primary uppercase tracking-wider">{p.category}</div>
                <div className="font-bold text-lg">{p.title}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VIDÉOS — L'atelier en mouvement */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-12 reveal">
          <div className="text-sm text-primary font-semibold uppercase tracking-widest">En vidéo</div>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold">L'atelier <span className="text-neon glow-text">en mouvement</span>.</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Quelques instants capturés à l'atelier — la lumière, la matière, le geste.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {["/videos/showcase-1.mp4", "/videos/showcase-2.mp4"].map((src, i) => (
            <div key={src} className="reveal hover-lift relative overflow-hidden rounded-2xl glass shadow-neon" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="absolute -inset-6 bg-neon opacity-20 blur-3xl rounded-full pointer-events-none" aria-hidden />
              <video
                src={src}
                className="relative w-full aspect-[9/16] sm:aspect-video object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="reveal glass rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-neon opacity-10 blur-3xl" aria-hidden />
          <div className="flex justify-center gap-1 text-primary mb-4 relative">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
          </div>
          <p className="text-2xl sm:text-3xl font-medium relative shimmer-text">
            « Un travail méticuleux, un rendu professionnel et une enseigne qui attire vraiment l'œil. Notre commerce s'est transformé. »
          </p>
          <div className="mt-6 text-sm text-muted-foreground relative">— Client commerçant, Monastir</div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-neon p-10 sm:p-16 text-center shadow-neon">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-background">Prêt à illuminer votre commerce ?</h2>
          <p className="mt-4 text-background/80 text-lg max-w-2xl mx-auto">
            Devis gratuit sous 24h. Étude personnalisée selon votre façade, votre budget et votre identité.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="tel:+21652760487" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 font-semibold hover:scale-105 transition">
              <Phone className="h-4 w-4" /> +216 52 760 487
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-background text-background px-6 py-3 font-semibold hover:bg-background hover:text-foreground transition">
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
