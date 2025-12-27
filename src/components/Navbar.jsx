import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-8'
        }`}
    >
      <div className="premium-container flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold font-heading tracking-widest text-[#1c1917]">
          CARBON<span className="text-gold">CEYLON</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 font-body text-xs tracking-[0.15em] uppercase font-bold text-[#44403c]">
          {['Home', 'Collection', 'Bespoke', 'Our Story'].map((item) => (
            <a key={item} href="#" className="relative group">
              <span className="group-hover:text-[#d4af37] transition-colors duration-300">{item}</span>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#d4af37] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex gap-8 items-center text-[#1c1917]">
          <Search className="w-5 h-5 cursor-pointer hover:text-[#d4af37] transition-colors" />
          <div className="relative cursor-pointer hover:text-[#d4af37] transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-[#d4af37] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </div>
          <Menu className="w-6 h-6 md:hidden cursor-pointer" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
