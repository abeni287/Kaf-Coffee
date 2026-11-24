import {
  Coffee,
  CakeSlice,
  Pizza,
  Sandwich,
  UtensilsCrossed,
  CupSoda,
  Citrus,
  EggFried,
  Salad,
  PlusCircle,
  Package,
  Utensils,
} from "lucide-react";
import { useLanguage } from "./language-provider";
import type { MenuIconKey } from "@/lib/menu-data";

const icons = [Coffee, CakeSlice, Pizza, Sandwich, UtensilsCrossed];

const menuIcons: Record<MenuIconKey, typeof Coffee> = {
  pizza: Pizza,
  burger: Sandwich,
  burgers: Sandwich,
  "hot-drinks": Coffee,
  "cold-drinks": CupSoda,
  "shakes-juices": Citrus,
  sandwich: Sandwich,
  cake: CakeSlice,
  wrap: Utensils,
  breakfast: EggFried,
  salad: Salad,
  extras: PlusCircle,
  takeaway: Package,
};

export function PhotoPlaceholder({
  category = 0,
  iconKey,
}: {
  category?: number;
  iconKey?: MenuIconKey;
}) {
  const { t } = useLanguage();
  const Icon = (iconKey ? menuIcons[iconKey] : icons[category]) ?? UtensilsCrossed;
  return (
    <div className="placeholder-photo">
      <Icon aria-hidden="true" />
      <span>{t.photoPlaceholder}</span>
    </div>
  );
}
