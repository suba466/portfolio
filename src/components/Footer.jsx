import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm mt-auto">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-slate-400 text-sm">
                    © 2024 Suba shree.T. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:example@email.com"
                        className="text-slate-400 hover:text-rose-400 transition-colors hover:scale-110 transform duration-200"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
