import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getFeaturedJewelry } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';

const JewelryShowcase = () => {
    const products = getFeaturedJewelry().slice(0, 3);
    const { currency } = useCurrency();
    const { addItem } = useCart();

    return (
        <section className="py-24 bg-[#fafaf9]">
            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#0d9488] text-xs tracking-[0.3em] uppercase mb-4 block">Handcrafted Excellence</span>
                    <h2 className="text-4xl font-heading text-[#1c1917] mb-4">Fine Jewelry Collection</h2>
                    <div className="w-24 h-1 bg-[#0d9488] mx-auto mb-6" />
                    <p className="text-[#44403c] max-w-xl mx-auto">
                        Each piece is meticulously handcrafted by master artisans, featuring our signature Ceylon gemstones.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group"
                        >
                            <Link to={`/product/${product.slug}`}>
                                <div className="relative overflow-hidden h-[450px] mb-6 bg-white shadow-lg">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 z-10 transition-colors duration-500" />
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.7 }}
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Link>
                            <div className="text-center space-y-3">
                                <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500">{product.category}</p>
                                <Link to={`/product/${product.slug}`}>
                                    <h3 className="text-xl font-heading group-hover:text-[#0d9488] transition-colors">{product.name}</h3>
                                </Link>
                                <p className="text-[#0d9488] font-serif italic text-lg">{formatPrice(product.priceUSD, currency)}</p>
                                <button
                                    onClick={() => addItem(product)}
                                    className="mt-4 px-8 py-3 bg-[#1c1917] text-white text-xs uppercase tracking-widest hover:bg-[#0d9488] transition-colors"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link
                        to="/jewelry"
                        className="inline-flex items-center gap-2 text-[#1c1917] border-b-2 border-[#1c1917] pb-2 uppercase tracking-widest text-sm hover:text-[#0d9488] hover:border-[#0d9488] transition-all"
                    >
                        View Full Collection
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default JewelryShowcase;
