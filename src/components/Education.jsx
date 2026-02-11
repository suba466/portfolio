import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Briefcase } from 'lucide-react';

const EducationItem = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="relative pl-8 pb-12 border-l-2 border-slate-200 dark:border-white/10 last:border-l-0 last:pb-0"
    >
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10 transition-colors"></div>
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 shadow-none hover:shadow-md">
            <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                <h3 className="text-xl font-bold text-white transition-colors">{item.degree}</h3>
                <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full flex items-center gap-1 transition-colors">
                    <Calendar size={14} /> {item.year}
                </span>
            </div>
            <h4 className="text-violet-400 font-medium mb-4 flex items-center gap-2 transition-colors">
                <GraduationCap size={18} /> {item.institution}
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed transition-colors">
                {item.description}
            </p>
        </div>
    </motion.div>
);

const Education = () => {
    const educationData = [
        {
            degree: "Master of Computer Science",
            institution: "Stanford University",
            year: "2023 - Present",
            description: "Specializing in Artificial Intelligence and Human-Computer Interaction. Leading research on generative UI models."
        },
        {
            degree: "Bachelor of Science in Computer Engineering",
            institution: "University of California, Berkeley",
            year: "2019 - 2023",
            description: "Graduated with Honors. extensive coursework in Algorithms, Data Structures, and Distributed Systems. President of the Coding Club."
        },
        {
            degree: "Full Stack Development Bootcamp",
            institution: "App Academy",
            year: "2018",
            description: "Intensive 12-week program focused on modern web development technologies including React, Redux, Node.js, and SQL."
        }
    ];

    return (
        <section id="education" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto pl-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-violet-500 transition-colors">
                        Education & Experience
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16 text-center transition-colors">My academic journey and key milestones.</p>
                </motion.div>

                <div className="mt-12 ml-4 relative">
                    {educationData.map((item, index) => (
                        <EducationItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
