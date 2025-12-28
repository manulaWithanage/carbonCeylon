import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const gemData = [
    {
        id: "blue",
        title: "Royal Blue",
        subtitle: "Ceylon Sapphire",
        color: "#1e40af",
        img: "/images/hero-sapphire-blue.png",
        desc: "Vivid blue sapphire engagement ring with diamond halo"
    },
    {
        id: "pink",
        title: "Vivid Pink",
        subtitle: "Ceylon Sapphire",
        color: "#ec4899",
        img: "/images/hero-sapphire-pink.png",
        desc: "Hot pink sapphire cocktail ring in rose gold"
    },
    {
        id: "yellow",
        title: "Canary Yellow",
        subtitle: "Ceylon Sapphire",
        color: "#eab308",
        img: "/images/hero-sapphire-yellow.png",
        desc: "Radiant yellow sapphire ring with diamond accents"
    }
];

const Hero = () => {
    const [activeGem, setActiveGem] = useState(0);

    const currentGem = gemData[activeGem];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-stone-50 via-white to-stone-100">

            {/* Animated gradient orb */}
            <motion.div
                className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: currentGem.color }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Preloader */}
            <div className="hidden">
                {gemData.map((gem) => <img key={gem.id} src={gem.img} alt="" />)}
            </div>

            <div className="premium-container relative z-10 w-full py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT - Content */}
                    <div className="space-y-12 text-center lg:text-left">

                        {/* Eyebrow with icon */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 justify-center lg:justify-start"
                        >
                            <Sparkles className="w-4 h-4 text-teal-600" />
                            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-500">
                                Ethically Sourced from Ceylon
                            </span>
                        </motion.div>

                        {/* Dynamic Headlines */}
                        <div className="space-y-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentGem.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h1 className="font-heading text-6xl lg:text-8xl font-bold leading-[0.95] text-stone-900">
                                        {currentGem.title}
                                    </h1>
                                    <p className="font-heading text-4xl lg:text-6xl italic text-stone-600 mt-3">
                                        {currentGem.subtitle}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-stone-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Discover the world's most coveted gemstones. Each piece meticulously selected for exceptional color, clarity, and brilliance.
                        </p>

                        {/* Color Selector */}
                        <div className="flex items-center gap-4 justify-center lg:justify-start">
                            <span className="text-sm font-medium text-stone-400 mr-2">EXPLORE</span>
                            {gemData.map((gem, index) => (
                                <button
                                    key={gem.id}
                                    onClick={() => setActiveGem(index)}
                                    className="group relative"
                                    aria-label={`View ${gem.title}`}
                                >
                                    <div
                                        className={`w-14 h-14 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${activeGem === index
                                                ? 'border-stone-900 scale-110'
                                                : 'border-stone-300 hover:border-stone-500 hover:scale-105'
                                            }`}
                                        style={{ borderColor: activeGem === index ? currentGem.color : undefined }}
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-full transition-all duration-500 ${activeGem === index ? 'scale-100' : 'scale-75 opacity-60'
                                                }`}
                                            style={{ backgroundColor: gem.color }}
                                        />
                                    </div>
                                    {activeGem === index && (
                                        <motion.div
                                            layoutId="activeGem"
                                            className="absolute -inset-2 rounded-full"
                                            style={{
                                                boxShadow: `0 0 20px ${gem.color}40`
                                            }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/gemstones"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-stone-900 text-white font-semibold text-sm tracking-wider uppercase hover:bg-stone-800 transition-all duration-300 shadow-xl hover:shadow-2xl"
                            >
                                View Collection
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/bespoke"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-stone-300 text-stone-900 font-semibold text-sm tracking-wider uppercase hover:border-stone-900 transition-all duration-300"
                            >
                                Custom Design
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT - Image */}
                    <div className="relative h-[500px] lg:h-[700px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentGem.id}
                                initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0"
                            >
                                {/* Image container with subtle glow */}
                                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-2xl">
                                    {/* Subtle gradient overlay */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br opacity-10 mix-blend-overlay"
                                        style={{
                                            background: `linear-gradient(135deg, ${currentGem.color}20, transparent 70%)`
                                        }}
                                    />

                                    <img
                                        src={currentGem.img}
                                        alt={currentGem.desc}
                                        className="w-full h-full object-cover object-center"
                                    />

                                    {/* Floating label */}
                                    <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-lg shadow-lg">
                                        <p className="text-xs font-bold tracking-wider uppercase text-stone-500 mb-1">
                                            Featured
                                        </p>
                                        <p className="text-lg font-heading text-stone-900">
                                            {currentGem.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative glow */}
                                <div
                                    className="absolute -inset-4 rounded-3xl blur-2xl opacity-30 -z-10"
                                    style={{ backgroundColor: currentGem.color }}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
