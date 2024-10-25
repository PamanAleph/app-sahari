import Image from "next/image";
import React from "react";
import TalentDetailsProps from "@/models/talentDetails";
import { calculateAge } from "@/utils/age";
import { getZodiacSign } from "@/utils/zodiac";
import Banner from "@/assets/talents/banner.png"
import Pointer from "@/assets/talents/point.svg";
interface DescriptionProps {
  talent: TalentDetailsProps;
}

export default function Description({ talent }: DescriptionProps) {
  const { date_of_birth } = talent;

  const age = calculateAge(date_of_birth);
  const zodiacSign = getZodiacSign(date_of_birth);

  return (
    <section className="text-[#8C8C8C] flex flex-col space-y-2 max-h-[70vh] overflow-y-auto">
      <Image
        src={talent.photo_profile || Banner}
        alt="Banner"
        width={1000}
        height={500}
      />
       {/* name */}
      <div className="flex items-center space-x-6">
        <h2 className="text-[36px] text-[#D9D9D9]">{talent.talent_name}</h2>
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-[#FF0004]/20 to-transparent px-4 py-1 rounded-3xl">
            <h3 className="text-[#BB3033] font-[600] text-[13px]">{age}th</h3>
          </div>
          <div className="bg-gradient-to-r from-[#FF0004]/20 to-transparent px-4 py-1 rounded-3xl">
            <h3 className="text-[#BB3033] font-[600] text-[13px]">{zodiacSign}</h3>
          </div>
        </div>
      </div>
      
      {/* user details */}
      <div className="py-2 flex space-x-6 items-center text-[14px] font-[400]">
        <div className="flex space-x-4">
          <h2>Location</h2>
          <Image src={Pointer} alt="Pointer" width={5} height={5} />
          <h3 className="text-[#D9D9D9] font-[500]">{talent.location.city}, {talent.location.province}, {talent.location.country}</h3>
        </div>
        <div className="flex space-x-4">
          <h2>Job</h2>
          <Image src={Pointer} alt="Pointer" width={5} height={5} />
          <h3 className="text-[#D9D9D9] font-[500]">{talent.occupation}</h3>
        </div>
      </div>
      
      {/* Description */}
      <h3 className="font-[400] text-[14px] text-[#B3B3B2]">Description</h3>
      <p className="w-full text-justify font-[400] text-[14px] text-[#8C8C8C]">
        {talent.description}
      </p>

      {/* Interested */}
      <div className="space-y-2 text-[12px] font-[400] text-[#A6A6A6]">
        <div className="flex flex-col space-y-2">
          <h3 className="text-[14px] text-[#B3B3B2]">Interested:</h3>
          <div className="flex items-center space-x-4">
            {talent.interested.map((interest, index) => (
              <button key={index} className="border border-[#1F1F1F] rounded-3xl px-4">
                {interest}
              </button>
            ))}
          </div>
        </div>

        {/* Love Language */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-[14px] text-[#B3B3B2]">Love Language:</h3>
          <div className="flex items-center space-x-4">
            {talent.love_language.map((language, index) => (
              <button key={index} className="border border-[#1F1F1F] rounded-3xl px-4">
                {language}
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
