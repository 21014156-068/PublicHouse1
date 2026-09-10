import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900/30"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="text-center">
            <p className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-4">at Casino Luxembourg</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Public House
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto mb-4 leading-relaxed">
              A new chapter. The same philosophy. The same people.
            </p>
            <p className="text-lg text-stone-400 max-w-xl mx-auto mb-10">
              Seasonal ingredients, natural wines, and the freedom to choose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-md transition-colors duration-200 shadow-lg"
              >
                Reserve a Table
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-stone-400 hover:border-amber-400 hover:text-amber-400 text-stone-300 font-semibold rounded-md transition-colors duration-200"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
                Our Philosophy
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-4">
                At Public House, we are committed to sourcing our products locally and using only seasonal ingredients in every dish we create. Our philosophy is simple: let the ingredients speak for themselves.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Located at the iconic Casino Luxembourg, we offer a cozy and trendy dining experience with an emphasis on natural wines, creative cocktails, and refined dishes that celebrate the best of each season.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">🌿 Seasonal</span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">🍷 Natural Wines</span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">🥂 Great Cocktails</span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">☕ Great Coffee</span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">🍰 Great Desserts</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <div className="text-6xl mb-4">⭐</div>
                <p className="text-5xl font-bold text-stone-800 mb-2">4.7</p>
                <p className="text-stone-500 text-lg">out of 5 — 338 reviews</p>
                <div className="mt-6 flex justify-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className={`w-6 h-6 ${star <= 4 ? 'text-amber-400' : 'text-amber-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <Link to="/reviews" className="inline-block mt-6 text-amber-600 hover:text-amber-700 font-medium text-sm">
                  Read what our guests say →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 text-center mb-4">
            What Makes Us Special
          </h2>
          <p className="text-stone-500 text-center mb-12 max-w-2xl mx-auto">
            From our carefully curated natural wine selection to our seasonally inspired dishes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🍷</div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Natural Wine Selection</h3>
              <p className="text-stone-600 leading-relaxed">
                An exceptional collection of natural and organic wines from across Europe — featuring producers from Luxembourg, France, Italy, Germany, and beyond.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Seasonal & Local</h3>
              <p className="text-stone-600 leading-relaxed">
                Every dish celebrates the best ingredients of the moment. We source locally and let seasonal produce guide our creative kitchen.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🥂</div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Crafted Cocktails</h3>
              <p className="text-stone-600 leading-relaxed">
                From classic Negronis to inventive creations, our bar serves expertly crafted cocktails alongside great coffee and digestifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Dining With Us</h2>
              <div className="space-y-4">
                {[
                  { icon: '🪑', text: 'Table service — Lunch & Dinner' },
                  { icon: '📅', text: 'Reservations recommended for dinner' },
                  { icon: '🌱', text: 'Vegetarian options always available' },
                  { icon: '♿', text: 'Fully wheelchair accessible' },
                  { icon: '📶', text: 'Free Wi-Fi available' },
                  { icon: '👥', text: 'Groups welcome' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-stone-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Lunch Formulas</h2>
              <p className="text-stone-600 mb-6">Join us for a refined midday meal with our lunch formulas:</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <span className="text-stone-800 font-medium">Entrée + Plat</span>
                  <span className="text-amber-700 font-bold text-lg">€29</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <span className="text-stone-800 font-medium">Plat + Dessert</span>
                  <span className="text-amber-700 font-bold text-lg">€29</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <span className="text-stone-800 font-medium">Entrée + Plat + Dessert</span>
                  <span className="text-amber-700 font-bold text-lg">€37</span>
                </div>
              </div>
              <Link
                to="/menu"
                className="inline-block mt-6 text-amber-600 hover:text-amber-700 font-medium"
              >
                See full lunch menu →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Dine?</h2>
          <p className="text-stone-300 text-lg mb-8">
            Join us for an unforgettable dining experience at Casino Luxembourg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-md transition-colors"
            >
              Make a Reservation
            </Link>
            <a
              href="tel:+352621573723"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-stone-500 hover:border-amber-400 hover:text-amber-400 text-stone-300 font-semibold rounded-md transition-colors"
            >
              📞 Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
