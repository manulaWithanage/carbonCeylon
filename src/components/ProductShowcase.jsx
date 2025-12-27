import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getFeaturedProducts } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';

const ProductShowcase = () => {
    const products = getFeaturedProducts().slice(0, 3);
    const { currency } = useCurrency();
    const { addItem } = useCart();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="py-24 bg-white">
            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl font-heading text-[#1c1917]">Curated Masterpieces</h2>
                    <div className="w-24 h-1 bg-[#d4af37] mx-auto" />
                    <p className="text-[#44403c] max-w-2xl mx-auto font-light">
                        Each piece is a testament to nature's beauty and human craftsmanship.
                        Hand-selected, ethically sourced, and perfectly cut.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {products.map((product) => (
                        <motion.div key={product.id} variants={item} className="group">
                            <Link to={`/product/${product.slug}`}>
                                <div className="relative overflow-hidden h-[450px] mb-6 bg-[#fafaf9]">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors duration-500" />
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.7 }}
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Link>
                            <div className="text-center space-y-2">
                                <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500">{product.category}</p>
                                <Link to={`/product/${product.slug}`}>
                                    <h3 className="text-xl font-heading font-medium group-hover:text-[#d4af37] transition-colors">{product.name}</h3>
                                </Link>
                                <p className="text-[#d4af37] font-serif italic text-lg">{formatPrice(product.priceUSD, currency)}</p>
                                <button
                                    onClick={() => addItem(product)}
                                    className="mt-3 px-8 py-3 bg-[#1c1917] text-white text-xs uppercase tracking-widest hover:bg-[#d4af37] transition-colors"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-20"
                >
                    <Link
                        to="/collection"
                        className="text-[#1c1917] border-b border-[#1c1917] pb-1 uppercase tracking-widest hover:text-[#d4af37] hover:border-[#d4af37] transition-colors hover:tracking-[0.2em] duration-300 text-sm"
                    >
                        View All Collections
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductShowcase;
