import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'Resume', path: '/resume' },
        { label: 'Contact', path: '/contact' }
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 backdrop-blur-sm bg-slate-900/50 border-b border-white/10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Left: Brand */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-amber-500 tracking-wide font-outfit group-hover:text-amber-400 transition-colors">
                            Suba shree.T
                        </span>
                        <span className="text-[0.65rem] text-amber-200/60 tracking-widest uppercase font-light">
                            Code Your Dreams Into Reality
                        </span>
                    </div>
                </Link>

                {/* Right: Nav Links & Social Icons */}
                <div className="hidden md:flex items-center gap-10 bg-transparent">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.label}
                                to={item.path}
                                className={`text-sm font-medium transition-colors relative group ${isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                                    }`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                            </Link>
                        );
                    })}

                    <a
                        href="https://github.com/suba466/urbancompany"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white transition-colors transform hover:scale-110"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/suba-shree-t-7171a8258/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-blue-400 transition-colors transform hover:scale-110"
                    >
                        <Linkedin size={18} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-300 hover:text-white transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 border-b border-white/10 backdrop-blur-xl p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2 items-center">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.label}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-base font-medium py-2 px-4 rounded-lg transition-colors ${isActive
                                    ? 'bg-cyan-500/10 text-cyan-400'
                                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}

                    {/* Mobile Socials */}
                    <div className="flex items-center gap-4 px-4 pt-2 border-t border-white/10">
                        <a
                            href="https://github.com/suba466/urbancompany"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors p-2"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/suba-shree-t-7171a8258/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-400 transition-colors p-2"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
