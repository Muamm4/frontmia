import { useEffect } from 'react';
import './App.css'
import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import FaqSection from './sections/FaqSection'
import Footer from './sections/Footer'
import AboutSection from './sections/About'
import ProblemSection from './sections/ProblemSection'
import FeaturesDetailSection from './sections/FeaturesDetailSection'
import DemoSection from './sections/DemoSection'
import PartnersSection from './sections/PartnersSection'
import ComparisonSection from './sections/ComparisonSection'
import LeadsSection from './sections/LeadsSection'
import ContactSection from './sections/ContactSection'
import ArrowUp from './components/arrowup';
import FloatWhatsApp from './components/floatwhatsapp';

function App() {
  useEffect(() => {
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    const updateCursorGlow = (e: MouseEvent) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', updateCursorGlow);

    return () => {
      window.removeEventListener('mousemove', updateCursorGlow);
      if (document.body.contains(cursorGlow)) {
        document.body.removeChild(cursorGlow);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#070824] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProblemSection />
        <FeaturesDetailSection />
        <DemoSection />
        <PartnersSection />
        <ComparisonSection />
        <LeadsSection />
        <FaqSection />
        <ContactSection />
        <FloatWhatsApp />
      </main>
      <Footer />
      <ArrowUp />
    </div>
  )
}

export default App
