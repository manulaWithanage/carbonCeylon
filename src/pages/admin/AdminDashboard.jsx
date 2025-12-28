import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gem, Sparkles, TrendingUp, ShoppingCart, ArrowRight, RefreshCw } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import { useCart } from '../../context/CartContext';

const AdminDashboard = () => {
    const { gemstones, jewelry, featuredGemstones, featuredJewelry, resetToDefaults } = useProducts();
    const { totalItems } = useCart();

    const stats = [
        {
            label: 'Total Gemstones',
            value: gemstones.length,
            icon: Gem,
            color: 'from-blue-500 to-blue-600',
            link: '/admin/gemstones'
        },
        {
            label: 'Total Jewelry',
            value: jewelry.length,
            icon: Sparkles,
            color: 'from-purple-500 to-purple-600',
            link: '/admin/jewelry'
        },
        {
            label: 'Featured Items',
            value: featuredGemstones.length + featuredJewelry.length,
            icon: TrendingUp,
            color: 'from-[#0d9488] to-[#0f766e]',
            link: '/admin'
        },
        {
            label: 'Cart Items',
            value: totalItems,
            icon: ShoppingCart,
            color: 'from-orange-500 to-orange-600',
            link: '/admin'
        },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-heading text-white">Dashboard</h1>
                <p className="text-gray-400 mt-1">Welcome to Carbon Ceylon Store Management</p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            to={stat.link}
                            className="block p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-3xl font-bold text-white">{stat.value}</p>
                            <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Gemstones */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-heading text-white">Recent Gemstones</h2>
                        <Link to="/admin/gemstones" className="text-[#0d9488] text-sm flex items-center gap-1 hover:underline">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="space-y-3">
                        {gemstones.slice(0, 4).map((gem) => (
                            <div key={gem.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                                <img src={gem.images[0]} alt={gem.name} className="w-12 h-12 rounded-lg object-cover" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white truncate">{gem.name}</p>
                                    <p className="text-xs text-gray-400">{gem.carat} ct • {gem.origin}</p>
                                </div>
                                <p className="text-sm text-[#0d9488] font-bold">${gem.priceUSD.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Jewelry */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-heading text-white">Recent Jewelry</h2>
                        <Link to="/admin/jewelry" className="text-[#0d9488] text-sm flex items-center gap-1 hover:underline">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="space-y-3">
                        {jewelry.slice(0, 4).map((item) => (
                            <div key={item.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                                <img src={item.images[0]} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white truncate">{item.name}</p>
                                    <p className="text-xs text-gray-400">{item.category}</p>
                                </div>
                                <p className="text-sm text-[#0d9488] font-bold">${item.priceUSD.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
                <button
                    onClick={() => {
                        if (window.confirm('Reset all products to default data? This will remove any custom additions.')) {
                            resetToDefaults();
                        }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-colors"
                >
                    <RefreshCw className="w-4 h-4" />
                    Reset to Defaults
                </button>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                    View Live Store
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
