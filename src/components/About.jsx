import { motion } from 'framer-motion';
import { Code2, Server } from 'lucide-react';

const SkillBar = ({ name, percentage }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between mb-2 text-slate-300 font-medium">
                <span>{name}</span>
                <span>{percentage}%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-400"
                ></motion.div>
            </div>
        </div>
    );
};

const About = () => {
    const frontendSkills = [
        { name: "React.js", percentage: 90 },
        { name: "HTML5 & CSS3", percentage: 95 },
        { name: "JavaScript", percentage: 85 },
        { name: "Bootstrap", percentage: 85 },
        { name: "Tailwind CSS", percentage: 60 },
    ];

    const backendSkills = [
        { name: "Node.js", percentage: 80 },
        { name: "Express.js", percentage: 85 },
        { name: "MongoDB", percentage: 85 },
        { name: "REST APIs", percentage: 90 },
    ];

    return (
        <section className="min-h-screen py-20 px-8 md:px-16 max-w-7xl mx-auto flex flex-col justify-center">

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-center text-white mb-16 tracking-tight"
            >
                About Me
                <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full mt-4"></div>
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/5 text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-16 shadow-xl"
            >
                <p className="mb-4">
                    As a motivated and enthusiastic <span className="text-white font-semibold">Fresher Full Stack Developer</span>, I have dedicated myself to mastering the MERN stack. My journey began with a deep curiosity for how web applications function, leading me to build numerous projects that bridge the gap between theoretical knowledge and practical application.
                </p>
                <p>
                    I thrive on solving complex problems and am constantly seeking to expand my skill set with new technologies. I am eager to apply my strong foundation in frontend and backend development to real-world challenges. My approach to coding combines a commitment to clean, efficient code with a focus on user experience. As I step into my professional career, I am looking for opportunities where I can contribute meaningfully, learn from experienced mentors, and grow as a developer.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Frontend Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-colors"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-600/20 transition-all duration-500"></div>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                            <Code2 size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
                    </div>

                    <div className="space-y-2">
                        {frontendSkills.map(skill => (
                            <SkillBar key={skill.name} {...skill} />
                        ))}
                    </div>
                </motion.div>

                {/* Backend Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors"
                >
                    <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 group-hover:bg-cyan-600/20 transition-all duration-500"></div>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                            <Server size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Backend Development</h3>
                    </div>

                    <div className="space-y-2">
                        {backendSkills.map(skill => (
                            <SkillBar key={skill.name} {...skill} />
                        ))}
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default About;
