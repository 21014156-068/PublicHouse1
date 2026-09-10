import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Contact() {
  const today = new Date().getDay(); // 0=Sun, 1=Mon...
  const dayMap: Record<number, string> = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday' };
  const todayName = dayMap[today];

  const hours = [
    { day: 'Monday', lunch: 'Closed', dinner: 'Closed', closed: true },
    { day: 'Tuesday', lunch: '12:00 – 14:00', dinner: '18:30 – 22:00', closed: false },
    { day: 'Wednesday', lunch: '12:00 – 14:00', dinner: '18:30 – 22:00', closed: false },
    { day: 'Thursday', lunch: '12:00 – 14:00', dinner: '18:30 – 22:00', closed: false },
    { day: 'Friday', lunch: '12:00 – 14:00', dinner: '18:30 – 22:30', closed: false },
    { day: 'Saturday', lunch: 'Closed', dinner: '18:30 – 22:30', closed: false },
    { day: 'Sunday', lunch: 'Closed', dinner: 'Closed', closed: true },
  ];

  return (
    <div className="min-h-screen bg-stone-950">
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
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
              Visit Us
            </h1>
            <p className="text-stone-400 max-w-xl mx-auto text-lg">
              We'd love to welcome you. Find us at Casino Luxembourg in the heart of Ville-Haute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section - Full Width */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/5"
        >
          <iframe
            title="Public House Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=6.1270%2C49.6090%2C6.1370%2C49.6140&layer=mapnik&marker=49.6115%2C6.1320"
            className="w-full h-[350px] md:h-[400px] border-0"
            loading="lazy"
          ></iframe>
          {/* Map overlay info */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-stone-950/90 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 shadow-xl">
            <p className="text-white font-semibold text-sm">Public House</p>
            <p className="text-stone-400 text-xs mt-0.5">7 Bd Franklin Delano Roosevelt, 2450 Luxembourg</p>
            <a
              href="https://www.google.com/maps/place/Public+House/@49.6115,6.1320,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-medium mt-2 hover:text-amber-300 transition-colors group"
            >
              Open in Google Maps
              <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="group bg-gradient-to-br from-stone-900/80 to-stone-900/40 border border-white/5 rounded-2xl p-6 hover:border-amber-500/20 transition-all duration-300"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Address</h3>
            <p className="text-stone-300 text-sm leading-relaxed">7, boulevard Franklin D. Roosevelt</p>
            <p className="text-stone-400 text-sm">L-2450 Luxembourg</p>
            <p className="text-stone-500 text-xs mt-2">At Casino Luxembourg</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-gradient-to-br from-stone-900/80 to-stone-900/40 border border-white/5 rounded-2xl p-6 hover:border-amber-500/20 transition-all duration-300"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Phone</h3>
            <a href="tel:+352621573723" className="text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors block">
              +352 621 573 723
            </a>
            <a
              href="https://wa.me/352621573723"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-green-400/80 hover:text-green-400 text-xs mt-2 transition-colors"
            >
              <span>💬</span> WhatsApp
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-gradient-to-br from-stone-900/80 to-stone-900/40 border border-white/5 rounded-2xl p-6 hover:border-amber-500/20 transition-all duration-300"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Email</h3>
            <a href="mailto:reservation@publichouse.lu" className="text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors break-all">
              reservation@publichouse.lu
            </a>
            <p className="text-stone-500 text-xs mt-2">For reservations & inquiries</p>
          </motion.div>

          {/* Website */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group bg-gradient-to-br from-stone-900/80 to-stone-900/40 border border-white/5 rounded-2xl p-6 hover:border-amber-500/20 transition-all duration-300"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Website</h3>
            <a href="https://publichouse.lu" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors">
              publichouse.lu
            </a>
            <a
              href="https://www.resos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-stone-300 text-xs mt-2 transition-colors"
            >
              📅 Book via Resos
            </a>
          </motion.div>
        </div>

        {/* Hours + Quick Actions Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
          {/* Opening Hours - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-gradient-to-br from-stone-900/80 to-stone-900/40 border border-white/5 rounded-2xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Opening Hours</h2>
              <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full font-medium">
                Today: {todayName}
              </span>
            </div>

            {/* Hours Table */}
            <div className="space-y-0">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 pb-3 border-b border-white/10 text-xs uppercase tracking-wider text-stone-500 font-medium">
                <span>Day</span>
                <span className="text-center">Lunch</span>
                <span className="text-right">Dinner</span>
              </div>
              {/* Table Rows */}
              {hours.map((item, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 gap-4 py-3 border-b border-white/5 last:border-0 transition-colors ${
                    item.day === todayName
                      ? 'bg-amber-500/5 -mx-3 px-3 rounded-lg border-amber-500/10'
                      : ''
                  } ${item.closed ? 'opacity-40' : ''}`}
                >
                  <span className={`text-sm font-medium ${item.day === todayName ? 'text-amber-400' : 'text-stone-300'}`}>
                    {item.day}
                    {item.day === todayName && <span className="ml-2 text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded-full">TODAY</span>}
                  </span>
                  <span className={`text-sm text-center ${item.lunch === 'Closed' ? 'text-stone-600' : 'text-stone-400'}`}>
                    {item.lunch}
                  </span>
                  <span className={`text-sm text-right ${item.dinner === 'Closed' ? 'text-stone-600' : 'text-stone-400'}`}>
                    {item.dinner}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-600 mt-4 italic">* Kitchen closes 30 minutes before closing time</p>
          </motion.div>

          {/* Quick Actions - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-gradient-to-br from-stone-900/80 to-stone-900/40 border border-white/5 rounded-2xl p-8 flex flex-col"
          >
            <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Get in Touch</h2>
            <div className="space-y-3 flex-1">
              <Link
                to="/booking"
                className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:scale-[1.02]"
              >
                <span className="text-lg">📅</span>
                <span>Reserve a Table</span>
              </Link>
              <a
                href="tel:+352621573723"
                className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 text-stone-300 font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all hover:scale-[1.02]"
              >
                <span className="text-lg">📞</span>
                <span>Call Us</span>
              </a>
              <a
                href="mailto:reservation@publichouse.lu"
                className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 text-stone-300 font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all hover:scale-[1.02]"
              >
                <span className="text-lg">✉️</span>
                <span>Send an Email</span>
              </a>
              <a
                href="https://wa.me/352621573723"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 text-stone-300 font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all hover:scale-[1.02]"
              >
                <span className="text-lg">💬</span>
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.google.com/maps/dir//Public+House,+7+Bd+Franklin+Delano+Roosevelt,+2450+Luxembourg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 text-stone-300 font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all hover:scale-[1.02]"
              >
                <span className="text-lg">🗺️</span>
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Amenities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-stone-900/80 to-stone-900/40 border border-white/5 rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Amenities & Accessibility</h2>
              <p className="text-stone-500 text-sm mt-1">Everything you need for a comfortable visit</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { icon: '♿', label: 'Wheelchair Entrance' },
              { icon: '🚻', label: 'Accessible Restroom' },
              { icon: '🪑', label: 'Accessible Seating' },
              { icon: '📶', label: 'Free Wi-Fi' },
              { icon: '🍸', label: 'Bar Onsite' },
              { icon: '🚻', label: 'Gender-Neutral WC' },
              { icon: '💳', label: 'Credit Cards' },
              { icon: '📱', label: 'NFC Payments' },
              { icon: '🅿️', label: 'Parking Nearby' },
              { icon: '🪑', label: 'Table Service' },
              { icon: '👥', label: 'Groups Welcome' },
              { icon: '🌱', label: 'Vegetarian Options' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex flex-col items-center gap-2 p-4 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.06] hover:border-amber-500/10 transition-all text-center group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="text-stone-400 text-xs font-medium leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
