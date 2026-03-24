import React, { useState, useEffect } from 'react'; // React hooks import karein
import First from "./First";
import SliderSection from "./SliderSection";
import CardSlider from './CardSlider';
import HelpSection from "./HelpSection";
import Access from "./Access";
import SpecialSection from "./SpecialSection";
import Last from "./Last";

function Home() {
  const [newProducts, setNewProducts] = useState([]);

  // Admin panel se data khinchne ke liye useEffect
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("appleProducts")) || [];
    setNewProducts(savedData);
  }, []);

  return (
    <>
      <First/>
      
      {/* Naya Dynamic Section: Jo Admin se data aayega wo yahan dikhega */}
      {newProducts.length > 0 && (
        <div className="bg-white py-20 px-12">
          <h2 className="text-[48px] font-semibold mb-10 text-[#1d1d1f]">
            Your Added Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newProducts.map((item) => (
              <div key={item.id} className="bg-[#f5f5f7] rounded-[28px] p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p className="text-xl mt-2 text-gray-600">Starting at ₹{item.price}</p>
                <button className="mt-6 bg-[#0071e3] text-white px-6 py-2 rounded-full font-medium hover:bg-[#0077ed]">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <SliderSection />
      <CardSlider/>
      <HelpSection/>
      <Access/>
      <SpecialSection/>
      <Last/>
    </>
  );
}

export default Home;