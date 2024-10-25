"use client"
import React, { useState, useEffect } from "react";
import SahariLogo from "@/assets/logo/sahari.svg";
import Image from "next/image";
import Link from "next/link";
import nookies from "nookies";
import { useRouter } from "next/navigation";
import DefaultAccount from "@/assets/logo/icon.svg"

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check for authentication token in the cookies
    const cookies = nookies.get(null);
    const token = cookies["auth_token"];
    
    // Set login state based on the presence of the token
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Remove auth token from cookies
    nookies.destroy(null, "auth_token", { path: "/" });
    // Redirect to the login page
    router.push("/auth/login");
  };

  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800 z-50 relative">
      <div className="container flex justify-between h-16 mx-auto">
        <Image src={SahariLogo} alt="Sahari" width={120} height={40} />
        
        <div className="items-center space-x-4 hidden lg:flex">
          {isLoggedIn ? (
            <div className="relative">
              {/* Avatar Button */}
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#6941C6] focus:outline-none"
              >
                <Image
                  src={DefaultAccount} 
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="object-fit"
                />
              </button>

              {/* Profile Menu */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                  <button>
                    <Link href="/profile/setting" className="block px-4 py-2 hover:bg-gray-200">Profile Settings</Link>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/auth/register">
                <button className="text-white rounded-xl px-6 py-3">
                  Register
                </button>
              </Link>
              <Link href="/auth/login">
                <button className="text-white bg-[#6941C6] rounded-xl px-6 py-3">
                  Log in
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
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
