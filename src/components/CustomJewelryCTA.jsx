import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gem, ArrowRight, Sparkles } from 'lucide-react';

const CustomJewelryCTA = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-[#0d9488] to-[#0f766e] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="premium-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Gem className="w-8 h-8" />
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-heading mb-6 leading-tight">
                            Craft Your Vision.<br />
                            <span className="font-light italic">Choose Your Stone.</span>
                        </h2>
                        <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
                            Select any gemstone from our collection and work with our master artisans to create a
                            one-of-a-kind piece that tells your story.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">1</div>
                                <p className="text-white/90">Choose your perfect gemstone</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">2</div>
                                <p className="text-white/90">Design your custom setting</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">3</div>
                                <p className="text-white/90">Receive your handcrafted masterpiece</p>
                            </div>
                        </div>

                        <Link
                            to="/bespoke"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0d9488] uppercase tracking-widest text-sm font-bold hover:bg-[#1c1917] hover:text-white transition-all"
                        >
                            Start Your Journey
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full h-[500px]">
                            {/* Floating gem cards */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="absolute top-0 left-0 bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20"
                            >
                                <p className="text-white/80 text-xs uppercase tracking-wider mb-2">Selected Stone</p>
                                <p className="text-white font-heading text-lg">Blue Sapphire 2.5ct</p>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                                className="absolute bottom-20 right-0 bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20"
                            >
                                <p className="text-white/80 text-xs uppercase tracking-wider mb-2">Design Style</p>
                                <p className="text-white font-heading text-lg">Classic Solitaire</p>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 6, delay: 2 }}
                                className="absolute top-1/3 right-1/4 bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20"
                            >
                                <p className="text-white/80 text-xs uppercase tracking-wider mb-2">Metal</p>
                                <p className="text-white font-heading text-lg">18k White Gold</p>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CustomJewelryCTA;
