import Image from "next/image";
import React from "react";
import SahariFriends from "@/assets/logo/logo_white_friends.svg";
import { Input } from "../ui/input";
import FilterIcon from "@/assets/icon/filter.svg";

export default function NavbarFriends() {
  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800 z-50 relative">
      <div className="container flex justify-between h-16 mx-auto">
        <Image src={SahariFriends} alt="Sahari" width={120} height={40} />
        <div className="items-center space-x-8 hidden lg:flex px-4 py-2">
          <Input type="text" placeholder="Search" className="text-[#666666] w-[440px] bg-[#262626] border-transparent rounded-2xl" />
          <p className="text-white">Filter</p>
          <div className="bg-[#262626] flex items-center justify-center rounded-full p-1 shadow-md shadow-[#6941C6]">
            <Image
              src={FilterIcon}
              alt="avatar"
              width={30} 
              height={30}
            />
          </div>
        </div>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
