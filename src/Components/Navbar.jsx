import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const navData = {
    Store: {
      sections: [
        { title: "Shop", links: ["Shop the Latest", "Mac", "iPad", "iPhone", "Apple Watch", "Accessories"] },
        { title: "Quick Links", links: ["Find a Store", "Order Status", "Apple Trade In"] },
        { title: "Shop Special Stores", links: ["Education", "Business"] }
      ]
    },
    Mac: {
      sections: [
        { title: "Explore Mac", links: ["Explore All Mac", "MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio"] },
        { title: "Shop Mac", links: ["Shop Mac", "Mac Accessories", "Ways to Buy"] },
        { title: "More from Mac", links: ["Mac Support", "AppleCare for Mac", "macOS Sequoia"] }
      ]
    },
    iPad: {
      sections: [
        { title: "Explore iPad", links: ["Explore All iPad", "iPad Pro", "iPad Air", "iPad", "iPad mini", "Apple Pencil", "Keyboards"] },
        { title: "Shop iPad", links: ["Shop iPad", "iPad Accessories", "Ways to Buy"] },
        { title: "More from iPad", links: ["iPad Support", "AppleCare for iPad", "iPadOS 18"] }
      ]
    },
    iPhone: {
      sections: [
        { title: "Explore iPhone", links: ["Explore All iPhone", "iPhone 16 Pro", "iPhone 16", "iPhone 15", "iPhone 14", "iPhone SE"] },
        { title: "Shop iPhone", links: ["Shop iPhone", "iPhone Accessories", "Apple Trade In"] },
        { title: "More from iPhone", links: ["iPhone Support", "AppleCare for iPhone", "iOS 18"] }
      ]
    },
    Watch: {
      sections: [
        { title: "Explore Watch", links: ["Explore All Apple Watch", "Apple Watch Series 10", "Apple Watch Ultra 2", "Apple Watch SE"] },
        { title: "Shop Watch", links: ["Shop Apple Watch", "Apple Watch Straps", "Apple Watch Accessories"] },
        { title: "More from Watch", links: ["Apple Watch Support", "AppleCare", "watchOS 11"] }
      ]
    },
    AirPods: {
      sections: [
        { title: "Explore AirPods", links: ["Explore All AirPods", "AirPods Pro 2", "AirPods 4", "AirPods Max"] },
        { title: "Shop AirPods", links: ["Shop AirPods", "AirPods Accessories"] },
        { title: "More from AirPods", links: ["AirPods Support", "Apple Music"] }
      ]
    },
    "TV & Home": {
      sections: [
        { title: "Explore TV & Home", links: ["Explore All TV & Home", "Apple TV 4K", "HomePod", "HomePod mini"] },
        { title: "Shop TV & Home", links: ["Shop Apple TV 4K", "Shop HomePod", "TV & Home Accessories"] },
        { title: "More from TV & Home", links: ["Apple TV Support", "HomePod Support", "Apple TV app"] }
      ]
    },
    Entertainment: {
      sections: [
        { title: "Explore Entertainment", links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Podcasts", "Apple Books", "App Store"] },
        { title: "Support", links: ["Apple TV+ Support", "Apple Music Support"] }
      ]
    },
    Accessories: {
      sections: [
        { title: "Shop Accessories", links: ["Shop All Accessories", "Mac", "iPad", "iPhone", "Apple Watch", "AirPods"] },
        { title: "Explore Accessories", links: ["Made by Apple", "Beats by Dr. Dre", "AirTag"] }
      ]
    },
    Support: {
      sections: [
        { title: "Explore Support", links: ["iPhone", "Mac", "iPad", "Watch", "AirPods", "Music", "TV"] },
        { title: "Get Help", links: ["Community", "Check Coverage", "Repair", "Contact Us"] }
      ]
    }
  };

  return (
    <nav 
      className="w-full bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-200"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        
        {/* CENTER LINKS */}
        <div className="flex items-center gap-8 text-[12px] font-normal text-gray-800">
          <Link to="/" className="text-xl font-bold" onClick={() => setActiveMenu(null)}>Apple</Link>

          {Object.keys(navData).map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-black transition-colors py-2"
              onMouseEnter={() => setActiveMenu(item)}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* RIGHT SECTION: Login & Signup */}
        <div className="flex items-center gap-4 text-sm">
          <span className="cursor-pointer opacity-80 mr-2">🔍</span>
          <span className="cursor-pointer opacity-80 mr-2">🛍️</span>
          
          <Link 
            to="/login" 
            className="px-3 py-1 text-[12px] border border-gray-400 rounded-full hover:bg-gray-100 transition"
            onClick={() => setActiveMenu(null)}
          >
            Login
          </Link>

          <Link 
            to="/signup" 
            className="px-3 py-1 text-[12px] bg-black text-white rounded-full hover:bg-gray-800 transition"
            onClick={() => setActiveMenu(null)}
          >
            Signup
          </Link>
        </div>
      </div>

      {/* MEGA MENU DROPDOWN */}
      {activeMenu && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl transition-all duration-300"
          onMouseEnter={() => setActiveMenu(activeMenu)}
        >
          <div className="max-w-5xl mx-auto py-10 px-10 grid grid-cols-3 gap-8">
            {navData[activeMenu]?.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-[12px] text-gray-500 mb-4 font-medium">{section.title}</h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link, i) => (
                    <li key={i} className="text-xl font-semibold cursor-pointer hover:text-blue-600 transition-colors list-none">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;