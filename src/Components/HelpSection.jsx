import React, { useRef } from 'react';

const HelpSection = () => {
  const scrollRef = useRef(null);

  // Data from your latest screenshots
  const helpData = [
    {
      title: "Shop with a Specialist over video.",
      desc: "Choose your next device in a guided, one-way video session.",
      img: "n1.png", // Replace with your hand-holding-phone image
      bg: "bg-white"
    },
    {
      label: "APPLE SPECIALIST",
      title: "Shop one on one with a Specialist online.",
      img: "n2.png", // Replace with Specialist woman image
      bg: "bg-white"
    },
    {
      label: "TODAY AT APPLE",
      title: "Explore Apple Intelligence",
      desc: "Come and try it for yourself in a free session at the Apple Store.",
      img: "n3.png", // Replace with Apple Store session image
      bg: "bg-white"
    },
    {
      label: "SMALL BUSINESS",
      title: "From enterprise to small business, we'll work with you.¹",
      img: "n4.png", // Replace with iPhone messaging image
      bg: "bg-[#1d1d1f]",
      textColor: "text-white"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 500 : scrollLeft + 500;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f5f5f7] py-20 overflow-hidden group">
      <div className="container mx-auto px-12 mb-10">
        <h2 className="text-[40px] font-semibold text-[#1d1d1f] tracking-tight">
          Help is here. <span className="text-[#6e6e73]">Whenever and however you need it.</span>
        </h2>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex gap-6 px-12 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {helpData.map((item, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 w-[480px] h-[580px] rounded-[28px] shadow-sm overflow-hidden relative ${item.bg} ${item.textColor || 'text-[#1d1d1f]'}`}
            >
              <div className="p-10 z-10 relative">
                {item.label && (
                  <span className="text-[12px] font-bold tracking-widest block mb-2 opacity-80 uppercase">
                    {item.label}
                  </span>
                )}
                <h3 className="text-[28px] font-semibold leading-tight max-w-[90%]">
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="mt-4 text-[17px] font-medium leading-relaxed max-w-[80%]">
                    {item.desc}
                  </p>
                )}
              </div>
              
              {/* Card Image Area */}
              <div className="absolute inset-0 flex items-end justify-center">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(180 12 12)"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      </div>
    </div>
  );
};

export default HelpSection;