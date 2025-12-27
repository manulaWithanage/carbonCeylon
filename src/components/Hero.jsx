import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Truck, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#fafaf9] via-white to-[#f5f5f4] overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />

            {/* Decorative Circle */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#0d9488]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#0d9488]/3 rounded-full blur-3xl" />

            <div className="relative z-10 premium-container min-h-screen flex items-center pt-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Trust Badge */}
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <span className="text-sm text-[#44403c]">Trusted by 2,500+ collectors worldwide</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-heading text-[#1c1917] leading-[1.1]">
                            Ceylon's Finest<br />
                            <span className="text-[#0d9488] italic font-light">Gemstones & Jewelry</span>
                        </h1>

                        <p className="text-lg text-[#44403c] max-w-lg leading-relaxed">
                            Ethically sourced, GIA-certified gemstones and bespoke jewelry crafted by master artisans.
                            Every piece tells a story of brilliance.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                to="/gemstones"
                                className="bg-[#0d9488] text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-[#0f766e] transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-[#0d9488]/20"
                            >
                                Explore Gemstones
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/jewelry"
                                className="px-8 py-4 uppercase tracking-widest text-sm font-medium border-2 border-[#1c1917] hover:bg-[#1c1917] hover:text-white transition-all duration-300"
                            >
                                Shop Jewelry
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-[#0d9488]/10 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-[#0d9488]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Certified Authentic</p>
                                    <p className="text-xs text-gray-500">GIA & GRS Certified</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-[#0d9488]/10 flex items-center justify-center">
                                    <Truck className="w-5 h-5 text-[#0d9488]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Insured Shipping</p>
                                    <p className="text-xs text-gray-500">Worldwide Delivery</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-[#0d9488]/10 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-[#0d9488]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Lifetime Guarantee</p>
                                    <p className="text-xs text-gray-500">Quality Assured</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Main Image Container */}
                        <div className="relative">
                            {/* Decorative border */}
                            <div className="absolute -inset-4 border border-[#0d9488]/20 -z-10" />
                            <div className="absolute -inset-8 border border-[#0d9488]/10 -z-20" />

                            <div className="relative overflow-hidden bg-gradient-to-br from-white to-[#fafaf9] shadow-2xl shadow-black/10">
                                <img
                                    src="/images/hero-ring.png"
                                    alt="Ceylon Blue Sapphire Ring"
                                    className="w-full h-[600px] object-cover"
                                />

                                {/* Floating Badge */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 shadow-xl"
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-[10px] tracking-[0.2em] uppercase text-[#0d9488] mb-1">Featured</p>
                                            <p className="font-heading text-xl">Royal Blue Sapphire</p>
                                            <p className="text-sm text-gray-500">2.5 Carat • Unheated • GIA Certified</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-[#0d9488]">$12,500</p>
                                            <Link to="/product/royal-blue-sapphire-ring" className="text-xs text-[#0d9488] underline">View Details</Link>
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

export default Hero;
