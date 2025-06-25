import React from 'react';
import { MiaButton } from '../components/button';
import ArrowDown from '../components/arrowdown';
import Carousel from '../components/carousel';

const DemoSection: React.FC = () => {
  // Imagens para o carrossel
  const demoImages = [
    {
      src: "src/assets/carousel/demo1.png",
      alt: "Dashboard da plataforma MIA"
    },
    {
      src: "src/assets/carousel/demo2.png",
      alt: "Atendimento automatizado MIA"
    },
    {
      src: "src/assets/carousel/demo3.png",
      alt: "Relatórios da plataforma MIA"
    }
  ];

  return (
    <section id="demo" className="py-4 pt-20 md:py-20 bg-[#070824] text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070824]/95 to-[#070824]/100"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-between gap-12">
          {/* Cabeçalho da seção */}
          <div className="w-full text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visualize a MIA em funcionamento.
              <span className="block text-[#93F2FF] mt-2">Pronta para o seu negócio.</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Confira algumas telas da plataforma MIA e veja como é simples acompanhar atendimentos, 
              analisar dados e automatizar seu relacionamento com o cliente.
            </p>
          </div>
          
          {/* Carrossel de imagens */}
          <div className="w-full max-w-4xl mx-auto">
            <Carousel 
              images={demoImages} 
              autoPlay={true} 
              interval={5000} 
              className="shadow-xl shadow-[#93F2FF]/10 border border-[#93F2FF]/20 rounded-xl h-[500px]"
            />
          </div>
          
          {/* CTA */}
          <div className="mt-10 text-center">
            <MiaButton 
              text="Quero uma plataforma assim na minha empresa" 
            />
          </div>
        </div>
      </div>
      
      <ArrowDown href="#partners" className="mt-10"/>
    </section>
  );
};

export default DemoSection;
