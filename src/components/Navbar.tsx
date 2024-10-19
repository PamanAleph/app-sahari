import React from "react";
import SahariLogo from "@/assets/logo/sahari.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800 z-50 relative">
      <div className="container flex justify-between h-16 mx-auto">
        <Image src={SahariLogo} alt="Sahari" width={120} height={40} />
        <div className="items-center space-x-4 hidden lg:flex">
          <Link href={"/auth/register"}>
            <button className="text-white rounded-xl px-6 py-3">
              Register
            </button>
          </Link>
          <Link href={"/auth/login"}>
            <button className="text-white bg-[#6941C6] rounded-xl px-6 py-3">
              Log in
            </button>
          </Link>
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
