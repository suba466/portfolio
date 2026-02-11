import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Contact Details
    const YOUR_EMAIL = "subashree0806@gmail.com";
    const YOUR_PHONE = "+91 9787081119";
    const YOUR_LOCATION = "Tiruppur, Tamil Nadu";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Show alert as requested
        alert("Message Sent Successfully!");

        // Construct mailto link
        const mailSubject = `Portfolio Contact from ${name}`;
        const mailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        window.location.href = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${mailBody}`;

        // Reset form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            label: "Email",
            value: YOUR_EMAIL,
            href: `mailto:${YOUR_EMAIL}`,
            color: "text-blue-400",
            bg: "bg-blue-500/10"
        },
        {
            icon: <Phone size={24} />,
            label: "Phone",
            value: YOUR_PHONE,
            href: `tel:${YOUR_PHONE.replace(/\s/g, '')}`,
            color: "text-violet-400",
            bg: "bg-violet-500/10"
        },
        {
            icon: <MapPin size={24} />,
            label: "Location",
            value: YOUR_LOCATION,
            href: "#",
            color: "text-pink-400",
            bg: "bg-pink-500/10"
        }
    ];

    return (
        <section className="min-h-screen py-20 px-8 md:px-16 max-w-7xl mx-auto flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">

                {/* Left Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-2 bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-500"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-500"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>


                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-500 resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Send size={20} />
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* Right Column: Contact Info & Socials */}
                <div className="space-y-8">
                    {/* Contact Information Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl h-fit"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                            Contact Information
                        </h3>
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.href}
                                    className="flex items-start gap-4 group hover:bg-white/5 p-3 rounded-xl transition-colors"
                                >
                                    <div className={`p-3 rounded-lg ${info.bg} ${info.color} group-hover:scale-110 transition-transform`}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium mb-1">{info.label}</p>
                                        <p className="text-slate-200 font-medium group-hover:text-white transition-colors">
                                            {info.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Connect With Me Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                            Connect With Me
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com/in/suba-shree-t-7171a8258"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-xl bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                            >
                                <Linkedin size={28} />
                            </a>
                            <a
                                href="https://github.com/suba466"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-xl bg-slate-800 text-slate-400 hover:bg-white hover:text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                            >
                                <Github size={28} />
                            </a>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
