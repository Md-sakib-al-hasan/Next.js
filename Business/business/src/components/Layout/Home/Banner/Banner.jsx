import React from "react";
import Bannerimg from "@/../public/Banner.jpg";
import Image from "next/image";
import Buttons from "@/components/Shared/Button/Button";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500  to-blue-500">
      <div className="w-full">
        <Image width="1000px" src={Bannerimg} alt="Banner" />
      </div>
      <div className="">
        <p className="bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-14 w-full h-[630px] opacity-45"></p>
      </div>
      <div className="absolute bottom-1/3 left-20 space-y-4">
        <h3 className="uppercase font-bold text-white">
          We are EXPERT IN THIS FIELD
        </h3>
        <h1 className="text-white text-4xl font-bold">
          Business Consulting <br></br>
          All Soulutions
        </h1>
        <p className="font-light text-[13px] text-black">
          Apexa Helps You To Convert Your Data Into A Strategic Asset And Get
          <br></br>
          Business Insights Apexa Helps You To Convert Your Data Into Asset And
          <br></br>
          Get Top-Notch Business Insights
        </p>
        <Buttons></Buttons>
      </div>
    </div>
  );
};

export default Banner;
