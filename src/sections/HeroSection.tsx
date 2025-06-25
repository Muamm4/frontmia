import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MiaButton } from '../components/button';
import { SocialIcon } from '../components/socialIcon';
import ArrowDown from '../components/arrowdown';

const HeroSection: React.FC = () => {
  // Estado para controlar a animação das camadas
  return (
    <section id="home" className="relative py-4 md:py-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 hidden lg:block overflow-hidden">
        <img 
          src="src/assets/bg.png" 
          className="absolute z-10 w-[90%] h-[90%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" 
          alt="Background" 
          style={{ filter: 'blur(1px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070824]/50 to-[#070824]/95"></div>
        {/* Animated Light Orb Effect */}
        <div 
          className={`absolute z-80 w-64 h-64 top-1/2 right-1/2 transform left-25 rounded-full bg-blue-400/80 blur-[80px] animate-[pulse_2s_ease-in-out_infinite] opacity-30
          transition-all`}
          style={{
            boxShadow: '0 0 100px 50px rgba(56, 189, 248, 0.3)',
          }}
        ></div>
        <div 
          className={`absolute z-80 w-64 h-64 top-50 left-80 transform rounded-full bg-blue-400/30 blur-[50px] animate-[pulse_12s_ease-in-out_infinite] opacity-30
          transition-all duration-1000 ease-in-out`}
          style={{
            boxShadow: '0 0 100px 50px rgba(56, 189, 248, 0.3)',
          }}
        ></div>
        <div 
          className={`absolute z-80 w-64 h-64 top-1/2 left-1/2 transform rounded-full bg-[#93F2FF]/60 blur-[50px] animate-[pulse_15s_ease-in-out_infinite] opacity-30
          transition-all duration-1000 ease-in-out`}
          style={{
            boxShadow: '0 0 100px 50px rgba(56, 189, 248, 0.3)',
          }}
        ></div>

      </div>
      
      {/* Social Icons - Positioned in top right corner */}
      <div className="absolute top-[8%] right-[3%] flex space-x-3 z-20 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
        <SocialIcon link="https://www.facebook.com/imothtecnologia" icon={<FaFacebookF size={16}/>}/>
        <SocialIcon link="https://www.linkedin.com/company/imoth" icon={<FaLinkedinIn size={16}/>}/>
        <SocialIcon link="https://www.instagram.com/imoth_tecnologia" icon={<FaInstagram size={16}/>}/>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex w-full sm:flex-col md:flex-row items-center justify-between">
          <div className="sm:w-1/1 md:w-1/2 mb-10 md:mb-0 z-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text">
              Atendimento Inteligente via WhatsApp
            </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 text-center">
              Responda <span className="text-[#93F2FF]">3x mais rápido</span> e qualifique até <span className="text-[#93F2FF]">80% mais leads</span> automaticamente.
            </p>
            <p className="text-gray-300 text-lg mb-8 text-center">
              “IA treinada para empresas que querem escalar com inteligência e manter atendimento de excelência.”
            </p>
            <div className="flex flex-wrap justify-center py-8">
              <MiaButton text="Fale com a MIA agora" />
            </div>
            <p className="text-gray-300 text-lg mb-8 text-center">
              Clique e converse com a própria MIA. Tire suas dúvidas e veja o atendimento inteligente em ação.
            </p>
            <p className="text-gray-300 text-md mb-8 text-center flex justify-center items-center gap-2">
              <img src="src/assets/badge1.png" alt="ByMia" className="w-10 h-10" />
              <span>Desde 2016 no mercado, inovando com tecnologia e inteligência artificial.</span>
            </p>
          </div>
          <div className="md:w-1/2 flex h-full sm:justify-start hidden md:block">
          <img 
                src="src/assets/avatar_mia1.png" 
                alt="ByMia AI Assistant" 
                className="z-20 -top-10 hidden md:block"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/400x400/1e293b/60a5fa?text=ByMia+AI";
                }}
              />
              <div className="absolute -inset-1 bg-blue-400/10 rounded-full blur-[50px] transition-all duration-2500 ease-in-out"></div>
              <div className="absolute z-50 -inset-1 bg-black/60 top-160 left-180 w-120 h-15 rounded-full blur-[30px] transition-all duration-2500 ease-in-out"></div>
            </div> 
        </div>
      </div>
      <ArrowDown href="#about" className="mb-16"/>
    </section>
  );
};

export default HeroSection;
