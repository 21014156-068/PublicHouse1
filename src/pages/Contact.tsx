import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-3">Public House</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Us</h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            Located at Casino Luxembourg in the heart of Ville-Haute
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200 h-full min-h-[400px]">
              <iframe
                title="Public House Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.1270%2C49.6090%2C6.1370%2C49.6140&layer=mapnik&marker=49.6115%2C6.1320"
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/place/Public+House/@49.6115,6.1320,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm"
            >
              Open in Google Maps →
            </a>
          </div>

          {/* Contact Details */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 mb-6">
              <h2 className="text-2xl font-bold text-stone-800 mb-6">Contact Information</h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">Address</p>
                    <p className="text-stone-600">7 Bd Franklin Delano Roosevelt</p>
                    <p className="text-stone-600">2450 Ville-Haute, Luxembourg</p>
                    <p className="text-stone-400 text-sm mt-1">At Casino Luxembourg</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">Phone</p>
                    <a href="tel:+352621573723" className="text-amber-600 hover:text-amber-700 font-medium">
                      +352 621 573 723
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🌐</span>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">Website</p>
                    <a href="https://publichouse.lu" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-medium">
                      publichouse.lu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📮</span>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">Postal Code</p>
                    <p className="text-stone-600">J45G+WQ Luxembourg</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 mb-6">
              <h2 className="text-2xl font-bold text-stone-800 mb-6">Opening Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Monday</span>
                  <span className="text-stone-500">Closed</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Tuesday</span>
                  <span className="text-stone-500">12:00 – 14:00 / 18:30 – 22:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Wednesday</span>
                  <span className="text-stone-500">12:00 – 14:00 / 18:30 – 22:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Thursday</span>
                  <span className="text-stone-500">12:00 – 14:00 / 18:30 – 22:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Friday</span>
                  <span className="text-stone-500">12:00 – 14:00 / 18:30 – 22:30</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Saturday</span>
                  <span className="text-stone-500">18:30 – 22:30</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-stone-700 font-medium">Sunday</span>
                  <span className="text-stone-500">Closed</span>
                </div>
              </div>
              <p className="text-xs text-stone-400 mt-4">* Kitchen closes 30 minutes before closing time</p>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  to="/booking"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-colors"
                >
                  📅 Reserve a Table
                </Link>
                <a
                  href="tel:+352621573723"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-stone-800 hover:bg-stone-700 text-white font-semibold rounded-lg transition-colors"
                >
                  📞 Call Us
                </a>
                <a
                  href="https://wa.me/352621573723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="https://www.google.com/maps/dir//Public+House,+7+Bd+Franklin+Delano+Roosevelt,+2450+Luxembourg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
                >
                  🗺️ Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-800 mb-6">Amenities & Accessibility</h2>
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
              <div key={i} className="flex items-center gap-2 p-2 bg-stone-50 rounded-lg">
                <span className="text-lg">{item.icon}</span>
                <span className="text-stone-700 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
