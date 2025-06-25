import React from "react";
import { IoIosArrowDown } from "react-icons/io";


const ArrowDown: React.FC<{ onClick?: () => void; href?: string; className?: string }> = ({ onClick, href, className }) => {

    const scrollToSection = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (onClick) {
          onClick();
        }
        const targetElement = document.getElementById(href!.replace('#', ''));
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
          window.history.pushState(null, '', href);
        }
      };

    return (
        <div className="flex justify-center hover:cursor-pointer">
            <div className={`w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center relative z-150 ${className}`} onClick={scrollToSection}>
                <IoIosArrowDown size={24} className="absolute bottom-2 h-6 w-6 animate-bounce transition-all duration-5000"/>
            </div>
        </div>
    );
};

export default ArrowDown;