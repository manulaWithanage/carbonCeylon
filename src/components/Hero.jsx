import { Link } from 'react-router-dom';
import { ArrowRight, Gem, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

            {/* Subtle Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 premium-container min-h-screen flex flex-col justify-center pt-24">

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-6 py-2 border border-[#0d9488]/30 text-[#0d9488] text-xs tracking-[0.4em] uppercase font-medium mb-6">
                        From Mine to Masterpiece
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-heading text-white leading-tight mb-6">
                        Rare Gems.<br />
                        <span className="text-[#0d9488] italic font-light">Timeless Jewelry.</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
                        Discover Ceylon's finest gemstones and bespoke jewelry crafted for collectors, connoisseurs, and lovers of brilliance.
                    </p>
                </motion.div>

                {/* Split Cards */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">

                    {/* Gemstones Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="group relative"
                    >
                        <Link to="/gemstones">
                            <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 p-10 h-[400px] flex flex-col justify-between transition-all duration-500 hover:border-[#0d9488]/50">
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <Gem className="w-12 h-12 text-[#0d9488] mb-6" />
                                    <h2 className="text-3xl font-heading text-white mb-3">Loose Gemstones</h2>
                                    <p className="text-gray-400 font-light">
                                        Investment-grade sapphires, rubies, and emeralds. Certified, unheated, and ethically sourced from Ceylon.
                                    </p>
                                </div>

                                <div className="relative z-10 flex items-center gap-2 text-[#0d9488] font-medium group-hover:gap-4 transition-all">
                                    <span className="uppercase tracking-wider text-sm">Explore Collection</span>
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Fine Jewelry Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="group relative"
                    >
                        <Link to="/jewelry">
                            <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 p-10 h-[400px] flex flex-col justify-between transition-all duration-500 hover:border-[#0d9488]/50">
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <Sparkles className="w-12 h-12 text-[#0d9488] mb-6" />
                                    <h2 className="text-3xl font-heading text-white mb-3">Fine Jewelry</h2>
                                    <p className="text-gray-400 font-light">
                                        Handcrafted masterpieces featuring our signature gemstones set in precious metals by master artisans.
                                    </p>
                                </div>

                                <div className="relative z-10 flex items-center gap-2 text-[#0d9488] font-medium group-hover:gap-4 transition-all">
                                    <span className="uppercase tracking-wider text-sm">View Collection</span>
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Custom Jewelry CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-center mt-16"
                >
                    <Link
                        to="/bespoke"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#0d9488] text-white uppercase tracking-widest text-sm font-medium hover:bg-[#0f766e] transition-colors"
                    >
                        <Gem className="w-5 h-5" />
                        Create Custom Jewelry from Your Stone
                    </Link>
                    <p className="text-gray-500 text-sm mt-4">
                        Select any gemstone and we'll craft your dream piece
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
