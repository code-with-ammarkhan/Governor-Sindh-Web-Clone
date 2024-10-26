import React from "react";
import Image from "next/image";
import kamran from "../images/kamran.png";

function Hero() {
  return (
    <div 
      className="relative w-[100%] flex sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center sm:pt-32 md:pt-20 lg:pt-20 xl:pt-20 2xl:pt-20 border-b-4 border-double border-gray-500"
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('https://i.ibb.co/PZJcdzx/Governor-House-Sindh.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2
        }}
      ></div>
      <div className="relative z-10 w-full flex sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center">
        {/* text */}
        <div className="flex flex-col justify-start items-start sm:ml-3 lg:ml-7 sm:pt-5 md:pl-10 md:pt-8 lg:pt-0 lg:pl-10 xl:pl-10 2xl:pl-10">
          <h1 className="sm:text-2xl md:text-3xl lg:text-5xl xl:text-4xl text-[#044e83] font-extrabold">
            Governor Sindh
          </h1>
          <h2 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl text-[#044e83] mb-4">
            Kamran Khan Tessori
          </h2>
          <h2 className="sm:text-xl md:text-xl lg:text-3xl xl:text-2xl text-[#56b9f3] font-extrabold">
            Certified Cloud Applied Generative AI Engineer (GenEng)
          </h2>
          <h3 className="text-2xl text-[#044e83] font-bold lg:pt-9 xl:pt-9 2xl:pt-9">
            Earn up to $5,000 / month
          </h3>
          <h3 className="text-2xl text-[#044e83] font-bold">
            Now admissions are open in Hyderabad
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-start space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
            <button className="w-[150px] text-white p-3 text-xl rounded-lg bg-[#044e83] font-bold transition duration-200 ease-out hover:scale-105 hover:ease-in">
              Apply Now
            </button>
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-4xl text-[#044e83] font-bold">562,143</h1>
              <p className="text-sm text-[#044e83]">
                Accepted Applications
              </p>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="sm:pt-5 md:pt-5 lg:pt-4 lg:pl-60 mt-10 mr-4">
          <Image
            width={1200}
            height={812}
            src={kamran}
            alt="kamrantessori"
            loading="lazy"
            className="mr-16"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
