import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: "Crimson Radiance",
        category: "Ruby Ring",
        price: "$8,200",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        name: "Ocean's Tear",
        category: "Sapphire Pendant",
        price: "$5,400",
        image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "Emerald Envy",
        category: "Emerald Earrings",
        price: "$6,800",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const ProductShowcase = () => {
    return (
        <section className="py-24 bg-white">
            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl font-heading text-[#1c1917]">Curated Masterpieces</h2>
                    <div className="w-24 h-1 bg-[#d4af37] mx-auto" />
                    <p className="text-[#44403c] max-w-2xl mx-auto font-light">
                        Each piece is a testament to nature's beauty and human craftsmanship.
                        Hand-selected, ethically sourced, and perfectly cut.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {products.map((product) => (
                        <motion.div key={product.id} variants={item} className="group cursor-pointer">
                            <div className="relative overflow-hidden h-[450px] mb-6 bg-[#fafaf9]">
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors duration-500" />
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.7 }}
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-white text-black px-8 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-500 z-20 hover:bg-[#d4af37] hover:text-white w-[80%]">
                                    View Details
                                </button>
                            </div>
                            <div className="text-center space-y-2">
                                <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500">{product.category}</p>
                                <h3 className="text-xl font-heading font-medium group-hover:text-[#d4af37] transition-colors">{product.name}</h3>
                                <p className="text-[#d4af37] font-serif italic text-lg">{product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-20"
                >
                    <button className="text-[#1c1917] border-b border-[#1c1917] pb-1 uppercase tracking-widest hover:text-[#d4af37] hover:border-[#d4af37] transition-colors hover:tracking-[0.2em] duration-300 text-sm">
                        View All Collections
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductShowcase;
