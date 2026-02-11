import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, BookOpen, Download } from 'lucide-react';
import resume from '../assets/Suba_shree.pdf';

const Resume = () => {
    // ... (rest of the component)


    const experiences = [
        {
            title: "Urban Company - Clone | Full Stack Web Application",
            company: "Project Experience",
            period: "2024",
            description: [
                "Designed and developed a scalable, high-volume, low-latency full-stack web application following an end-to-end product development lifecycle.",
                "Built and optimized RESTful APIs to ensure efficient data flow, reduced latency, and reliable backend communication.",
                "Implemented MongoDB schema design, indexing, and CRUD operations to support high-volume data handling and performance optimization.",
                "Ensured high availability and compliance with functional and technical specifications by applying MVC architecture, coding standards, and continuous performance monitoring.",
                "Supported release preparation and deployment through debugging, performance tuning, refactoring, and evaluation of alternate technologies for architectural improvement."
            ],
            tech: "React.js, Node.js, Express.js, MongoDB"
        }
    ];

    const education = [
        {
            degree: "M.Sc Mathematics",
            school: "Bharathiar University",
            year: "2023 - 2025",
            description: "Focus on advanced mathematical concepts and analytical thinking."
        },
        {
            degree: "B.Sc Mathematics",
            school: "St. Joseph's College for Women",
            year: "2020 - 2023",
            description: "Foundation in mathematics and problem-solving methodologies."
        }
    ];

    const certifications = [
        {
            title: "Full Stack Development (Professional Program)",
            issuer: "NxtWave Academy",
            year: "Completed, 2025",
            description: "Intensive training in MERN stack development, covering frontend, backend, and database technologies."
        }
    ];

    const technicalSkills = [
        { category: "Frontend", skills: "React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Web Design" },
        { category: "Backend", skills: "Node.js, Express.js, RESTful API Development" },
        { category: "Database", skills: "MongoDB (Schema Design, Indexing, CRUD Operations)" },
        { category: "Tools", skills: "Git, GitHub, VS Code, Postman" }
    ];

    const SectionTitle = ({ title, icon: Icon }) => (
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-violet-500/10 rounded-xl text-violet-400">
                <Icon size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
    );

    const ResumeCard = ({ title, subtitle, date, description, tech, delay }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all duration-300 group shadow-lg"
        >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">{title}</h4>
                    <p className="text-violet-300 font-medium mt-1">{subtitle}</p>
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 w-fit whitespace-nowrap">
                    {date}
                </span>
            </div>

            {Array.isArray(description) ? (
                <ul className="list-disc list-outside ml-5 space-y-2 text-slate-400 leading-relaxed mb-4 marker:text-violet-500">
                    {description.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-slate-400 leading-relaxed mb-4">{description}</p>
            )}

            {tech && (
                <div className="pt-4 border-t border-white/5">
                    <p className="text-sm text-slate-500 font-mono">
                        <span className="text-violet-400 font-medium">Tech Stack:</span> {tech}
                    </p>
                </div>
            )}
        </motion.div>
    );

    return (
        <section className="min-h-screen pt-4 pb-20 px-8 md:px-16 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                    My <span className="text-violet-500">Resume</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
                    A comprehensive overview of my professional journey, skills, and academic background.
                </p>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={resume}
                    download
                    className="inline-flex px-8 py-4 rounded-full font-bold items-center gap-2 transition-all duration-300 bg-white/5 text-slate-200 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 shadow-sm mx-auto cursor-pointer"
                >
                    <Download size={20} /> Download Resume
                </motion.a>
            </motion.div>

            <div className="space-y-20">
                {/* Professional Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/30 rounded-2xl p-8 border border-white/5"
                >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                        <BookOpen size={24} className="text-cyan-400" />
                        Professional Summary
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-lg">
                        Results-driven Full Stack Developer experienced in building high-volume, low-latency applications for mission-critical systems with high availability and performance. Contributes across the full product development lifecycle, delivering efficient, testable code, release-ready components, and continuous improvement through technology evaluation.
                    </p>
                </motion.div>

                {/* Technical Skills */}
                <div>
                    <SectionTitle title="Technical Skills" icon={BookOpen} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {technicalSkills.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-900/50 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors"
                            >
                                <h4 className="text-lg font-bold text-cyan-400 mb-3">{cat.category}</h4>
                                <p className="text-slate-300 leading-relaxed">{cat.skills}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Project Experience */}
                <div>
                    <SectionTitle title="Project Experience" icon={Briefcase} />
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <ResumeCard
                                key={index}
                                title={exp.title}
                                subtitle={exp.company}
                                date={exp.period}
                                description={exp.description}
                                tech={exp.tech}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <SectionTitle title="Education" icon={GraduationCap} />
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <ResumeCard
                                key={index}
                                title={edu.degree}
                                subtitle={edu.school}
                                date={edu.year}
                                description={edu.description}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <SectionTitle title="Training & Certifications" icon={Award} />
                    <div className="space-y-8">
                        {certifications.map((cert, index) => (
                            <ResumeCard
                                key={index}
                                title={cert.title}
                                subtitle={cert.issuer}
                                date={cert.year}
                                description={cert.description}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
