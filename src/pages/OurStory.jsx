import { motion } from 'framer-motion';
import { Heart, Globe, Shield, Users } from 'lucide-react';

const OurStory = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative h-[60vh] bg-[#1c1917] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 text-center text-white px-4"
                >
                    <h1 className="text-5xl md:text-7xl font-heading mb-6">Our Story</h1>
                    <p className="text-xl font-light max-w-2xl mx-auto">
                        From the gem-rich lands of Ceylon to the world
                    </p>
                </motion.div>
            </div>

            {/* Story Section */}
            <section className="py-24">
                <div className="premium-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-heading">A Legacy of Brilliance</h2>
                            <div className="w-16 h-1 bg-[#0d9488]" />
                            <p className="text-[#44403c] leading-relaxed">
                                Carbon Ceylon was born from a passion for Sri Lanka's legendary gemstones.
                                For centuries, this island nation has been renowned as the "Island of Gems,"
                                producing some of the world's finest sapphires, rubies, and other precious stones.
                            </p>
                            <p className="text-[#44403c] leading-relaxed">
                                In 2025, we set out to bring these treasures to the world while honoring
                                the artisans who have perfected their craft over generations. Every piece
                                in our collection represents a bridge between ancient tradition and modern elegance.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#fafaf9] h-[500px] flex items-center justify-center"
                        >
                            <img
                                src="/images/hero-ring.png"
                                alt="Ceylon Sapphire"
                                className="max-h-[400px] object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-[#fafaf9]">
                <div className="premium-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-heading mb-4">Our Values</h2>
                        <div className="w-16 h-1 bg-[#0d9488] mx-auto" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "Authenticity", desc: "Every gemstone comes with certification and provenance documentation" },
                            { icon: Heart, title: "Craftsmanship", desc: "Handcrafted by master jewelers with decades of experience" },
                            { icon: Globe, title: "Ethical Sourcing", desc: "Responsibly sourced from conflict-free mines in Sri Lanka" },
                            { icon: Users, title: "Community", desc: "Supporting local artisan communities and fair trade practices" }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-8"
                            >
                                <value.icon className="w-12 h-12 text-[#0d9488] mx-auto mb-4" />
                                <h3 className="font-heading text-xl mb-2">{value.title}</h3>
                                <p className="text-sm text-[#44403c]">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-24">
                <div className="premium-container text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-heading mb-8">Our Mission</h2>
                        <p className="text-xl text-[#44403c] leading-relaxed italic">
                            "To share the natural beauty of Ceylon's gemstones with the world,
                            creating heirloom pieces that celebrate life's precious moments while
                            preserving traditional craftsmanship for future generations."
                        </p>
                        <div className="mt-8 w-24 h-1 bg-[#0d9488] mx-auto" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default OurStory;
