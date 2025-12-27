import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Upload, Sparkles, Phone } from 'lucide-react';
import { gemCuts, metalOptions, jewelryTypes, sapphireColors } from '../data/bespokeOptions';

const BespokeDesigner = () => {
    const [step, setStep] = useState(1);
    const [config, setConfig] = useState({
        color: '',
        metal: '',
        jewelryType: '',
        cut: '',
        carat: 1.5,
        lengthWidthRatio: 1.2,
        refractionDepth: 'Medium',
        referenceImage: null,
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        comments: ''
    });
    const [showPreview, setShowPreview] = useState(false);
    const [aiDescription, setAiDescription] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const updateConfig = (key, value) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };

    const generateAIPreview = async () => {
        setIsGenerating(true);
        // Simulated AI response - replace with actual Gemini API call
        const colorData = sapphireColors.find(c => c.name === config.color);
        const metalData = metalOptions.find(m => m.name === config.metal);
        const cutData = gemCuts.find(c => c.name === config.cut);

        const description = `
**Your Custom ${config.color} Sapphire ${config.jewelryType}**

🌟 **Color Interaction**: The ${config.color} sapphire's ${colorData?.description.toLowerCase()} tones create a stunning contrast against ${config.metal}. ${metalData?.description}

💎 **Cut Dynamics**: The ${config.cut} cut (${cutData?.facets} facets) delivers ${cutData?.sparkle.toLowerCase()} sparkle. ${cutData?.description}

📐 **Visual Scale**: At ${config.carat} carats with a ${config.lengthWidthRatio}:1 length-to-width ratio, this stone will have commanding presence while remaining elegantly proportioned for a ${config.jewelryType.toLowerCase()}.

✨ **Light Performance**: With ${config.refractionDepth.toLowerCase()} refraction depth, expect balanced brilliance with excellent color saturation throughout the stone.
    `;

        setTimeout(() => {
            setAiDescription(description);
            setIsGenerating(false);
            setShowPreview(true);
        }, 1500);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            updateConfig('referenceImage', URL.createObjectURL(file));
        }
    };

    const canProceed = () => {
        switch (step) {
            case 1: return config.color !== '';
            case 2: return config.metal !== '' && config.jewelryType !== '';
            case 3: return config.cut !== '';
            case 4: return true;
            default: return false;
        }
    };

    return (
        <div className="min-h-screen bg-[#fafaf9] pt-32 pb-20">
            <div className="premium-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d9488]/10 rounded-full text-[#0d9488] text-xs tracking-[0.2em] uppercase mb-6">
                        <Sparkles className="w-4 h-4" />
                        Bespoke Service
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-heading text-[#1c1917] mb-4">Design Your Dream Piece</h1>
                    <p className="text-[#44403c] max-w-xl mx-auto">
                        Create a one-of-a-kind Ceylon Sapphire masterpiece with our guided design experience.
                    </p>
                </motion.div>

                {/* Progress Steps */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-4">
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className="flex items-center gap-2">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= s ? 'bg-[#0d9488] text-white' : 'bg-gray-200 text-gray-500'
                                    }`}>
                                    {step > s ? <Check className="w-5 h-5" /> : s}
                                </div>
                                {s < 4 && <div className={`w-12 h-1 ${step > s ? 'bg-[#0d9488]' : 'bg-gray-200'}`} />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Configuration Panel */}
                    <div className="lg:col-span-2 space-y-8">
                        <AnimatePresence mode="wait">
                            {/* Step 1: Color Selection */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-white p-8 border border-gray-100 shadow-sm"
                                >
                                    <h2 className="font-heading text-2xl mb-2">Step 1: Choose Your Sapphire Color</h2>
                                    <p className="text-gray-500 text-sm mb-6">Select the color that speaks to you</p>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {sapphireColors.map((color) => (
                                            <button
                                                key={color.name}
                                                onClick={() => updateConfig('color', color.name)}
                                                className={`p-4 border-2 transition-all text-left ${config.color === color.name
                                                        ? 'border-[#0d9488] bg-[#0d9488]/5'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                <div
                                                    className="w-12 h-12 rounded-full mb-3 border border-gray-200 shadow-inner"
                                                    style={{ backgroundColor: color.hex }}
                                                />
                                                <p className="font-medium text-sm">{color.name}</p>
                                                <p className="text-xs text-gray-500">{color.description}</p>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Metal & Jewelry Type */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="bg-white p-8 border border-gray-100 shadow-sm">
                                        <h2 className="font-heading text-2xl mb-2">Step 2a: Select Metal Type</h2>
                                        <p className="text-gray-500 text-sm mb-6">Choose the metal for your setting</p>

                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                            {metalOptions.map((metal) => (
                                                <button
                                                    key={metal.code}
                                                    onClick={() => updateConfig('metal', metal.name)}
                                                    className={`p-4 border-2 transition-all text-center ${config.metal === metal.name
                                                            ? 'border-[#0d9488] bg-[#0d9488]/5'
                                                            : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                >
                                                    <div
                                                        className="w-10 h-10 rounded-full mx-auto mb-2 border border-gray-200"
                                                        style={{ backgroundColor: metal.hex }}
                                                    />
                                                    <p className="font-medium text-xs">{metal.name}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white p-8 border border-gray-100 shadow-sm">
                                        <h2 className="font-heading text-2xl mb-2">Step 2b: Jewelry Type</h2>
                                        <p className="text-gray-500 text-sm mb-6">What would you like to create?</p>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {jewelryTypes.map((type) => (
                                                <button
                                                    key={type.name}
                                                    onClick={() => updateConfig('jewelryType', type.name)}
                                                    className={`p-6 border-2 transition-all text-center ${config.jewelryType === type.name
                                                            ? 'border-[#0d9488] bg-[#0d9488]/5'
                                                            : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                >
                                                    <span className="text-3xl mb-2 block">{type.icon}</span>
                                                    <p className="font-medium">{type.name}</p>
                                                    <p className="text-xs text-gray-500 mt-1">{type.description}</p>
                                                </button>
                                            ))}
                                        </div>

                                        {/* Reference Image Upload */}
                                        <div className="mt-6 p-4 bg-gray-50 border border-dashed border-gray-300">
                                            <label className="flex flex-col items-center cursor-pointer">
                                                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                                <span className="text-sm text-gray-500">Upload a reference image (optional)</span>
                                                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                                            </label>
                                            {config.referenceImage && (
                                                <img src={config.referenceImage} alt="Reference" className="mt-4 max-h-32 mx-auto" />
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Gem Cut */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-white p-8 border border-gray-100 shadow-sm"
                                >
                                    <h2 className="font-heading text-2xl mb-2">Step 3: Choose Gem Cut</h2>
                                    <p className="text-gray-500 text-sm mb-6">Select how your sapphire will be cut</p>

                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                        {gemCuts.map((cut) => (
                                            <button
                                                key={cut.name}
                                                onClick={() => updateConfig('cut', cut.name)}
                                                className={`p-4 border-2 transition-all text-center ${config.cut === cut.name
                                                        ? 'border-[#0d9488] bg-[#0d9488]/5'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                <p className="font-medium text-sm">{cut.name}</p>
                                                <p className="text-xs text-gray-500">{cut.facets} facets</p>
                                                <p className="text-xs text-[#0d9488] mt-1">{cut.sparkle}</p>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 4: Technical Specs */}
                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-white p-8 border border-gray-100 shadow-sm"
                                >
                                    <h2 className="font-heading text-2xl mb-2">Step 4: Technical Specifications</h2>
                                    <p className="text-gray-500 text-sm mb-6">Fine-tune your gemstone parameters</p>

                                    <div className="space-y-6">
                                        {/* Carat Weight */}
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Carat Weight: {config.carat}ct</label>
                                            <input
                                                type="range"
                                                min="0.5"
                                                max="10"
                                                step="0.1"
                                                value={config.carat}
                                                onChange={(e) => updateConfig('carat', parseFloat(e.target.value))}
                                                className="w-full accent-[#0d9488]"
                                            />
                                            <div className="flex justify-between text-xs text-gray-500">
                                                <span>0.5ct</span>
                                                <span>10ct</span>
                                            </div>
                                        </div>

                                        {/* Length/Width Ratio */}
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Length/Width Ratio: {config.lengthWidthRatio}:1</label>
                                            <input
                                                type="range"
                                                min="1.0"
                                                max="2.0"
                                                step="0.1"
                                                value={config.lengthWidthRatio}
                                                onChange={(e) => updateConfig('lengthWidthRatio', parseFloat(e.target.value))}
                                                className="w-full accent-[#0d9488]"
                                            />
                                            <div className="flex justify-between text-xs text-gray-500">
                                                <span>1:1 (Square)</span>
                                                <span>2:1 (Elongated)</span>
                                            </div>
                                        </div>

                                        {/* Refraction Depth */}
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Refraction Depth</label>
                                            <div className="flex gap-4">
                                                {['Shallow', 'Medium', 'Deep'].map((depth) => (
                                                    <button
                                                        key={depth}
                                                        onClick={() => updateConfig('refractionDepth', depth)}
                                                        className={`flex-1 py-3 border-2 transition-all ${config.refractionDepth === depth
                                                                ? 'border-[#0d9488] bg-[#0d9488]/5'
                                                                : 'border-gray-200 hover:border-gray-300'
                                                            }`}
                                                    >
                                                        {depth}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between">
                            <button
                                onClick={() => setStep(s => Math.max(1, s - 1))}
                                className={`px-6 py-3 border border-gray-300 text-sm uppercase tracking-wider ${step === 1 ? 'invisible' : ''}`}
                            >
                                Back
                            </button>

                            {step < 4 ? (
                                <button
                                    onClick={() => setStep(s => s + 1)}
                                    disabled={!canProceed()}
                                    className={`px-8 py-3 bg-[#0d9488] text-white text-sm uppercase tracking-wider flex items-center gap-2 ${!canProceed() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#0f766e]'
                                        }`}
                                >
                                    Continue <ChevronRight className="w-4 h-4" />
                                </button>
                            ) : (
                                <button
                                    onClick={generateAIPreview}
                                    disabled={isGenerating}
                                    className="px-8 py-3 bg-[#0d9488] text-white text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-[#0f766e]"
                                >
                                    {isGenerating ? 'Generating...' : 'Preview My Design'}
                                    <Sparkles className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Pricing Disclaimer */}
                        <p className="text-xs text-gray-500 text-center mt-4">
                            Visualizations are for aesthetic reference. Metal weight and stone grade adjustments will impact final pricing.
                        </p>
                    </div>

                    {/* Preview Panel */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 border border-gray-100 shadow-sm sticky top-32">
                            <h3 className="font-heading text-lg mb-4">Your Configuration</h3>

                            <div className="space-y-3 text-sm">
                                {config.color && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Color</span>
                                        <span className="font-medium flex items-center gap-2">
                                            <span
                                                className="w-4 h-4 rounded-full border"
                                                style={{ backgroundColor: sapphireColors.find(c => c.name === config.color)?.hex }}
                                            />
                                            {config.color}
                                        </span>
                                    </div>
                                )}
                                {config.metal && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Metal</span>
                                        <span className="font-medium">{config.metal}</span>
                                    </div>
                                )}
                                {config.jewelryType && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Type</span>
                                        <span className="font-medium">{config.jewelryType}</span>
                                    </div>
                                )}
                                {config.cut && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Cut</span>
                                        <span className="font-medium">{config.cut}</span>
                                    </div>
                                )}
                                {step >= 4 && (
                                    <>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Carat</span>
                                            <span className="font-medium">{config.carat}ct</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Ratio</span>
                                            <span className="font-medium">{config.lengthWidthRatio}:1</span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* AI Preview */}
                            <AnimatePresence>
                                {showPreview && aiDescription && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="mt-6 pt-6 border-t border-gray-100"
                                    >
                                        <h4 className="font-heading text-lg mb-3 text-[#0d9488]">AI Visualization</h4>
                                        <div className="prose prose-sm text-gray-600 whitespace-pre-line">
                                            {aiDescription}
                                        </div>

                                        {/* CTA */}
                                        <div className="mt-6 p-4 bg-[#0d9488]/10 rounded">
                                            <p className="text-sm font-medium mb-3">Ready to make this real?</p>
                                            <button className="w-full py-3 bg-[#0d9488] text-white text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#0f766e]">
                                                <Phone className="w-4 h-4" />
                                                Request Expert Call
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BespokeDesigner;
