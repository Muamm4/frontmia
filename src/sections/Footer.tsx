import React from 'react';
import { FaInstagram, FaFacebookF, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070824] py-4 md:py-20 border-t border-[#1a1c3a]">
      <div className="container mx-auto px-4">
        {/* Logo e informações de contato */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-12">
          {/* Logo iMoth */}
          <div className="mb-8 md:mb-0 rounded p-2">
            <img 
              src="src/assets/logo_imoth.png" 
              alt="iMoth Sistemas Personalizados" 
              className="h-32"
            />
          </div>
          
          {/* Informações de contato */}
          
          <div className="text-left text-gray-400 text-lg space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
            <a href="mailto:contato@imoth.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-[#93F2FF] transition-colors pointer-events-auto flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0e0f2b] flex items-center justify-center">
                <FaEnvelope className="text-[#93F2FF] text-md" />
              </div>
              
                <span>contato@imoth.com.br</span>
            </a>
            </div>
            
            {/* Endereço */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0e0f2b] flex items-center justify-center">
                <FaMapMarkerAlt className="text-[#93F2FF] text-md" />
              </div>
              <div>
                <p>Rua Abiail do Amaral Carneiro, nº 191, sala 901,</p>
                <p>Enseada do Suá, Vitória/ES, CEP 29.050-535.</p>
              </div>
            </div>
            
            {/* Telefone */}
            <div className="flex items-center gap-4">
            <a href="https://wa.me/5527996320385" target="_blank" rel="noopener noreferrer" className="hover:text-[#93F2FF] transition-colors flex items-center gap-4 pointer-events-auto">
              <div className="w-12 h-12 rounded-full bg-[#0e0f2b] flex items-center justify-center">
                <FaWhatsapp className="text-[#93F2FF] text-md" />
              </div>
                <span>(27) 99632-0385</span>
            </a>
            </div>
          </div>
        </div>
        
        {/* Redes sociais */}
        <div className="flex justify-center gap-4 mb-8">
          <a 
            href="https://www.facebook.com/imoth.sistemas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#0e0f2b] flex items-center justify-center hover:bg-[#1a1c3a] transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-[#93F2FF] text-md" />
          </a>
          <a 
            href="https://www.instagram.com/imoth.sistemas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#0e0f2b] flex items-center justify-center hover:bg-[#1a1c3a] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="text-[#93F2FF] text-md" />
          </a>
        </div>
        
        {/* Divisor */}
        <div className="border-b border-[#1a1c3a] mb-8"></div>
        
        {/* Copyright */}
        <div className="flex justify-center items-center">
          <p className="text-gray-400 text-sm">
            {currentYear} Powered by <a href="https://imoth.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-[#93F2FF] transition-colors">iMoth</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
