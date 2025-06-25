import React from 'react';
import { MiaButton } from '../components/button';
import ArrowDown from '../components/arrowdown';
import { IoMdCheckmark, IoMdClose } from 'react-icons/io';

const ComparisonSection: React.FC = () => {
  const comparisonData = [
    {
      feature: "Atendimento por IA via WhatsApp",
      mia: true,
      generic: true
    },
    {
      feature: "Plataforma com CRM integrado",
      mia: true,
      generic: false
    },
    {
      feature: "Classificação de leads (quente/morno)",
      mia: true,
      generic: false
    },
    {
      feature: "Múltiplos usuários",
      mia: true,
      generic: false
    },
    {
      feature: "Relatórios e dashboards inteligentes",
      mia: true,
      generic: false
    },
    {
      feature: "Recuperação automática de leads",
      mia: true,
      generic: false
    },
    {
      feature: "IA com melhoria contínua",
      mia: true,
      generic: false
    },
    {
      feature: "Personalização via engenharia de prompt",
      mia: true,
      generic: false
    }
  ];

  return (
    <section id="comparison" className="py-4 pt-20 md:py-20  bg-[#070824] text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070824]/95 to-[#070824]/100"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-between gap-12">
          {/* Cabeçalho */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por que escolher a MIA?
            </h2>
            
            <p className="text-gray-300 text-lg mb-4 max-w-4xl">
              A MIA vai além de um chatbot tradicional.
            </p>
            <p className="text-gray-300 text-lg mb-8 max-w-4xl">
              Ela é uma plataforma completa de atendimento inteligente via WhatsApp, com CRM integrado, 
              classificação de leads, recuperação automática e relatórios avançados.
            </p>
            
            <h3 className="text-xl text-[#93F2FF] font-semibold">
              Veja a diferença em uma comparação direta:
            </h3>
          </div>
          
          {/* Comparação em cards */}
          <div className="w-full max-w-5xl">
            {/* Cabeçalho da comparação */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-gray-300">Funcionalidade</h4>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-[#93F2FF]">MIA</h4>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-purple-400">IA Genérica</h4>
              </div>
            </div>
            
            {/* Lista de comparações */}
            <div className="">
              {comparisonData.map((item, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-3 gap-4 p-4 odd:bg-[#070824] even:bg-[#0d0f36] rounded-lg border border-[#93F2FF]/10 
                           hover:border-[#93F2FF]/30 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <span className="text-white font-medium">{item.feature}</span>
                  </div>
                  
                  <div className="flex justify-center items-center">
                    {item.mia ? (
                      <div className="bg-green-500/20 p-2 rounded-full">
                        <IoMdCheckmark className="text-green-500" size={20} />
                      </div>
                    ) : (
                      <div className="bg-red-500/20 p-2 rounded-full">
                        <IoMdClose className="text-red-500" size={20} />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-center items-center">
                    {item.generic ? (
                      <div className="bg-green-500/20 p-2 rounded-full">
                        <IoMdCheckmark className="text-green-500" size={20} />
                      </div>
                    ) : (
                      <div className="bg-red-500/20 p-2 rounded-full">
                        <IoMdClose className="text-red-500" size={20} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <MiaButton 
              text="Quero a Mia na minha empresa" 
            />
            
            <p className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto">
              Fale com a gente e veja como a MIA pode transformar sua operação 
              comercial com mais inteligência, dados e resultado.
            </p>
          </div>
        </div>
      </div>
      
      <ArrowDown href="#leads" className="mt-10"/>
    </section>
  );
};

export default ComparisonSection;
