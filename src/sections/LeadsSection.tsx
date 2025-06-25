import React from 'react';
import { MiaButton } from '../components/button';
import ArrowDown from '../components/arrowdown';

const LeadsSection: React.FC = () => {
  return (
    <section id="leads" className="py-20 text-white relative overflow-hidden">
      {/* Background image with person and laptop */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: 'url(src/assets/bg4.png)' }}
      ></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070824]/90 to-[#070824]/70 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left content */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cada dia sem a MIA pode estar custando <span className="text-[#93F2FF]">dezenas de leads perdidos.</span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Enquanto você lê esta página, seus potenciais 
              clientes podem estar sendo ignorados, 
              esquecidos ou mal atendidos.
            </p>
            
            <p className="text-gray-300 mb-6">
              A MIA garante presença, velocidade e 
              consistência no atendimento — mesmo 
              quando sua equipe está offline.
            </p>
            
            <p className="text-gray-300 mb-6">
              Cada contato não respondido é uma 
              oportunidade desperdiçada.
              Você não precisa mais perder vendas 
              por falta de tempo.
            </p>
            
            <div className="mt-10">
              <MiaButton 
                text="Quero parar de perder oportunidades" 
              />
              
              <p className="text-gray-400 text-sm mt-4">
                Fale com a MIA agora e descubra como sua empresa 
                pode vender mais sem depender de mais pessoas.
              </p>
            </div>
          </div>
          
          {/* Right side - empty to allow background image to show */}
          <div className="w-full md:w-1/2 lg:w-3/5">
            {/* Notification elements - these are positioned absolutely over the background */}
            <div className="hidden md:block">
              {/* Avaliação notification */}
              <div className="absolute top-1/4 right-1/4 bg-[#0d0f36]/80 backdrop-blur-sm p-3 rounded-lg border border-red-500/30 shadow-lg transform rotate-6 w-48">
                <p className="text-[#93F2FF] text-sm font-bold">AVALIAÇÃO</p>
                <p className="text-white text-xs">Ninguém me respondeu!</p>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-400">75</span>
                  <span className="text-xs text-red-500">649</span>
                </div>
              </div>
              
              {/* Thumbs up/down notification */}
              <div className="absolute bottom-1/3 right-1/3 bg-[#0d0f36]/80 backdrop-blur-sm p-2 rounded-lg border border-red-500/30 shadow-lg transform -rotate-3 w-32">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <span className="text-green-500 text-xs">👍</span>
                    <span className="text-xs text-gray-400 ml-1">09</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 text-xs">👎</span>
                    <span className="text-xs text-red-500 ml-1">76</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ArrowDown href="#faq" className="mt-10"/>
    </section>
  );
};

export default LeadsSection;
