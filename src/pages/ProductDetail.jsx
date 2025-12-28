import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Shield, Truck, Award } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCurrency } from '../context/CurrencyContext';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';

const ProductDetail = () => {
    const { slug } = useParams();
    const { getJewelryBySlug } = useProducts();
    const product = getJewelryBySlug(slug);
    const { currency } = useCurrency();
    const { addItem } = useCart();

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-heading mb-4">Product Not Found</h1>
                    <Link to="/collection" className="text-[#0d9488] underline">Back to Collection</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="premium-container">
                {/* Breadcrumb */}
                <Link to="/collection" className="inline-flex items-center gap-2 text-sm text-[#44403c] hover:text-[#0d9488] mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Collection
                </Link>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div className="aspect-square overflow-hidden bg-[#fafaf9]">
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute top-4 left-4 bg-[#0d9488] text-white px-3 py-1 text-xs uppercase tracking-wider">
                            {product.specs.treatment}
                        </div>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-2">{product.category}</p>
                            <h1 className="text-4xl font-heading mb-4">{product.name}</h1>
                            <p className="text-3xl text-[#0d9488] font-serif italic">{formatPrice(product.priceUSD, currency)}</p>
                        </div>

                        <p className="text-[#44403c] leading-relaxed">{product.description}</p>

                        {/* Specs */}
                        <div className="border-t border-b border-gray-200 py-6">
                            <h3 className="font-heading text-lg mb-4">Specifications</h3>
                            <dl className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <dt className="text-gray-500">Gem Weight</dt>
                                    <dd className="font-medium">{product.specs.gemWeight}</dd>
                                </div>
                                <div>
                                    <dt className="text-gray-500">Metal</dt>
                                    <dd className="font-medium">{product.specs.metal}</dd>
                                </div>
                                <div>
                                    <dt className="text-gray-500">Origin</dt>
                                    <dd className="font-medium">{product.specs.origin}</dd>
                                </div>
                                <div>
                                    <dt className="text-gray-500">Clarity</dt>
                                    <dd className="font-medium">{product.specs.clarity}</dd>
                                </div>
                            </dl>
                        </div>

                        {/* Add to Cart */}
                        <button
                            onClick={() => addItem(product)}
                            className="w-full py-4 bg-[#1c1917] text-white uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#0d9488] transition-colors"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            Add to Cart
                        </button>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="text-center">
                                <Shield className="w-6 h-6 mx-auto mb-2 text-[#0d9488]" />
                                <p className="text-xs">Certified Authentic</p>
                            </div>
                            <div className="text-center">
                                <Truck className="w-6 h-6 mx-auto mb-2 text-[#0d9488]" />
                                <p className="text-xs">Insured Shipping</p>
                            </div>
                            <div className="text-center">
                                <Award className="w-6 h-6 mx-auto mb-2 text-[#0d9488]" />
                                <p className="text-xs">Lifetime Warranty</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
