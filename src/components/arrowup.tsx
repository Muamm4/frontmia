import { IoIosArrowUp } from "react-icons/io";
import React from "react";


const ArrowUp: React.FC<{ className?: string }> = ({ className }) => {

    const scrollToSection = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="fixed bottom-4 right-4 z-999">
            <div className={`w-12 h-12 bg-[#0d0f36]/80 hover:bg-[#93F2FF]/10 hover:shadow-[0_0_15px_rgba(147,242,255,0.6)] hover:border-[#93F2FF]/80 transition-all duration-500 rounded-full flex items-center justify-center relative z-150 ${className}`} onClick={scrollToSection}>
                <IoIosArrowUp size={24} className="absolute h-6 w-6 hover:animate-ping transition-all duration-5000"/>
            </div>
        </div>
    );
};

export default ArrowUp;