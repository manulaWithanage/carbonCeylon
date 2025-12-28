import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Pencil, Trash2, X, Search } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';

const AdminJewelry = () => {
    const { jewelry, addJewelry, updateJewelry, deleteJewelry } = useProducts();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        category: 'Rings',
        gemType: 'Sapphire',
        priceUSD: 0,
        description: '',
        specs: { gemWeight: '', metal: '18k White Gold', origin: '', clarity: '', treatment: '' },
        images: [''],
        featured: false
    });

    const resetForm = () => {
        setFormData({
            name: '',
            category: 'Rings',
            gemType: 'Sapphire',
            priceUSD: 0,
            description: '',
            specs: { gemWeight: '', metal: '18k White Gold', origin: '', clarity: '', treatment: '' },
            images: [''],
            featured: false
        });
        setEditingItem(null);
    };

    const openAddModal = () => {
        resetForm();
        setIsModalOpen(true);
    };

    const openEditModal = (item) => {
        setEditingItem(item);
        setFormData({
            name: item.name,
            category: item.category,
            gemType: item.gemType,
            priceUSD: item.priceUSD,
            description: item.description,
            specs: item.specs || { gemWeight: '', metal: '', origin: '', clarity: '', treatment: '' },
            images: item.images,
            featured: item.featured
        });
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingItem) {
            updateJewelry(editingItem.id, formData);
        } else {
            addJewelry(formData);
        }
        setIsModalOpen(false);
        resetForm();
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this jewelry item?')) {
            deleteJewelry(id);
        }
    };

    const filteredJewelry = jewelry.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-heading text-white">Jewelry</h1>
                    <p className="text-gray-400 mt-1">{jewelry.length} total items</p>
                </div>
                <button
                    onClick={openAddModal}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0d9488] text-white rounded-xl hover:bg-[#0f766e] transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Add Jewelry
                </button>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search jewelry..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#0d9488]"
                />
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredJewelry.map((item) => (
                    <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group"
                    >
                        <div className="aspect-square relative">
                            <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button
                                    onClick={() => openEditModal(item)}
                                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                                >
                                    <Pencil className="w-5 h-5 text-white" />
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="p-3 bg-red-500/50 rounded-full hover:bg-red-500 transition-colors"
                                >
                                    <Trash2 className="w-5 h-5 text-white" />
                                </button>
                            </div>
                            {item.featured && (
                                <span className="absolute top-2 left-2 px-2 py-1 bg-[#0d9488] text-white text-xs rounded">Featured</span>
                            )}
                        </div>
                        <div className="p-4">
                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.category}</p>
                            <h3 className="text-white font-heading text-lg truncate">{item.name}</h3>
                            <p className="text-[#0d9488] font-bold mt-2">${item.priceUSD.toLocaleString()}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-[#1a1a1a] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between p-6 border-b border-white/10">
                                <h2 className="text-xl font-heading text-white">
                                    {editingItem ? 'Edit Jewelry' : 'Add New Jewelry'}
                                </h2>
                                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Category</label>
                                        <select
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                        >
                                            <option value="Rings">Rings</option>
                                            <option value="Pendants">Pendants</option>
                                            <option value="Earrings">Earrings</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Price (USD)</label>
                                        <input
                                            type="number"
                                            value={formData.priceUSD}
                                            onChange={(e) => setFormData({ ...formData, priceUSD: parseInt(e.target.value) })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Gem Type</label>
                                        <select
                                            value={formData.gemType}
                                            onChange={(e) => setFormData({ ...formData, gemType: e.target.value })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                        >
                                            <option value="Sapphire">Sapphire</option>
                                            <option value="Ruby">Ruby</option>
                                            <option value="Emerald">Emerald</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Metal</label>
                                        <input
                                            type="text"
                                            value={formData.specs.metal}
                                            onChange={(e) => setFormData({ ...formData, specs: { ...formData.specs, metal: e.target.value } })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Image URL</label>
                                        <input
                                            type="text"
                                            value={formData.images[0]}
                                            onChange={(e) => setFormData({ ...formData, images: [e.target.value] })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">Description</label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        rows={3}
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488] resize-none"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="featured"
                                        checked={formData.featured}
                                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                                        className="w-4 h-4 accent-[#0d9488]"
                                    />
                                    <label htmlFor="featured" className="text-sm text-gray-400">Featured</label>
                                </div>
                                <div className="flex gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex-1 py-3 border border-white/10 text-gray-400 rounded-xl hover:bg-white/5 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 py-3 bg-[#0d9488] text-white rounded-xl hover:bg-[#0f766e] transition-colors font-bold"
                                    >
                                        {editingItem ? 'Update' : 'Create'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminJewelry;
