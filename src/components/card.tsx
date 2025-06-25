import React from 'react';
import { FaBuffer } from 'react-icons/fa6';
import { LiaBuffer, LiaAtomSolid } from 'react-icons/lia';
import { SiDatabricks } from 'react-icons/si';
import { HiOutlineCube } from 'react-icons/hi';
import { TbCubeSend } from 'react-icons/tb';

// Mapeamento de nomes de ícones para componentes
const iconMap: Record<string, React.ComponentType<any>> = {
    'FaBuffer': FaBuffer,
    'LiaBuffer': LiaBuffer,
    'LiaAtomSolid': LiaAtomSolid,
    'SiDatabricks': SiDatabricks,
    'HiOutlineCube': HiOutlineCube,
    'TbCubeSend': TbCubeSend
};

interface CardProps {
    title: string;
    ReactIcon?: React.ReactNode;
    iconName?: string;
    iconSize?: number;
    iconClassName?: string;
}

const Card: React.FC<CardProps> = ({ title, ReactIcon, iconName, iconSize = 42, iconClassName = "" }) => {
    // Renderiza o ícone baseado no nome, se fornecido
    const renderIcon = () => {
        if (ReactIcon) {
            return ReactIcon;
        } else if (iconName && iconMap[iconName]) {
            const IconComponent = iconMap[iconName];
            return <IconComponent size={iconSize} className={"text-[#93F2FF] hover:scale-150 transition-all duration-500 " + iconClassName} />;
        }
        return null;
    };

    return (
        <div className="bg-[#0d0f36] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center gap-2 relative group">
            {/* Borda com efeito neon */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" 
                style={{
                    boxShadow: '0 0 15px 2px rgba(147, 242, 255, 0.7)',
                    border: '1px solid #93F2FF',
                }}>
            </div>
            
            {/* Conteúdo do card com efeito de brilho no hover */}
            <div className="relative z-10 transition-all group-hover:scale-115 duration-300 group-hover:text-[#93F2FF]">
                {renderIcon()}
            </div>
            <h5 className="text-sm font-light w-[80%] relative z-10 transition-all duration-300 group-hover:text-[#93F2FF]">{title}</h5>
        </div>
    );
};

export default Card;