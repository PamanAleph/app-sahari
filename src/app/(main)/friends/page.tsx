"use client";
import Account from "@/components/friends/Account";
import React, { useState, useEffect } from "react";
import { getAllTalent, getTalentByName } from "@/services/api/talent";
import Image from "next/image";
import SahariUniverse from "@/assets/icon/sahari_universe.svg";
import Description from "@/components/friends/Description";
import { FloatingNavbar } from "@/components/friends/FloatingNavbar";
import ButtonBar from "@/components/friends/ButtonBar";
import TalentProps from "@/models/talent";
import TalentDetailsProps from "@/models/talentDetails";

export default function Page() {
  const [selectedUser, setSelectedUser] = useState<TalentDetailsProps | null>(
    null
  );
  const [talentData, setTalentData] = useState<TalentProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTalentData = async () => {
      try {
        const data = await getAllTalent();
        setTalentData(data);
      } catch (error) {
        console.error("Error fetching talent data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTalentData();
  }, []);

  const handleAccountClick = async (talentName: string) => {
    try {
      const response = await getTalentByName(talentName);
      setSelectedUser(response.data);
    } catch (error) {
      console.error("Error fetching talent details:", error);
    }
  };

  const floatingData = selectedUser
    ? {
        title: selectedUser.talent_name,
        icon: (
          <Image
            src={selectedUser.photo_profile || "/images/default-avatar.png"}
            alt={selectedUser.talent_name}
            width={40}
            height={40}
          />
        ),
        href: `/friends/chat/${selectedUser.talent_id}`,
      }
    : {
        title: "",
        icon: null,
        href: "",
      };

  return (
    <section className="container">
      {/* Talent List */}
      <div className="flex gap-4">
        <div className="w-1/3 flex flex-col gap-4">
          <h4 className="text-[#8C8C8C] text-[12px]">Recent Chat</h4>
          <div className="max-h-[30vh] overflow-y-auto overflow-x-hidden rounded-3xl border border-[#262626]">
            {loading
              ? // Skeleton Loader
                Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse flex items-center p-4 space-x-4 border-b border-gray-300"
                  >
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                      <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                ))
              : // Talent List
                talentData.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleAccountClick(item.talent_name)}
                  >
                    <Account talent={item} />
                  </div>
                ))}
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <h4 className="text-[#8C8C8C] text-[12px] leading-none">
              Sahari Universe
            </h4>
            <Image
              src={SahariUniverse}
              alt="Sahari Universe"
              width={7}
              height={7}
            />
          </div>

          <div className="max-h-[calc(2*6.1rem)] overflow-y-auto overflow-x-hidden rounded-3xl border border-[#262626]">
            {loading
              ? // Skeleton Loader
                Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse flex items-center p-4 space-x-4 border-b border-gray-300"
                  >
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                      <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                ))
              : // Talent List
                talentData.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleAccountClick(item.talent_name)}
                  >
                    <Account talent={item} />
                  </div>
                ))}
          </div>
        </div>

        {/* Display Description when a talent is selected */}
        <div className="w-2/3">
          {selectedUser && <Description talent={selectedUser} />}
        </div>
      </div>

      <div className="flex pt-[2vh] items-center">
        <div className="w-1/3">
          <FloatingNavbar items={[floatingData]} desktopClassName="w-[20vw]" />
        </div>
        <div className="w-2/3 flex items-center justify-center">
          <div className="flex justify-center items-center w-full">
            {/* {selectedUser && <ButtonBar talent={selectedUser.talent_id} />} */}
          </div>
        </div>
      </div>
    </section>
  );
}
