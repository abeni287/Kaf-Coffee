export type MenuIconKey =
  | "pizza"
  | "burger"
  | "burgers"
  | "hot-drinks"
  | "cold-drinks"
  | "shakes-juices"
  | "sandwich"
  | "cake"
  | "wrap"
  | "breakfast"
  | "salad"
  | "extras"
  | "takeaway";

export type MenuItem = {
  en: string;
  am: string;
  price: number;
};

export type MenuGroup = {
  en?: string;
  am?: string;
  items: MenuItem[];
};

export type MenuSection = {
  id: MenuIconKey;
  title: { en: string; am: string };
  description: { en: string; am: string };
  groups: MenuGroup[];
};

export const menuSections: MenuSection[] = [
  {
    id: "pizza",
    title: { en: "Pizza", am: "ፒዛ" },
    description: {
      en: "Freshly baked pizzas with generous toppings, served hot from the oven.",
      am: "በትኩስ የተጋገሩ ፒዛዎች፣ በተመረጡ ግብዓቶች የተዘጋጁ።",
    },
    groups: [
      {
        items: [
          { en: "Kaf Special Pizza", am: "ካፍ ስፔሻል ፒዛ", price: 710 },
          { en: "Chicken Special Pizza", am: "ቺክን ስፔሻል ፒዛ", price: 720 },
          { en: "Cheese Pizza", am: "ቺዝ ፒዛ", price: 480 },
          { en: "Tuna Pizza", am: "ቱና ፒዛ", price: 650 },
          { en: "Beef Pizza", am: "ቢፍ ፒዛ", price: 500 },
          { en: "Chicken Pizza", am: "ቺክን ፒዛ", price: 650 },
          { en: "Vegetable Pizza", am: "አትክልት ፒዛ", price: 450 },
        ],
      },
    ],
  },
  {
    id: "burgers",
    title: { en: "Burgers", am: "በርገር" },
    description: {
      en: "Hearty grilled beef and chicken burgers made fresh to order.",
      am: "ትኩስ እና ጣፋጭ የስጋ እና የዶሮ በርገሮች።",
    },
    groups: [
      {
        items: [
          { en: "Kaf Special Burger", am: "ካፍ ስፔሻል በርገር", price: 520 },
          { en: "Chicken Cheese Burger", am: "ቺክን ቺዝ በርገር", price: 550 },
          { en: "Cheese Burger", am: "ቺዝ በርገር", price: 430 },
          { en: "Beef Burger", am: "ቢፍ በርገር", price: 390 },
          { en: "Special Chicken Burger", am: "ስፔሻል ቺክን በርገር", price: 580 },
          { en: "Chicken Burger", am: "ቺክን በርገር", price: 550 },
        ],
      },
    ],
  },
  {
    id: "hot-drinks",
    title: { en: "Hot drinks", am: "ትኩስ መጠጦች" },
    description: {
      en: "Ethiopian espresso, macchiatos, specialty teas, and comforting warm cups.",
      am: "ኤስፕሬሶ፣ ማኪያቶ፣ ልዩ ሻዮች እና ትኩስ መጠጦች።",
    },
    groups: [
      {
        items: [
          { en: "Espresso", am: "ኤስፕሬሶ ቡና", price: 60 },
          { en: "Coffee", am: "ቡና", price: 60 },
          { en: "Macchiato", am: "ማኪያቶ", price: 85 },
          { en: "Double Macchiato", am: "ደብል ማኪያቶ", price: 140 },
          { en: "Cafe Latte", am: "ካፌ ላቴ", price: 140 },
          { en: "Hot Chocolate", am: "ሆት ቸኮሌት", price: 180 },
          { en: "Cappuccino", am: "ካፑቺኖ", price: 160 },
          { en: "Milk", am: "ወተት", price: 110 },
          { en: "Kaf Special Tea", am: "ካፍ ስፔሻል ሻይ", price: 100 },
          { en: "Peanut With Coffee", am: "ለውዝ በቡና", price: 110 },
          { en: "Peanut Tea", am: "ለውዝ በሻይ", price: 90 },
          { en: "Normal Tea", am: "ኖርማል ሻይ", price: 45 },
          { en: "Green Tea", am: "አረንጓዴ ሻይ", price: 45 },
          { en: "Ginger Tea", am: "የዝንጅብል ሻይ", price: 60 },
          { en: "Tea With Coffee", am: "ስፕሪስ", price: 60 },
          { en: "Fasting Macchiato", am: "የጾም ማኪያቶ", price: 120 },
          { en: "Double Fasting Macchiato", am: "ደብል የጾም ማኪያቶ", price: 235 },
        ],
      },
    ],
  },
  {
    id: "cold-drinks",
    title: { en: "Cold drinks", am: "ቀዝቃዛ መጠጦች" },
    description: {
      en: "Iced coffee favorites alongside chilled bottled water and soft drinks.",
      am: "በበረዶ የተዘጋጁ ቡናዎች እና የታሸጉ ቀዝቃዛ መጠጦች።",
    },
    groups: [
      {
        en: "Cold Drinks",
        am: "ቀዝቃዛ ቡና እና መጠጦች",
        items: [
          { en: "Ice Latte", am: "ላቴ ከበረዶ ጋር", price: 200 },
          { en: "Ice Mocha", am: "ሞካ ከበረዶ ጋር", price: 190 },
          { en: "Ice Caramel", am: "ካራሜል ከበረዶ ጋር", price: 210 },
          { en: "Ice Coffee", am: "ቡና ከበረዶ ጋር", price: 140 },
          { en: "Vanilla Latte", am: "ቫኒላ ላቴ", price: 220 },
          { en: "Ice Cappuccino", am: "ካፑቺኖ ከበረዶ ጋር", price: 220 },
          { en: "Cold Special", am: "ቀዝቃዛ ስፔሻል", price: 200 },
          { en: "Kaf Special", am: "ካፍ ስፔሻል", price: 100 },
        ],
      },
      {
        en: "Bottled Drinks",
        am: "የታሸጉ መጠጦች",
        items: [
          { en: "Water 1 Liter", am: "1 ሊትር ውሃ", price: 50 },
          { en: "Water 1/2 Liter", am: "ግማሽ ውሃ", price: 40 },
          { en: "Soft Drink", am: "ለስላሳ", price: 55 },
          { en: "Ambo Water", am: "አምቦ ውሃ", price: 60 },
        ],
      },
    ],
  },
  {
    id: "shakes-juices",
    title: { en: "Shakes & juices", am: "ሼኮች እና ጁሶች" },
    description: {
      en: "Thick, creamy shakes and freshly pressed seasonal fruit juices.",
      am: "ጣፋጭ ሼኮች እና በትኩስ የተጨመቁ የፍራፍሬ ጁሶች።",
    },
    groups: [
      {
        en: "Shakes",
        am: "ሼኮች",
        items: [
          { en: "Banana Shake", am: "ባናና ሼክ", price: 200 },
          { en: "Strawberry Shake", am: "ስትሮበሪ ሼክ", price: 220 },
          { en: "Milk Shake", am: "ሚልክ ሼክ", price: 200 },
          { en: "Oreo Shake", am: "ኦሪዮ ሼክ", price: 250 },
          { en: "Mango Shake", am: "ማንጎ ሼክ", price: 200 },
          { en: "Avocado Shake", am: "አቮካዶ ሼክ", price: 200 },
          { en: "Chocolate Shake", am: "ቸኮሌት ሼክ", price: 210 },
          { en: "Special Shake", am: "ስፔሻል ሼክ", price: 220 },
        ],
      },
      {
        en: "Juices",
        am: "ጁሶች",
        items: [
          { en: "Mango Juice", am: "ማንጎ ጁስ", price: 150 },
          { en: "Avocado Juice", am: "አቮካዶ ጁስ", price: 150 },
          { en: "Papaya Juice", am: "ፓፓያ ጁስ", price: 150 },
          { en: "Pineapple Juice", am: "አናናስ ጁስ", price: 150 },
          { en: "Spriss / Mixed Juice", am: "ስፕሪስ ጁስ", price: 180 },
          { en: "Special Juice", am: "ስፔሻል ጁስ", price: 160 },
          { en: "Fasting Juice", am: "የጾም ስፔሻል ጁስ", price: 200 },
        ],
      },
    ],
  },
  {
    id: "sandwich",
    title: { en: "Sandwich", am: "ሳንዱች" },
    description: {
      en: "Toasted club, tuna, avocado, chicken, and beef sandwiches.",
      am: "ክለብ፣ ቱና፣ አቮካዶ፣ ዶሮ እና የስጋ ሳንዱቾች።",
    },
    groups: [
      {
        items: [
          { en: "Club Sandwich", am: "ክለብ ሳንዱች", price: 450 },
          { en: "Egg Sandwich", am: "እንቁላል ሳንዱች", price: 290 },
          { en: "Tuna Sandwich", am: "ቱና ሳንዱች", price: 500 },
          { en: "Vegetable Sandwich", am: "አትክልት ሳንዱች", price: 230 },
          { en: "Avocado Veg Sandwich", am: "አቮካዶ ሳንዱች", price: 330 },
          { en: "Chicken Sandwich", am: "ቺክን ሳንዱች", price: 420 },
          { en: "Beef Sandwich", am: "ቢፍ ሳንዱች", price: 410 },
        ],
      },
    ],
  },
  {
    id: "cake",
    title: { en: "Cake", am: "ኬክ" },
    description: {
      en: "Freshly baked cakes, pastries, croissants, and sweet treats for your coffee.",
      am: "ከቡናዎ ጋር የሚጣፍጡ ኬኮች፣ ክሮሳንት እና ቦምቦሊኖ።",
    },
    groups: [
      {
        items: [
          { en: "Rolled Cream Cake", am: "ሮልድ ክሬም ኬክ", price: 120 },
          { en: "Cup Cake", am: "ካፕ ኬክ", price: 95 },
          { en: "Fasting English Cake", am: "የጾም ኬክ", price: 85 },
          { en: "Chocolate Cake", am: "ቸኮሌት ኬክ", price: 150 },
          { en: "Custard Cream Cake", am: "ካስተርድ ክሬም ኬክ", price: 150 },
          { en: "Caramel Cake", am: "ካራሜል ኬክ", price: 170 },
          { en: "Cheese Cake", am: "ቺዝ ኬክ", price: 250 },
          { en: "Tiramisu Cake", am: "ቲራሚሱ", price: 160 },
          { en: "Milifoni", am: "ሚሊፎኒ", price: 160 },
          { en: "Croissant", am: "ክሮሳንት", price: 95 },
          { en: "Bonbolino", am: "ቦምቦሊኖ", price: 75 },
        ],
      },
    ],
  },
  {
    id: "wrap",
    title: { en: "Wrap", am: "ራፕ" },
    description: {
      en: "Savory rolled wraps and crispy fried chicken wings.",
      am: "ጣፋጭ ራፖች እና የተጠበሰ የዶሮ መላላጫ።",
    },
    groups: [
      {
        items: [
          { en: "Beef Wrap", am: "ቢፍ ራፕ", price: 480 },
          { en: "Fried Chicken Wing", am: "የተጠበሰ የዶሮ መላላጫ", price: 520 },
          { en: "Chicken Wrap", am: "ቺክን ራፕ", price: 490 },
          { en: "Vegetable Wrap", am: "አትክልት ራፕ", price: 280 },
          { en: "Egg Wrap", am: "እንቁላል ራፕ", price: 320 },
          { en: "Tuna Wrap", am: "ቱና ራፕ", price: 480 },
        ],
      },
    ],
  },
  {
    id: "breakfast",
    title: { en: "Breakfast", am: "ቁርስ እና ፓስታ" },
    description: {
      en: "Traditional Ethiopian breakfast favorites, eggs, and hearty pasta plates.",
      am: "ባህላዊ የቁርስ ምግቦች፣ እንቁላል እና ጣፋጭ የፓስታ ምርጫዎች።",
    },
    groups: [
      {
        en: "Breakfast",
        am: "ቁርስ",
        items: [
          { en: "Special Fatira", am: "ስፔሻል ፈጢራ", price: 395 },
          { en: "Normal Fatira", am: "ኖርማል ፈጢራ", price: 260 },
          { en: "Normal Foul", am: "ኖርማል ፉል", price: 230 },
          { en: "Special Foul", am: "ስፔሻል ፉል", price: 290 },
          { en: "Kaf Special Combo", am: "ካፍ ስፔሻል ኮምቦ", price: 495 },
          { en: "Enjera Firfir", am: "እንጀራ ፍርፍር", price: 180 },
          { en: "Enjera Firfir With Tuna", am: "እንጀራ ፍርፍር በቱና", price: 330 },
          { en: "Special Chechebsa", am: "ስፔሻል ጨጨብሳ", price: 330 },
          { en: "Chechebsa", am: "ኖርማል ጨጨብሳ", price: 250 },
          { en: "Scrambled Egg With Meat", am: "እንቁላል ፍርፍር በስጋ", price: 350 },
          { en: "Omelete", am: "እንቁላል ኦምሌት", price: 250 },
          { en: "Special Omelete", am: "ስፔሻል እንቁላል ኦምሌት", price: 310 },
          { en: "Quanta Firfir", am: "ቋንጣ ፍርፍር", price: 435 },
          { en: "Shiro", am: "ሽሮ", price: 200 },
          { en: "Tibs Firfir", am: "ጥብስ ፍርፍር", price: 420 },
          { en: "Fasting Variety", am: "የጾም ልዩ ልዩ", price: 320 },
          { en: "Drkosh Firfir", am: "ድርቆሽ ፍርፍር", price: 280 },
          { en: "Chikina Tibs", am: "ጭቅና ጥብስ", price: 510 },
          { en: "Drkosh With Quanta", am: "ድርቆሽ በቋንጣ ፍርፍር", price: 495 },
          { en: "Firfir With Tuna", am: "ድርቆሽ ፍርፍር በቱና", price: 395 },
          { en: "Tomato", am: "ቲማቲም ለብለብ", price: 250 },
          { en: "Teff Chechebessa", am: "የጤፍ ጨጨብሳ", price: 270 },
          { en: "Special Teff Chechebessa", am: "ስፔሻል የጤፍ ጨጨብሳ", price: 360 },
        ],
      },
      {
        en: "Pasta",
        am: "ፓስታ",
        items: [
          { en: "Pasta With Meat", am: "ፓስታ በስጋ", price: 290 },
          { en: "Pasta With Tomato & Tuna", am: "ፓስታ በቲማቲምና ቱና", price: 400 },
          { en: "Pasta With Vegetable", am: "ፓስታ በአትክልት", price: 230 },
          { en: "Pasta With Tomato Sauce", am: "ፓስታ በቲማቲም", price: 230 },
          { en: "Normal Fries", am: "ቺፕስ", price: 230 },
        ],
      },
    ],
  },
  {
    id: "salad",
    title: { en: "Salad", am: "ሰላጣ" },
    description: {
      en: "Crisp, fresh garden salads with chicken, beef, or tuna.",
      am: "ትኩስ የአትክልት፣ የዶሮ፣ የስጋ እና የቱና ሰላጣዎች።",
    },
    groups: [
      {
        items: [
          { en: "Normal Salad", am: "ኖርማል ሰላጣ", price: 250 },
          { en: "Chicken Salad", am: "ሰላጣ በዶሮ ስጋ", price: 510 },
          { en: "Beef Salad", am: "ሰላጣ በስጋ", price: 490 },
          { en: "Special Salad", am: "ስፔሻል ሰላጣ", price: 550 },
          { en: "Tuna Salad", am: "ሰላጣ በቱና", price: 480 },
        ],
      },
    ],
  },
  {
    id: "extras",
    title: { en: "The extras", am: "ተጨማሪዎች" },
    description: {
      en: "Sides, sauces, and small additions to complete your meal.",
      am: "ምግብዎን የሚያሟሉ ተጨማሪ ዳቦ፣ እንጀራ፣ ማር እና ማጣፈጫዎች።",
    },
    groups: [
      {
        items: [
          { en: "Extra Bread", am: "ተጨማሪ ዳቦ", price: 20 },
          { en: "Extra Injera", am: "ተጨማሪ እንጀራ", price: 20 },
          { en: "Extra Honey", am: "ተጨማሪ ማር", price: 25 },
          { en: "Extra Mayonnaise", am: "ተጨማሪ ማዮኔዝ", price: 35 },
          { en: "Extra Chilli", am: "ተጨማሪ ቃሪያ", price: 25 },
          { en: "Extra Ketchup", am: "ተጨማሪ ካቻፕ", price: 25 },
          { en: "Extra Egg", am: "ተጨማሪ እንቁላል", price: 30 },
        ],
      },
    ],
  },
  {
    id: "takeaway",
    title: { en: "Takeaway boxes", am: "ቴክአዌይ ቦክሶች" },
    description: {
      en: "Packaging containers and cups for orders to go.",
      am: "ለመውሰጃ የሚሆኑ ቦክሶች፣ ፎይል እና ካፖች።",
    },
    groups: [
      {
        items: [
          { en: "Takeaway Pizza Box", am: "የፒዛ ቴክአዌይ ቦክስ", price: 40 },
          { en: "Takeaway Foil", am: "ቴክአዌይ ፎይል", price: 30 },
          { en: "Takeaway Coffee Cup", am: "የቡና ቴክአዌይ ካፕ", price: 25 },
          { en: "Takeaway Juice Cup", am: "የጁስ ቴክአዌይ ካፕ", price: 30 },
          { en: "Takeaway Aluminium Box", am: "አልሙኒየም ቴክአዌይ ቦክስ", price: 50 },
        ],
      },
    ],
  },
];

export function resolveMenuIndexFromHash(hash: string): number {
  const clean = hash.replace(/^#/, "").toLowerCase();
  if (!clean) return 0;
  const aliases: Record<string, MenuIconKey> = {
    coffee: "hot-drinks",
    burger: "burgers",
    habesha: "breakfast",
  };
  const targetId = aliases[clean] ?? clean;
  const idx = menuSections.findIndex((s) => s.id === targetId);
  return idx >= 0 ? idx : 0;
}
