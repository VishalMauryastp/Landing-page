import Link from "next/link";
import React from "react";
import { IoMdMail } from "react-icons/io";

const EmailActon = () => {
  return (
    <div className="bg-[#e31a20] py-12 md:py-16">
      <div className="flex max-lg:gap-4  max-lg:flex-col lg:justify-between items-start lg:items-center w-[90%] mx-auto">
        <div>
          <h4 className="text-[36px] font-redhat text-white font-bold">
            Improve your search ranking now!
          </h4>
          <p className=" text-white font-poppins text-[20px]">
            Let's discuss your project with us by email
          </p>
        </div>
        <div>
          <Link
            href={`mailto:contact@sibinfotech.com`}
            className=" font-poppins flex justify-center border border-white text-white hover:border-transparent   hover:bg-white hover:text-[#222]   transition-all duration-300  group   rounded text-[18px] font-bold   items-center gap-1 p-[10px_15px]"
          >
            <IoMdMail className="text-2xl    " />
            <span>contact@sibinfotech.com</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailActon;
