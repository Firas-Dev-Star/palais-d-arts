import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img src={logo} alt="Kaboudi Design — logo" width={40} height={40} className="h-10 w-10 object-contain drop-shadow-[0_0_12px_oklch(0.78_0.16_70/0.45)]" />
          <div className="hidden sm:block leading-tight">
            <div className="font-semibold tracking-tight text-base">Kaboudi <span className="text-neon">Design</span></div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Atelier · Monastir</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-primary" }}
              className="text-foreground/75 hover:text-primary transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+21652760487"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-neon px-5 py-2.5 text-sm font-semibold text-background shadow-neon hover:scale-[1.03] transition"
        >
          <Phone className="h-4 w-4" /> Devis gratuit
        </a>
      </div>
      <nav className="md:hidden flex justify-center gap-5 pb-3 text-xs">
        {NAV.map((n) => (
          <Link key={n.to} to={n.to} activeProps={{ className: "text-primary" }} className="text-foreground/70">
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-white/5 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Kaboudi Design" width={36} height={36} className="h-9 w-9 object-contain" />
            <div className="text-xl font-semibold">Kaboudi <span className="text-neon">Design</span></div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            Atelier de conception et fabrication d'enseignes lumineuses, habillage de façades et articles décoratifs sur mesure. Au service des marques tunisiennes depuis plus de 10 ans.
          </p>
          <a href="https://www.facebook.com/HFPUBetDesign" target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <Facebook className="h-4 w-4" /> <span>Facebook</span> <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
        <div className="md:col-span-4 text-sm space-y-3">
          <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Contact</h3>
          <a href="tel:+21652760487" className="flex items-center gap-3 hover:text-primary"><Phone className="h-4 w-4 shrink-0" /><span>+216 52 760 487</span></a>
          <a href="mailto:palais.darts@gmail.com" className="flex items-center gap-3 hover:text-primary"><Mail className="h-4 w-4 shrink-0" /><span>palais.darts@gmail.com</span></a>
          <div className="flex items-start gap-3 text-muted-foreground"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span>Av. Habib Bourguiba<br />Zaouiet Kontech, Monastir 5028</span></div>
        </div>
        <div className="md:col-span-3 text-sm space-y-2">
          <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Navigation</h3>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="block text-muted-foreground hover:text-primary">{n.label}</Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 py-6 px-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground max-w-7xl mx-auto">
        <span>© {new Date().getFullYear()} Kaboudi Design — Tous droits réservés.</span>
        <span className="opacity-80">
          Site web créé par{" "}
          <a href="https://firas-connect-hub.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary/90 hover:text-primary underline-offset-4 hover:underline font-medium">
            Firas
          </a>
        </span>
      </div>
    </footer>
  );
}
