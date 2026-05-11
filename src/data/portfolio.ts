import founder from "@/assets/portfolio/founder.jpg";
import neonGlasses from "@/assets/portfolio/neon-glasses.jpg";
import coiffeur from "@/assets/portfolio/coiffeur-maestro.jpg";
import cia from "@/assets/portfolio/cia-informatica.jpg";
import kingstore from "@/assets/portfolio/kingstore.jpg";
import boite from "@/assets/portfolio/boite-decorative.jpg";
import revemac from "@/assets/portfolio/revemac.jpg";
import winox from "@/assets/portfolio/winox.jpg";
import psFin from "@/assets/portfolio/ps-fin-traiteur.jpg";
import sulee from "@/assets/portfolio/sulee-machine.jpg";

import technasium from "@/assets/portfolio/technasium-pen.jpg";
import frozenFood from "@/assets/portfolio/frozen-food.jpg";
import porteBouteille from "@/assets/portfolio/porte-bouteille.jpg";
import bitcoinNeon from "@/assets/portfolio/bitcoin-neon.jpg";
import alAsli from "@/assets/portfolio/al-asli-parfums.jpg";
import gelatoStellina from "@/assets/portfolio/gelato-stellina.jpg";

export { founder };

export const projects = [
  { src: neonGlasses, title: "Sculptures LED — Lunettes géantes", category: "Néon LED", desc: "Pièces décoratives lumineuses pour événements et vitrines." },
  { src: gelatoStellina, title: "Gelato Stellina", category: "Habillage façade", desc: "Auvent ondulé bleu marine et enseigne lumineuse pour glacier." },
  { src: alAsli, title: "Al Asli Parfums", category: "Devanture parfumerie", desc: "Habillage noir laqué avec lettres relief or et arabesques découpées." },
  { src: frozenFood, title: "Frozen Food — Néon LED", category: "Lettres néon flex", desc: "Lettres bleu glacé en néon flex haute brillance pour commerce alimentaire." },
  { src: bitcoinNeon, title: "Néon Bitcoin", category: "Décoration néon", desc: "Pièce décorative LED jaune sur acrylique transparent — sur mesure." },
  { src: coiffeur, title: "Coiffeur Maestro", category: "Lettrage 3D miroir", desc: "Lettrage en plexi miroir et icônes découpées au laser." },
  { src: cia, title: "Cia da Informática", category: "Habillage de façade", desc: "Façade ACM rouge & gris avec logo 3D monumental." },
  { src: kingstore, title: "Kingstore Sahbi", category: "Enseigne ACM lumineuse", desc: "Enseigne brillante avec logo imprimé haute définition." },
  { src: porteBouteille, title: "Porte-bouteille festif", category: "Découpe laser bois", desc: "Coffret cadeau en bois finement ciselé pour bouteille." },
  { src: boite, title: "Boîte décorative bois", category: "Découpe laser", desc: "Article décoratif en bois découpé motifs arabesques." },
  { src: technasium, title: "Étui à stylo gravé", category: "Cadeau d'entreprise", desc: "Étui en bois personnalisé avec gravure laser — objet promotionnel." },
  { src: revemac, title: "Revemac Tunisie", category: "Enseigne lumineuse 3D", desc: "Lettres boîtier rétro-éclairées blanc & rouge." },
  { src: winox, title: "Winox / Hommer", category: "Habillage commerce", desc: "Façade ACM gris anthracite avec logo bombé." },
  { src: psFin, title: "PS Fin Traiteur", category: "Lettres rétro-éclairées", desc: "Lettres inox brossées avec halo lumineux chaud." },
  { src: sulee, title: "Su Lee Machine", category: "Totem lumineux", desc: "Totem multi-marques rétro-éclairé pour magasin." },
];

export type Project = (typeof projects)[number];
