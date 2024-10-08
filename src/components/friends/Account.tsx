import Image from "next/image";
import React from "react";

interface AccountProps {
  name: string;
  description: string;
  image: string;
}

export default function Account({ name, description, image }: AccountProps) {
  return (
    <section className="px-8 py-2 flex items-center text-white border-b border-[#262626] last:border-0">
      <Image src={image} alt={name} width={25} height={25} />
      <div className="ml-12 truncate max-w-[17rem]">
        <h3 className="text-[#D9D9D9] text-[18px] font-[500]">{name}</h3>
        <p className="text-[#8C8C8C] text-[14px] font-[400]">{description}</p>
      </div>
    </section>
  );
}
