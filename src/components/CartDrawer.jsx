import { AnimatePresence, motion } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { formatPrice } from '../utils/currency';

const CartDrawer = () => {
    const { items, isOpen, closeCart, removeItem, updateQuantity, totalPriceUSD } = useCart();
    const { currency } = useCurrency();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/50 z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="font-heading text-xl">Your Cart ({items.length})</h2>
                            <button onClick={closeCart} className="hover:text-[#0d9488] transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="text-center text-gray-500 py-12">
                                    Your cart is empty
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {items.map(item => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="w-24 h-24 bg-[#fafaf9] shrink-0">
                                                <img
                                                    src={item.images[0]}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium truncate">{item.name}</h4>
                                                <p className="text-sm text-gray-500">{item.category}</p>
                                                <p className="text-[#0d9488] font-serif italic mt-1">
                                                    {formatPrice(item.priceUSD, currency)}
                                                </p>

                                                <div className="flex items-center justify-between mt-3">
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-[#0d9488] transition-colors"
                                                        >
                                                            <Minus className="w-4 h-4" />
                                                        </button>
                                                        <span className="font-medium">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-[#0d9488] transition-colors"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t p-6 space-y-4">
                                <div className="flex justify-between text-lg">
                                    <span className="font-heading">Subtotal</span>
                                    <span className="font-bold text-[#0d9488]">{formatPrice(totalPriceUSD, currency)}</span>
                                </div>
                                <p className="text-xs text-gray-500">Shipping calculated at checkout</p>
                                <button className="w-full py-4 bg-[#0d9488] text-white uppercase tracking-widest hover:bg-[#0f766e] transition-colors">
                                    Checkout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
