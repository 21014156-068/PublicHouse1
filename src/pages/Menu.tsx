import { useState } from 'react';

type MenuTab = 'dinner' | 'lunch';

export default function Menu() {
  const [activeTab, setActiveTab] = useState<MenuTab>('dinner');

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-3">Public House</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            We source locally and use only seasonal ingredients. Our philosophy: let the ingredients speak for themselves.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <button
              onClick={() => setActiveTab('dinner')}
              className={`px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                activeTab === 'dinner'
                  ? 'border-amber-600 text-amber-700'
                  : 'border-transparent text-stone-500 hover:text-stone-700'
              }`}
            >
              Dinner Menu
            </button>
            <button
              onClick={() => setActiveTab('lunch')}
              className={`px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                activeTab === 'lunch'
                  ? 'border-amber-600 text-amber-700'
                  : 'border-transparent text-stone-500 hover:text-stone-700'
              }`}
            >
              Lunch Menu
            </button>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'dinner' ? <DinnerMenu /> : <LunchMenu />}
      </div>
    </div>
  );
}

function MenuSection({ title, items }: { title: string; items: { name: string; description?: string; price: string; allergens?: string }[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-stone-800 mb-6 pb-2 border-b border-stone-200">{title}</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
            <div className="flex-1">
              <p className="text-stone-800 font-medium">{item.name}</p>
              {item.description && <p className="text-stone-500 text-sm">{item.description}</p>}
              {item.allergens && <p className="text-xs text-stone-400 mt-1">Allergens: {item.allergens}</p>}
            </div>
            <span className="text-amber-700 font-semibold whitespace-nowrap">€{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DinnerMenu() {
  return (
    <div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10">
        <p className="text-amber-800 text-sm text-center">
          All prices are in euros, taxes and service included.
        </p>
      </div>

      <MenuSection
        title="Snacks"
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
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-stone-800 mb-4 text-center">Formules Midi</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-amber-200">
            <span className="text-stone-700">Entrée + Plat</span>
            <span className="text-amber-700 font-bold">€29</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-amber-200">
            <span className="text-stone-700">Plat + Dessert</span>
            <span className="text-amber-700 font-bold">€29</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-stone-700 font-medium">Entrée + Plat + Dessert</span>
            <span className="text-amber-700 font-bold">€37</span>
          </div>
        </div>
      </div>

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
        items={[
          { name: 'Pork Chop, Tomatoes, Beans, Harissa', price: '', allergens: '13' },
          { name: 'Aubergine, Homemade Hoisin, Chili, Shiso', price: '', allergens: '8, 11' },
          { name: 'Luxembourgish Beef Tartare with Homemade Fries', price: '', allergens: '1, 10' },
          { name: 'Trout, New Potatoes, Chilli, Sauce Pil-Pil', price: '', allergens: '1, 3, 9' },
        ]}
      />

      <MenuSection
        title="Desserts"
        items={[
          { name: 'Elderflower Sorbet, Mirabelle Flambée', price: '' },
          { name: 'Fresh Out the Oven Cookie with Tonka Ice Cream', price: '', allergens: '1, 3, 7' },
          { name: 'Comté, Berdorfer Vieux, Brillat Savarin & Homemade Chutney', price: '', allergens: '1, 3' },
        ]}
      />

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10">
        <p className="text-amber-800 text-sm text-center">
          All prices are in euros, taxes and service included.
        </p>
      </div>

      <AllergenLegend />
    </div>
  );
}

function AllergenLegend() {
  return (
    <div className="mt-12 pt-8 border-t border-stone-200">
      <h3 className="text-sm font-semibold text-stone-700 mb-3">Allergen Guide</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-stone-500">
        <span>1 — Gluten</span>
        <span>2 — Crustaceans</span>
        <span>3 — Eggs</span>
        <span>4 — Fish</span>
        <span>5 — Peanuts</span>
        <span>6 — Soy</span>
        <span>7 — Milk (incl. lactose)</span>
        <span>8 — Tree nuts</span>
        <span>9 — Celery</span>
        <span>10 — Mustard</span>
        <span>11 — Sesame seeds</span>
        <span>12 — Sulphites</span>
        <span>13 — Lupin</span>
        <span>14 — Molluscs</span>
      </div>
    </div>
  );
}
