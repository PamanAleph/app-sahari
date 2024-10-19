"use client";
import Account from "@/components/friends/Account";
import React, { useState } from "react";
import { userData } from "@/lib/data";
import Image from "next/image";
import SahariUniverse from "@/assets/icon/sahari_universe.svg";
import Description from "@/components/friends/Description";
import User from "@/models/user";
import { FloatingNavbar } from "@/components/friends/FloatingNavbar";
import ButtonBar from "@/components/friends/ButtonBar";

export default function Page() {
  const [selectedUser, setSelectedUser] = useState(userData[0]);

  const handleAccountClick = (user: User) => {
    setSelectedUser(user);
  };

  // Create the floating data for the selected user
  const floatingData = {
    title: selectedUser.name,
    icon: <Image src={selectedUser.image} alt={selectedUser.name} />,
    href: `/friends/chat/${selectedUser.id}`,
  };

  return (
    <section className="container">
      {/* list akun  */}
      <div className="flex gap-4 ">
        <div className="w-1/3 flex flex-col gap-4">
          <h4 className="text-[#8C8C8C] text-[12px]">Recent Chat</h4>
          <div className="max-h-[30vh] overflow-y-auto overflow-x-hidden rounded-3xl border border-[#262626]">
            {userData.map((item, index) => (
              <div key={index} onClick={() => handleAccountClick(item)}>
                <Account user={item} />
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
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
            {userData.map((item, index) => (
              <div key={index} onClick={() => handleAccountClick(item)}>
                <Account user={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-2/3">
          <Description user={selectedUser} />
        </div>
      </div>

      <div className="flex pt-[2vh] items-center">
        <div className="w-1/3">
          <FloatingNavbar items={[floatingData]} desktopClassName="w-[20vw]" />
        </div>
        <div className="w-2/3 flex items-center justify-center">
          <div className="flex justify-center items-center w-full">
            <ButtonBar user={selectedUser}/>
          </div>
        </div>
      </div>
    </section>
  );
}
