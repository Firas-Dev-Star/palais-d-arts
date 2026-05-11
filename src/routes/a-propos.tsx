import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Award, Heart, ArrowRight } from "lucide-react";
import velinaDay from "@/assets/portfolio/velina-day.jpg";
import velinaNight from "@/assets/portfolio/velina-night.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Kaboudi Faïçal, créateur d'enseignes en Tunisie" },
      { name: "description", content: "Diplômé de l'ISITCom Sousse, Kaboudi Faïçal conçoit et fabrique enseignes lumineuses, façades et articles décoratifs depuis plus de 10 ans à Monastir." },
      { property: "og:title", content: "À propos de Kaboudi Design" },
      { property: "og:description", content: "Rencontrez le créateur derrière Kaboudi Design — Monastir, Tunisie." },
    ],
  }),
  component: APropos,
});

function APropos() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-neon opacity-20 blur-3xl rounded-full" aria-hidden />
          <div className="relative grid grid-cols-2 gap-3">
            <img src={velinaDay} alt="Boutique Velina — habillage de façade jour, réalisation Kaboudi Design" loading="lazy" className="rounded-2xl shadow-soft w-full object-cover aspect-[3/4] translate-y-6" />
            <img src={velinaNight} alt="Boutique Velina — enseigne lumineuse de nuit, réalisation Kaboudi Design" loading="lazy" className="rounded-2xl shadow-neon w-full object-cover aspect-[3/4] -translate-y-2" />
          </div>
          <div className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Boutique Velina — Habillage & enseigne signature</div>
        </div>
        <div>
          <div className="text-sm text-primary font-semibold uppercase tracking-widest">À propos</div>
          <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold">Kaboudi <span className="text-neon glow-text">Faïçal</span></h1>
          <p className="mt-2 text-xl text-muted-foreground">Créateur, artisan & designer lumière.</p>
          <p className="mt-6 text-lg leading-relaxed">
            Passionné par la lumière, le design et l'artisanat, Faïçal a fondé son atelier à Monastir avec une obsession :
            faire en sorte que <strong>chaque enseigne raconte une histoire</strong> et serve réellement le commerce qu'elle représente.
          </p>
          <p className="mt-4 text-muted-foreground">
            Diplômé de l'ISITCom Sousse, il combine expertise technique et sensibilité artistique pour livrer
            des pièces uniques — de la petite enseigne de quartier aux façades de grandes surfaces.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: GraduationCap, t: "ISITCom Sousse", d: "Formation supérieure" },
              { icon: Award, t: "10+ ans", d: "D'expérience" },
              { icon: Heart, t: "100% sur mesure", d: "Chaque projet unique" },
            ].map((v, i) => (
              <div key={i} className="glass rounded-xl p-4 text-center">
                <v.icon className="mx-auto h-6 w-6 text-primary mb-2" />
                <div className="font-bold">{v.t}</div>
                <div className="text-xs text-muted-foreground">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Nos <span className="text-neon">valeurs</span>.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Qualité", d: "Matériaux premium, finitions soignées, durabilité dans le temps." },
            { t: "Créativité", d: "Chaque projet est traité comme une œuvre unique, pas un produit catalogue." },
            { t: "Proximité", d: "Un interlocuteur unique de A à Z, à l'écoute de vos besoins réels." },
          ].map((v) => (
            <div key={v.t} className="glass rounded-2xl p-7">
              <h3 className="text-xl font-bold text-neon">{v.t}</h3>
              <p className="mt-2 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-neon p-10 sm:p-14 text-center shadow-neon">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-background">Travaillons ensemble.</h2>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-semibold hover:scale-105 transition">
            Me contacter <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
