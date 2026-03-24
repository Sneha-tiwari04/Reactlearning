import React, { useRef } from 'react';
import n1img from "../assets/n1.png"
import h1img from "../assets/h1.png"
import h2img from "../assets/h2.png"



const SpecialSection = () => {
  const scrollRef = useRef(null);

  const specialData = [
    {
      title: "iPhone 17 Pro",
      desc: "Built for Apple Intelligence.◊",
      img: n1img, // Aapki image ka path
      bg: "bg-white",
      textColor: "text-[#1d1d1f]"
    },
    {
      title: "MacBook Neo",
      desc: "Strikingly thin. Fast as light.",
      img: h1img, // Aapki image ka path
      bg: "bg-white",
      textColor: "text-[#1d1d1f]"
    },
    {
      title: "Apple Watch Series 10",
      desc: "Thinner. Faster. Brighter.",
      img: h2img, // Aapki image ka path
      bg: "bg-black",
      textColor: "text-white"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -500 : 500;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f5f5f7] py-10 overflow-hidden group">
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex gap-6 px-12 overflow-x-auto no-scrollbar scroll-smooth pb-10"
        >
          {specialData.map((item, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 w-[480px] h-[650px] rounded-[28px] shadow-sm relative overflow-hidden ${item.bg}`}
            >
              {/* Text Content */}
              <div className="p-12 z-10 relative">
                <h3 className={`text-[32px] font-semibold leading-tight ${item.textColor}`}>
                  {item.title}
                </h3>
                <p className={`text-[19px] mt-2 font-medium ${item.textColor}`}>
                  {item.desc}
                </p>
              </div>

              {/* Product Image */}
              <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Custom Navigation Arrows */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(180 12 12)"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      </div>
    </div>
  );
};

export default SpecialSection;