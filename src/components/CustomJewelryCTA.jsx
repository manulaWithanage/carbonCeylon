import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gem, ArrowRight, Palette, Crown, Sparkles } from 'lucide-react';

const CustomJewelryCTA = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0d9488]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0d9488]/30 to-transparent" />

            <div className="premium-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d9488]/10 rounded-full text-[#0d9488] text-xs tracking-[0.2em] uppercase mb-6">
                            <Crown className="w-4 h-4" />
                            Bespoke Service
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-heading text-[#1c1917] mb-6 leading-tight">
                            Create Your<br />
                            <span className="text-[#0d9488] italic font-light">Dream Piece</span>
                        </h2>

                        <p className="text-[#44403c] text-lg mb-8 max-w-md leading-relaxed">
                            Choose any gemstone from our collection and work with our master artisans
                            to craft a one-of-a-kind piece that tells your story.
                        </p>

                        {/* Process Steps */}
                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#0d9488] text-white flex items-center justify-center font-bold shrink-0">
                                    1
                                </div>
                                <div>
                                    <p className="font-semibold text-[#1c1917] mb-1">Select Your Stone</p>
                                    <p className="text-sm text-gray-500">Browse our certified gemstone collection</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#0d9488] text-white flex items-center justify-center font-bold shrink-0">
                                    2
                                </div>
                                <div>
                                    <p className="font-semibold text-[#1c1917] mb-1">Design Together</p>
                                    <p className="text-sm text-gray-500">Work with our artisans on your custom setting</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#0d9488] text-white flex items-center justify-center font-bold shrink-0">
                                    3
                                </div>
                                <div>
                                    <p className="font-semibold text-[#1c1917] mb-1">Receive Your Masterpiece</p>
                                    <p className="text-sm text-gray-500">Handcrafted and delivered with full certification</p>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/bespoke"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-[#0d9488] text-white uppercase tracking-widest text-sm font-medium hover:bg-[#0f766e] transition-all shadow-lg shadow-[#0d9488]/20"
                        >
                            <Sparkles className="w-5 h-5" />
                            Start Your Journey
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    {/* Right - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative bg-gradient-to-br from-[#fafaf9] to-white p-8 lg:p-12 border border-gray-100 shadow-xl">
                            {/* Decorative element */}
                            <div className="absolute -top-3 -right-3 w-24 h-24 bg-[#0d9488]/10 -z-10" />
                            <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-[#0d9488]/5 -z-10" />

                            <div className="space-y-6">
                                {/* Sample custom piece preview */}
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                    className="bg-white p-6 border border-gray-100 shadow-sm"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <Gem className="w-8 h-8 text-[#0d9488]" />
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">Selected Stone</p>
                                            <p className="font-heading font-semibold">Blue Sapphire • 2.5ct</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                                    className="bg-white p-6 border border-gray-100 shadow-sm"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <Palette className="w-8 h-8 text-[#0d9488]" />
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">Design Style</p>
                                            <p className="font-heading font-semibold">Classic Solitaire Ring</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{ repeat: Infinity, duration: 6, delay: 2 }}
                                    className="bg-white p-6 border border-gray-100 shadow-sm"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <Crown className="w-8 h-8 text-[#0d9488]" />
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">Metal</p>
                                            <p className="font-heading font-semibold">18k White Gold</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CustomJewelryCTA;
