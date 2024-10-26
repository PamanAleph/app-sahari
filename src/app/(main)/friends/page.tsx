"use client";
import Account from "@/components/friends/Account";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SahariUniverse from "@/assets/icon/sahari_universe.svg";
import Description from "@/components/friends/Description";
import ButtonBar from "@/components/friends/ButtonBar";
import TalentProps from "@/models/talent";
import TalentDetailsProps from "@/models/talentDetails";
import { getAllTalent, getTalentByName } from "@/services/api/talent";
import AccountSkeleton from "@/components/friends/skeleton/AccountSkeleton";
import DescriptionSkeleton from "@/components/friends/skeleton/DescriptionSkeleton";
import DescriptionNoData from "@/components/friends/no-data/DescriptionNoData";

export default function Page() {
  const [talents, setTalents] = useState<TalentProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedUser, setSelectedUser] = useState<TalentDetailsProps | null>(
    null
  );
  const [descriptionLoading, setDescriptionLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        const data = await getAllTalent();
        setTalents(data);
      } catch (error) {
        console.error("Error fetching talents:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTalents();
  }, []);

  const handleAccountClick = async (talent: TalentProps) => {
    setDescriptionLoading(true); 
    try {
      const response = await getTalentByName(talent.talent_name);
      if (response && response.data) {
        setSelectedUser(response.data);
      } else {
        console.error("Invalid response structure");
      }
    } catch (error) {
      console.error("Error fetching talent description:", error);
    } finally {
      setDescriptionLoading(false);
    }
  };


  return (
    <section className="container">
      {/* Recent Chat List */}
      <div className="flex gap-4">
        <div className="w-1/3 flex flex-col gap-4">
          <h4 className="text-[#8C8C8C] text-[12px]">Recent Chat</h4>
          <div className="max-h-[30vh] overflow-y-auto overflow-x-hidden rounded-3xl border border-[#262626]">
            {loading
              ? [...Array(5)].map((_, index) => <AccountSkeleton key={index} />)
              : talents.map((talent, index) => (
                  <Account
                    key={index}
                    talent={talent}
                    onClick={() => handleAccountClick(talent)}
                  />
                ))}
          </div>

          {/* Sahari Universe */}
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

          {/* Display selected talent in "Sahari Universe" */}
          <div className="max-h-[calc(2*6.1rem)] overflow-y-auto overflow-x-hidden rounded-3xl border border-[#262626]">
            {loading
              ? [...Array(5)].map((_, index) => <AccountSkeleton key={index} />)
              : talents.map((talent, index) => (
                  <Account
                    key={index}
                    talent={talent}
                    onClick={() => handleAccountClick(talent)}
                  />
                ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="w-2/3">
          {descriptionLoading ? (
            <DescriptionSkeleton /> // Render skeleton when loading
          ) : selectedUser ? (
            <Description talent={selectedUser} />
          ) : (
            <DescriptionNoData/>
          )}
        </div>
      </div>

      {/* ButtonBar */}
      <div className="flex pt-[2vh] items-center">
        <div className="w-1/3"></div>
        <div className="w-2/3 flex items-center justify-center">
          <div className="flex justify-center items-center w-full">
            {selectedUser && <ButtonBar talent={selectedUser} />}
          </div>
        </div>
      </div>
    </section>
  );
}
