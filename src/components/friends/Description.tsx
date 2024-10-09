import Image from "next/image";
import React from "react";
import Banner from "@/assets/talents/banner.png";
import Pointer from "@/assets/talents/point.svg";

export default function Description() {
  return (
    <section className="text-[#8C8C8C] flex flex-col space-y-2 border">
      {/* banner  */}
      <Image src={Banner} alt="Banner" width={1000} height={500} />
      {/* name  */}
      <div className="flex items-center space-x-6">
        <h2 className=" text-[36px] text-[#D9D9D9]">dadssad</h2>
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-[#FF0004]/20 to-transparent px-4 py-1 rounded-3xl">
            <h3 className="text-[#BB3033] font-[600] text-[13px]">20th</h3>
          </div>
          <div className="bg-gradient-to-r from-[#FF0004]/20 to-transparent px-4 py-1 rounded-3xl">
            <h3 className="text-[#BB3033] font-[600] text-[13px]">20th</h3>
          </div>
          <div className="bg-gradient-to-r from-[#FF0004]/20 to-transparent px-4 py-1 rounded-3xl">
            <h3 className="text-[#BB3033] font-[600] text-[13px]">20th</h3>
          </div>
        </div>
      </div>
      {/* user details  */}
      <div className="py-2 flex space-x-6 items-center text-[14px] font-[400]">
        <div className="flex space-x-4">
          <h2>Location</h2>
          <Image src={Pointer} alt="Pointer" width={5} height={5} />
          <h3 className="text-[#D9D9D9] font-[500]">
            East Jakarta, DKI Jakarta, Indonesia
          </h3>
        </div>
        <div className="flex space-x-4">
          <h2>Job</h2>
          <Image src={Pointer} alt="Pointer" width={5} height={5} />
          <h3 className="text-[#D9D9D9] font-[500]">Student</h3>
        </div>
      </div>
    {/* Description  */}
      <h3 className="font-[400] text-[14px]">Description</h3>
      <p className="w-full text-justify font-[400] text-[14px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="flex flex-col space-y-2">
        <h3>
          Interested:
        </h3>
        <div className="flex items-center space-x-4">
          <button className="border border-[#1F1F1F] rounded-3xl px-4">
            test 
          </button>
          <button className="border border-[#1F1F1F] rounded-3xl px-4">
            test 
          </button>
          <button className="border border-[#1F1F1F] rounded-3xl px-4">
            test 
          </button>
          <button className="border border-[#1F1F1F] rounded-3xl px-4">
            test 
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h3>
          Interested:
        </h3>
        <div className="flex items-center space-x-4">
          <button className="border border-[#1F1F1F] rounded-3xl px-4">
            test 
          </button>
          <button className="border border-[#1F1F1F] rounded-3xl px-4">
            test 
          </button>
          <button className="border border-[#1F1F1F] rounded-3xl px-4">
            test 
          </button>
          <button className="border border-[#1F1F1F] rounded-3xl px-4">
            test 
          </button>
        </div>
      </div>
    </section>
  );
}
