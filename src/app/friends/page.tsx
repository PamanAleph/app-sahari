import Account from "@/components/friends/Account";
import React from "react";
import { account } from "@/lib/data";
import Image from "next/image";
import SahariUniverse from "@/assets/icon/sahari_universe.svg";

export default function page() {
  return (
    <section className="flex gap-16 container">
      {/* list akun  */}
      <div className="w-1/3 flex flex-col gap-4">
        <h4 className="text-[#8C8C8C] text-[12px]">Recent Chat</h4>
        <div className=" border border-[#262626] rounded-3xl">
          {account.map((item) => (
            <Account
              key={item.name}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
        <div className="flex items-center space-x-2">
  <h4 className="text-[#8C8C8C] text-[12px] leading-none">Recent Chat</h4>
  <Image
    src={SahariUniverse}
    alt="Sahari Universe"
    width={7}
    height={7}
  />
</div>

        <div className=" border border-[#262626] rounded-3xl">
          {account.map((item) => (
            <Account
              key={item.name}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
      {/* deskrispsi */}
      <div className="w-2/3">
        {account.map((item) => (
          <Account
            key={item.name}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
