import Image from "next/image";
import React from "react";
import Pointer from "@/assets/talents/point.svg";
import TalentDetailsProps from "@/models/talentDetails";
import { calculateAge } from "@/utils/age";
import { getZodiacSign } from "@/utils/zodiac";
import DefaultBanner from "@/assets/background/Sahari-Memory.svg";

interface DescriptionProps {
  talent: TalentDetailsProps;
}

export default function Description({ talent }: DescriptionProps) {
  const dateOfBirth = new Date(talent.date_of_birth);

  return (
    <section className="text-[#8C8C8C] flex flex-col space-y-2 max-h-[70vh] overflow-y-auto">
      {/* banner */}
      <div className="relative">
        <Image
          src={`/${talent.banner}` || DefaultBanner}
          alt="Default Banner"
          width={1920}
          height={1080}
          className="relative h-[25vh] w-full object-cover"
        />
        <Image
          src={`/${talent.photo_profile}` || Pointer}
          alt={talent.talent_name || "Default Image"}
          width={40}
          height={40}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 h-[5.5rem] w-[5.5rem] object-cover aspect-square border-2 border-white shadow-lg"
        />
      </div>

      {/* name */}
      <div className="flex items-center space-x-6">
        <h2 className="text-[36px] text-[#D9D9D9]">{talent.talent_name}</h2>
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-[#FF0004]/20 to-transparent px-4 py-1 rounded-3xl">
            <h3 className="text-[#BB3033] font-[600] text-[13px]">
              {isNaN(dateOfBirth.getTime())
                ? "Unknown Age"
                : calculateAge(dateOfBirth)}
            </h3>
          </div>
          <div className="bg-gradient-to-r from-[#FF0004]/20 to-transparent px-4 py-1 rounded-3xl">
            <h3 className="text-[#BB3033] font-[600] text-[13px]">
              {isNaN(dateOfBirth.getTime())
                ? "Unknown Zodiac"
                : getZodiacSign(dateOfBirth)}
            </h3>
          </div>
        </div>
      </div>

      {/* user details */}
      <div className="py-2 flex space-x-6 items-center text-[14px] font-[400]">
        <div className="flex space-x-4">
          <h2>Location</h2>
          <Image src={Pointer} alt="Pointer" width={5} height={5} />
          <h3 className="text-[#D9D9D9] font-[500]">
            {talent.location?.city || "Unknown City"},
            {talent.location?.province || "Unknown Province"},
            {talent.location?.country || "Unknown Country"}
          </h3>
        </div>
        <div className="flex space-x-4">
          <h2>Job</h2>
          <Image src={Pointer} alt="Pointer" width={5} height={5} />
          <h3 className="text-[#D9D9D9] font-[500]">
            {talent.occupation || "Unknown Job"}
          </h3>
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
            {Array.isArray(talent.interested) &&
            talent.interested.length > 0 ? (
              talent.interested.map((interest, index) => (
                <button
                  key={index}
                  className="border border-[#1F1F1F] rounded-3xl px-4"
                >
                  {interest}
                </button>
              ))
            ) : (
              <p className="text-[#8C8C8C]">No interests available</p>
            )}
          </div>
        </div>

        {/* Love Language */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-[14px] text-[#B3B3B2]">Love Language:</h3>
          <div className="flex items-center space-x-4">
            {Array.isArray(talent.love_language) &&
            talent.love_language.length > 0 ? (
              talent.love_language.map((language, index) => (
                <button
                  key={index}
                  className="border border-[#1F1F1F] rounded-3xl px-4"
                >
                  {language}
                </button>
              ))
            ) : (
              <p className="text-[#8C8C8C]">No love languages available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
