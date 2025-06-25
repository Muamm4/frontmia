import React from 'react';
import { MiaButton } from '../components/button';
import { FaClock, FaStar, FaExclamationTriangle } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-4 md:py-20 text-white relative overflow-hidden">
      {/* Background image with person and laptop */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: 'url(src/assets/bg5.png)' }}
        aria-hidden="true"
      ></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070824]/90 to-[#070824]/70 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ainda com dúvidas?<br />
              <span className="text-[#93F2FF]">Converse com a MIA<br />agora mesmo.</span>
            </h2>
            
            <p className="text-gray-300 mb-8">
              A MIA está pronta para te mostrar, na 
              prática, como seu atendimento pode 
              ser mais inteligente, rápido e eficiente 
              sem compromisso.
            </p>
            
            <div className="mb-8">
              <MiaButton 
                text="Fale com a MIA agora" 
              />
            </div>
            
            <p className="text-gray-400 text-sm">
              Atendimento automatizado via WhatsApp, 24/7.<br />
              Tire dúvidas, veja a IA em ação e decida com mais segurança.
            </p>
          </div>
          
          {/* Right side - empty to allow background image to show */}
          <div className="w-full md:w-1/2 lg:w-3/5 hidden md:block">
            {/* Floating icons - these are positioned absolutely over the background */}
            <div className="relative h-full">
              {/* Chat bubble 1 */}
              <div className="absolute top-10 right-20 bg-[#93F2FF]/20 backdrop-blur-sm p-3 rounded-lg shadow-[0_0_15px_rgba(147,242,255,0.5)] w-36 h-10">
                <div className="w-full h-2 bg-[#93F2FF] rounded-full animate-pulse"></div>
              </div>
              
              {/* Chat bubble 2 */}
              <div className="absolute top-28 right-36 bg-[#93F2FF]/20 backdrop-blur-sm p-3 rounded-lg shadow-[0_0_15px_rgba(147,242,255,0.5)] w-48 h-10">
                <div className="w-full h-2 bg-[#93F2FF] rounded-full animate-pulse delay-300"></div>
              </div>
              
              {/* Clock icon */}
              <div className="absolute top-10 right-64 bg-[#93F2FF]/20 backdrop-blur-sm p-3 rounded-full shadow-[0_0_15px_rgba(147,242,255,0.5)] w-14 h-14 flex items-center justify-center">
                <FaClock className="text-[#93F2FF] text-xl animate-pulse delay-500" />
              </div>
              
              {/* Star badge */}
              <div className="absolute bottom-32 right-20 bg-[#93F2FF]/20 backdrop-blur-sm p-3 rounded-full shadow-[0_0_15px_rgba(147,242,255,0.5)] w-14 h-14 flex items-center justify-center">
                <FaStar className="text-[#93F2FF] text-xl animate-pulse delay-700" />
              </div>
              
              {/* Warning icon */}
              <div className="absolute bottom-20 right-64 bg-[#93F2FF]/20 backdrop-blur-sm p-3 rounded-lg shadow-[0_0_15px_rgba(147,242,255,0.5)] w-14 h-14 flex items-center justify-center">
                <FaExclamationTriangle className="text-[#93F2FF] text-xl animate-pulse delay-1000" />
              </div>
              
              {/* Profile image simulation */}
              <div className="absolute bottom-40 right-40 bg-[#93F2FF]/20 backdrop-blur-sm rounded-lg shadow-[0_0_15px_rgba(147,242,255,0.5)] w-24 h-24 overflow-hidden flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#93F2FF]/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#93F2FF]/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
