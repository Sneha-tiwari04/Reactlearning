import React, { useRef } from 'react';

const Access = () => {
  const scrollRef = useRef(null);

  const accessoriesData = [
    {
      isNew: true,
      title: "iPhone 17 Pro Silicone Case with MagSafe – Bright Guava",
      price: "₹4900.00",
      img: "m1.png", // Replace with Bright Guava Case image
      colors: ["#f76a7c", "#f9e5c9", "#d1d5db", "#4b5563", "#a8715a"]
    },
    {
      isNew: true,
      title: "Crossbody Strap - Bright Guava",
      price: "₹5900.00",
      img: "m2.png", // Replace with Crossbody Strap image
      colors: ["#fcddec", "#facc15", "#ef4444", "#374151", "#94a3b8"]
    },
    {
      isNew: false,
      title: "MagSafe Charger (1m)",
      price: "₹4500.00",
      img: "m3.png", // Replace with MagSafe image
      colors: []
    },
    {
      isNew: true,
      title: "46mm Bright Guava Sport Loop",
      price: "₹4500.00",
      img: "m4.png", // Replace with Sport Loop image
      colors: ["#f472b6", "#fb923c", "#d1d5db", "#374151", "#65a30d"]
    },
    {
      isNew: true,
      title: "Magic Keyboard for iPad Air 13\" (M4) - US English - Black",
      price: "₹29900.00",
      img: "m6.png", // Replace with Keyboard image
      colors: ["#ffffff", "#1d1d1f"]
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f5f5f7] py-20 overflow-hidden group">
      <div className="container mx-auto px-12 mb-10">
        <h2 className="text-[40px] font-semibold text-[#1d1d1f] tracking-tight">
          Accessories. <span className="text-[#6e6e73]">Essentials that pair perfectly with your favourite devices.</span>
        </h2>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex gap-5 px-12 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {/* First Special Card: "Here and wow" */}
          <div className="flex-shrink-0 w-[400px] h-[500px] bg-white rounded-[28px] p-12 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-[32px] font-semibold leading-tight mb-4">Here and wow.</h3>
              <p className="text-[21px] text-[#1d1d1f]">The accessories you love.<br/>In a fresh mix of colours.</p>
            </div>
            <div className="flex items-end justify-center h-full">
               {/* Replace with grouped accessories image from screenshot */}
               <img src="m5.png" alt="Accessories Mix" className="max-h-[250px] object-contain" />
            </div>
          </div>

          {/* Product Cards */}
          {accessoriesData.map((item, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[312px] h-[500px] bg-white rounded-[28px] p-8 shadow-sm flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="flex flex-col items-center">
                <img src={item.img} alt={item.title} className="h-[220px] object-contain mb-6" />
                
                {/* Color Variants Dots */}
                {item.colors.length > 0 && (
                  <div className="flex gap-2 mb-6">
                    {item.colors.map((color, i) => (
                      <span key={i} className="w-3 h-3 rounded-full border border-gray-200" style={{ backgroundColor: color }}></span>
                    ))}
                    {item.colors.length >= 5 && <span className="text-[14px] text-gray-400 font-bold">+</span>}
                  </div>
                )}
              </div>

              <div>
                {item.isNew && <span className="text-[#f56300] text-[12px] font-semibold block mb-1">New</span>}
                <h4 className="text-[17px] font-semibold leading-snug mb-2 text-[#1d1d1f] line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-[14px] text-[#1d1d1f]">MRP {item.price} (Incl. of all taxes)</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button onClick={() => scroll('left')} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 border border-gray-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button onClick={() => scroll('right')} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 border border-gray-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2.5" transform="rotate(180 12 12)"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      </div>
    </div>
  );
};

export default Access;