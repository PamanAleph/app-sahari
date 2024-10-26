import Image from "next/image";
import React from "react";
import TalentProps from "@/models/talent";
import { calculateAge } from "@/utils/age";

interface AccountProps {
  talent: TalentProps;
  onClick?: () => void; // Add an onClick handler
}

export default function Account({ talent, onClick }: AccountProps) {
  return (
    <button
      className="px-8 py-1 flex items-center w-full text-left border-b border-[#262626] bg-[#0D0D0D] last:border-0 duration-300 hover:scale-105"
      onClick={onClick}
    >
      <Image
        src={talent.photo_profile || "/default-profile.png"}
        alt={talent.talent_name}
        width={40}
        height={40}
        className="rounded-full h-14 w-14 object-fit"
      />
      <div className="ml-6 truncate max-w-[17rem]">
        <h3 className="text-[#D9D9D9] text-[18px] font-[500]">
          {talent.talent_name}
        </h3>
       
        <p className="text-[#8C8C8C] text-[14px] font-[400]">
          {calculateAge(talent.date_of_birth)}th, {talent.occupation},{" "}
          {talent.location[0]?.province}
        </p>
      </div>
    </button>
  );
}
