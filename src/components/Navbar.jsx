import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'tech' },
        { label: 'Projects', id: 'projects' },
        { label: 'Resume', id: 'resume' },
        { label: 'Contact', id: 'contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) => {
        setIsOpen(false);

        // If we are not on the home page, go there first then scroll
        if (location.pathname !== '/') {
            navigate('/');
            // Small timeout to allow navigation to complete before scrolling
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Already on home page, just scroll
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-4 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-slate-900/80 border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Left: Brand */}
                <div
                    onClick={() => handleNavClick('home')}
                    className="flex items-center gap-3 group pl-2 cursor-pointer"
                >
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-amber-500 tracking-wide font-outfit group-hover:text-amber-400 transition-colors">
                            Suba shree.T
                        </span>
                        <span className="text-[0.65rem] text-amber-200/60 tracking-widest uppercase font-light">
                            Code Your Dreams Into Reality
                        </span>
                    </div>
                </div>

                {/* Right: Nav Links & Social Icons */}
                <div className="hidden md:flex items-center gap-10 bg-transparent">
                    {navItems.map((item) => {
                        return (
                            <button
                                key={item.label}
                                onClick={() => handleNavClick(item.id)}
                                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group cursor-pointer"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 w-0 group-hover:w-full"></span>
                            </button>
                        );
                    })}

                    <div className="flex items-center gap-4 ml-2 border-l border-white/10 pl-6">
                        <a
                            href="https://github.com/suba466"
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
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-300 hover:text-white transition-colors p-2"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 border-b border-white/10 backdrop-blur-xl p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2 items-center">
                    {navItems.map((item) => {
                        return (
                            <button
                                key={item.label}
                                onClick={() => handleNavClick(item.id)}
                                className="text-base font-medium py-2 px-8 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-colors w-full text-center cursor-pointer"
                            >
                                {item.label}
                            </button>
                        );
                    })}

                    {/* Mobile Socials */}
                    <div className="flex items-center gap-4 px-4 pt-4 border-t border-white/10 w-full justify-center">
                        <a
                            href="https://github.com/suba466"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors p-2"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/suba-shree-t-7171a8258/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-400 transition-colors p-2"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
