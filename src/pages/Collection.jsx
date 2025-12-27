import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { products, categories, gemTypes } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';

const Collection = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedGem, setSelectedGem] = useState('All');
    const [showFilters, setShowFilters] = useState(false);
    const { currency } = useCurrency();
    const { addItem } = useCart();

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
        const gemMatch = selectedGem === 'All' || product.gemType === selectedGem;
        return categoryMatch && gemMatch;
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
                    <h1 className="text-5xl font-heading mb-4">Our Collection</h1>
                    <p className="text-[#44403c] max-w-2xl mx-auto">
                        Each piece is handcrafted with the finest Ceylon gemstones,
                        selected for their exceptional color, clarity, and brilliance.
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
                            <button
                                onClick={() => setShowFilters(false)}
                                className="absolute top-4 right-4 md:hidden"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        )}

                        <div className="mb-8">
                            <h3 className="font-heading text-lg mb-4">Category</h3>
                            <div className="space-y-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => { setSelectedCategory(cat); setShowFilters(false); }}
                                        className={`block w-full text-left py-2 px-3 text-sm transition-colors ${selectedCategory === cat
                                                ? 'bg-[#0d9488] text-white'
                                                : 'hover:bg-[#f3e5ab]'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-heading text-lg mb-4">Gemstone</h3>
                            <div className="space-y-2">
                                {gemTypes.map(gem => (
                                    <button
                                        key={gem}
                                        onClick={() => { setSelectedGem(gem); setShowFilters(false); }}
                                        className={`block w-full text-left py-2 px-3 text-sm transition-colors ${selectedGem === gem
                                                ? 'bg-[#0d9488] text-white'
                                                : 'hover:bg-[#f3e5ab]'
                                            }`}
                                    >
                                        {gem}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <p className="text-sm text-[#44403c] mb-6">{filteredProducts.length} products</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <Link to={`/product/${product.slug}`}>
                                        <div className="relative overflow-hidden h-[350px] mb-4 bg-white">
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                    </Link>
                                    <div className="space-y-2">
                                        <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500">{product.category}</p>
                                        <Link to={`/product/${product.slug}`}>
                                            <h3 className="font-heading text-lg group-hover:text-[#0d9488] transition-colors">{product.name}</h3>
                                        </Link>
                                        <p className="text-[#0d9488] font-serif italic">{formatPrice(product.priceUSD, currency)}</p>
                                        <button
                                            onClick={() => addItem(product)}
                                            className="w-full mt-3 py-3 bg-[#1c1917] text-white text-xs uppercase tracking-widest hover:bg-[#0d9488] transition-colors"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
