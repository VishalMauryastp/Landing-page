import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";

const DriveMore = () => {
  return (
    <div className="bg-[#3979f8c7] py-20   ">
      <div className="flex flex-col  items-center justify-center max-lg:w-[90%] mx-auto">
        <h1 className="font-redhat text-[27px] md:text-[36px] text-center font-bold text-white">
          Want To Drive More Traffic To Your Business Website?
        </h1>
        <p className="font-poppins text-white text-[17px] md:text-[20px]  lg:w-[70%] mx-auto text-center font-  my-4">
          Contact us today to learn more about how we can help drive more
          traffic to your business website and take your online presence to the
          next level!
        </p>
        <button className=" flex justify-center items-center border   bg-white text-[#222] hover:border-white hover:text-white font-redhat hover:bg-opacity-0  transition-all duration-300  group   rounded text-[13px] md:text-[18px] font-bold    gap-1 p-[10px_15px] uppercase">
          <span>Speak With An Expert </span>
          <FaPhoneSquareAlt className="text-2xl    " />
        </button>
      </div>
    </div>
  );
};

export default DriveMore;
