import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Section = 'bottle' | 'byglass';

export default function WineList() {
  const [activeSection, setActiveSection] = useState<Section>('bottle');

  return (
    <div className="min-h-screen bg-stone-950">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://image.qwenlm.ai/generated-images/7dd675e9-a5b5-4b6f-a284-762b319cdbd5/_result.png"
            alt="Wine collection"
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
              Wine List
            </h1>
            <p className="text-stone-300 max-w-2xl mx-auto text-lg">
              A carefully curated selection of natural and organic wines from across Europe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Toggle */}
      <div className="sticky top-16 md:top-20 z-40 bg-stone-950/95 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white/5 rounded-full p-1 flex gap-1">
              {(['bottle', 'byglass'] as Section[]).map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`relative px-8 py-3 text-sm font-semibold uppercase tracking-wider rounded-full transition-all ${
                    activeSection === section ? 'text-stone-900' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {activeSection === section && (
                    <motion.div
                      layoutId="wineTab"
                      className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{section === 'bottle' ? 'By the Bottle' : 'By the Glass'}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeSection === 'byglass' ? <ByGlassList /> : <ByBottleList />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function WineCard({ name, region, grape, price }: { name: string; region: string; grape?: string; price: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-4 px-4 rounded-xl hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
    >
      <div className="flex-1">
        <p className="text-white font-medium group-hover:text-amber-400 transition-colors">{name}</p>
        <p className="text-stone-400 text-sm mt-0.5">{region}{grape ? ` — ${grape}` : ''}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-amber-400 font-bold text-lg">€{price}</span>
      </div>
    </motion.div>
  );
}

function WineSection({ title, wines, color }: { title: string; wines: { name: string; region: string; grape?: string; price: string }[]; color?: string }) {
  const colorMap: Record<string, string> = {
    sparkling: 'from-yellow-400/20 to-yellow-600/20',
    white: 'from-lime-400/20 to-lime-600/20',
    rose: 'from-pink-400/20 to-pink-600/20',
    red: 'from-red-400/20 to-red-600/20',
    orange: 'from-orange-400/20 to-orange-600/20',
  };
  const gradientClass = color ? colorMap[color] || colorMap.white : colorMap.white;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-3 h-12 rounded-full bg-gradient-to-b ${gradientClass}`}></div>
        <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h2>
      </div>
      <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
        {wines.map((wine, i) => (
          <WineCard key={i} {...wine} />
        ))}
      </div>
    </motion.div>
  );
}

function ByGlassList() {
  return (
    <div>
      <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-2xl p-5 mb-10">
        <p className="text-amber-300 text-sm text-center font-medium">
          Prices shown as Glass / Bottle where applicable
        </p>
      </div>

      <WineSection
        title="Sparkling"
        color="sparkling"
        wines={[
          { name: 'Domaine Kox, Crémant Sans Sulfites', region: 'Remich, Luxembourg', grape: 'Riesling', price: '10/45' },
          { name: 'Clement Perseval, Blanc de Blancs', region: 'Champagne, France', grape: 'Chardonnay', price: '18/80' },
        ]}
      />

      <WineSection
        title="White"
        color="white"
        wines={[
          { name: 'Poderi Cillario, La Fea \'24', region: 'Dogliani Piedmont, Italy', grape: 'Favorita', price: '9/50' },
          { name: 'Krier Welbes, Pinot Gris \'24', region: 'Luxembourg', grape: 'Pinot Gris', price: '11/50' },
          { name: 'Goisot, Côtes d\'Auxerre \'24', region: 'Bourgogne, France', grape: 'Chardonnay', price: '13/65' },
        ]}
      />

      <WineSection
        title="Rosé"
        color="rose"
        wines={[
          { name: 'Château Romanin, Rosé \'24', region: 'Provence, France', price: '10/50' },
        ]}
      />

      <WineSection
        title="Red"
        color="red"
        wines={[
          { name: 'Marie et Vincent Tricot \'23', region: 'Auvergne, France', grape: 'Pinot Noir', price: '12/55' },
          { name: 'San Luigi, Poderi Cillario \'24', region: 'Dogliani Piedmont, Italy', grape: 'Dolcetto', price: '13/60' },
          { name: 'Maciot, Barbera d\'Asti \'21', region: 'Piemonte, Italy', grape: 'Barbera', price: '13/60' },
        ]}
      />

      <WineSection
        title="Orange"
        color="orange"
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
      <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-2xl p-5 mb-10">
        <p className="text-amber-300 text-sm text-center font-medium">
          All prices in euros — natural, organic, and biodynamic selections
        </p>
      </div>

      <WineSection
        title="Sparkling"
        color="sparkling"
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
        color="white"
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
        color="red"
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
