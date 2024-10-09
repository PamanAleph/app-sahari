"use client"
import Account from "@/components/friends/Account";
import React, { useState } from "react";
import { userData } from "@/lib/data";
import Image from "next/image";
import SahariUniverse from "@/assets/icon/sahari_universe.svg";
import Description from "@/components/friends/Description";
import User from "@/models/user";

export default function Page() { 
  const [selectedUser, setSelectedUser] = useState(userData[0]); 

  const handleAccountClick = (user :User) => {
    setSelectedUser(user); 
  };

  return (
    <section className="flex gap-4 container">
      {/* list akun  */}
      <div className="w-1/3 flex flex-col gap-4">
        <h4 className="text-[#8C8C8C] text-[12px]">Recent Chat</h4>
        <div className="max-h-[calc(3*5.4rem)] overflow-y-auto overflow-x-hidden rounded-3xl border border-[#262626]">
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
      {/* deskrispsi */}
      <div className="w-2/3">
        <Description user={selectedUser} />
      </div>
    </section>
  );
}
