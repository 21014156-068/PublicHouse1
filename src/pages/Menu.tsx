import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type MenuTab = 'dinner' | 'lunch';

export default function Menu() {
  const [activeTab, setActiveTab] = useState<MenuTab>('dinner');

  return (
    <div className="min-h-screen bg-stone-950">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://image.qwenlm.ai/generated-images/d53ff480-f83c-4dd7-9d51-4de9cc91204d/_result.png"
            alt="Fine dining dish"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-400 text-sm uppercase tracking-[0.4em] mb-4 font-medium">Public House</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Menu
            </h1>
            <p className="text-stone-300 max-w-2xl mx-auto text-lg">
              We source locally and use only seasonal ingredients. Our philosophy: let the ingredients speak for themselves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-16 md:top-20 z-40 bg-stone-950/95 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white/5 rounded-full p-1 flex gap-1">
              {(['dinner', 'lunch'] as MenuTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 py-3 text-sm font-semibold uppercase tracking-wider rounded-full transition-all ${
                    activeTab === tab ? 'text-stone-900' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="menuTab"
                      className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab === 'dinner' ? 'Dinner Menu' : 'Lunch Menu'}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'dinner' ? <DinnerMenu /> : <LunchMenu />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function MenuSection({ title, items, image }: { title: string; items: { name: string; description?: string; price: string; allergens?: string }[]; image?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-8">
        {image && (
          <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mt-2"></div>
        </div>
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 p-4 rounded-xl hover:bg-white/5 transition-all"
          >
            <div className="flex-1">
              <p className="text-white font-medium group-hover:text-amber-400 transition-colors">{item.name}</p>
              {item.description && <p className="text-stone-400 text-sm mt-1">{item.description}</p>}
              {item.allergens && <p className="text-xs text-stone-500 mt-1">Allergens: {item.allergens}</p>}
            </div>
            <span className="text-amber-400 font-bold text-lg whitespace-nowrap">€{item.price}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function DinnerMenu() {
  return (
    <div>
      <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-2xl p-5 mb-12">
        <p className="text-amber-300 text-sm text-center font-medium">
          All prices are in euros, taxes and service included.
        </p>
      </div>

      <MenuSection
        title="Snacks"
        image="https://image.qwenlm.ai/generated-images/ebddaf5c-0f89-478b-bc4f-8894d87f631f/_result.png"
        items={[
          { name: 'Homemade Sourdough Bread', price: '4' },
          { name: 'Whipped Brown Butter', price: '3' },
          { name: 'Selection of Pickled Seasonal Vegetables', price: '4' },
          { name: 'Public House Sourdough Crisps', price: '3' },
          { name: 'Oeufs Mayo', price: '6', allergens: '3' },
          { name: 'Zucchini Tempura, Miso Emulsion', price: '12', allergens: '1, 3, 6' },
          { name: 'Comté, Berdorfer Vieux, Brillat Savarin, Strawberry/Red Wine', price: '12', allergens: '1, 7' },
        ]}
      />

      <MenuSection
        title="Starters"
        items={[
          { name: 'Bone Marrow & Grilled Sourdough Bread', price: '12', allergens: '1' },
          { name: "Sandrine's Tomatoes, Tomato Water, Blackberries, Hyssop", price: '12', allergens: '7' },
          { name: 'Marinated Bell Pepper, Goat Cheese, Tomato Water, Habanero, Crunchy Yeast', price: '15', allergens: '7' },
          { name: 'Thin Tomato Tart, Berdorfer Kéis, Fresh Cheese, Olive Herb', price: '15', allergens: '1, 7, 8' },
          { name: 'Yellow Beans, Ajo Blanco, Apricot, Bread Crumble', price: '14', allergens: '1, 7, 8' },
        ]}
      />

      <MenuSection
        title="Mains"
        image="https://image.qwenlm.ai/generated-images/d53ff480-f83c-4dd7-9d51-4de9cc91204d/_result.png"
        items={[
          { name: 'Pork Chop, Tomatoes, Beans, Harissa', price: '25', allergens: '13' },
          { name: 'Trout, New Potatoes, Trout Eggs, Pil-Pil, Shiso', price: '25', allergens: '3, 4, 7' },
          { name: "Côte à l'Os to Share with Chimichurri (800g, for two)", price: '55' },
          { name: 'Luxembourgish Beef Tartare', price: '20', allergens: '10' },
          { name: 'Aubergine, Homemade Hoisin, Chili, Shiso', price: '18', allergens: '5, 6, 11' },
        ]}
      />

      <MenuSection
        title="Sides"
        items={[
          { name: 'Frites Allumettes', price: '4' },
          { name: 'Oven Roasted Potatoes', price: '4' },
          { name: 'Grilled Salad, Mustard Seed, Honey and Chives', price: '4' },
          { name: 'Salade with Lambic Vinegar', price: '4' },
        ]}
      />

      <MenuSection
        title="Desserts"
        image="https://image.qwenlm.ai/generated-images/3a1c9b25-026c-40ce-a6a9-fd25c7477ee7/_result.png"
        items={[
          { name: 'Fig Leaf Cream, Burnt Honey Ice Cream, Fresh Figs', price: '9', allergens: '3, 7' },
          { name: 'Fresh Out the Oven Cookie with Tonka Ice Cream', price: '10', allergens: '1, 7' },
          { name: 'Mirabelle Sablé Breton, Meadowsweet', price: '10', allergens: '1, 3, 7' },
        ]}
      />

      <AllergenLegend />
    </div>
  );
}

function LunchMenu() {
  return (
    <div>
      {/* Lunch Formulas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-3xl p-8 mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Formules Midi</h2>
        <div className="space-y-4">
          {[
            { label: 'Entrée + Plat', price: '€29' },
            { label: 'Plat + Dessert', price: '€29' },
            { label: 'Entrée + Plat + Dessert', price: '€37', featured: true },
          ].map((f, i) => (
            <div key={i} className={`flex justify-between items-center py-3 px-4 rounded-xl ${f.featured ? 'bg-amber-500/10 border border-amber-500/20' : 'border-b border-white/5'}`}>
              <span className="text-stone-300 font-medium">{f.label}</span>
              <span className="text-amber-400 font-bold text-xl">{f.price}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <MenuSection
        title="Starters"
        items={[
          { name: 'Soup of the Day', price: '' },
          { name: 'Salade, Croutons, Egg, Sumac', price: '', allergens: '1, 3, 10' },
          { name: 'Thin Tomato Tart, Berdorfer Kéis, Fresh Cheese, Olive Herb', price: '', allergens: '1, 7, 8' },
          { name: 'Marinated Bell Pepper, Goat Cheese, Tomato Water, Habanero, Crunchy Yeast', price: '', allergens: '7' },
        ]}
      />

      <MenuSection
        title="Mains"
        image="https://image.qwenlm.ai/generated-images/d53ff480-f83c-4dd7-9d51-4de9cc91204d/_result.png"
        items={[
          { name: 'Pork Chop, Tomatoes, Beans, Harissa', price: '', allergens: '13' },
          { name: 'Aubergine, Homemade Hoisin, Chili, Shiso', price: '', allergens: '8, 11' },
          { name: 'Luxembourgish Beef Tartare with Homemade Fries', price: '', allergens: '1, 10' },
          { name: 'Trout, New Potatoes, Chilli, Sauce Pil-Pil', price: '', allergens: '1, 3, 9' },
        ]}
      />

      <MenuSection
        title="Desserts"
        image="https://image.qwenlm.ai/generated-images/3a1c9b25-026c-40ce-a6a9-fd25c7477ee7/_result.png"
        items={[
          { name: 'Elderflower Sorbet, Mirabelle Flambée', price: '' },
          { name: 'Fresh Out the Oven Cookie with Tonka Ice Cream', price: '', allergens: '1, 3, 7' },
          { name: 'Comté, Berdorfer Vieux, Brillat Savarin & Homemade Chutney', price: '', allergens: '1, 3' },
        ]}
      />

      <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-2xl p-5 mb-12">
        <p className="text-amber-300 text-sm text-center font-medium">
          All prices are in euros, taxes and service included.
        </p>
      </div>

      <AllergenLegend />
    </div>
  );
}

function AllergenLegend() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-16 pt-8 border-t border-white/5"
    >
      <h3 className="text-sm font-semibold text-stone-300 mb-4 uppercase tracking-wider">Allergen Guide</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs text-stone-500">
        {[
          '1 — Gluten', '2 — Crustaceans', '3 — Eggs', '4 — Fish',
          '5 — Peanuts', '6 — Soy', '7 — Milk (incl. lactose)', '8 — Tree nuts',
          '9 — Celery', '10 — Mustard', '11 — Sesame seeds', '12 — Sulphites',
          '13 — Lupin', '14 — Molluscs'
        ].map((item) => (
          <span key={item} className="py-1">{item}</span>
        ))}
      </div>
    </motion.div>
  );
}
