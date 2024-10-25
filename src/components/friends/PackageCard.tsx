import { formatNumberWithComma } from "@/utils/price";
import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";

interface PackageCardProps {
  title: string;
  description: string;
  price: number;
  benefits: string[]; // Add a new prop for benefits
}

export default function PackageCard({
  title,
  description,
  price,
  benefits,
}: PackageCardProps) {
  return (
    <section className="border-[4px] p-4 rounded-xl border-[#6941C6] text-white h-[30vh] relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="uppercase text-white text-center">{title}</h1>
          <div className="gap-2 flex items-center">
            <h2 className="capitalize text-[#8C8C8C]">{description}</h2>
            <HeartIcon className="h-6 w-6 animate-pulse" />
          </div>
        </div>
        <button className="border border-[#1F1F1F] rounded-xl px-4 py-2">
          Select Package
        </button>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2">
            <input type="checkbox" checked={true} className="text-[#6941C6]" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      <h3 className="absolute bottom-2 right-2 flex items-baseline text-[20px]">
        Rp <span className="text-[36px]">{formatNumberWithComma(price)}</span>/Mo
      </h3>
    </section>
  );
}
