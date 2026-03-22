import { useState } from "react";

function Home() {

  // 🔥 DATA (sab yahi pe)
  const categories = [
    { name: "Mac", img: "/assets/mac.png" },
    { name: "iPhone", img: "/assets/iphone.png" },
    { name: "iPad", img: "/assets/ipad.png" },
    { name: "Watch", img: "/assets/watch.png" },
    { name: "AirPods", img: "/assets/airpods.png" },
  ];

  const latestProducts = [
    {
      id: 1,
      title: "iPhone 17 Pro",
      subtitle: "All out Pro.",
      price: "From ₹134900",
      img: "/assets/iphone17.png",
      dark: true
    },
    {
      id: 2,
      title: "MacBook Neo",
      subtitle: "The magic of Mac at a surprising price.",
      price: "From ₹69900",
      img: "/assets/macneo.png"
    },
    {
      id: 3,
      title: "iPhone 17e",
      subtitle: "Feature stacked.",
      price: "From ₹64900",
      img: "/assets/iphone17e.png"
    }
  ];

  const infoCards = [
    {
      title: "No Cost EMI",
      desc: "Plus Instant Cashback"
    },
    {
      title: "Exchange your smartphone",
      desc: "Get credit towards a new one."
    },
    {
      title: "Customise your Mac",
      desc: "Make it yours"
    },
    {
      title: "Free Engraving",
      desc: "On selected products"
    }
  ];

  return (
    <div>

      {/* 🔥 HERO */}
      <div className="px-10 py-16">
        <h1 className="text-6xl font-bold">Store</h1>
      </div>

      {/* 🔥 CATEGORY BAR */}
      <div className="flex gap-10 overflow-x-auto px-10 py-6">
        {categories.map((cat, i) => (
          <div key={i} className="text-center min-w-[100px]">
            <img src={cat.img} className="h-16 mx-auto" />
            <p className="mt-2">{cat.name}</p>
          </div>
        ))}
      </div>

      {/* 🔥 LATEST SECTION */}
      <div className="px-10 mt-10">
        <h2 className="text-3xl font-semibold">
          The latest. <span className="text-gray-500">Take a look at what’s new.</span>
        </h2>

        <div className="grid grid-cols-3 gap-6 mt-6">
          {latestProducts.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 ${item.dark ? "bg-black text-white" : "bg-gray-100"}`}
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.subtitle}</p>
              <p className="mt-2">{item.price}</p>
              <img src={item.img} className="mt-4" />
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 STORE DIFFERENCE */}
      <div className="px-10 mt-16">
        <h2 className="text-3xl font-semibold">
          The Apple Store difference.
          <span className="text-gray-500"> Even more reasons to shop with us.</span>
        </h2>

        <div className="grid grid-cols-4 gap-6 mt-6">
          {infoCards.map((card, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-3xl">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-gray-500 mt-2">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 HELP SECTION */}
      <div className="px-10 mt-16 mb-20">
        <h2 className="text-3xl font-semibold">
          Help is here.
          <span className="text-gray-500"> Whenever and however you need it.</span>
        </h2>

        <div className="grid grid-cols-3 gap-6 mt-6">

          <div className="bg-gray-100 p-6 rounded-3xl">
            <h3 className="text-xl font-semibold">
              Shop with a Specialist over video.
            </h3>
          </div>

          <div className="bg-gray-100 p-6 rounded-3xl">
            <h3 className="text-xl font-semibold">
              Shop one on one with a Specialist online.
            </h3>
          </div>

          <div className="bg-gray-100 p-6 rounded-3xl">
            <h3 className="text-xl font-semibold">
              Explore Apple in store.
            </h3>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;