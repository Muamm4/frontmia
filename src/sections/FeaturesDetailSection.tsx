import React from 'react';
import { MiaButton } from '../components/button';
import ArrowDown from '../components/arrowdown';
import { IoMdCheckmark } from 'react-icons/io';

const FeaturesDetailSection: React.FC = () => {
  return (
    <section id="features-detail" className="py-20 bg-[#070824] text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070824]/95 to-[#070824]/100"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Coluna de texto - lado esquerdo */}
          <div className="md:w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
              Mais que atendimento automatizado
              <span className="block text-[#93F2FF] mt-2">a MIA é estratégia, inteligência e resultado.</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 text-center md:text-left">
              A MIA não apenas responde mensagens. Ela cuida do seu atendimento, antecipa necessidades, organiza sua operação e gera dados para decisões mais inteligentes.
            </p>
            
            {/* Lista de recursos */}
            <div className="space-y-4 mb-10 py-10 px-10 relative overflow-hidden">
              <img src="src/assets/bg3.png" className="-z-1 absolute opacity-40 rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover h-full md:h-auto lg:h-auto" />
              
              <div className="flex items-start space-x-3 z-10">
                <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                  <IoMdCheckmark className="text-green-500" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Atendimento com inteligência artificial treinada para sua empresa</h4>
                  <p className="text-sm text-gray-400">Cada MIA é única, programada com base nas necessidades, linguagem e histórico do seu negócio.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 z-10">
                <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                  <IoMdCheckmark className="text-green-500" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Atuação em vendas, suporte e qualificação de leads (SDR)</h4>
                  <p className="text-sm text-gray-400">Atua em qualquer etapa do funil, desde tirar dúvidas até resolver contatos antes do atendimento humano.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 z-10">
                <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                  <IoMdCheckmark className="text-green-500" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Organização do funil e priorização de leads quentes</h4>
                  <p className="text-sm text-gray-400">A MIA classifica os contatos e envia alertas para sua equipe com base no nível de interesse.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 z-10">
                <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                  <IoMdCheckmark className="text-green-500" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Dashboard com CRM leve e relatórios inteligentes</h4>
                  <p className="text-sm text-gray-400">Métricas visuais, histórico de atendimentos, análise de perdas e oportunidades – tudo em um só lugar.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 z-10">
                <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                  <IoMdCheckmark className="text-green-500" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Acompanhamento humano em tempo real</h4>
                  <p className="text-sm text-gray-400">Quando necessário, a equipe entra em casos com contexto completo do atendimento realizado pela IA.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 z-10">
                <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                  <IoMdCheckmark className="text-green-500" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Recuperação de oportunidades perdidas</h4>
                  <p className="text-sm text-gray-400">A MIA encontra leads esquecidos, agenda retornos e mantém o relacionamento ativo.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-col items-center justify-between gap-12">
              <div className="flex justify-center md:justify-start">
                <MiaButton text="Quero a MIA na minha empresa"/>
              </div>
              
              <p className="text-gray-400 text-sm mt-1 text-center md:text-left">
                Descubra como a MIA pode transformar seu atendimento, sem precisar aumentar sua equipe.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ArrowDown href="#demo" className="mt-2"/>
    </section>
  );
};

export default FeaturesDetailSection;
