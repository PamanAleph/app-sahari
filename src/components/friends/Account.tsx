import TalentProps from "@/models/talent";
import { calculateAge } from "@/utils/age";
import Image from "next/image";
import React from "react";

interface AccountProps {
  talent: TalentProps;
}

export default function Account({ talent }: AccountProps) {
  const { date_of_birth, talent_name, occupation, photo_profile, location } = talent;

  const age = calculateAge(date_of_birth);

  const talentInfo = {
    name: talent_name,
    age,
    occupation: occupation || "N/A",
    profileImage: photo_profile || "/images/default-avatar.png",
    province: location[0]?.province || "N/A", // Mengambil elemen pertama dari array
  };

  return (
    <button className="px-8 py-1 flex items-center w-full text-left border-b border-[#262626] bg-[#0D0D0D] last:border-0 duration-300 hover:scale-105">
      <Image
        src={talentInfo.profileImage}
        alt={talentInfo.name}
        width={40}
        height={40}
        className="rounded-full h-14 w-14 object-cover"
      />
      <div className="ml-6 truncate max-w-[17rem]">
        <h3 className="text-[#D9D9D9] text-[18px] font-[500]">
          {talentInfo.name}
        </h3>
        <p className="text-[#8C8C8C] text-[14px] font-[400]">
          {talentInfo.age}, {talentInfo.occupation}, {talentInfo.province}
        </p>
      </div>
    </button>
  );
}
