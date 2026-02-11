import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen flex flex-col text-slate-200 transition-colors duration-300 relative">
            <div className="background-wrapper fixed inset-0 -z-10"></div>
            <Navbar />

            <main className="flex-grow pt-20">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <TechStack />
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
