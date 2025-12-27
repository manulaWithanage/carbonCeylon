import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gem, Palette, CheckCircle } from 'lucide-react';

const Bespoke = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gemType: '',
        metalType: '',
        budget: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, this would send to a backend
        console.log('Bespoke inquiry:', formData);
        setSubmitted(true);
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fafaf9]">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center max-w-md p-8"
                >
                    <CheckCircle className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
                    <h2 className="text-3xl font-heading mb-4">Thank You!</h2>
                    <p className="text-[#44403c]">
                        Your bespoke inquiry has been received. Our master craftsmen will review your request
                        and contact you within 24 hours.
                    </p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fafaf9] pt-32 pb-20">
            <div className="premium-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-heading mb-4">Bespoke Creations</h1>
                    <p className="text-[#44403c] max-w-2xl mx-auto">
                        Work with our master craftsmen to create a one-of-a-kind piece that tells your story.
                        From selecting the perfect gemstone to designing the setting, every detail is yours to define.
                    </p>
                </motion.div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        { icon: Gem, title: "Select Your Stone", desc: "Choose from our collection of ethically sourced Ceylon gemstones" },
                        { icon: Palette, title: "Design Together", desc: "Work with our designers to create your perfect setting" },
                        { icon: Sparkles, title: "Handcrafted", desc: "Your piece is crafted by master jewelers in Sri Lanka" }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-8 bg-white shadow-sm"
                        >
                            <feature.icon className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
                            <h3 className="font-heading text-xl mb-2">{feature.title}</h3>
                            <p className="text-sm text-[#44403c]">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-2xl mx-auto bg-white p-10 shadow-lg"
                >
                    <h2 className="text-2xl font-heading mb-8 text-center">Start Your Journey</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 p-3 focus:border-[#d4af37] focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 p-3 focus:border-[#d4af37] focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-3 focus:border-[#d4af37] focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Preferred Gemstone</label>
                                <select
                                    name="gemType"
                                    value={formData.gemType}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-3 focus:border-[#d4af37] focus:outline-none transition-colors bg-white"
                                >
                                    <option value="">Select...</option>
                                    <option value="sapphire">Blue Sapphire</option>
                                    <option value="ruby">Ruby</option>
                                    <option value="emerald">Emerald</option>
                                    <option value="pink-sapphire">Pink Sapphire</option>
                                    <option value="yellow-sapphire">Yellow Sapphire</option>
                                    <option value="other">Other / Undecided</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Metal Preference</label>
                                <select
                                    name="metalType"
                                    value={formData.metalType}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-3 focus:border-[#d4af37] focus:outline-none transition-colors bg-white"
                                >
                                    <option value="">Select...</option>
                                    <option value="white-gold">18k White Gold</option>
                                    <option value="yellow-gold">18k Yellow Gold</option>
                                    <option value="rose-gold">18k Rose Gold</option>
                                    <option value="platinum">Platinum</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Budget Range</label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-3 focus:border-[#d4af37] focus:outline-none transition-colors bg-white"
                                >
                                    <option value="">Select...</option>
                                    <option value="5000-10000">$5,000 - $10,000</option>
                                    <option value="10000-20000">$10,000 - $20,000</option>
                                    <option value="20000-50000">$20,000 - $50,000</option>
                                    <option value="50000+">$50,000+</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Describe Your Vision *</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Tell us about the piece you envision..."
                                className="w-full border border-gray-300 p-3 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-[#1c1917] text-white uppercase tracking-widest hover:bg-[#d4af37] transition-colors"
                        >
                            Submit Inquiry
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Bespoke;
