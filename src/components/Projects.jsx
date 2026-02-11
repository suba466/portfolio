import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import urbanCompanyImg from '../assets/Urban company.jpg';

const projects = [
    {
        title: "Urban Company Clone",
        description: "Urban Company (formerly UrbanClap) is Asia's largest home services platform. This clone replicates its core mission: connecting users with high-quality, verified professionals for various services. My implementation features a robust booking engine, dynamic service catalog, interactive category navigation (Salon, Cleaning, Repairs), and a comprehensive admin ecosystem for seamless service management.",
        tech: ["React.js", "Vite", "Node.js", "Express", "MongoDB", "BootStrap"],
        gradient: "bg-gradient-to-br from-indigo-700 via-purple-600 to-indigo-900",
        link: "#",
        github: "https://github.com/suba466/urbancompany",
        image: urbanCompanyImg
    },

];

const ProjectCard = ({ project, index, isSingle }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`bg-slate-800/50 rounded-2xl border border-white/10 overflow-hidden group hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300 flex flex-col shadow-none ${isSingle ? 'md:flex-row md:items-stretch' : ''}`}
    >
        <div className={`relative overflow-hidden ${isSingle ? 'w-full h-64 md:h-auto md:w-1/2' : 'h-56 w-full'}`}>
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            ) : (
                <div className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${project.gradient}`}></div>
            )}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
        </div>

        <div className="p-8 flex-1 flex flex-col justify-center">
            <h3 className={`font-bold mb-4 text-white transition-colors ${isSingle ? 'text-3xl' : 'text-2xl'}`}>{project.title}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow transition-colors">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-900/60 text-cyan-400 border border-white/10 transition-colors">
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex justify-between pt-4 border-t border-white/10 transition-colors mt-auto">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors text-slate-400 hover:text-white"
                >
                    <Github size={16} /> Source Code
                </a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h2 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400 transition-colors">
                    Featured Projects
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16 text-center transition-colors">
                    A selection of projects that showcase my skills in designing and building scalable web applications.
                </p>
            </motion.div>

            <div className={`grid gap-8 mt-12 ${projects.length === 1 ? 'grid-cols-1 max-w-5xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} isSingle={projects.length === 1} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
