import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-[#fafaf9] overflow-hidden">
            {/* Background Decorative Graphic */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 right-0 w-1/2 h-full bg-white hidden lg:block skew-x-12 translate-x-20 z-0"
            />

            <div className="premium-container grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full pt-20">

                {/* Text Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1 border border-[#d4af37] text-[#d4af37] text-xs tracking-[0.3em] font-medium uppercase font-heading"
                    >
                        Est. 2025
                    </motion.div>

                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl lg:text-7xl leading-[1.1]"
                    >
                        Elegance from the <br />
                        <span className="italic font-light text-[#d4af37]">Heart of Ceylon</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg lg:text-xl text-[#44403c] max-w-md font-light leading-relaxed"
                    >
                        Discover the world's finest sapphires and bespoke jewelry, crafted to capture light and hearts alike.
                    </motion.p>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-6 pt-4"
                    >
                        <button className="bg-[#1c1917] text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-[#d4af37] transition-colors duration-300 flex items-center gap-2 group">
                            Explore Collection
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 uppercase tracking-widest text-xs font-bold border border-[#1c1917] hover:border-[#d4af37] hover:text-[#d4af37] transition-colors duration-300">
                            Bespoke Service
                        </button>
                    </motion.div>
                </div>

                {/* Image Content */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="relative h-[600px] flex items-center justify-center"
                >
                    <div className="absolute w-[90%] h-[90%] border-2 border-[#d4af37] opacity-30 top-4 right-4 z-0" />
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 w-full h-full overflow-hidden shadow-2xl"
                    >
                        <img
                            src="/images/hero-ring.png"
                            alt="Blue Sapphire Ring"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, type: "spring" }}
                        className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-[200px] hidden md:block z-20 border-t-4 border-[#d4af37]"
                    >
                        <p className="font-heading text-lg font-bold">Royal Blue</p>
                        <p className="text-sm text-gray-500">2.5 Carat Sapphire</p>
                        <p className="mt-2 text-[#d4af37] font-bold">$12,500</p>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
