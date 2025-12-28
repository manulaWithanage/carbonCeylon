import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form:', formData);
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
                    <CheckCircle className="w-16 h-16 text-[#0d9488] mx-auto mb-6" />
                    <h2 className="text-3xl font-heading mb-4">Message Sent!</h2>
                    <p className="text-[#44403c]">
                        Thank you for reaching out. Our team will respond to your inquiry within 24-48 hours.
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
                    <h1 className="text-5xl font-heading mb-4">Contact Us</h1>
                    <p className="text-[#44403c] max-w-2xl mx-auto">
                        Have a question about our collection or need assistance with your order?
                        We're here to help.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <div>
                            <h3 className="font-heading text-xl mb-6">Get in Touch</h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Mail className="w-5 h-5 text-[#0d9488] shrink-0 mt-1" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <a href="mailto:hello@carbonceylon.com" className="text-[#44403c] hover:text-[#0d9488]">
                                            hello@carbonceylon.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Phone className="w-5 h-5 text-[#0d9488] shrink-0 mt-1" />
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <a href="tel:+94771234567" className="text-[#44403c] hover:text-[#0d9488]">
                                            +94 77 123 4567
                                        </a>
                                    </div>
                                </div>



                                <div className="flex gap-4">
                                    <Clock className="w-5 h-5 text-[#0d9488] shrink-0 mt-1" />
                                    <div>
                                        <p className="font-medium">Hours</p>
                                        <p className="text-[#44403c]">
                                            Mon - Sat: 10:00 AM - 7:00 PM<br />
                                            Sunday: By Appointment
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 bg-white p-10 shadow-lg"
                    >
                        <h3 className="font-heading text-xl mb-8">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 p-3 focus:border-[#0d9488] focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 p-3 focus:border-[#0d9488] focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Subject *</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 p-3 focus:border-[#0d9488] focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full border border-gray-300 p-3 focus:border-[#0d9488] focus:outline-none transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[#1c1917] text-white uppercase tracking-widest hover:bg-[#0d9488] transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
