import React from "react";
 import macImg from "../assets/mac.png"
 import iphoneImg from "../assets/iphone.png"
 import ipadImg from "../assets/ipad.png"
 import appleImg from "../assets/apple.png"
 import airImg from "../assets/air.png"
 import airtagImg from "../assets/airtag.png"
 import tvImg from "../assets/tv.png"
 import homeImg from "../assets/home.png"




function First() {
  return (
    <div className="pt-16 bg-[#f5f5f7] min-h-screen">

      {/* TOP OFFER BAR */}
      <div className="text-center text-sm py-2 bg-white border-b">
        Get up to 6 months of No Cost EMI plus up to ₹10000 instant cashback.
        <span className="text-blue-600 ml-2 cursor-pointer">See offers +</span>
      </div>

      {/* HERO SECTION */}
      <div className="flex justify-between items-center px-20 py-16">

        {/* LEFT */}
        <h1 className="text-[80px] font-semibold text-black">Store</h1>

        {/* RIGHT */}
        <div className="text-right max-w-md">
          <p className="text-2xl font-semibold text-black">
            The best way to buy the products you love.
          </p>

          <p className="text-blue-600 mt-4 cursor-pointer">
            Connect with a Specialist →
          </p>

          <p className="text-blue-600 cursor-pointer">
            Find an Apple Store →
          </p>
        </div>
      </div>

      {/* PRODUCTS ROW */}
      <div className="flex justify-between items-center px-16 py-10 overflow-x-auto">

        {/* ITEM */}
        <div className="flex flex-col items-center min-w-[120px]">
          <img src= {macImg}className="w-24 mb-2" />
          <p className="text-sm">Mac</p>
        </div>

        <div className="flex flex-col items-center min-w-[120px]">
          <img src={iphoneImg} className="w-20 mb-2" />
          <p className="text-sm">iPhone</p>
        </div>

        <div className="flex flex-col items-center min-w-[120px]">
          <img src= {ipadImg}className="w-20 mb-2" />
          <p className="text-sm">iPad</p>
        </div>

        <div className="flex flex-col items-center min-w-[120px]">
          <img src={appleImg} className="w-20 mb-2" />
          <p className="text-sm">Apple Watch</p>
        </div>

        <div className="flex flex-col items-center min-w-[120px]">
          <img src={airImg} className="w-20 mb-2" />
          <p className="text-sm">AirPods</p>
        </div>

        <div className="flex flex-col items-center min-w-[120px]">
          <img src={airtagImg} className="w-16 mb-2" />
          <p className="text-sm">AirTag</p>
        </div>

        <div className="flex flex-col items-center min-w-[120px]">
          <img src={tvImg} className="w-20 mb-2" />
          <p className="text-sm">Apple TV 4K</p>
        </div>

        <div className="flex flex-col items-center min-w-[120px]">
          <img src={homeImg} className="w-20 mb-2" />
          <p className="text-sm">HomePod</p>
        </div>

      </div>

    </div>
  );
}

export default First;