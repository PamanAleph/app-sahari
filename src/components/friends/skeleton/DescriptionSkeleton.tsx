import Image from "next/image";
import React from "react";
import Pointer from "@/assets/talents/point.svg";

export default function DescriptionSkeleton() {
  return (
    <section className="text-[#8C8C8C] flex flex-col space-y-2 max-h-[70vh] overflow-y-auto animate-pulse">
      {/* Skeleton Banner */}
      <div className="w-full h-[200px] bg-gray-300 rounded-lg"></div>
      
      {/* Skeleton for name, age, and zodiac */}
      <div className="flex items-center space-x-6 mt-4">
        <div className="w-[150px] h-8 bg-gray-300 rounded"></div>
        <div className="flex items-center space-x-4">
          <div className="w-[60px] h-6 bg-gray-300 rounded-3xl"></div>
          <div className="w-[60px] h-6 bg-gray-300 rounded-3xl"></div>
        </div>
      </div>

      {/* Skeleton for user details */}
      <div className="py-2 flex space-x-6 items-center">
        <div className="flex space-x-4">
          <div className="w-[80px] h-4 bg-gray-300 rounded"></div>
          <Image src={Pointer} alt="Pointer" width={5} height={5} />
          <div className="w-[200px] h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="flex space-x-4">
          <div className="w-[80px] h-4 bg-gray-300 rounded"></div>
          <Image src={Pointer} alt="Pointer" width={5} height={5} />
          <div className="w-[200px] h-4 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Skeleton for Description */}
      <div className="w-full h-[80px] bg-gray-300 rounded"></div>

      {/* Skeleton for Interested */}
      <div className="flex flex-col space-y-2">
        <div className="w-[100px] h-4 bg-gray-300 rounded"></div>
        <div className="flex space-x-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-[80px] h-6 bg-gray-300 rounded-3xl"></div>
          ))}
        </div>
      </div>

      {/* Skeleton for Love Language */}
      <div className="flex flex-col space-y-2 mt-4">
        <div className="w-[120px] h-4 bg-gray-300 rounded"></div>
        <div className="flex space-x-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-[80px] h-6 bg-gray-300 rounded-3xl"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
