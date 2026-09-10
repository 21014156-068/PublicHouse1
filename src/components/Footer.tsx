import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Public House</h3>
            <p className="text-amber-400 text-sm mb-4">at Casino Luxembourg</p>
            <p className="text-sm leading-relaxed">
              Seasonal, locally-sourced cuisine with an emphasis on natural wines and creative cocktails. 
              A cozy, trendy dining experience in the heart of Luxembourg City.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="hover:text-amber-400 transition-colors text-sm">Dinner Menu</Link></li>
              <li><Link to="/menu" className="hover:text-amber-400 transition-colors text-sm">Lunch Menu</Link></li>
              <li><Link to="/wine-list" className="hover:text-amber-400 transition-colors text-sm">Wine List</Link></li>
              <li><Link to="/booking" className="hover:text-amber-400 transition-colors text-sm">Reservations</Link></li>
              <li><Link to="/reviews" className="hover:text-amber-400 transition-colors text-sm">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Visit Us</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">📍</span>
                <span>7 Bd Franklin Delano Roosevelt<br />2450 Ville-Haute, Luxembourg</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-400">📞</span>
                <a href="tel:+352621573723" className="hover:text-amber-400 transition-colors">+352 621 573 723</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-400">🕐</span>
                <span>Open for Lunch & Dinner</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-400">⭐</span>
                <span>4.7 / 5 — 338 Reviews</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Public House. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://publichouse.lu" target="_blank" rel="noopener noreferrer" className="text-xs text-stone-400 hover:text-amber-400 transition-colors">
              publichouse.lu
            </a>
            <span className="text-stone-600">|</span>
            <a href="https://www.resos.com" target="_blank" rel="noopener noreferrer" className="text-xs text-stone-400 hover:text-amber-400 transition-colors">
              Book via Resos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
