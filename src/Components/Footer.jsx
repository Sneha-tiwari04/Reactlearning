import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: "Shop and Learn",
      links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"]
    },
    {
      title: "Apple Wallet",
      links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
      extra: { title: "Account", links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"] }
    },
    {
      title: "Entertainment",
      links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Podcasts", "Apple Books", "App Store"]
    },
    {
      title: "Apple Store",
      links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Summer Camp", "Ways to Buy", "Apple Trade In", "Recycling Programme", "Order Status", "Shopping Help"]
    },
    {
      title: "For Business",
      links: ["Apple and Business"],
      extra1: { title: "For Education", links: ["Apple and Education", "Shop for Education", "Shop for College"] },
      extra2: { title: "For Healthcare", links: ["Apple in Healthcare", "Health on Apple Watch"] }
    },
    {
      title: "Apple Values",
      links: ["Accessibility", "Environment", "Privacy", "Supply Chain"],
      extra: { title: "About Apple", links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"] }
    }
  ];

  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] py-8 px-4 md:px-0 font-sans">
      <div className="max-w-[1000px] mx-auto">
        
        {/* 1. Disclaimer / Notes Section */}
        <section className="text-[12px] text-[#6e6e73] leading-relaxed border-b border-[#d2d2d7] pb-4 mb-4">
          <p className="mb-3">
            * New and qualified returning subscribers only. ₹99/month after free trial. Apple TV+ subscription does not include third-party branded subscription services.
          </p>
          <p className="mb-3">
            1. Special pricing available to qualified customers. To learn more about how to start qualifying for special pricing, talk to an Apple Specialist in a store or call 000800 040 1966.
          </p>
          <p>
            Apple Intelligence is available in beta. Some features may not be available in all regions or languages.
          </p>
        </section>

        {/* 2. Breadcrumb Section */}
        <nav className="flex items-center gap-2 text-[12px] text-[#6e6e73] mb-6">
          <span className="text-[16px]"></span>
          <span className="text-[#d2d2d7] font-light">{'>'}</span>
          <span>Apple Store Online</span>
        </nav>

        {/* 3. Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {footerLinks.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <div>
                <h3 className="text-[12px] font-semibold mb-2">{col.title}</h3>
                <ul className="flex flex-col gap-1.5 text-[12px] text-[#424245]">
                  {col.links.map(link => <li key={link} className="hover:underline cursor-pointer">{link}</li>)}
                </ul>
              </div>
              {col.extra && (
                <div>
                  <h3 className="text-[12px] font-semibold mb-2">{col.extra.title}</h3>
                  <ul className="flex flex-col gap-1.5 text-[12px] text-[#424245]">
                    {col.extra.links.map(link => <li key={link} className="hover:underline cursor-pointer">{link}</li>)}
                  </ul>
                </div>
              )}
              {/* Special handling for For Business column */}
              {col.extra1 && (
                <>
                  <div>
                    <h3 className="text-[12px] font-semibold mb-2">{col.extra1.title}</h3>
                    <ul className="flex flex-col gap-1.5 text-[12px] text-[#424245]">
                      {col.extra1.links.map(link => <li key={link} className="hover:underline cursor-pointer">{link}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[12px] font-semibold mb-2">{col.extra2.title}</h3>
                    <ul className="flex flex-col gap-1.5 text-[12px] text-[#424245]">
                      {col.extra2.links.map(link => <li key={link} className="hover:underline cursor-pointer">{link}</li>)}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* 4. Bottom Copyright Bar */}
        <section className="mt-8 pt-4 border-t border-[#d2d2d7] text-[12px] text-[#6e6e73]">
          <p className="mb-4">
            More ways to shop: <span className="text-blue-600 underline cursor-pointer">Find an Apple Store</span> or <span className="text-blue-600 underline cursor-pointer">other retailer</span> near you. Or call 000800 040 1966.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>Copyright © 2026 Apple Inc. All rights reserved.</span>
              <div className="flex gap-3">
                <span className="hover:underline cursor-pointer border-r border-[#d2d2d7] pr-3">Privacy Policy</span>
                <span className="hover:underline cursor-pointer border-r border-[#d2d2d7] pr-3">Terms of Use</span>
                <span className="hover:underline cursor-pointer border-r border-[#d2d2d7] pr-3">Sales Policy</span>
                <span className="hover:underline cursor-pointer border-r border-[#d2d2d7] pr-3">Legal</span>
                <span className="hover:underline cursor-pointer">Site Map</span>
              </div>
            </div>
            <span className="hover:underline cursor-pointer">India</span>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;