import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, UtensilsCrossed } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link to="/" className="flex items-center space-x-2">
              <img src="/public/logo.png" width={90} alt="" />
              <span className="text-xl font-serif font-bold text-white tracking-tight">
                Hotel Galaxy
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Experience premium hospitality and the finest vegetarian dining in the heart of Banswara.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/galaxyhotel.bsw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/rooms" className="hover:text-brand-teal transition-colors">Premium Rooms</Link></li>
              <li><Link to="/menu" className="hover:text-brand-teal transition-colors">Our Menu</Link></li>
              <li><a href="https://www.agoda.com/hotel-galaxy-h52507777/hotel/banswara-in.html" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors">Book a Stay</a></li>
              <li><Link to="/contact" className="hover:text-brand-teal transition-colors">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-teal flex-shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/aiZC6RQwU5g3Z4ds8" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors">
                  Udaipur Road, Banswara (Raj.)
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-teal flex-shrink-0" />
                <a href="tel:+919414103012" className="hover:text-white transition-colors">+91 94141 03012</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-teal flex-shrink-0" />
                <a href="mailto:galaxyhotelbsw@gmail.com" className="hover:text-white transition-colors">galaxyhotelbsw@gmail.com</a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hotel Galaxy Banswara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
