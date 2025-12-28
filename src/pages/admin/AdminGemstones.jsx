import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Pencil, Trash2, X, Search, Filter, AlertCircle } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import ImageUpload from '../../components/admin/ImageUpload';

const AdminGemstones = () => {
    const { gemstones, addGemstone, updateGemstone, deleteGemstone } = useProducts();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingGem, setEditingGem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        gemType: 'Sapphire',
        carat: 1.0,
        origin: 'Sri Lanka (Ceylon)',
        color: 'Royal Blue',
        clarity: 'VVS',
        treatment: 'Unheated',
        certificate: 'GIA',
        shape: 'Oval',
        priceUSD: 0,
        description: '',
        images: [''],
        featured: false
    });

    const resetForm = () => {
        setFormData({
            name: '',
            gemType: 'Sapphire',
            carat: 1.0,
            origin: 'Sri Lanka (Ceylon)',
            color: 'Royal Blue',
            clarity: 'VVS',
            treatment: 'Unheated',
            certificate: 'GIA',
            shape: 'Oval',
            priceUSD: 0,
            description: '',
            images: [''],
            featured: false
        });
        setEditingGem(null);
    };

    const openAddModal = () => {
        resetForm();
        setIsModalOpen(true);
    };

    const openEditModal = (gem) => {
        setEditingGem(gem);
        setFormData({
            name: gem.name,
            gemType: gem.gemType,
            carat: gem.carat,
            origin: gem.origin,
            color: gem.color,
            clarity: gem.clarity,
            treatment: gem.treatment,
            certificate: gem.certificate,
            shape: gem.shape,
            priceUSD: gem.priceUSD,
            description: gem.description,
            images: gem.images,
            featured: gem.featured
        });
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingGem) {
            updateGemstone(editingGem.id, formData);
        } else {
            addGemstone(formData);
        }
        setIsModalOpen(false);
        resetForm();
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this gemstone?')) {
            deleteGemstone(id);
        }
    };

    const filteredGemstones = gemstones.filter(gem =>
        gem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gem.gemType.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-heading text-white">Gemstones</h1>
                    <p className="text-gray-400 mt-1">{gemstones.length} total gemstones</p>
                </div>
                <button
                    onClick={openAddModal}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0d9488] text-white rounded-xl hover:bg-[#0f766e] transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Add Gemstone
                </button>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search gemstones..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#0d9488]"
                />
            </div>

            {/* Table */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Gemstone</th>
                                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Carat</th>
                                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Origin</th>
                                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                                <th className="text-right p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredGemstones.map((gem) => (
                                <tr key={gem.id} className="hover:bg-white/5">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <img src={gem.images[0]} alt={gem.name} className="w-12 h-12 rounded-lg object-cover" />
                                            <div>
                                                <p className="text-sm font-medium text-white">{gem.name}</p>
                                                <p className="text-xs text-gray-400">{gem.color}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-gray-300">{gem.gemType}</td>
                                    <td className="p-4 text-sm text-gray-300">{gem.carat} ct</td>
                                    <td className="p-4 text-sm text-gray-300">{gem.origin}</td>
                                    <td className="p-4 text-sm text-[#0d9488] font-bold">${gem.priceUSD.toLocaleString()}</td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => openEditModal(gem)}
                                                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(gem.id)}
                                                className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
                                    {editingGem ? 'Edit Gemstone' : 'Add New Gemstone'}
                                </h2>
                                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Name <span className="text-red-400">*</span></label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Type <span className="text-red-400">*</span></label>
                                        <select
                                            value={formData.gemType}
                                            onChange={(e) => setFormData({ ...formData, gemType: e.target.value })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                        >
                                            <optgroup label="Blue Tones" className="bg-[#1a1a1a]">
                                                <option value="Royal Blue Sapphire">Royal Blue Sapphire</option>
                                                <option value="Ceylon Blue Sapphire">Ceylon Blue Sapphire</option>
                                                <option value="Cornflower Sapphire">Cornflower Sapphire</option>
                                                <option value="Pastel Blue Sapphire">Pastel Blue Sapphire</option>
                                            </optgroup>
                                            <optgroup label="Pink Tones" className="bg-[#1a1a1a]">
                                                <option value="Vivid Pink Sapphire">Vivid Pink Sapphire</option>
                                                <option value="Hot Pink Sapphire">Hot Pink Sapphire</option>
                                                <option value="Pastel Pink Sapphire">Pastel Pink Sapphire</option>
                                            </optgroup>
                                            <optgroup label="Yellow/Orange Tones" className="bg-[#1a1a1a]">
                                                <option value="Golden Yellow Sapphire">Golden Yellow Sapphire</option>
                                                <option value="Canary Yellow Sapphire">Canary Yellow Sapphire</option>
                                                <option value="Pastel Yellow Sapphire">Pastel Yellow Sapphire</option>
                                                <option value="Orange Sapphire">Orange Sapphire</option>
                                            </optgroup>
                                            <optgroup label="Special Colors" className="bg-[#1a1a1a]">
                                                <option value="Padparadscha Sapphire">Padparadscha Sapphire</option>
                                                <option value="Peach Sapphire">Peach Sapphire</option>
                                                <option value="Purple Sapphire">Purple Sapphire</option>
                                                <option value="Champagne Sapphire">Champagne Sapphire</option>
                                            </optgroup>
                                            <optgroup label="Other Gems" className="bg-[#1a1a1a]">
                                                <option value="Pigeon Blood Ruby">Pigeon Blood Ruby</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Certificate</label>
                                        <select
                                            value={formData.certificate}
                                            onChange={(e) => setFormData({ ...formData, certificate: e.target.value })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                        >
                                            <option value="Certified" className="bg-[#1a1a1a]">Certified (Generic)</option>
                                            <option value="GIA" className="bg-[#1a1a1a]">GIA</option>
                                            <option value="GRS" className="bg-[#1a1a1a]">GRS</option>
                                            <option value="Gubelin" className="bg-[#1a1a1a]">Gubelin</option>
                                            <option value="AIG" className="bg-[#1a1a1a]">AIG</option>
                                            <option value="EGL" className="bg-[#1a1a1a]">EGL</option>
                                            <option value="" className="bg-[#1a1a1a]">None (Hide Badge)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Treatment</label>
                                        <select
                                            value={formData.treatment}
                                            onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                        >
                                            <option value="Unheated" className="bg-[#1a1a1a]">Unheated</option>
                                            <option value="Heated" className="bg-[#1a1a1a]">Heated</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Carat <span className="text-red-400">*</span></label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            value={formData.carat}
                                            onChange={(e) => setFormData({ ...formData, carat: parseFloat(e.target.value) })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Price (USD) <span className="text-red-400">*</span></label>
                                        <input
                                            type="number"
                                            value={formData.priceUSD}
                                            onChange={(e) => setFormData({ ...formData, priceUSD: parseInt(e.target.value) })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Origin</label>
                                        <input
                                            type="text"
                                            value={formData.origin}
                                            onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Color</label>
                                        <input
                                            type="text"
                                            value={formData.color}
                                            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0d9488]"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <ImageUpload
                                            value={formData.images[0]}
                                            onChange={(url) => setFormData({ ...formData, images: [url] })}
                                            required={true}
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
                                        {editingGem ? 'Update' : 'Create'}
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

export default AdminGemstones;
