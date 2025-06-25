import React, { useState, useEffect } from 'react';
import { NavLink } from '../components/navLink';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para atualizar a seção ativa quando o usuário clicar em um link
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Fecha o menu móvel quando um link é clicado
  };
  
  // Detecta qual seção está visível na tela e atualiza o link ativo
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'problems','partners','comparison','faq'];
      
      // Encontra a seção mais próxima do topo da viewport
      let currentSection = '';
      let minDistance = Number.MAX_VALUE;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      });
      
      if (currentSection && currentSection !== activeSection.replace('#', '')) {
        setActiveSection(`#${currentSection}`);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <nav className="bg-[#070824] text-white py-4 px-6 shadow-md sticky top-0 z-50 drop-shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="src/assets/logo_bymia.png" alt="Logo" className="w-18" />
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink 
            href="#home" 
            isActive={activeSection === '#home'}
            onClick={() => handleNavClick('#home')}
          >
            Home
          </NavLink>
          <NavLink 
            href="#about" 
            isActive={activeSection === '#about'}
            onClick={() => handleNavClick('#about')}
          >
            Conheça a MIA
          </NavLink>
          <NavLink 
            href="#problems" 
            isActive={activeSection === '#problems'}
            onClick={() => handleNavClick('#problems')}
          >
            Desafios
          </NavLink>
          <NavLink 
            href="#partners" 
            isActive={activeSection === '#partners'}
            onClick={() => handleNavClick('#partners')}
          >
            Nossos Clientes
          </NavLink>
          <NavLink 
            href="#comparison" 
            isActive={activeSection === '#comparison'}
            onClick={() => handleNavClick('#comparison')}
          >
            Nossos Diferenciais
          </NavLink>
          <NavLink 
            href="#faq" 
            isActive={activeSection === '#faq'}
            onClick={() => handleNavClick('#faq')}
          >
            FAQ
          </NavLink>
          <a href="https://wa.me/5527996320385?text=Olá%2C%20gostaria%20de%20conhecer%20mais%20sobre%20a%20MIA%20e%20como%20ela%20pode%20ajudar%20meu%20negócio." target="_blank" rel="noopener noreferrer" className="bg-transparent border border-[#93F2FF] text-[#93F2FF] text-sm font-light px-4 py-2 rounded-full hover:bg-[#93F2FF]/20 hover:shadow-[0_0_15px_rgba(147,242,255,0.6)] hover:border-[#93F2FF]/80 transition-all duration-300">
            <span className="font-medium">Contato</span>
          </a>
        </div>
        
        {/* Menu hambúrguer para dispositivos móveis */}
        <div className="md:hidden">
          <button 
            className="text-white focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#070824] border-t border-gray-800 py-4 px-6 md:hidden">
            <div className="flex flex-col space-y-4">
                <NavLink 
                href="#home" 
                isActive={activeSection === '#home'}
                onClick={() => handleNavClick('#home')}
              >
                Home
              </NavLink>
              <NavLink 
                href="#about" 
                isActive={activeSection === '#about'}
                onClick={() => handleNavClick('#about')}
              >
                Conheça a MIA
              </NavLink>
              <NavLink 
                href="#problems" 
                isActive={activeSection === '#problems'}
                onClick={() => handleNavClick('#problems')}
              >
                Desafios
              </NavLink>
              <NavLink 
                href="#partners" 
                isActive={activeSection === '#partners'}
                onClick={() => handleNavClick('#partners')}
              >
                Nossos Clientes
              </NavLink>
              <NavLink 
                href="#comparison" 
                isActive={activeSection === '#comparison'}
                onClick={() => handleNavClick('#comparison')}
              >
                Nossos Diferenciais
              </NavLink>
              <NavLink 
                href="#faq" 
                isActive={activeSection === '#faq'}
                onClick={() => handleNavClick('#faq')}
              >
                FAQ
              </NavLink>
              <NavLink 
                href="#"
                onClick={() => window.open("https://wa.me/5527996320385?text=Olá%2C%20gostaria%20de%20conhecer%20mais%20sobre%20a%20MIA%20e%20como%20ela%20pode%20ajudar%20meu%20negócio.", "_blank")}
              >
                Contato
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
