import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "dinner",
    name: "Dinner",
    items: [
      { name: "Wagyu Beef Carpaccio", description: "Thinly sliced A5 wagyu, truffle aioli, capers, shaved parmesan", price: "$32" },
      { name: "Seared Foie Gras", description: "Pan-seared foie gras, brioche, port wine reduction, fig compote", price: "$38" },
      { name: "Burrata Caprese", description: "Creamy burrata, heirloom tomatoes, basil oil, aged balsamic", price: "$24" },
      { name: "Tuna Tartare", description: "Yellowfin tuna, avocado, sesame, ponzu, wonton crisps", price: "$28" },
      { name: "Lobster Bisque", description: "Rich lobster broth, cognac cream, chive oil", price: "$22" },
      { name: "Filet Mignon", description: "8oz center-cut tenderloin, bone marrow butter, truffle jus", price: "$65" },
      { name: "Pan-Roasted Duck Breast", description: "Muscovy duck, cherry gastrique, foie gras, pomme purée", price: "$48" },
      { name: "Chilean Sea Bass", description: "Miso-glazed sea bass, bok choy, shiitake, dashi broth", price: "$52" },
      { name: "Lamb Rack", description: "Herb-crusted Colorado lamb, ratatouille, rosemary jus", price: "$58" },
      { name: "Truffle Risotto", description: "Carnaroli rice, black truffle, mascarpone, parmesan crisp", price: "$36" },
    ],
  },
  {
    id: "lunch",
    name: "Lunch",
    items: [
      { name: "Grilled Caesar Salad", description: "Romaine hearts, white anchovies, garlic croutons, parmesan", price: "$18" },
      { name: "Steak Frites", description: "6oz hanger steak, truffle fries, béarnaise sauce", price: "$32" },
      { name: "Lobster Roll", description: "Maine lobster, brioche bun, drawn butter, old bay fries", price: "$38" },
      { name: "Niçoise Salad", description: "Seared tuna, haricots verts, olives, soft egg, potatoes", price: "$26" },
      { name: "Wagyu Burger", description: "American wagyu, aged cheddar, caramelized onions, brioche", price: "$28" },
      { name: "Crab Cakes", description: "Jumbo lump crab, remoulade, micro greens, lemon", price: "$30" },
      { name: "Pasta Primavera", description: "Seasonal vegetables, light cream sauce, fresh herbs", price: "$24" },
      { name: "Soup of the Day", description: "Chef's daily selection with artisan bread", price: "$14" },
    ],
  },
  {
    id: "cocktails",
    name: "Cocktails",
    items: [
      { name: "MKVL Old Fashioned", description: "Woodford Reserve, demerara, orange bitters, luxardo cherry", price: "$18" },
      { name: "Truffle Martini", description: "Grey Goose, dry vermouth, truffle-infused olive brine", price: "$20" },
      { name: "Champagne Cocktail", description: "Moët & Chandon, cognac, angostura bitters, sugar cube", price: "$22" },
      { name: "Smoked Manhattan", description: "Bulleit rye, sweet vermouth, applewood smoke, brandied cherry", price: "$19" },
      { name: "French 75", description: "Hendrick's gin, champagne, lemon, elderflower", price: "$18" },
      { name: "Espresso Martini", description: "Tito's vodka, Kahlúa, fresh espresso, vanilla", price: "$17" },
      { name: "Negroni Sbagliato", description: "Campari, sweet vermouth, prosecco, orange peel", price: "$16" },
      { name: "Whiskey Sour", description: "Maker's Mark, fresh lemon, egg white, aromatic bitters", price: "$16" },
    ],
  },
  {
    id: "wine",
    name: "Wine",
    items: [
      { name: "Dom Pérignon 2012", description: "Champagne, France", price: "$350" },
      { name: "Opus One 2019", description: "Napa Valley, California", price: "$475" },
      { name: "Château Margaux 2015", description: "Margaux, Bordeaux", price: "$650" },
      { name: "Sassicaia 2018", description: "Bolgheri, Tuscany", price: "$380" },
      { name: "Cloudy Bay Sauvignon Blanc", description: "Marlborough, New Zealand", price: "$65" },
      { name: "Caymus Cabernet Sauvignon", description: "Napa Valley, California", price: "$125" },
      { name: "Whispering Angel Rosé", description: "Côtes de Provence, France", price: "$55" },
      { name: "Barolo Monfortino 2013", description: "Giacomo Conterno, Piedmont", price: "$550" },
    ],
  },
];

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState("dinner");

  const activeCategory = menuData.find((cat) => cat.id === activeTab);

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {menuData.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-6 md:px-8 py-3 text-sm tracking-widest transition-all duration-300 ${
              activeTab === category.id
                ? "bg-gold text-background"
                : "border border-border text-foreground hover:border-gold hover:text-gold"
            }`}
          >
            {category.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-0">
            {activeCategory?.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="py-6 border-b border-border/30 last:border-b-0"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-foreground font-serif text-xl mb-2">{item.name}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                  <span className="text-gold font-serif text-xl">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MenuTabs;
