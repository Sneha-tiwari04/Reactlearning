const Last= () => {
  const expData = [
    {
      title: "Apple Intelligence.",
      desc: "Create, communicate and get things done effortlessly.²",
      img: "a1.png",
      bg: "bg-white",
      titleColor: "text-blue-600"
    },
    {
      label: "APPLE STORE APP",
      title: "Put your bow on it.",
      desc: "Make the gift unmistakably theirs with a personalised message.",
      img: "a2.png",
      bg: "bg-white"
    },
    {
      label: "APPLE TV+",
      title: "Get 3 months of Apple TV+ free when you buy an Apple device.※",
      img: "a3.png",
      bg: "bg-black",
      textColor: "text-white"
    }
  ];

  return (
    <div className="bg-[#f5f5f7] py-16">
      <div className="container mx-auto px-12 mb-10">
        <h2 className="text-[40px] font-semibold text-[#1d1d1f]">
          The Apple experience. <span className="text-[#6e6e73]">Do even more with Apple products and services.</span>
        </h2>
      </div>
      <div className="flex gap-6 px-12 overflow-x-auto no-scrollbar">
        {expData.map((item, index) => (
          <div key={index} className={`flex-shrink-0 w-[480px] h-[635px] rounded-[28px] overflow-hidden relative shadow-sm ${item.bg} ${item.textColor || 'text-[#1d1d1f]'}`}>
            <div className="p-12 z-10 relative">
              {item.label && <span className="text-[12px] font-bold block mb-2 opacity-70">{item.label}</span>}
              <h3 className="text-[32px] font-semibold leading-tight">
                <span className={item.titleColor}>{item.title.split('.')[0]}</span>{item.title.includes('.') ? '.' : ''}
              </h3>
              <p className="text-[19px] mt-3 font-medium opacity-90">{item.desc}</p>
            </div>
            <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Last