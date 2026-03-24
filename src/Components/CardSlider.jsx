import React, { useRef } from 'react';

const CardSlider = () => {
  const diffRef = useRef(null);

  // Cards data directly from your screenshot
  const diffData = [
    { 
      emoji: "💳", 
      title: <>No Cost EMI.<sup>◊</sup> Plus <br/> Instant Cashback.<sup>∆</sup></>, 
      color: "text-[#1d1d1f]" 
    },
    { 
      emoji: "📱", 
      title: <>Exchange your <span className="text-[#0066cc] font-semibold">smartphone,</span> get ₹3100.00–₹62700.00 in credit towards a new one.<sup>†</sup></>, 
      color: "text-[#1d1d1f]" 
    },
    { 
      emoji: "🍎", 
      title: <><span className="text-[#f56300] font-semibold">Customise</span> your Mac.</>, 
      color: "text-[#1d1d1f]" 
    },
    { 
      emoji: "😄", 
      title: <>Make them yours. <span className="text-[#af52de] font-semibold text-[19px]">Engrave a mix of emoji, names and numbers for free.</span></>, 
      color: "text-[#1d1d1f]" 
    },
    { 
      emoji: "🚚", 
      title: <><span className="text-[#008000] font-semibold">Enjoy free delivery, or easy pickup</span> from an Apple Store.</>, 
      color: "text-[#1d1d1f]" 
    },
    { 
      emoji: "♻️", 
      title: <>Trade in your eligible Mac, Apple Watch or iPad for <span className="text-[#0066cc] font-semibold text-[19px]">instant credit.<sup>†</sup></span> In-store only.</>, 
      color: "text-[#1d1d1f]" 
    }
  ];

  const scroll = (direction) => {
    if (diffRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      diffRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f5f5f7] py-16 font-sans overflow-hidden">
      
      {/* Title Section */}
      <div className="container mx-auto px-12 mb-10">
        <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
          The Apple Store difference. <span className="text-[#6e6e73]">Even more reasons to shop with us.</span>
        </h2>
      </div>

      <div className="relative group">
        {/* Slider Container */}
        <div 
          ref={diffRef} 
          className="flex overflow-x-auto gap-6 px-12 no-scrollbar pb-10 scroll-smooth"
        >
          {diffData.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[350px] h-[350px] bg-white rounded-[28px] p-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
            >
              {/* Emoji Icons as per screenshot */}
              <div className="text-[48px] mb-8 leading-none">
                {item.emoji}
              </div>
              
              {/* Text content with precise colors */}
              <h3 className={`text-[22px] font-semibold leading-[1.3] tracking-tight ${item.color}`}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-6 top-[150px] w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-6 top-[150px] w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2.5" transform="rotate(180 12 12)"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      </div>
    </div>
  );
};

export default CardSlider;