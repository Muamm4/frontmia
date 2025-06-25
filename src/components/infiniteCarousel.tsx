import React, { useEffect, useRef, useState } from 'react';

interface InfiniteCarouselProps {
  items: {
    id: number;
    src: string;
    alt: string;
  }[];
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  items,
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Duplicamos os itens para criar o efeito infinito
  const allItems = [...items, ...items];
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const scrollContainer = containerRef.current;
    let animationFrameId: number;
    let lastTimestamp = 0;
    const pixelsPerSecond = speed;
    
    const scroll = (timestamp: number) => {
      if (!scrollContainer) return;
      
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      
      // Calcula quantos pixels mover baseado no tempo decorrido e velocidade
      const pixelsToMove = (pixelsPerSecond * deltaTime) / 1000;
      
      // Não faz scroll se estiver pausado no hover
      if (!(pauseOnHover && isHovered)) {
        if (direction === 'left') {
          scrollContainer.scrollLeft += pixelsToMove;
          
          // Reset quando chegar ao meio
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          }
        } else {
          scrollContainer.scrollLeft -= pixelsToMove;
          
          // Reset quando chegar ao início
          if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
          }
        }
      }
      
      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [direction, isHovered, pauseOnHover, speed, items.length]);
  
  return (
    <div 
      className={`w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={containerRef}
        className="flex items-center whitespace-nowrap overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {allItems.map((item, index) => (
          <div 
            key={`${item.id}-${index}`} 
            className="inline-flex items-center justify-center px-6 py-4"
          >
            <div className="bg-[#0d0f36] rounded-lg p-6 aspect-video flex items-center justify-center
                         border border-[#93F2FF]/10 hover:border-[#93F2FF]/30 transition-all duration-300
                         shadow-lg hover:shadow-[#93F2FF]/10 min-w-[200px] sm:h-[120px] md:min-w-[300px] md:h-[180px]">
              <img 
                src={item.src}
                alt={item.alt}
                className="max-h-16 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/300x150/0d0f36/93F2FF?text=Cliente+${item.id}`;
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
