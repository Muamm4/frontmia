import React, { useState } from 'react';
import { MiaButton } from '../components/button';
import ArrowDown from '../components/arrowdown';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden">
      <button 
        className={`flex justify-between items-center w-full text-left p-4 rounded-lg focus:outline-none transition-all duration-300 ${isOpen ? 'bg-[#0d0f36] border-[#93F2FF]' : 'bg-[#070824] border-[#93F2FF]/20'} border`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`text-lg font-medium ${isOpen ? 'text-[#93F2FF]' : 'text-white'}`}>{question}</h3>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#93F2FF]/20' : 'bg-[#0d0f36]'}`}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 text-[#93F2FF] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </button>
      <div 
        className={`transition-all duration-500 overflow-hidden border-l-2 border-[#93F2FF]/30 ml-2 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 pl-6">
          <p className="text-gray-300">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqItems = [
    {
      question: "1. A MIA funciona para qualquer tipo de empresa?",
      answer: "Sim! A MIA é treinada com base no seu segmento e na linguagem do seu negócio. Atendemos empresas de serviços, clínicas, comércios, consultorias e muito mais."
    },
    {
      question: "2. Em quanto tempo posso começar a usar a MIA?",
      answer: "Após a contratação, iniciamos o processo de personalização. Em poucos dias sua MIA já estará ativa e operando no seu WhatsApp."
    },
    {
      question: "3. A MIA entende áudios e imagens?",
      answer: "Sim! A plataforma é capaz de transcrever áudios e identificar imagens, atuando com inteligência em tempo real para manter o fluxo da conversa."
    },
    {
      question: "4. Preciso de equipe técnica para implementar?",
      answer: "Não. Nossa equipe cuida de toda a configuração. Você só precisa fornecer informações básicas e aprovar os fluxos."
    },
    {
      question: "5. E se o cliente quiser falar com um humano?",
      answer: "Sem problema. A MIA repassa automaticamente o atendimento para um atendente humano quando o cliente solicita ou a IA identificar necessidade."
    },
    {
      question: "6. Quais são os custos?",
      answer: "A plataforma tem taxa de adesão (setup) e uma mensalidade fixa. O custo de uso de APIs (WhatsApp e OpenAI) é pago diretamente pelo cliente e varia conforme volume de uso."
    },
    {
      question: "7. A MIA substitui totalmente minha equipe?",
      answer: "Não. Ela automatiza etapas do atendimento, agiliza a triagem e filtra oportunidades — o que permite que sua equipe foque nas ações mais importantes."
    }
  ];

  return (
    <section id="faq" className="py-4 pt-20 md:py-20 bg-[#070824] text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070824]/95 to-[#070824]/100"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tire suas dúvidas antes de falar com a MIA
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Separamos as perguntas mais comuns para que você se sinta 100% seguro 
            antes de dar o próximo passo.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqItem 
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <MiaButton 
            text="Pronto! Quero conhecer a MIA de perto" 
          />
          <p className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto">
            Converse com a própria MIA no WhatsApp e veja
            tudo isso funcionando na prática.
          </p>
        </div>
      </div>
      <ArrowDown href="#contact" className="mt-10"/>
    </section>
  );
};

export default FaqSection;
