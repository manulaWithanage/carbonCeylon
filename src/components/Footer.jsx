import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1c1917] text-white pt-20 pb-10 fade-in">
            <div className="premium-container grid md:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="space-y-6">
                    <div className="text-2xl font-bold font-heading tracking-widest">
                        CARBON<span className="text-[#d4af37]">CEYLON</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Ethically sourced gemstones from the heart of Sri Lanka.
                        Merging traditional craftsmanship with modern elegance.
                    </p>
                    <div className="flex gap-4">
                        <Instagram className="w-5 h-5 hover:text-[#d4af37] cursor-pointer transition-colors" />
                        <Facebook className="w-5 h-5 hover:text-[#d4af37] cursor-pointer transition-colors" />
                        <Twitter className="w-5 h-5 hover:text-[#d4af37] cursor-pointer transition-colors" />
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-heading text-lg mb-6 text-[#d4af37]">Explore</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Our Heritage</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">The Collection</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Bespoke Design</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Gemstone Guide</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-heading text-lg mb-6 text-[#d4af37]">Contact</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-[#d4af37]" />
                            hello@carbonceylon.com
                        </li>
                        <li>Colombo, Sri Lanka</li>
                        <li>+94 77 123 4567</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-heading text-lg mb-6 text-[#d4af37]">Newsletter</h4>
                    <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive offers and new arrivals.</p>
                    <div className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-white/10 border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                        />
                        <button className="bg-[#d4af37] text-[#1c1917] hover:bg-white hover:text-[#1c1917] transition-colors p-3 text-sm font-bold uppercase tracking-wider">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 pt-10 text-center text-gray-500 text-xs tracking-wider">
                <p>&copy; 2025 CARBON CEYLON. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;
