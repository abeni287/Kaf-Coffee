import coffee from "@/assets/coffee.webp.asset.json";
import drinks from "@/assets/drinks.webp.asset.json";
import white from "@/assets/white-forest.webp.asset.json";
import caramel from "@/assets/caramel.webp.asset.json";
import black from "@/assets/black-forest.webp.asset.json";
import milifoni from "@/assets/milifoni.webp.asset.json";
export const media = {
  mural: "/assets/aistudio/hero_5e39af02.jpg",
  menuBanner: "/assets/optimized/menu-banner.webp",
  coffee: coffee.url,
  coffeeOffer: "/assets/aistudio/photo_2026-11-24_11-43-30_ad4e73e5.jpg",
  drinks: drinks.url,
  wrap: "/assets/aistudio/photo_2026-11-24_06-29-07_03873f36.jpg",
  logo: "/assets/optimized/kaf-logo.webp",
  cakes: [white.url, caramel.url, black.url, milifoni.url],
};
export const categories = ["coffee", "shakes-juices", "burgers", "wrap", "pizza"] as const;
