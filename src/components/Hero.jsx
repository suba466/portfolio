import { motion } from 'framer-motion';
import { Rocket, Download } from 'lucide-react';
import resume from '../assets/Suba_shree.pdf';

const Hero = () => {
    return (
        <section id="home" className="min-h-[75vh] flex flex-col justify-center pt-12 pb-12 md:pt-16 md:pb-20 items-center text-center px-8 md:px-16 relative overflow-hidden bg-transparent transition-colors duration-300">
            {/* Background Effects */}
            {/* Removed blocking overlay to show global background */}

            {/* Network Particles Simulation */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at center, #6366f1 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            ></div>

            {/* Glowing Orbs for ambiance */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="z-10 max-w-5xl w-full flex flex-col items-center"
            >
                {/* Main Name - Large Gradient Text */}
                <h1 className="text-3xl md:text-5xl lg:text-8xl font-black mb-4 tracking-tighter">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#06b6d4] drop-shadow-2xl">
                        Suba shree.T
                    </span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 tracking-wide drop-shadow-md">
                    MERN Full Stack Developer
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                    Building Scalable Systems with Creativity & Precision. Transforming ideas into elegant, high-performance applications that make a difference.
                </p>

                {/* Buttons */}
                <div className="flex gap-6 justify-center flex-wrap">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#tech"
                        className="px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all duration-300 bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40"
                    >
                        View Tech Stack <Rocket size={20} />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={resume}
                        download
                        className="px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all duration-300 bg-white/5 text-slate-200 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 shadow-sm"
                    >
                        <Download size={20} /> Download Resume
                    </motion.a>
                </div>
            </motion.div>

            {/* Scroll Indicator */}

        </section>
    );
};

export default Hero;
