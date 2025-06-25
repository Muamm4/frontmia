import React from 'react';
import '../App.css';

interface ButtonProps {
    text: string;
    href?: string;
}

export const MiaButton: React.FC<ButtonProps> = ({ text, href = "https://wa.me/5527996320385?text=Olá%2C%20gostaria%20de%20conhecer%20mais%20sobre%20a%20MIA%20e%20como%20ela%20pode%20ajudar%20meu%20negócio." }) => {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative w-100 h-12 px-9 py-2 rounded-[500px] inline-flex justify-center items-center cursor-pointer overflow-hidden group"
      >
        {/* Gradiente de fundo que aparece com hover */}
        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-teal-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-400 bg-size-200 animate-bg-x"></span>
        
        {/* Fundo ciano que desaparece com hover */}
        <span className="absolute inset-0 bg-cyan-200 group-hover:opacity-0 transition-opacity duration-400 ease-in-out"></span>
        
        {/* Texto */}
        <span className="relative z-10 justify-start text-slate-950 text-lg font-light leading-none group-hover:text-white transition-colors duration-500 ease-in-out">{text}</span>
      </a>
    )
}