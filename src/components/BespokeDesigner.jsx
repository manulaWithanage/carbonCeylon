import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Upload, Sparkles, Phone, X, ShoppingBag } from 'lucide-react';
import { gemCuts, metalOptions, jewelryTypes } from '../data/bespokeOptions';
import { useProducts } from '../context/ProductContext';
import { generateJewelryDescription, generateJewelryImage } from '../utils/gemini';
import { useCurrency } from '../context/CurrencyContext';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';
import GemShapeIcon from './GemShapeIcon';

const BespokeDesigner = () => {
    const [searchParams] = useSearchParams();
    const { currency } = useCurrency();
    const { addItem } = useCart();
    const { jewelry, gemstones, getGemstoneBySlug, getGemstoneById } = useProducts();

    // Group jewelry by category for the store integration
    const jewelryByCategory = useMemo(() => {
        return {
            Rings: jewelry.filter(j => j.category === 'Rings'),
            Pendants: jewelry.filter(j => j.category === 'Pendants'),
            Earrings: jewelry.filter(j => j.category === 'Earrings')
        };
    }, []);

    // Initial state with defaults - check for gem from URL params
    const gemSlug = searchParams.get('gem');
    const gemId = searchParams.get('gemId');
    const preselectedGem = gemSlug ? getGemstoneBySlug(gemSlug) : (gemId ? getGemstoneById(gemId) : null);

    const [config, setConfig] = useState({
        selectedGemstone: preselectedGem || gemstones[0] || null, // Use first gemstone as default
        metal: '18k White Gold',
        jewelryType: 'Ring', // Category: Ring, Pendant, or Earrings
        selectedJewelry: null, // Specific jewelry item from store
        cut: preselectedGem?.shape || 'Round Brilliant',
        carat: preselectedGem?.carat || 1.5,
    });

    const [showPreview, setShowPreview] = useState(false);
    const [aiDescription, setAiDescription] = useState('');
    const [generatedImage, setGeneratedImage] = useState(null);
    const [isGenerating, setIsGenerating] = useState(false);

    // Get jewelry items for current category
    const currentCategoryJewelry = jewelryByCategory[config.jewelryType === 'Ring' ? 'Rings' : config.jewelryType === 'Pendant' ? 'Pendants' : 'Earrings'] || [];

    const updateConfig = (key, value) => {
        setConfig(prev => ({ ...prev, [key]: value }));
        if (showPreview) setShowPreview(false);
        setGeneratedImage(null);
    };

    const selectJewelryType = (typeName) => {
        setConfig(prev => ({
            ...prev,
            jewelryType: typeName,
            selectedJewelry: null // Reset specific selection when changing category
        }));
        setGeneratedImage(null);
    };

    const selectSpecificJewelry = (jewelryItem) => {
        setConfig(prev => ({
            ...prev,
            selectedJewelry: jewelryItem
        }));
        setGeneratedImage(null);
    };

    // Get the current display image
    const getCurrentImage = () => {
        if (generatedImage) return generatedImage;
        if (config.selectedJewelry) return config.selectedJewelry.images[0];
        const typeDefault = jewelryTypes.find(t => t.name === config.jewelryType);
        return typeDefault?.image || "/images/hero-ring.png";
    };

    const generateAIPreview = async () => {
        setIsGenerating(true);
        setGeneratedImage(null);

        const baseImageUrl = getCurrentImage();

        const [description, image] = await Promise.all([
            generateJewelryDescription(config),
            generateJewelryImage(config, baseImageUrl)
        ]);

        setAiDescription(description);
        setGeneratedImage(image);
        setIsGenerating(false);
    };

    const handleAddSelectedJewelryToCart = () => {
        if (config.selectedJewelry) {
            addItem({
                ...config.selectedJewelry,
                customization: {
                    gemstone: config.selectedGemstone?.name || 'Custom',
                    gemColor: config.selectedGemstone?.color || 'N/A',
                    cut: config.cut,
                    carat: config.carat,
                    metal: config.metal
                }
            });
        }
    };

    return (
        <div className="h-screen bg-[#fafaf9] pt-20 pb-4 overflow-hidden">
            <div className="flex-1 max-w-[1920px] mx-auto w-full px-4 lg:px-6 h-full">
                <div className="grid lg:grid-cols-12 gap-6 h-full">

                    {/* LEFT COLUMN - VISUALIZER */}
                    <div className="lg:col-span-7 flex flex-col h-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white relative group">
                        {/* Header overlay */}
                        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10 bg-gradient-to-b from-black/40 to-transparent pointer-events-none">
                            <div>
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs tracking-wider uppercase mb-1 border border-white/30">
                                    <Sparkles className="w-3 h-3" />
                                    Gem Visualizer
                                </span>
                                <h2 className="text-white font-heading text-2xl drop-shadow-md">
                                    {config.selectedJewelry?.name || config.jewelryType || "Select Jewelry"}
                                </h2>
                                {config.selectedGemstone && (
                                    <p className="text-white/80 text-sm mt-1">
                                        with {config.selectedGemstone.color} ({config.selectedGemstone.carat}ct)
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Main Image */}
                        <div className="w-full h-full flex items-center justify-center bg-[#f0f0f0] relative">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={generatedImage || config.selectedJewelry?.id || config.jewelryType}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    src={getCurrentImage()}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                            {/* Loading overlay */}
                            {isGenerating && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <Sparkles className="w-8 h-8 mx-auto animate-pulse mb-2" />
                                        <p className="text-sm">AI is customizing your jewelry...</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* AI Description Overlay */}
                        <AnimatePresence>
                            {showPreview && aiDescription && (
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "100%" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute bottom-0 left-0 right-0 p-8 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-20 max-h-[60%] overflow-y-auto"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="font-heading text-xl text-[#0d9488] flex items-center gap-2">
                                                <Sparkles className="w-5 h-5" />
                                                AI Analysis
                                            </h4>
                                        </div>
                                        <button onClick={() => setShowPreview(false)} className="p-2 hover:bg-gray-100 rounded-full">
                                            <X className="w-5 h-5 text-gray-400" />
                                        </button>
                                    </div>
                                    <div className="prose prose-sm text-gray-600 whitespace-pre-line">{aiDescription}</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* RIGHT COLUMN - CUSTOMIZATION PANEL */}
                    <div className="lg:col-span-5 flex flex-col bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden h-full">
                        <div className="p-3 border-b border-gray-100 bg-gray-50/50 flex-shrink-0">
                            <h3 className="font-heading text-base text-[#1c1917]">Configuration</h3>
                            {config.gemData && (
                                <p className="text-xs text-[#0d9488] mt-1">Customizing with: {config.gemData.name}</p>
                            )}
                        </div>

                        <div className="flex-1 overflow-y-auto p-3 space-y-4 custom-scrollbar">

                            {/* 1. Jewelry Category */}
                            <section>
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 block">Jewelry Type</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {jewelryTypes.map((type) => (
                                        <button
                                            key={type.name}
                                            onClick={() => selectJewelryType(type.name)}
                                            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${config.jewelryType === type.name
                                                ? 'border-[#0d9488] ring-2 ring-[#0d9488]/20'
                                                : 'border-transparent hover:border-gray-200'
                                                }`}
                                        >
                                            <img src={type.image} alt={type.name} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/40" />
                                            <div className="absolute bottom-1 left-0 right-0 text-center">
                                                <span className="text-[9px] text-white font-medium uppercase">{type.name}</span>
                                            </div>
                                            {config.jewelryType === type.name && (
                                                <div className="absolute top-1 right-1 w-4 h-4 bg-[#0d9488] rounded-full flex items-center justify-center">
                                                    <Check className="w-2.5 h-2.5 text-white" />
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* 2. Specific Jewelry from Store */}
                            <section>
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                                    Select from Store ({currentCategoryJewelry.length} available)
                                </label>
                                <div className="space-y-1.5 max-h-32 overflow-y-auto">
                                    {currentCategoryJewelry.length > 0 ? currentCategoryJewelry.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => selectSpecificJewelry(item)}
                                            className={`w-full flex items-center gap-3 p-2 rounded-lg border transition-all text-left ${config.selectedJewelry?.id === item.id
                                                ? 'border-[#0d9488] bg-[#0d9488]/5'
                                                : 'border-gray-100 hover:border-gray-200'
                                                }`}
                                        >
                                            <img src={item.images[0]} alt={item.name} className="w-12 h-12 rounded object-cover" />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-xs font-medium text-gray-800 truncate">{item.name}</p>
                                                <p className="text-[10px] text-[#0d9488]">{formatPrice(item.priceUSD, currency)}</p>
                                            </div>
                                            {config.selectedJewelry?.id === item.id && (
                                                <Check className="w-4 h-4 text-[#0d9488] flex-shrink-0" />
                                            )}
                                        </button>
                                    )) : (
                                        <p className="text-xs text-gray-400 text-center py-4">No jewelry in this category yet</p>
                                    )}
                                </div>
                            </section>

                            {/* 3. Gemstone Selection */}
                            <section>
                                <div className="flex justify-between items-center mb-3">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Gemstone</label>
                                    <span className="text-xs font-medium text-[#0d9488]">{config.selectedGemstone?.color || 'None'}</span>
                                </div>
                                <div className="flex flex-col gap-2.5 max-h-56 overflow-y-auto pr-1 custom-scrollbar">
                                    {gemstones.map((gem) => (
                                        <button
                                            key={gem.id}
                                            onClick={() => updateConfig('selectedGemstone', gem)}
                                            className={`p-3 rounded-xl border-2 flex items-center gap-3 transition-all text-left hover:shadow-lg ${config.selectedGemstone?.id === gem.id
                                                ? 'border-[#0d9488] bg-[#0d9488]/10 shadow-md'
                                                : 'border-gray-200 hover:border-[#0d9488]/50'
                                                }`}
                                        >
                                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
                                                {gem.images?.[0] ? (
                                                    <img src={gem.images[0]} alt={gem.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-8 h-8 rounded-full shadow-inner" style={{ backgroundColor: gem.color }} />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold text-gray-900 leading-tight mb-1.5">{gem.color}</p>
                                                <p className="text-xs text-gray-700 font-semibold mb-1.5">{gem.carat}ct • {formatPrice(gem.priceUSD, currency)}</p>
                                                <div className="flex gap-1.5 flex-wrap">
                                                    <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">{gem.clarity}</span>
                                                    <span className="text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md font-medium">{gem.treatment}</span>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* 4. Metal Type */}
                            <section>
                                <div className="flex justify-between items-center mb-3">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Metal</label>
                                    <span className="text-[10px] font-medium text-[#1c1917]">{config.metal}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {metalOptions.map((metal) => (
                                        <button
                                            key={metal.code}
                                            onClick={() => updateConfig('metal', metal.name)}
                                            className={`px-3 py-1.5 rounded-full text-[10px] font-medium border transition-all flex items-center gap-1.5 ${config.metal === metal.name
                                                ? 'border-[#0d9488] bg-[#1c1917] text-white'
                                                : 'border-gray-200 text-gray-600 bg-white'
                                                }`}
                                        >
                                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: metal.hex }} />
                                            {metal.name}
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* 5. Cut & Shape */}
                            <section>
                                <div className="flex justify-between items-center mb-3">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Cut</label>
                                    <span className="text-[10px] font-medium text-[#1c1917]">{config.cut}</span>
                                </div>
                                <div className="grid grid-cols-5 gap-1.5">
                                    {gemCuts.slice(0, 10).map((cut) => (
                                        <button
                                            key={cut.name}
                                            onClick={() => updateConfig('cut', cut.name)}
                                            className={`aspect-square rounded-lg border-2 flex flex-col items-center justify-center p-1.5 transition-all ${config.cut === cut.name
                                                ? 'border-[#0d9488] bg-[#0d9488]/10 text-[#0d9488]'
                                                : 'border-gray-200 text-gray-400 bg-white hover:border-[#0d9488]/50'
                                                }`}
                                        >
                                            <GemShapeIcon shape={cut.name} className="w-6 h-6 mb-0.5" />
                                            <span className="text-[7px] font-medium text-center leading-tight">{cut.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* 6. Carat */}
                            <section>
                                <div className="flex justify-between mb-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Carat</label>
                                    <span className="text-xs font-bold text-[#0d9488]">{config.carat} ct</span>
                                </div>
                                <input
                                    type="range" min="0.5" max="10" step="0.1"
                                    value={config.carat}
                                    onChange={(e) => updateConfig('carat', parseFloat(e.target.value))}
                                    className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#0d9488]"
                                />
                            </section>
                        </div>

                        {/* Actions */}
                        <div className="p-5 border-t border-gray-100 bg-gray-50 flex-shrink-0 space-y-3">
                            <button
                                onClick={generateAIPreview}
                                disabled={isGenerating}
                                className={`w-full py-2.5 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all ${isGenerating
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-[#1c1917] to-[#44403c] text-white hover:to-[#0d9488]'
                                    }`}
                            >
                                <Sparkles className="w-4 h-4" />
                                {isGenerating ? 'Generating...' : 'Visualize'}
                            </button>

                            {config.selectedJewelry && (
                                <button
                                    onClick={handleAddSelectedJewelryToCart}
                                    className="w-full py-2.5 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 border-2 border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white transition-all"
                                >
                                    <ShoppingBag className="w-4 h-4" />
                                    Add to Cart - {formatPrice(config.selectedJewelry.priceUSD, currency)}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BespokeDesigner;
