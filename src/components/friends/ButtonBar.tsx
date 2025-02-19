import User from "@/models/user";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

interface ButtonBarProps {
  user: User;
}

export default function ButtonBar({ user }: ButtonBarProps) {
  return (
    <section className="flex items-center justify-between gap-[4.5rem] rounded-xl text-[1.5vw] text-[#808080]">
      {/* Prev Button */}
      <button className="border px-[2vw] py-[1.5vh] rounded-[2vw] text-[1vw] border-[#262626]">
        <div className="flex">
          <ArrowLeftIcon color="white" />
          <p>Prev</p>
        </div>
      </button>

      {/* Links */}
      <div className="flex space-x-[2vw] rounded-[2vw] p-[1vw] border border-[#262626]">
        <Link href={`friends/book/online/${user.id}`}>
          <button className="border px-[2vw] py-[1.5vh] rounded-[2vw] text-[1vw] border-[#262626]">
            Online Date
          </button>
        </Link>
        <Link href={`friends/chat/${user.id}`}>
          <button className="border px-[2vw] py-[1.5vh] rounded-[2vw] text-white text-[1vw] border-[#262626]">
            Say Hi👏
          </button>
        </Link>
        <Link href={`friends/book/offline/${user.id}`}>
          <button className="border px-[2vw] py-[1.5vh] rounded-[2vw] text-[1vw] border-[#262626]">
            Offline Date
          </button>
        </Link>
      </div>

      {/* Next Button */}
      <button className="border px-[2vw] py-[1.5vh] rounded-[2vw] text-[1vw] border-[#262626]">
        Next
      </button>
    </section>
  );
}
