import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Award, FileCheck, Gem, Sparkles } from 'lucide-react';
import { getGemstoneBySlug } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';
import { formatPrice } from '../utils/currency';

const GemDetail = () => {
    const { slug } = useParams();
    const gem = getGemstoneBySlug(slug);
    const { currency } = useCurrency();

    if (!gem) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
                <div className="text-center text-white">
                    <h1 className="text-3xl font-heading mb-4">Gemstone Not Found</h1>
                    <Link to="/gemstones" className="text-[#0d9488] underline">Back to Gemstones</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
            <div className="premium-container">
                <Link to="/gemstones" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#0d9488] mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Gemstones
                </Link>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10">
                            <img src={gem.images[0]} alt={gem.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                            {gem.treatment === "Unheated" && (
                                <span className="bg-[#0d9488] text-white text-xs px-3 py-1 uppercase tracking-wider flex items-center gap-1">
                                    <Shield className="w-4 h-4" /> Unheated
                                </span>
                            )}
                            <span className="bg-white/10 backdrop-blur text-white text-xs px-3 py-1 uppercase tracking-wider flex items-center gap-1">
                                <FileCheck className="w-4 h-4" /> {gem.certificate} Certified
                            </span>
                        </div>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white space-y-8"
                    >
                        <div>
                            <p className="text-[#0d9488] text-xs tracking-[0.3em] uppercase mb-2">{gem.gemType} • {gem.carat} Carats</p>
                            <h1 className="text-4xl font-heading mb-4">{gem.name}</h1>
                            <p className="text-4xl text-[#0d9488] font-semibold">{formatPrice(gem.priceUSD, currency)}</p>
                        </div>

                        <p className="text-gray-400 leading-relaxed">{gem.description}</p>

                        {/* Specifications */}
                        <div className="border-t border-b border-white/10 py-6">
                            <h3 className="font-heading text-lg mb-6">Specifications</h3>
                            <dl className="grid grid-cols-2 gap-4 text-sm">
                                <div><dt className="text-gray-500">Weight</dt><dd className="font-medium">{gem.carat} Carats</dd></div>
                                <div><dt className="text-gray-500">Shape</dt><dd className="font-medium">{gem.shape}</dd></div>
                                <div><dt className="text-gray-500">Color</dt><dd className="font-medium">{gem.color}</dd></div>
                                <div><dt className="text-gray-500">Clarity</dt><dd className="font-medium">{gem.clarity}</dd></div>
                                <div><dt className="text-gray-500">Origin</dt><dd className="font-medium">{gem.origin}</dd></div>
                                <div><dt className="text-gray-500">Treatment</dt><dd className="font-medium">{gem.treatment}</dd></div>
                                <div><dt className="text-gray-500">Certificate</dt><dd className="font-medium">{gem.certificate}</dd></div>
                            </dl>
                        </div>

                        {/* Actions */}
                        <div className="space-y-4">
                            <Link
                                to="/bespoke"
                                className="w-full py-4 bg-[#0d9488] text-white uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#0f766e] transition-colors"
                            >
                                <Sparkles className="w-5 h-5" />
                                Create Custom Jewelry with This Stone
                            </Link>
                            <button className="w-full py-4 border border-white/20 text-white uppercase tracking-widest flex items-center justify-center gap-3 hover:border-[#0d9488] hover:text-[#0d9488] transition-colors">
                                <Gem className="w-5 h-5" />
                                Inquire About This Stone
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="text-center">
                                <Shield className="w-6 h-6 mx-auto mb-2 text-[#0d9488]" />
                                <p className="text-xs text-gray-400">Certified Authentic</p>
                            </div>
                            <div className="text-center">
                                <FileCheck className="w-6 h-6 mx-auto mb-2 text-[#0d9488]" />
                                <p className="text-xs text-gray-400">{gem.certificate} Report</p>
                            </div>
                            <div className="text-center">
                                <Award className="w-6 h-6 mx-auto mb-2 text-[#0d9488]" />
                                <p className="text-xs text-gray-400">Ethically Sourced</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default GemDetail;
