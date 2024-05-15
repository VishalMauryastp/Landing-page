import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#222] ">
      <div className="w-[95%] mx-auto py-6 flex max-lg:flex-col justify-between items-center">
        <p className="text-white font-bold  font-poppins">
          Copyright @ 2024. SIB Infotech The SEO Specialist. All Rights
          Reserved.
        </p>
        <div className="text-white flex gap-4 max-lg:mt-4 ">
          <Link href={"https://www.sibinfotech.com/privacy-policy"}>
            Privacy Policy
          </Link>
          <Link href={"https://www.sibinfotech.com/terms-and-conditions"}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
