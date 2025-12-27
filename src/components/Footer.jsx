import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, CheckCircle } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            console.log('Newsletter signup:', email);
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <footer className="bg-[#1c1917] text-white pt-20 pb-10">
            <div className="premium-container grid md:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/images/logo.png"
                            alt="Carbon Ceylon"
                            className="h-12 w-auto brightness-0 invert"
                        />
                        <span className="text-xl font-bold font-heading tracking-wider">
                            CARBON<span className="text-[#0d9488]">CEYLON</span>
                        </span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Ethically sourced gemstones from the heart of Sri Lanka.
                        Merging traditional craftsmanship with modern elegance.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram className="w-5 h-5 hover:text-[#0d9488] cursor-pointer transition-colors" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook className="w-5 h-5 hover:text-[#0d9488] cursor-pointer transition-colors" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-5 h-5 hover:text-[#0d9488] cursor-pointer transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-heading text-lg mb-6 text-[#0d9488]">Explore</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link to="/our-story" className="hover:text-white transition-colors">Our Heritage</Link></li>
                        <li><Link to="/collection" className="hover:text-white transition-colors">The Collection</Link></li>
                        <li><Link to="/bespoke" className="hover:text-white transition-colors">Bespoke Design</Link></li>
                        <li><Link to="/collection" className="hover:text-white transition-colors">Gemstone Guide</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-heading text-lg mb-6 text-[#0d9488]">Contact</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-[#0d9488]" />
                            hello@carbonceylon.com
                        </li>
                        <li>Colombo, Sri Lanka</li>
                        <li>+94 77 123 4567</li>
                        <li className="pt-2">
                            <Link to="/contact" className="text-[#0d9488] hover:text-white transition-colors">
                                Get in Touch →
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-heading text-lg mb-6 text-[#0d9488]">Newsletter</h4>
                    {subscribed ? (
                        <div className="flex items-center gap-2 text-green-400">
                            <CheckCircle className="w-5 h-5" />
                            <span>Thank you for subscribing!</span>
                        </div>
                    ) : (
                        <>
                            <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive offers and new arrivals.</p>
                            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email"
                                    required
                                    className="bg-white/10 border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-[#0d9488] transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#0d9488] text-white hover:bg-[#0f766e] transition-colors p-3 text-sm font-bold uppercase tracking-wider"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>

            <div className="border-t border-white/10 pt-10 text-center text-gray-500 text-xs tracking-wider">
                <p>&copy; 2025 CARBON CEYLON. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;
