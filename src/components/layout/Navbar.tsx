import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import { useScroll } from "../../lib/hooks";
import { cn } from "../../lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Restaurant Menu", href: "/menu" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll();
  const location = useLocation();

  const isDarkHeroPage = location.pathname === "/" || location.pathname === "/menu";
  const isSolid = scrolled || !isDarkHeroPage;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isSolid ? "bg-white/50 backdrop-blur-md border-gray-200 shadow-sm py-2 lg:py-1" : "bg-transparent border-transparent py-2 lg:py-1"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
          <img width={90} src="/logo.webp" alt="Hotel Galaxy Logo" className="h-auto" />
            {/* <div className="bg-brand-wood p-2 rounded-full text-white transform transition-transform group-hover:rotate-12 group-hover:scale-110">
              <UtensilsCrossed size={20} />
            </div> */}
            {/* <span className={cn(
              "text-2xl font-serif font-bold tracking-tight",
                isSolid ? "text-gray-900" : "text-white drop-shadow-md"
            )}>
              Hotel Galaxy
            </span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                   isSolid ? "text-gray-600 hover:text-brand-wood" : "text-gray-100 hover:text-white drop-shadow-md",
                   location.pathname === link.href && (isSolid ? "text-brand-wood" : "text-white")
                )}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    className={cn(
                      "absolute -bottom-1 left-0 right-0 h-0.5",
                      isSolid ? "bg-brand-wood" : "bg-white"
                    )}
                  />
                )}
              </Link>
            ))}
            <a
              href="https://www.agoda.com/hotel-galaxy-h52507777/hotel/banswara-in.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md bg-brand-wood px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-brand-wood-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-wood disabled:pointer-events-none disabled:opacity-50"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={isSolid ? "text-gray-900" : "text-white"} size={24} />
            ) : (
              <Menu className={isSolid ? "text-gray-900" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white fixed inset-0 top-[72px] z-40 overflow-y-auto"
        >
          <div className="flex flex-col space-y-4 px-6 pt-10 pb-20">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-2xl font-serif text-gray-900 font-semibold border-b border-gray-100 pb-4"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6">
              <a
                href="https://www.agoda.com/hotel-galaxy-h52507777/hotel/banswara-in.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex h-12 items-center justify-center rounded-md bg-brand-wood px-4 text-lg font-medium text-white shadow transition-colors hover:bg-brand-wood-hover"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
