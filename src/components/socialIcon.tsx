import React from "react"


export const SocialIcon: React.FC<{ link: string, icon: React.ReactNode }> = ({ link, icon }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="z-100 w-8 h-8 flex items-center justify-center rounded-full bg-[#1e293b] hover:bg-blue-600/70 hover:border-[#667996] hover:border-[1px] hover:text-[#93F2FF] transition-all hover:scale-110 backdrop-blur-sm"
            style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)' }}
        >
            {icon}
        </a>
    )
}
