import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, X, Shield, Gem } from 'lucide-react';
import { gemCategories } from '../data/products';
import { useProducts } from '../context/ProductContext';
import { useCurrency } from '../context/CurrencyContext';
import { formatPrice } from '../utils/currency';

const Gemstones = () => {
    const { gemstones } = useProducts();
    const [selectedGem, setSelectedGem] = useState('All');
    const [selectedTreatment, setSelectedTreatment] = useState('All');
    const [showFilters, setShowFilters] = useState(false);
    const { currency } = useCurrency();

    const filteredGems = gemstones.filter(gem => {
        const gemMatch = selectedGem === 'All' || gem.gemType === selectedGem;
        const treatmentMatch = selectedTreatment === 'All' || gem.treatment === selectedTreatment;
        return gemMatch && treatmentMatch;
    });

    return (
        <div className="min-h-screen bg-[#fafaf9] pt-32 pb-20">
            <div className="premium-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d9488]/10 rounded-full text-[#0d9488] text-xs tracking-[0.2em] uppercase mb-6">
                        <Gem className="w-4 h-4" />
                        Investment Grade
                    </div>
                    <h1 className="text-5xl font-heading text-[#1c1917] mb-4">Loose Gemstones</h1>
                    <p className="text-[#44403c] max-w-2xl mx-auto">
                        Investment-grade gemstones from Ceylon. Each stone is certified, ethically sourced,
                        and selected for exceptional color, clarity, and brilliance.
                    </p>
                </motion.div>

                {/* Filter Toggle (Mobile) */}
                <div className="md:hidden mb-6">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center gap-2 px-4 py-2 border border-[#1c1917] text-sm uppercase tracking-wider"
                    >
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>
                </div>

                <div className="flex gap-12">
                    {/* Sidebar Filters */}
                    <motion.aside
                        className={`${showFilters ? 'fixed inset-0 z-50 bg-white p-8' : 'hidden'} md:block md:relative md:w-64 md:shrink-0`}
                    >
                        {showFilters && (
                            <button onClick={() => setShowFilters(false)} className="absolute top-4 right-4 md:hidden">
                                <X className="w-6 h-6" />
                            </button>
                        )}

                        <div className="mb-8">
                            <h3 className="font-heading text-lg text-[#1c1917] mb-4">Gemstone Type</h3>
                            <div className="space-y-1">
                                {gemCategories.map(gem => (
                                    <button
                                        key={gem}
                                        onClick={() => { setSelectedGem(gem); setShowFilters(false); }}
                                        className={`block w-full text-left py-2 px-3 text-sm transition-colors rounded ${selectedGem === gem
                                            ? 'bg-[#0d9488] text-white'
                                            : 'text-[#44403c] hover:bg-[#0d9488]/10'
                                            }`}
                                    >
                                        {gem}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-heading text-lg text-[#1c1917] mb-4">Treatment</h3>
                            <div className="space-y-1">
                                {['All', 'Unheated', 'Heated'].map(treatment => (
                                    <button
                                        key={treatment}
                                        onClick={() => { setSelectedTreatment(treatment); setShowFilters(false); }}
                                        className={`block w-full text-left py-2 px-3 text-sm transition-colors rounded ${selectedTreatment === treatment
                                            ? 'bg-[#0d9488] text-white'
                                            : 'text-[#44403c] hover:bg-[#0d9488]/10'
                                            }`}
                                    >
                                        {treatment}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.aside>

                    {/* Grid */}
                    <div className="flex-1">
                        <p className="text-sm text-[#44403c] mb-6">{filteredGems.length} gemstones</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredGems.map((gem, index) => (
                                <motion.div
                                    key={gem.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group"
                                >
                                    <Link to={`/gemstone/${gem.slug}`}>
                                        <div className="relative bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#0d9488]/30 hover:-translate-y-1">
                                            <div className="h-[280px] overflow-hidden relative">
                                                <img src={gem.images[0]} alt={gem.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                                                {/* Badges */}
                                                <div className="absolute top-4 left-4 flex gap-2">
                                                    {gem.treatment === "Unheated" && (
                                                        <span className="bg-[#0d9488] text-white text-[10px] px-2 py-1 uppercase tracking-wider flex items-center gap-1 shadow-sm">
                                                            <Shield className="w-3 h-3" /> Unheated
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="absolute top-4 right-4">
                                                    {gem.certificate && gem.certificate !== "" && (
                                                        <span className="bg-white/90 text-[#1c1917] text-[10px] px-2 py-1 uppercase tracking-wider shadow-sm">
                                                            {gem.certificate}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-2">
                                                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#0d9488] font-medium">{gem.gemType}</p>
                                                    <p className="font-semibold">{gem.carat}ct</p>
                                                </div>
                                                <h3 className="text-lg font-heading text-[#1c1917] mb-1 group-hover:text-[#0d9488] transition-colors">{gem.name}</h3>
                                                <p className="text-gray-500 text-sm mb-3">{gem.origin}</p>
                                                <p className="text-[#0d9488] font-bold text-lg">{formatPrice(gem.priceUSD, currency)}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gemstones;
