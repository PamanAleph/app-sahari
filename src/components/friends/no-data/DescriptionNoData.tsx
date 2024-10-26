import React from "react";
import Image from "next/image";
import PromoImage from "@/assets/background/Hero.png"; 

export default function DescriptionNoData() {
  return (
    <section className="text-[#8C8C8C] flex flex-col items-center space-y-4 max-h-[70vh] overflow-y-auto">
      {/* Promo Image */}
      <Image
        src={PromoImage}
        alt="Promote Your Website"
        width={200}
        height={200}
        className="object-cover rounded-lg"
      />

      {/* Website Promotion Content */}
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-[24px] text-[#D9D9D9] font-bold">Welcome to Our Website!</h2>
        <p className="text-center text-[14px] text-[#B3B3B2]">
          Explore exciting talents and connect with amazing people. Whether you
          are looking for inspiration, collaboration, or just a great time, we
          have something for everyone!
        </p>
      </div>

      {/* Promo Details */}
      <div className="flex flex-col space-y-4 text-[12px] font-[400] text-[#A6A6A6]">
        <div className="flex items-center space-x-4">
          <h3 className="text-[14px] text-[#B3B3B2]">Why Join Us?</h3>
        </div>

        <div className="flex items-start space-x-2">
          <div className="bg-[#262626] rounded-full h-2 w-2 mt-1"></div>
          <p className="text-[#D9D9D9]">
            Discover diverse talents across multiple categories.
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <div className="bg-[#262626] rounded-full h-2 w-2 mt-1"></div>
          <p className="text-[#D9D9D9]">
            Easy and direct communication with talents.
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <div className="bg-[#262626] rounded-full h-2 w-2 mt-1"></div>
          <p className="text-[#D9D9D9]">
            Exclusive promotions and events tailored for our community.
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#FF0004] to-[#BB3033] text-white font-semibold text-[14px]">
        Start Exploring Now
      </button>
    </section>
  );
}
