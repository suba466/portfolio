import { motion } from 'framer-motion';

const techCategories = [
    {
        title: "Frontend",
        skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Framer Motion"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
        title: "Database",
        skills: ["MongoDB", "MySQL"]
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "VS Code", "Postman", "Vite"]
    }
];

const TechStack = () => {
    return (
        <section id="tech" className="pt-10 pb-20 px-4 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-3xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
                {/* Decorative background gradients */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white relative z-10">
                    Tech Stack
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                    {techCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            <h3 className="text-xl font-semibold text-indigo-400 mb-4 flex items-center gap-3">
                                {category.title}
                                <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-md bg-slate-800/50 border border-white/5 text-slate-300 text-sm hover:text-white hover:bg-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default TechStack;
