import React from 'react';
import { SiMeta } from 'react-icons/si';
import { SiOpenai } from 'react-icons/si';
import ArrowDown from '../components/arrowdown';
import InfiniteCarousel from '../components/infiniteCarousel';

const PartnersSection: React.FC = () => {
  // Dados dos clientes para o carrossel
  const clientItems = [
    { id: 1, src: "src/assets/partners/partner1.png", alt: "Cliente parceiro 1" },
    { id: 2, src: "src/assets/partners/partner2.png", alt: "Cliente parceiro 2" },
    { id: 3, src: "src/assets/partners/partner3.png", alt: "Cliente parceiro 3" },
    { id: 4, src: "src/assets/partners/partner4.png", alt: "Cliente parceiro 4" },
    { id: 5, src: "src/assets/partners/partner5.png", alt: "Cliente parceiro 5" },
    { id: 6, src: "src/assets/partners/partner6.png", alt: "Cliente parceiro 6" },
    { id: 7, src: "src/assets/partners/partner7.png", alt: "Cliente parceiro 7" },
    { id: 8, src: "src/assets/partners/partner8.png", alt: "Cliente parceiro 8" },
  ];

  return (
    <section id="partners" className="py-4 pt-20 md:py-20  bg-[#070824] text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070824]/95 to-[#070824]/100"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-between gap-12">
          {/* Título principal */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Veja quem já conversa com a MIA todos os dias
          </h2>
          
          {/* Carrossel infinito de logos de clientes */}
          <div className="w-full mb-20">
            <InfiniteCarousel 
              items={clientItems} 
              speed={20} 
              direction="left" 
              pauseOnHover={true} 
              className="py-4"
            />
            
            {/* Segunda linha de carrossel em direção oposta para efeito visual */}
            <InfiniteCarousel 
              items={[...clientItems].reverse()} 
              speed={15} 
              direction="right" 
              pauseOnHover={true} 
              className="py-4 mt-6"
            />
          </div>
          
          {/* Seção de tecnologia integrada */}
          <div className="text-center">
            <p className="text-[#93F2FF] mb-8">Tecnologia integrada com:</p>
            
            <div className="flex items-center justify-center gap-12">
              <div className="flex items-center">
                <SiMeta size={48} className="text-white hover:text-[#93F2FF] transition-colors duration-300" />
                <span className="ml-2 text-xl font-bold">Meta</span>
              </div>
              
              <div className="flex items-center">
                <SiOpenai size={48} className="text-white hover:text-[#93F2FF] transition-colors duration-300" />
                <span className="ml-2 text-xl font-bold">OpenAI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArrowDown href="#comparison" className="mt-10"/>
    </section>
  );
};

export default PartnersSection;
