import Image from "next/image";
import React from "react";
import HeroForm from "./HeroForm";

const Hero = () => {
  const images = [
    {
      img: "/banner/logo/best-website-deigning-ana-development-company-in-india.svg",
      alt: "best-website-deigning-ana-development-company-in-india.svg",
    },
    {
      img: "/banner/logo/best-design-comapnies-in-india.svg",
      alt: "best-design-comapnies-in-india.svg",
    },
    {
      img: "/banner/logo/facebook-reviews.svg",
      alt: "facebook-reviews.svg",
    },
    {
      img: "/banner/logo/search-engine-optimization-firm-in-delhi.svg",
      alt: "search-engine-optimization-firm-in-delhi.svg",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-black/30 md:pb-10 pt-[50px] ">
      <video
        src={"/banner/banner-video.mp4"}
        height={"400px"}
        autoPlay
        loop
        playsInline
        muted
        className=" object-cover md:object-fill size-full absolute top-0 -z-[1]"
      ></video>

      <div className="w-[90%] mx-auto py-20  ">
        <div className="flex ">
          <div className="lg:w-[calc(100%-404px)]">
            <h1 className="font-bold font-poppins text-[#58E1FA] max-md:text-center text-[17px] md:text-[20px]">
              #1 Digital Marketing Agency in India
            </h1>
            <ul className="listBanner   relative font-redhat font-bold text-4xl md:text-5xl max-md:text-center  text-white px-[10] my-8">
              <li className="px-1 py-2 relative z-[2] ">Get More Sales</li>
              <li className="px-1 py-2 relative z-[2]">Get More Leads</li>
              <li className="px-1 py-2 relative z-[2] ">Get More Traffic</li>
            </ul>
            <div className="md:w-[80%] grid grid-cols-3 justify-center items-center md:grid-cols-4 gap-2 ">
              {images.map((items, i) => {
                return (
                  <div
                    className="max-md:last:col-span-3   flex justify-center items-center"
                    key={i}
                  >
                    <div className="bg-white rounded-[5px] max-md:last:w-[102px]  p-2 ">
                      <Image
                        width={120}
                        height={80}
                        src={items?.img}
                        alt={items?.img}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[404px] max-lg:hidden">
            <HeroForm />
          </div>
        </div>
        <hr className=" max-md:hidden text-gray-300 my-8" />
        <div className="grid gap-8 max-md:hidden  md:grid-cols-2 lg:grid-cols-4 ">
          <div>
            <h4 className="font-poppins text-[22px] text-white font-bold">
              {" "}
              Digital Marketing <br className="max-lg:hidden" /> Services
            </h4>
          </div>
          <div>
            <h4 className="font-poppins text-[22px] text-white font-bold">
              Search Engine <br className="max-lg:hidden" /> Optimization
              Services
            </h4>
          </div>
          <div>
            <h4 className="font-poppins text-[22px] text-white font-bold">
              PPC Management <br className="max-lg:hidden" /> Services
            </h4>
          </div>
          <div>
            <h4 className="font-poppins text-[22px] text-white font-bold">
              Graphic Desgining <br className="max-lg:hidden" /> Services
            </h4>
          </div>
        </div>
      </div>
      <div>
        <Image
          width={1000}
          height={200}
          className=" absolute w-full  object-cover z-[2] bottom-0 h-[30px]  md:h-[95px]"
          src={"/banner/bg-wave.svg"}
          alt="bg-wave"
        />
      </div>
    </div>
  );
};

export default Hero;
