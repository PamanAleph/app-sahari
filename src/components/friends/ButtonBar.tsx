"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import nookies from "nookies";
import TalentDetailsProps from "@/models/talentDetails";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface ButtonBarProps {
  talent: TalentDetailsProps;
}

export default function ButtonBar({ talent }: ButtonBarProps) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const cookies = nookies.get(null);
    const token = cookies["auth_token"];

    setIsLoggedIn(!!token);
  }, []);

  const handleButtonClick = (href: string) => {
    if (isLoggedIn) {
      router.push(href);
    } else {
      const redirectUrl = encodeURIComponent(`/${href}`);
      router.push(`/auth/login?redirect=${redirectUrl}`);
    }
  };
  
  
  

  if (!isMounted) return null;

  return (
    <section className="flex items-center justify-between gap-[4.5rem] rounded-xl text-[1.5vw] text-[#808080]">
      {/* Prev Button */}
      <button className="border px-[2vw] py-[1.5vh] rounded-[2vw] text-[1vw] border-[#262626]">
        <div className="flex">
          <ArrowLeftIcon color="white" />
          <p>Prev</p>
        </div>
      </button>

      {/* Links with login check */}
      <div className="flex space-x-[2vw] rounded-[2vw] p-[1vw] border border-[#262626]">
        <button
          onClick={() =>
            handleButtonClick(`friends/book/online/${talent.talent_name}`)
          }
          className="border px-[2vw] py-[1.5vh] rounded-[2vw] text-[1vw] border-[#262626]"
        >
          Online Date
        </button>
        <button
          onClick={() =>
            handleButtonClick(`friends/chat/${talent.talent_name}`)
          }
          className="border px-[2vw] py-[1.5vh] rounded-[2vw] text-white text-[1vw] border-[#262626]"
        >
          Say Hi👏
        </button>
        <button
          onClick={() =>
            handleButtonClick(`friends/book/offline/${talent.talent_name}`)
          }
          className="border px-[2vw] py-[1.5vh] rounded-[2vw] text-[1vw] border-[#262626]"
        >
          Offline Date
        </button>
      </div>

      {/* Next Button */}
      <button className="border px-[2vw] py-[1.5vh] rounded-[2vw] text-[1vw] border-[#262626]">
        Next
      </button>
    </section>
  );
}
