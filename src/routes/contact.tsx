import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Devis gratuit enseignes lumineuses Tunisie | Kaboudi Design" },
      { name: "description", content: "Contactez Kaboudi Design pour un devis gratuit : enseignes lumineuses, façades et déco sur mesure. WhatsApp +216 52 760 487, Monastir, Tunisie." },
      { property: "og:title", content: "Contact — Kaboudi Design" },
      { property: "og:description", content: "Devis gratuit sous 24h. WhatsApp & téléphone." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Bonjour, je suis ${data.get("name")} (${data.get("phone")}).\n\nProjet : ${data.get("project")}\n\n${data.get("message")}`;
    const url = `https://wa.me/21652760487?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSent(true);
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
        <div className="text-sm text-primary font-semibold uppercase tracking-widest">Contact</div>
        <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold">Parlons de votre <span className="text-neon glow-text">projet</span>.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Devis gratuit sous 24h. Réponse rapide via WhatsApp, téléphone ou email.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <a href="tel:+21652760487" className="flex items-start gap-4 glass rounded-2xl p-6 hover:border-primary/40 transition">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neon shadow-neon shrink-0"><Phone className="h-5 w-5 text-background" /></div>
            <div><div className="text-sm text-muted-foreground">Téléphone</div><div className="font-bold text-lg">+216 52 760 487</div></div>
          </a>
          <a href="https://wa.me/21652760487" target="_blank" rel="noopener" className="flex items-start gap-4 glass rounded-2xl p-6 hover:border-primary/40 transition">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neon shadow-neon shrink-0"><MessageCircle className="h-5 w-5 text-background" /></div>
            <div><div className="text-sm text-muted-foreground">WhatsApp</div><div className="font-bold text-lg">Discussion directe</div></div>
          </a>
          <a href="mailto:palais.darts@gmail.com" className="flex items-start gap-4 glass rounded-2xl p-6 hover:border-primary/40 transition">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neon shadow-neon shrink-0"><Mail className="h-5 w-5 text-background" /></div>
            <div><div className="text-sm text-muted-foreground">Email</div><div className="font-bold">palais.darts@gmail.com</div></div>
          </a>
          <div className="flex items-start gap-4 glass rounded-2xl p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neon shadow-neon shrink-0"><MapPin className="h-5 w-5 text-background" /></div>
            <div><div className="text-sm text-muted-foreground">Atelier</div><div className="font-bold">Av. Habib Bourguiba<br />Zaouiet Kontech, Monastir 5028</div></div>
          </div>
          <div className="flex items-start gap-4 glass rounded-2xl p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neon shadow-neon shrink-0"><Clock className="h-5 w-5 text-background" /></div>
            <div><div className="text-sm text-muted-foreground">Horaires</div><div className="font-bold">Toujours ouvert</div></div>
          </div>
          <a href="https://www.facebook.com/HFPUBetDesign" target="_blank" rel="noopener" className="flex items-center gap-3 glass rounded-2xl p-5 hover:border-primary/40 transition">
            <Facebook className="h-5 w-5 text-primary" />
            <span className="font-semibold">Suivez-nous sur Facebook</span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-3 glass rounded-3xl p-8 space-y-5">
          <h2 className="text-2xl font-bold">Demande de devis</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-semibold">Nom complet *</span>
              <input required name="name" className="mt-1 w-full rounded-lg bg-background/50 border border-border px-4 py-3 focus:border-primary focus:outline-none" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold">Téléphone *</span>
              <input required name="phone" type="tel" className="mt-1 w-full rounded-lg bg-background/50 border border-border px-4 py-3 focus:border-primary focus:outline-none" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm font-semibold">Type de projet *</span>
            <select required name="project" className="mt-1 w-full rounded-lg bg-background/50 border border-border px-4 py-3 focus:border-primary focus:outline-none">
              <option value="">Sélectionnez…</option>
              <option>Enseigne lumineuse LED</option>
              <option>Habillage de façade</option>
              <option>Lettres 3D / boîtier</option>
              <option>Totem publicitaire</option>
              <option>Découpe laser / déco</option>
              <option>Autre</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold">Décrivez votre projet *</span>
            <textarea required name="message" rows={5} className="mt-1 w-full rounded-lg bg-background/50 border border-border px-4 py-3 focus:border-primary focus:outline-none" placeholder="Dimensions, ville, contraintes, deadline…" />
          </label>
          <button type="submit" className="w-full rounded-full bg-neon px-6 py-4 font-bold text-background shadow-neon hover:scale-[1.02] transition">
            Envoyer via WhatsApp
          </button>
          {sent && <p className="text-sm text-primary text-center">Redirection WhatsApp ouverte. Si rien ne s'est passé, appelez directement le +216 52 760 487.</p>}
        </form>
      </section>
    </>
  );
}
