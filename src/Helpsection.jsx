function Helpsection() {
  return (
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
  );
}
export default Helpsection;