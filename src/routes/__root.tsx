import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, useRouter, HeadContent, Scripts, Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader, SiteFooter } from "@/components/SiteLayout";
import { useReveal } from "@/hooks/use-reveal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-neon glow-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">Cette page n'existe pas ou a été déplacée.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-neon px-5 py-2 text-sm font-semibold text-background shadow-neon">Retour à l'accueil</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Une erreur est survenue</h1>
        <p className="mt-2 text-sm text-muted-foreground">Veuillez réessayer.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full bg-neon px-5 py-2 text-sm font-semibold text-background shadow-neon">Réessayer</button>
      </div>
    </div>
  );
}

const SITE_URL = "https://kaboudi-design.lovable.app";
const SITE_TITLE = "Kaboudi Design — Enseignes lumineuses & habillage de façades en Tunisie";
const SITE_DESC = "Conception et fabrication d'enseignes lumineuses LED, habillage de façades ACM, lettres 3D, totems et articles décoratifs sur mesure à Monastir, Sousse et toute la Tunisie.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "keywords", content: "enseigne lumineuse Tunisie, enseigne LED Monastir, habillage façade ACM, lettres 3D, totem lumineux, signalétique Tunisie, néon, plexiglas, découpe laser, Kaboudi, Sousse, Monastir" },
      { name: "author", content: "Kaboudi Faïçal" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "French" },
      { name: "geo.region", content: "TN-12" },
      { name: "geo.placename", content: "Monastir" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_TN" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "Luminous Creations designs and fabricates custom illuminated signs and decorative items." },
      { property: "og:description", content: "Luminous Creations designs and fabricates custom illuminated signs and decorative items." },
      { name: "twitter:description", content: "Luminous Creations designs and fabricates custom illuminated signs and decorative items." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cd5b8e16-9e89-4e28-ba4e-e4e27917ed1c/id-preview-45f53ec2--36a6ac2b-5ff5-4837-ba3e-47304ea17fe8.lovable.app-1778336839809.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cd5b8e16-9e89-4e28-ba4e-e4e27917ed1c/id-preview-45f53ec2--36a6ac2b-5ff5-4837-ba3e-47304ea17fe8.lovable.app-1778336839809.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Kaboudi Design — HF Pub & Design",
          image: SITE_URL + "/og.jpg",
          telephone: "+216 52 760 487",
          email: "palais.darts@gmail.com",
          address: { "@type": "PostalAddress", streetAddress: "Avenue Habib Bourguiba, Zaouiet Kontech", addressLocality: "Monastir", postalCode: "5028", addressCountry: "TN" },
          url: SITE_URL,
          priceRange: "€€€",
          openingHours: "Mo-Su 00:00-23:59",
          sameAs: ["https://www.facebook.com/HFPUBetDesign"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useReveal();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen"><Outlet /></main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
