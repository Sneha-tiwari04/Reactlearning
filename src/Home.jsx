import mac from "./assets/mac.png";
import iphone from "./assets/iphone.png";
import ipad from "./assets/ipad.png";
import watch from "./assets/watch.png";
import airpods from "./assets/Airpods.png";
// import mac from "./assets/mac.png";


function Home() {

  const products = [
    { name: "Mac", img: mac },
    { name: "iPhone", img: iphone },
    { name: "iPad", img: ipad },
    { name: "Watch", img: watch },
    { name: "AirPods", img: airpods }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <div className="flex justify-between items-center px-16 py-20">
        <h1 className="text-6xl font-bold">Store.</h1>

        <div className="text-right">
          <p className="text-2xl font-semibold">
            The best way to buy the products you love.
          </p>
          <p className="text-blue-600 mt-2 cursor-pointer">
            Connect with a Specialist →
          </p>
        </div>
      </div>

      {/* PRODUCT ROW */}
      <div className="flex justify-center gap-10 py-6 overflow-x-auto">
        {products.map((item, i) => (
          <div key={i} className="text-center cursor-pointer">
            <img src={item.img} alt="" className="h-16 mx-auto" />
            <p className="mt-2">{item.name}</p>
          </div>
        ))}
      </div>

      {/* LATEST SECTION */}
      <div className="px-16 py-10">
        <h2 className="text-3xl font-bold">
          The latest.{" "}
          <span className="text-gray-500">
            Take a look at what’s new right now.
          </span>
        </h2>

        <div className="flex gap-6 mt-8 overflow-x-auto">

          {/* CARD 1 */}
          <div className="min-w-[300px] bg-black text-white rounded-3xl p-6">
            <h3 className="text-2xl font-semibold">iPhone 17 Pro</h3>
            <p className="mt-2">All out Pro.</p>
            <img src={ipad} alt="" className="mt-6 rounded-xl" />
          </div>

          {/* CARD 2 */}
          <div className="min-w-[300px] bg-white rounded-3xl p-6 shadow">
            <p className="text-orange-500 text-sm">NEW</p>
            <h3 className="text-2xl font-semibold">MacBook Neo</h3>
            <p className="mt-2 text-gray-600">
              The magic of Mac at a surprising price.
            </p>
            <img src={mac} alt="" className="mt-6 rounded-xl" />
          </div>

          {/* CARD 3 */}
          <div className="min-w-[300px] bg-white rounded-3xl p-6 shadow">
            <p className="text-orange-500 text-sm">NEW</p>
            <h3 className="text-2xl font-semibold">iPhone 17e</h3>
            <p className="mt-2 text-gray-600">
              Feature stacked. Value packed.
            </p>
            <img src={iphone} alt="" className="mt-6 rounded-xl" />
          </div>

        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="px-16 py-10">
        <h2 className="text-3xl font-bold">
          The Apple Store difference.
          <span className="text-gray-500">
            {" "}Even more reasons to shop with us.
          </span>
        </h2>

        <div className="grid grid-cols-4 gap-6 mt-8">

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <p className="text-xl font-semibold">
              No Cost EMI. Plus Instant Cashback.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <p className="text-xl font-semibold">
              Exchange your smartphone
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <p className="text-xl font-semibold">
              Customise your Mac
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <p className="text-xl font-semibold">
              Free Engraving
            </p>
          </div>

        </div>
      </div>

      {/* HELP SECTION */}
      <div className="px-16 py-10">
        <h2 className="text-3xl font-bold">
          Help is here.
          <span className="text-gray-500">
            {" "}Whenever and however you need it.
          </span>
        </h2>

        <div className="grid grid-cols-2 gap-6 mt-8">

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Shop with a Specialist over video.
            </h3>
            <p className="text-gray-600 mt-2">
              Choose your next device in a guided session.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Shop one on one with a Specialist online.
            </h3>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;