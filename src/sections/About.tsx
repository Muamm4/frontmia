import React from 'react';
import Card from '../components/card';
import ArrowDown from '../components/arrowdown';
import { RiChatAiLine } from 'react-icons/ri';
import { LuAtom, LuBlocks, LuBrainCircuit, LuCaptions } from 'react-icons/lu';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-4 pt-20 md:py-20 bg-gradient-to-b from-[#93F2FF]/0 to-[#93F2FF]/40 rounded-b-[40px] text-white relative overflow-hidden">
      <div 
          className={`absolute z-0 w-64 h-64 bottom-0 right-0 transform rounded-full bg-[#93F2FF]/20 blur-[70px] 
          transition-all duration-1000 animate-[pulse_5s_ease-in-out_infinite]`}
          style={{
            boxShadow: '0 0 100px 50px rgba(56, 189, 248, 0.3)',
          }}
        ></div>
      <div 
          className={`absolute z-0 w-64 h-64 bottom-1/2 right-1/2 transform rounded-full bg-[#93F2FF]/20 blur-[70px] 
          transition-all duration-5000 animate-[pulse_12s_ease-in-out_infinite] transition-duration-5000`}
          style={{
            boxShadow: '0 0 100px 50px rgba(56, 189, 248, 0.3)',
          }}
        ></div>
      <div 
          className={`absolute z-0 w-64 h-64 bottom-1/4 left-1/5 transform rounded-full bg-[#93F2FF]/20 blur-[70px] 
          transition-all duration-1000 animate-[pulse_10s_ease-in-out_infinite]`}
          style={{
            boxShadow: '0 0 100px 50px rgba(56, 189, 248, 0.3)',
          }}
        ></div>
      <div className="container mx-auto px-4 relative">
      
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Coluna de texto - lado esquerdo */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Conheça a </span>
              <span className="bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text">MIA</span>
              <span className="text-white">:</span>
            </h2>
            <h3 className="text-2xl mb-8 text-[#93F2FF]">sua atendente inteligente, incansável e estratégica </h3>
            
            <p className="text-gray-300 mb-6">
              A MIA é a assistente virtual com inteligência artificial desenvolvida pela iMoth, empresa com
              8 anos de experiência em soluções digitais personalizadas.
            </p>
            
            <p className="text-gray-300 mb-6">
              Com linguagem natural e adaptada ao seu negócio, ela realiza atendimentos via
              WhatsApp, qualifica leads, responde dúvidas e fornece dados estratégicos em tempo real.
            </p>
            
            <p className="text-gray-300 mb-8">
              Mais do que responder mensagens, a MIA aprende com cada interação, garantindo que sua
              empresa esteja sempre presente para o cliente, sem depender de aumento de equipe ou
              horas extras.
            </p>
            
            {/* Cards de recursos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card title="IA personalizada via engenharia de prompt" ReactIcon={<LuCaptions size={38} className="text-[#93F2FF]"/>} />
              
              <Card title="Atendimento humanizado e fluido 24/7" ReactIcon={<RiChatAiLine size={38} className="text-[#93F2FF]"/>} />
              
              <Card title="Entrega dados em tempo real para decisões estratégicas" ReactIcon={<LuBlocks size={38} className="text-[#93F2FF] font-light "/>} />
              
              <Card title="Recuperação automática de leads não respondidos" ReactIcon={<LuAtom size={38} className="text-[#93F2FF]"/>} />
              
              <Card title="Integração com WhatsApp e CRM (leve incluso)" ReactIcon={<LuBrainCircuit size={38} className="text-[#93F2FF]"/>} />
              
            </div>
          </div>
          
          {/* Espaço para a imagem - lado direito */}
          <div className="md:w-1/2 flex justify-center">
            {/* Aqui você colocará sua imagem */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Placeholder para a imagem */}
              <div className="absolute inset-0 bg-blue-400/10 rounded-lg blur-[50px]"></div>
              <img 
                src="src/assets/avatar_mia2.png" 
                alt="ByMia AI Assistant" 
                className="z-1 w-full scale-200 mt-80 h-full object-cover hidden md:block"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/400x400/1e293b/60a5fa?text=ByMia+AI";
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <ArrowDown href="#problems"/>
    </section>
  );
};

export default AboutSection;
