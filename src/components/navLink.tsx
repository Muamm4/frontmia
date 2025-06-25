import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive = false, onClick }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <a href={href} onClick={scrollToSection}
      className={`relative px-1 py-2 group transition-colors duration-300 cursor-pointer ${isActive ? 'text-[#93F2FF]' : 'text-white hover:text-[#93F2FF]'}`}
    >
      {children}
      <span
        className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-400 to-teal-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin shadow-glow ${isActive ? 'scale-x-100' : ''}`}
        style={{
          width: '100%',
          boxShadow: '0 0 8px 1px rgba(147, 242, 255, 0.7)'
        }}
      />
    </a>
  );
};

export default NavLink;
