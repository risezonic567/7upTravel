import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Search Choice",
      description: "Total 630+ destinations that we work with",
      icon: "/step-3.png", 
      color: "bg-purple-100"
    },
    {
      id: 2,
      title: "Select Destination",
      description: "Select your dream location and make it a reality.",
      icon: "/step-2.png",
      color: "bg-indigo-100"
    },
    {
      id: 3,
      title: "Easy to Book",
      description: "With an easy and fast ticket purchase process",
      icon: "/step-1.png",
      color: "bg-yellow-100"
    }
  ];

  return (
    <div className=" bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto ">
        <div className="flex flex-col md:flex-row items-start justify-between relative">
          
          <div className="flex flex-col items-center text-center z-10 w-full md:w-1/3">
            <div className="w-40 h-40 rounded-full  flex items-center justify-center mb-6 relative">
              <img src={steps[0].icon} alt="Search" className="w-24 h-24 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{steps[0].title}</h3>
            <p className="text-gray-500 text-sm max-w-[200px] font-semibold leading-relaxed">
              {steps[0].description}
            </p>
          </div>

          <div className="hidden md:block absolute top-20 left-[22%] w-[20%]">
            <svg viewBox="0 0 100 50" fill="none" className="w-full">
              <path 
                d="M0 30 Q50 0 100 30" 
                stroke="#cbd5e1" 
                strokeWidth="2" 
                strokeDasharray="6 6" 
                fill="none"
              />
              <path d="M95 25 L102 31 L95 37" stroke="#cbd5e1" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="flex flex-col items-center text-center z-10 w-full md:w-1/3 mt-16 md:mt-24">
            <div className="w-40 h-40 rounded-full  flex items-center justify-center mb-6">
              <img src={steps[1].icon} alt="Destination" className="w-24 h-24 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{steps[1].title}</h3>
            <p className="text-gray-500 font-semibold text-sm max-w-[200px] leading-relaxed">
              {steps[1].description}
            </p>
          </div>

          <div className="hidden md:block absolute top-20 right-[22%] w-[20%]">
            <svg viewBox="0 0 100 50" fill="none" className="w-full">
              <path 
                d="M0 30 Q50 0 100 30" 
                stroke="#cbd5e1" 
                strokeWidth="2" 
                strokeDasharray="6 6" 
                fill="none"
              />
              <path d="M95 25 L102 31 L95 37" stroke="#cbd5e1" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="flex flex-col items-center text-center z-10 w-full md:w-1/3 mt-16 md:mt-0">
            <div className="w-40 h-40 rounded-full  flex items-center justify-center mb-6">
              <img src={steps[2].icon} alt="Book" className="w-24 h-24 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{steps[2].title}</h3>
            <p className="text-gray-500 text-sm font-semibold max-w-[200px] leading-relaxed">
              {steps[2].description}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowItWorks;