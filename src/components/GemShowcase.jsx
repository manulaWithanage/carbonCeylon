import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Gem } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCurrency } from '../context/CurrencyContext';
import { formatPrice } from '../utils/currency';

const GemShowcase = () => {
    const { featuredGemstones } = useProducts();
    const gems = featuredGemstones.slice(0, 4);
    const { currency } = useCurrency();

    return (
        <section className="py-24 bg-white relative">
            {/* Section Header */}
            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d9488]/10 rounded-full text-[#0d9488] text-xs tracking-[0.2em] uppercase mb-6">
                        <Gem className="w-4 h-4" />
                        Investment Grade
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-heading text-[#1c1917] mb-4">Featured Gemstones</h2>
                    <p className="text-[#44403c] max-w-xl mx-auto">
                        Hand-selected Ceylon gemstones, certified by the world's leading laboratories.
                    </p>
                </motion.div>

                {/* Gem Cards */}
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
                                <div className="relative bg-white border border-gray-200 shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#0d9488]/30 hover:-translate-y-1">
                                    {/* Image */}
                                    <div className="h-[280px] overflow-hidden relative bg-gradient-to-br from-stone-50 to-stone-100">
                                        <img
                                            src={gem.images[0]}
                                            alt={gem.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Badges */}
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            {gem.treatment === "Unheated" && (
                                                <span className="bg-[#0d9488] text-white text-[10px] px-2 py-1 uppercase tracking-wider flex items-center gap-1 shadow-sm">
                                                    <Shield className="w-3 h-3" /> Unheated
                                                </span>
                                            )}
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-white/90 backdrop-blur text-[#1c1917] text-[10px] px-2 py-1 uppercase tracking-wider shadow-sm">
                                                {gem.certificate}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-6 bg-white">
                                        <div className="flex justify-between items-start mb-2">
                                            <p className="text-[10px] tracking-[0.2em] uppercase text-[#0d9488] font-medium">{gem.gemType}</p>
                                            <p className="text-sm font-semibold">{gem.carat}ct</p>
                                        </div>
                                        <h3 className="text-lg font-heading text-[#1c1917] mb-1 group-hover:text-[#0d9488] transition-colors">{gem.name}</h3>
                                        <p className="text-gray-500 text-sm mb-3">{gem.origin}</p>
                                        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                                            <p className="text-[#0d9488] font-bold text-lg">{formatPrice(gem.priceUSD, currency)}</p>
                                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0d9488] group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        to="/gemstones"
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1c1917] uppercase tracking-widest text-sm font-medium hover:bg-[#1c1917] hover:text-white transition-all"
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
