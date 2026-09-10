import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-950">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-400 text-sm uppercase tracking-[0.4em] mb-4 font-medium">Public House</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Find Us
            </h1>
            <p className="text-stone-300 max-w-2xl mx-auto text-lg">
              Located at Casino Luxembourg in the heart of Ville-Haute
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-stone-900/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px]">
              <iframe
                title="Public House Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.1270%2C49.6090%2C6.1370%2C49.6140&layer=mapnik&marker=49.6115%2C6.1320"
                className="w-full h-full min-h-[500px] border-0"
                loading="lazy"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/place/Public+House/@49.6115,6.1320,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium group"
            >
              Open in Google Maps
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            {/* Contact Info Card */}
            <div className="bg-stone-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Address</p>
                    <p className="text-stone-300">7 Bd Franklin Delano Roosevelt</p>
                    <p className="text-stone-400">2450 Ville-Haute, Luxembourg</p>
                    <p className="text-stone-500 text-sm mt-1">At Casino Luxembourg</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Phone</p>
                    <a href="tel:+352621573723" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
                      +352 621 573 723
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Website</p>
                    <a href="https://publichouse.lu" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
                      publichouse.lu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <a href="mailto:reservation@publichouse.lu" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
                      reservation@publichouse.lu
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-stone-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Opening Hours</h2>
              <div className="space-y-3">
                {[
                  { day: 'Monday', hours: 'Closed', closed: true },
                  { day: 'Tuesday', hours: '12:00 – 14:00 / 18:30 – 22:00' },
                  { day: 'Wednesday', hours: '12:00 – 14:00 / 18:30 – 22:00' },
                  { day: 'Thursday', hours: '12:00 – 14:00 / 18:30 – 22:00' },
                  { day: 'Friday', hours: '12:00 – 14:00 / 18:30 – 22:30' },
                  { day: 'Saturday', hours: '18:30 – 22:30' },
                  { day: 'Sunday', hours: 'Closed', closed: true },
                ].map((item, i) => (
                  <div key={i} className={`flex justify-between items-center py-3 border-b border-white/5 last:border-0 ${item.closed ? 'opacity-50' : ''}`}>
                    <span className="text-stone-300 font-medium">{item.day}</span>
                    <span className={`text-sm ${item.closed ? 'text-stone-500' : 'text-stone-400'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-4">* Kitchen closes 30 minutes before closing time</p>
            </div>

            {/* Quick Actions */}
            <div className="bg-stone-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  to="/booking"
                  className="flex items-center justify-center gap-2 px-5 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
                >
                  📅 Reserve a Table
                </Link>
                <a
                  href="tel:+352621573723"
                  className="flex items-center justify-center gap-2 px-5 py-4 bg-white/5 border border-white/10 text-stone-300 font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  📞 Call Us
                </a>
                <a
                  href="mailto:reservation@publichouse.lu"
                  className="flex items-center justify-center gap-2 px-5 py-4 bg-purple-600/20 border border-purple-500/20 text-purple-400 font-semibold rounded-xl hover:bg-purple-600/30 transition-all"
                >
                  ✉️ Email Us
                </a>
                <a
                  href="https://wa.me/352621573723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-4 bg-green-600/20 border border-green-500/20 text-green-400 font-semibold rounded-xl hover:bg-green-600/30 transition-all"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="https://www.google.com/maps/dir//Public+House,+7+Bd+Franklin+Delano+Roosevelt,+2450+Luxembourg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-4 bg-blue-600/20 border border-blue-500/20 text-blue-400 font-semibold rounded-xl hover:bg-blue-600/30 transition-all sm:col-span-2"
                >
                  🗺️ Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-stone-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-10"
        >
          <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Amenities & Accessibility</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { icon: '♿', label: 'Wheelchair Accessible Entrance' },
              { icon: '🚻', label: 'Wheelchair Accessible Restroom' },
              { icon: '🪑', label: 'Wheelchair Accessible Seating' },
              { icon: '📶', label: 'Free Wi-Fi' },
              { icon: '🍸', label: 'Bar Onsite' },
              { icon: '🚻', label: 'Gender-Neutral Restroom' },
              { icon: '💳', label: 'Credit Cards Accepted' },
              { icon: '📱', label: 'NFC Mobile Payments' },
              { icon: '🅿️', label: 'Paid Parking Nearby' },
              { icon: '🪑', label: 'Table Service' },
              { icon: '👥', label: 'Groups Welcome' },
              { icon: '🌱', label: 'Vegetarian Options' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-stone-300 text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
