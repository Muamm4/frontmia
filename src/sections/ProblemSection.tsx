import React from 'react';
import { MiaButton } from '../components/button';
import ArrowDown from '../components/arrowdown';
import { IoMdClose } from 'react-icons/io';

const ProblemSection: React.FC = () => {
  return (
    <section id="problems" className="py-20 bg-[#070824] text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070824]/95 to-[#070824]/100"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Coluna de texto - lado esquerdo */}
          <div className="md:w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
              Seus clientes estão falando com você
              <span className="block text-[#93F2FF] mt-2">mas talvez sua empresa não esteja respondendo.</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 text-center md:text-left">
              A perda de oportunidades no atendimento é silenciosa, mas custa caro. Veja se você reconhece esses problemas:
            </p>
            
            {/* Lista de problemas */}
            <div className="space-y-4 mb-10 py-10 px-10 relative overflow-hidden">
            <img src="src/assets/bg2.png" className="-z-1 absolute opacity-50 rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover h-full md:h-auto lg:h-auto"  />
              <div className="flex items-start space-x-3 z-10">
                <div className="mt-1 bg-red-500/20 p-1 rounded-full">
                  <IoMdClose className="text-red-500" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Respostas lentas ou fora do horário comercial</h4>
                  <p className="text-sm text-gray-400">Clientes desistem se não são atendidos no momento de intenção de compra</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 z-10">
                <div className="mt-1 bg-red-500/20 p-1 rounded-full">
                  <IoMdClose className="text-red-500" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Falta de equipe para dar conta da demanda</h4>
                  <p className="text-sm text-gray-400">Quanto mais leads, mais difícil manter um bom atendimento</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 z-10">
                <div className="mt-1 bg-red-500/20 p-1 rounded-full">
                  <IoMdClose className="text-red-500" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Leads esquecidos no WhatsApp</h4>
                  <p className="text-sm text-gray-400">Sem uma gestão eficiente, o time perde contatos importantes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 z-10">
                <div className="mt-1 bg-red-500/20 p-1 rounded-full">
                  <IoMdClose className="text-red-500" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Dificuldade de escalar sem aumentar custos</h4>
                  <p className="text-sm text-gray-400">Mais atendimentos = mais custos? Nem sempre precisa ser assim</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 z-10">
                <div className="mt-1 bg-red-500/20 p-1 rounded-full">
                  <IoMdClose className="text-red-500" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Ausência de dados sobre os atendimentos</h4>
                  <p className="text-sm text-gray-400">Sem métricas e tomada de decisão via palpite</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 z-10">
                <div className="mt-1 bg-red-500/20 p-1 rounded-full">
                  <IoMdClose className="text-red-500" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Atendimento inconsistente e sem padrão</h4>
                  <p className="text-sm text-gray-400">Cada vendedor fala de um jeito, o que compromete a imagem da empresa</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-col items-center justify-between gap-12">
                <div className="flex justify-center md:justify-start">
                    <MiaButton text="Quero resolver isso agora!" />
                </div>
                
                <p className="text-gray-400 text-sm mt-1 text-center md:text-left">
                Fale com a MIA e veja como sua empresa pode atender melhor, vender mais e perder menos leads — sem contratar a equipe.
                </p>
            </div>
          </div>
        </div>
      </div>
      <ArrowDown href="#features-detail" className="mt-10"/>
    </section>
  );
};

export default ProblemSection;
