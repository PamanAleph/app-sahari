import Image from "next/image";
import React from "react";
import User from "@/models/user";

interface AccountProps {
  user: User;
}

export default function Account({ user }: AccountProps) {
  const { image, name, nationality,city,province } = user;

  return (
    <button className="px-8 py-1 flex items-center w-full text-left border-b border-[#262626] bg-[#0D0D0D] last:border-0 duration-300 hover:scale-105">
      <Image src={image} alt={name} width={40} height={40} className="rounded-full h-14 w-14 object-fit"/>
      <div className="ml-6 truncate max-w-[17rem]">
        <h3 className="text-[#D9D9D9] text-[18px] font-[500]">{name}</h3>
        <p className="text-[#8C8C8C] text-[14px] font-[400]">{city}, {province}, {nationality}</p>
      </div>
    </button>
  );
}
