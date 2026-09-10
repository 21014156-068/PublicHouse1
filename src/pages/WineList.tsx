import { useState } from 'react';

type WineCategory = 'sparkling' | 'white' | 'rose' | 'red' | 'orange';
type Section = 'byglass' | 'bottle';

export default function WineList() {
  const [activeSection, setActiveSection] = useState<Section>('bottle');

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-3">Public House</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Wine List</h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            A carefully curated selection of natural and organic wines from across Europe.
          </p>
        </div>
      </section>

      {/* Section Toggle */}
      <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <button
              onClick={() => setActiveSection('bottle')}
              className={`px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                activeSection === 'bottle'
                  ? 'border-amber-600 text-amber-700'
                  : 'border-transparent text-stone-500 hover:text-stone-700'
              }`}
            >
              By the Bottle
            </button>
            <button
              onClick={() => setActiveSection('byglass')}
              className={`px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                activeSection === 'byglass'
                  ? 'border-amber-600 text-amber-700'
                  : 'border-transparent text-stone-500 hover:text-stone-700'
              }`}
            >
              By the Glass
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeSection === 'byglass' ? <ByGlassList /> : <ByBottleList />}
      </div>
    </div>
  );
}

function WineCard({ name, region, grape, price }: { name: string; region: string; grape?: string; price: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 py-3 border-b border-stone-100 last:border-0">
      <div className="flex-1">
        <p className="text-stone-800 font-medium text-sm">{name}</p>
        <p className="text-stone-500 text-xs">{region}{grape ? ` — ${grape}` : ''}</p>
      </div>
      <span className="text-amber-700 font-semibold text-sm whitespace-nowrap">€{price}</span>
    </div>
  );
}

function WineSection({ title, wines }: { title: string; wines: { name: string; region: string; grape?: string; price: string }[] }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-stone-800 mb-4 pb-2 border-b border-stone-200">{title}</h2>
      <div className="space-y-1">
        {wines.map((wine, i) => (
          <WineCard key={i} {...wine} />
        ))}
      </div>
    </div>
  );
}

function ByGlassList() {
  return (
    <div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <p className="text-amber-800 text-sm text-center">
          Prices shown as Glass / Bottle where applicable
        </p>
      </div>

      <WineSection
        title="Sparkling"
        wines={[
          { name: 'Domaine Kox, Crémant Sans Sulfites', region: 'Remich, Luxembourg', grape: 'Riesling', price: '10/45' },
          { name: 'Clement Perseval, Blanc de Blancs', region: 'Champagne, France', grape: 'Chardonnay', price: '18/80' },
        ]}
      />

      <WineSection
        title="White"
        wines={[
          { name: 'Poderi Cillario, La Fea \'24', region: 'Dogliani Piedmont, Italy', grape: 'Favorita', price: '9/50' },
          { name: 'Krier Welbes, Pinot Gris \'24', region: 'Luxembourg', grape: 'Pinot Gris', price: '11/50' },
          { name: 'Goisot, Côtes d\'Auxerre \'24', region: 'Bourgogne, France', grape: 'Chardonnay', price: '13/65' },
        ]}
      />

      <WineSection
        title="Rosé"
        wines={[
          { name: 'Château Romanin, Rosé \'24', region: 'Provence, France', price: '10/50' },
        ]}
      />

      <WineSection
        title="Red"
        wines={[
          { name: 'Marie et Vincent Tricot \'23', region: 'Auvergne, France', grape: 'Pinot Noir', price: '12/55' },
          { name: 'San Luigi, Poderi Cillario \'24', region: 'Dogliani Piedmont, Italy', grape: 'Dolcetto', price: '13/60' },
          { name: 'Maciot, Barbera d\'Asti \'21', region: 'Piemonte, Italy', grape: 'Barbera', price: '13/60' },
        ]}
      />

      <WineSection
        title="Orange"
        wines={[
          { name: 'Sauri, Paolo Maciot \'24', region: 'Piedmont, Italy', grape: 'Sauvignon Blanc', price: '—' },
        ]}
      />
    </div>
  );
}

function ByBottleList() {
  return (
    <div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <p className="text-amber-800 text-sm text-center">
          All prices in euros — natural, organic, and biodynamic selections
        </p>
      </div>

      <WineSection
        title="Sparkling"
        wines={[
          { name: 'Jonas Dostert Rochus \'21', region: 'Mosel, Germany', price: '60' },
          { name: 'Daniel & Bianka Pétillant Weiss', region: 'Rheinhessen, Germany', price: '55' },
          { name: 'Maciot Moussant', region: 'Piemonte, Italy', price: '55' },
          { name: 'Rémy Leroy Extra Brut', region: 'Champagne, France', price: '95' },
          { name: 'Vouette et Sorbée Fidèle', region: 'Champagne, France', price: '130' },
          { name: '2 Naturkinder Silvaner Pet-Nat', region: 'Franken, Germany', price: '40' },
        ]}
      />

      <WineSection
        title="White"
        wines={[
          { name: 'Chardonnay Goldberg, Bianca and Daniel Schmitt 2022', region: 'Moselle, Germany', price: '65' },
          { name: 'Zeroine Côtes Du Jura Chardonnay 2021', region: 'Jura, France', price: '85' },
          { name: 'Attraction Cabaret Des Oiseaux Chardonnay 2022', region: 'Jura, France', price: '75' },
          { name: 'Julien Renard Müller-Thurgau 2021', region: 'Mosel, Germany', price: '60' },
          { name: 'Poderi Cellario Langhe Favorita 2024', region: 'Piemonte, Italy', price: '60' },
          { name: 'Racines Rebelles Roche Liquide Elbling 2022', region: 'Grevenmacher, Luxembourg', price: '65' },
          { name: 'Domaine de Villaine Bouzeron Aligoté Blanc 2022', region: 'Bourgogne, France', price: '65' },
          { name: 'Thomas Pico Chablis Vent d\'Ange 2023', region: 'Bourgogne, France', price: '80' },
          { name: 'Le Plante Froide Domaine du Nozay Sancerre 2023', region: 'Loire, France', price: '80' },
          { name: 'Jonathan Pabiot Pouilly-Fumé Luminance 2023', region: 'Loire, France', price: '80' },
          { name: 'Marie et Vincent Tricot Escargot 2022', region: 'Auvergne, France', price: '60' },
          { name: 'Sepp Muster Gelber Muskateller von Opok 2020', region: 'Steiermark, Austria', price: '70' },
          { name: 'Frantz Chagnoleau Saint-Véran 2023', region: 'Bourgogne, France', price: '70' },
        ]}
      />

      <WineSection
        title="Red"
        wines={[
          { name: 'Jonas Dostert Gros Carambolage', region: 'Mosel, Germany', price: '65' },
          { name: 'Domaine de Villeneuve Vieilles Vignes Châteauneuf-du-Pape 2020', region: 'Rhône, France', price: '85' },
          { name: 'Clos Marie - Simon 2018', region: 'Languedoc, France', price: '80' },
          { name: 'Maxime Magnon - Rozeta 2021', region: 'Languedoc, France', price: '75' },
          { name: 'Pequena Adega Romana Barbarus 2019', region: 'Galicia, Spain', price: '45' },
          { name: 'Domaine Jean-Marc Bouley - Hautes-Côtes de Beaune 2020', region: 'Bourgogne, France', price: '105' },
          { name: 'Jean Foillard Morgon Côte de Puy 2024', region: 'Beaujolais, France', price: '70' },
          { name: 'Trapet Gevrey Chambertin 2022', region: 'Bourgogne, France', price: '135' },
          { name: 'Domaine du Gringet Yseult Mon Amour 2022', region: 'Savoie, France', price: '65' },
          { name: 'Vinas Mora Andreis 2021', region: 'Babic, Croatia', price: '60' },
          { name: 'Maciot Nebbiolo Superiore 2021', region: 'Piedmont, Italy', price: '75' },
          { name: 'Domaine de la Renardière 2022', region: 'Ploussard, France', price: '75' },
          { name: 'Guilhem et Jean-Hugues Goisot Pinot Noir 2024', region: 'Bourgogne, France', price: '65' },
        ]}
      />
    </div>
  );
}
