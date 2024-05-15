import React from "react";

const ContactForm = () => {
  return (
    <div className="">
      <div className="w-[100%] md:bg-white rounded-2xl md:p-6">
        <h1 className="font-bold text-[24px] md:text-[32px] leading-tight text-center font-redhat">
          Ready to boost your leads?
        </h1>
        <form className=" ">
          <div className="w-full relative group mt-[25px]">
            <input
              type="text"
              id="name2"
              name="name"
              required
              className="w-full h-7 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="name2"
              className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Name
            </label>
          </div>

          <div className="w-full relative group mt-[25px]">
            <input
              type="text"
              name="comapany_Name"
              id="comapany_Name2"
              required
              className="w-full h-7 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="comapany_Name2"
              className="transform transition-all text-[#999] absolute top-0  left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Comapany Name
            </label>
          </div>
          <div className="w-full relative group mt-[25px]">
            <input
              type="text"
              name="websiteUrl"
              id="websiteUrl2"
              required
              className="w-full h-7 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="websiteUrl2"
              className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Website Url
            </label>
          </div>
          <div className="w-full relative group mt-[25px]">
            <input
              type="text"
              name="email"
              id="email2"
              required
              className="w-full h-7 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="email2"
              className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Email
            </label>
          </div>

          <div className="w-full relative group mt-[25px]">
            <input
              type="text"
              name="phoneNo"
              id="phoneNo2"
              required
              className="w-full h-7 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="phoneNo2 "
              className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Phone No
            </label>
          </div>

          <button className="py-3 rounded-xl bg-[#e31a20] mt-8 w-full  font-poppins text-white texr-[14px] md:text-xl ">
            SEND REQUEST
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
