import React from 'react';
import iphone17 from "../assets/iphone17pro.png"
import macbook from "../assets/macbook.png"
import iphone17e from "../assets/iphone17e.png"
import airpods1 from "../assets/airpods1.png"
import macbookpro from "../assets/macbookpro.png"
import macbookair from "../assets/macbookair.png"
import a1img from "../assets/a1.png"
import a2img from "../assets/a2.png"









const products = [
  {
    id: 1,
    isNew: false,
    title: "iPhone 17 Pro",
    desc: "All out Pro.",
    price: "From ₹134900.00*",
    bg: "bg-black",
    textColor: "text-white",
    img: iphone17 // Apne assets folder se path check karein
  },
  {
    id: 2,
    isNew: true,
    title: "MacBook Neo",
    desc: "The magic of Mac at a surprising price.",
    price: "From ₹69900.00*",
    bg: "bg-white",
    textColor: "text-black",
    img: macbook
  },
  {
    id: 3,
    isNew: true,
    title: "iPhone 17e",
    desc: "Feature stacked. Value packed.",
    price: "From ₹64900.00*",
    bg: "bg-white",
    textColor: "text-black",
    img: iphone17e
  },
  {
    id: 4,
    isNew: true,
    title: "AirPods Max 2",
    desc: "Listening. Remastered.",
    price: "₹67900.00*",
    bg: "bg-white",
    textColor: "text-black",
    img: airpods1
  },
  {
    id: 5,
    isNew: true,
    title: "MacBook Pro",
    desc: "Now with M5, M5 Pro and M5 Max.",
    price: "From ₹189900.00*",
    bg: "bg-black",
    textColor: "text-white",
    img: macbookpro
  },
  {
    id: 6,
    isNew: true,
    title: "MacBook Air",
    desc: "Now supercharged by M5.",
    price: "From ₹119900.00*",
    bg: "bg-[#e3f0f8]", // Light blue shade for MacBook Air
    textColor: "text-black",
    img: macbookair
  },
  {
    id: 7,
    isNew: false,
    title: "Magic Keyboard for iPad",
    desc: "US English - Black",
    price: "MRP ₹29900.00",
    bg: "bg-white",
    textColor: "text-black",
    img: a1img
  },
  {
    id: 8,
    isNew: true,
    title: "AirTag",
    desc: "Lose your knack for losing things.",
    price: "MRP ₹3790.00",
    bg: "bg-white",
    textColor: "text-black",
    img: a2img
  }
];

const SliderSection = () => {
  return (
    <section className="py-10 bg-[#f5f5f7]">
      <div className="container mx-auto px-6 mb-6">
        <h2 className="text-3xl font-semibold text-[#1d1d1f]">
          The latest. <span className="text-[#6e6e73]">Take a look at what's new right now.</span>
        </h2>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div className="flex overflow-x-auto gap-6 px-10 no-scrollbar pb-10">
        {products.map((item) => (
          <div 
            key={item.id}
            className={`flex-shrink-0 w-[320px] md:w-[400px] h-[500px] rounded-[28px] p-8 shadow-sm transition-transform duration-300 hover:scale-[1.02] cursor-pointer ${item.bg} ${item.textColor} flex flex-col justify-between`}
          >
            <div>
              {item.isNew && <span className="text-[12px] font-bold text-orange-600 uppercase">New</span>}
              <h3 className="text-2xl font-bold mt-2 leading-tight">{item.title}</h3>
              <p className="text-lg mt-1 font-medium">{item.desc}</p>
              <p className="mt-2 text-sm opacity-80">{item.price}</p>
            </div>
            
            <div className="mt-auto self-center">
              <img src={item.img} alt={item.title} className="w-[450%] max-h-[550px] object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SliderSection;