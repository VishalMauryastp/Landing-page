import Image from "next/image";
import React from "react";

const PpcMangement = () => {
  return (
    <div>
      <div className="w-[90%]  mx-auto  relative">
        <div className=" lg:hidden grid grid-cols-2 items-center  py-10">
          <div className=" relative">
            <Image
              className=""
              width={500}
              height={500}
              src={"/PremierBadge.svg"}
              alt="PremierBadge"
            />
          </div>
          <div className=" relative">
            <Image
              className=" "
              width={500}
              height={500}
              src={"/meta-partner.jpg"}
              alt="PremierBadge"
            />
          </div>
          <div className="mt-10 col-span-2 ">
            <h2 className="font-bold text-center text-[#212529] text-[27px] max-md:leading-[35px] md:text-[36px] font-redhat">
              Our PPC Management Services
            </h2>
            <p className=" text-center font-poppins text-base">
              Pay per click represent a model of internet marketing where an
              advertiser run an ad and he will get charged if there will be a
              click on his ad. Advertiser pay a fees every time on his ad
              whenever he will get clicked. The most popular type of pay per
              click ad is search engine advertisement.
            </p>
          </div>
        </div>
        <div className="max-lg:hidden  flex justify-between items-center  py-10">
          <div className="w-[150px] relative">
            <Image
              className=""
              width={500}
              height={500}
              src={"/PremierBadge.svg"}
              alt="PremierBadge"
            />
          </div>
          <div className="w-[calc(100%-390px)] ">
            <h2 className="font-bold text-center text-[36px] font-redhat">
              Our PPC Management Services
            </h2>
            <p className=" text-center font-poppins text-base">
              Pay per click represent a model of internet marketing where an
              advertiser run an ad and he will get charged if there will be a
              click on his ad. Advertiser pay a fees every time on his ad
              whenever he will get clicked. The most popular type of pay per
              click ad is search engine advertisement.
            </p>
          </div>
          <div className="w-[150px] relative">
            <Image
              className=" "
              width={500}
              height={500}
              src={"/meta-partner.jpg"}
              alt="PremierBadge"
            />
          </div>
        </div>
      </div>
      <hr className=" bg-black font-bold " />
      <div className="w-[90%] mx-auto grid  lg:grid-cols-3 gap-10 py-[40px] lg:py-16 ">
        <div>
          <div className="relative  bg-white/80 bg-blend-multiply ">
            <h4 className="font-poppins text-[24px] md:text-[30px]  font-bold">
              Google Ads Management
            </h4>
            <p className="font-poppins text-base text-[#222] text-justify my-4">
              Google Ads is a powerful advertising platform that can help
              businesses of all sizes and industries reach their target audience
              and achieve their marketing goals. However, managing a successful
              Google Ads campaign requires expertise, experience, and continuous
              optimization.
            </p>

            <p className="font-poppins text-base text-[#222] text-justify my-4">
              At our agency, we offer comprehensive Google Ads management
              services to help businesses maximize their ROI and achieve their
              advertising objectives.
            </p>
            <div className="absolute z-[-1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                width={100}
                height={100}
                src={"/adwords.png"}
                alt="adwords"
              />
            </div>
          </div>
          <hr className="my-8" />
          <div className="relative  bg-white/80 bg-blend-multiply ">
            <h4 className="font-poppins text-[24px] md:text-[30px]  font-bold">
              Google Ads Management
            </h4>
            <p className="font-poppins text-base text-[#222] text-justify my-4">
              Google Ads is a powerful advertising platform that can help
              businesses of all sizes and industries reach their target audience
              and achieve their marketing goals. However, managing a successful
              Google Ads campaign requires expertise, experience, and continuous
              optimization.
            </p>

            <p className="font-poppins text-base text-[#222] text-justify my-4">
              At our agency, we offer comprehensive Google Ads management
              services to help businesses maximize their ROI and achieve their
              advertising objectives.
            </p>

            <div className="absolute z-[-1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                width={100}
                height={100}
                src={"/facebook.png"}
                alt="facebook"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0">
            <div className=" relative  bg-white/80 bg-blend-multiply  min-h-[500px] md:min-h-[700px]">
              <Image
                className="absolute w-full object-cover h-full"
                width={800}
                height={800}
                src={"/ads-management.jpg"}
                alt="ads-management"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="relative  bg-white/80 bg-blend-multiply ">
            <h4 className="relative font-poppins text-[24px] md:text-[30px]  font-bold">
              Google Ads Management
            </h4>
            <p className="font-poppins text-base text-[#222] text-justify my-4">
              Google Ads is a powerful advertising platform that can help
              businesses of all sizes and industries reach their target audience
              and achieve their marketing goals. However, managing a successful
              Google Ads campaign requires expertise, experience, and continuous
              optimization.
            </p>

            <p className="font-poppins text-base text-[#222] text-justify my-4">
              At our agency, we offer comprehensive Google Ads management
              services to help businesses maximize their ROI and achieve their
              advertising objectives.
            </p>
            <div className="absolute z-[-1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                width={100}
                height={100}
                src={"/instagram.png"}
                alt="instagram"
              />
            </div>
          </div>
          <hr className="my-8" />
          <div className="relative  bg-white/80 bg-blend-multiply  ">
            <h4 className="font-poppins text-[24px] md:text-[30px]  font-bold">
              Google Ads Management
            </h4>
            <p className="font-poppins text-base text-[#222] text-justify my-4">
              Google Ads is a powerful advertising platform that can help
              businesses of all sizes and industries reach their target audience
              and achieve their marketing goals. However, managing a successful
              Google Ads campaign requires expertise, experience, and continuous
              optimization.
            </p>

            <p className="font-poppins text-base text-[#222] text-justify my-4">
              At our agency, we offer comprehensive Google Ads management
              services to help businesses maximize their ROI and achieve their
              advertising objectives.
            </p>
            <div className="absolute z-[-1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                width={100}
                height={100}
                src={"/linkedin.png"}
                alt="linkedin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PpcMangement;
