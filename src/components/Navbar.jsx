import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import CurrencySelector from './CurrencySelector';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Gemstones', path: '/gemstones' },
  { name: 'Jewelry', path: '/jewelry' },
  { name: 'Bespoke', path: '/bespoke' },
  { name: 'Our Story', path: '/our-story' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white/80 backdrop-blur-sm py-5'
          }`}
      >
        <div className="premium-container flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Carbon Ceylon"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold font-heading tracking-wider text-[#1c1917]">
              CARBON<span className="text-[#0d9488]">CEYLON</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-10 font-body text-xs tracking-[0.15em] uppercase font-semibold text-[#44403c]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative group ${location.pathname === link.path ? 'text-[#0d9488]' : ''}`}
              >
                <span className="group-hover:text-[#0d9488] transition-colors duration-300">{link.name}</span>
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#0d9488] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex gap-6 items-center text-[#1c1917]">
            <CurrencySelector />
            <Search className="w-5 h-5 cursor-pointer hover:text-[#0d9488] transition-colors hidden md:block" />
            <button
              onClick={openCart}
              className="relative cursor-pointer hover:text-[#0d9488] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#0d9488] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-24 lg:hidden"
          >
            <div className="flex flex-col items-center gap-8 py-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-heading text-2xl ${location.pathname === link.path ? 'text-[#0d9488]' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
