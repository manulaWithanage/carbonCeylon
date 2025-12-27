import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Shield } from 'lucide-react';
import { getFeaturedGemstones } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';
import { formatPrice } from '../utils/currency';

const GemShowcase = () => {
    const gems = getFeaturedGemstones().slice(0, 4);
    const { currency } = useCurrency();

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0d9488]/30 to-transparent" />

            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#0d9488] text-xs tracking-[0.3em] uppercase mb-4 block">Investment Grade</span>
                    <h2 className="text-4xl font-heading text-white mb-4">Featured Gemstones</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Certified, unheated Ceylon gemstones selected for exceptional color, clarity, and investment value.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {gems.map((gem, index) => (
                        <motion.div
                            key={gem.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link to={`/gemstone/${gem.slug}`}>
                                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#0d9488]/30">
                                    {/* Image */}
                                    <div className="h-[280px] overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.7 }}
                                            src={gem.images[0]}
                                            alt={gem.name}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Badges */}
                                        <div className="absolute top-4 left-4 z-20 flex gap-2">
                                            {gem.treatment === "Unheated" && (
                                                <span className="bg-[#0d9488] text-white text-[10px] px-2 py-1 uppercase tracking-wider flex items-center gap-1">
                                                    <Shield className="w-3 h-3" /> Unheated
                                                </span>
                                            )}
                                            <span className="bg-white/10 backdrop-blur text-white text-[10px] px-2 py-1 uppercase tracking-wider">
                                                {gem.certificate}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-6 relative z-20">
                                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#0d9488] mb-2">{gem.gemType} • {gem.carat}ct</p>
                                        <h3 className="text-lg font-heading text-white mb-2 group-hover:text-[#0d9488] transition-colors">{gem.name}</h3>
                                        <p className="text-gray-500 text-sm mb-3">{gem.origin}</p>
                                        <div className="flex justify-between items-center">
                                            <p className="text-[#0d9488] font-semibold text-lg">{formatPrice(gem.priceUSD, currency)}</p>
                                            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#0d9488] group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        to="/gemstones"
                        className="inline-flex items-center gap-2 text-white border border-white/20 px-8 py-4 uppercase tracking-widest text-sm hover:border-[#0d9488] hover:text-[#0d9488] transition-all"
                    >
                        View All Gemstones
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default GemShowcase;
