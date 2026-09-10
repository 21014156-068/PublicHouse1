import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-stone-950 text-stone-300 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/50 to-stone-950"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-stone-900 font-bold text-lg">PH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Public House</h3>
                <p className="text-xs text-amber-400/80 tracking-wide">at Casino Luxembourg</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 mt-4">
              A new chapter. The same philosophy. Seasonal ingredients, natural wines, and the freedom to choose.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://publichouse.lu" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-amber-500/20 border border-white/10 flex items-center justify-center transition-all hover:border-amber-500/30">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </a>
              <a href="https://wa.me/352621573723" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-green-500/20 border border-white/10 flex items-center justify-center transition-all hover:border-green-500/30">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="tel:+352621573723" className="w-9 h-9 rounded-full bg-white/5 hover:bg-amber-500/20 border border-white/10 flex items-center justify-center transition-all hover:border-amber-500/30">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-5 uppercase text-xs tracking-[0.2em]">Explore</h4>
            <ul className="space-y-3">
              {[
                { to: '/menu', label: 'Dinner Menu' },
                { to: '/menu', label: 'Lunch Menu' },
                { to: '/wine-list', label: 'Wine List' },
                { to: '/booking', label: 'Reservations' },
                { to: '/reviews', label: 'Guest Reviews' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-stone-400 hover:text-amber-400 transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-amber-400 transition-all duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-5 uppercase text-xs tracking-[0.2em]">Visit Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-amber-400 mt-0.5">📍</span>
                <div>
                  <p className="text-stone-300">7 Bd Franklin Delano Roosevelt</p>
                  <p className="text-stone-400">2450 Ville-Haute, Luxembourg</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400">📞</span>
                <a href="tel:+352621573723" className="text-stone-300 hover:text-amber-400 transition-colors">+352 621 573 723</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400">✉️</span>
                <a href="mailto:reservation@publichouse.lu" className="text-stone-300 hover:text-amber-400 transition-colors">reservation@publichouse.lu</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400">🕐</span>
                <div>
                  <p className="text-stone-300">Tue–Fri: 12:00–14:00 / 18:30–22:00</p>
                  <p className="text-stone-400">Sat: 18:30–22:30</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-5 uppercase text-xs tracking-[0.2em]">Rated</h4>
            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl font-bold text-white">4.7</span>
                <span className="text-stone-400 text-sm">/5</span>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className={`w-4 h-4 ${star <= 4 ? 'text-amber-400' : 'text-amber-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-stone-400">Based on 338 Google reviews</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Public House Luxembourg. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://publichouse.lu" target="_blank" rel="noopener noreferrer" className="text-xs text-stone-400 hover:text-amber-400 transition-colors">
              publichouse.lu
            </a>
            <span className="text-stone-700">|</span>
            <a href="https://www.resos.com" target="_blank" rel="noopener noreferrer" className="text-xs text-stone-400 hover:text-amber-400 transition-colors">
              Book via Resos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
