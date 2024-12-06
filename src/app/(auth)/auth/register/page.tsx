import Image from "next/image";
import React from "react";
import Hero from "@/assets/background/Hero.png";
import RegisterForm from "@/components/auth/register/RegisterForm";

export default function page() {
  return (
    <section>
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-8 lg:px-16 lg:py-12 xl:col-span-8">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="flex gap-2 items-center">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 1">
                  <circle
                    id="Ellipse 3"
                    cx="22.37"
                    cy="22.37"
                    r="5.45666"
                    fill="white"
                  />
                  <path
                    id="Ellipse 2"
                    d="M36.8773 14.7863C35.1888 11.5561 32.4705 8.98187 29.1533 7.47153C25.836 5.96119 22.1096 5.60113 18.5646 6.44842C15.0196 7.29571 11.8587 9.30187 9.58296 12.149C7.3072 14.9961 6.04671 18.5213 6.00127 22.1659C5.95583 25.8105 7.12803 29.366 9.3321 32.2689C11.5362 35.1719 14.646 37.2562 18.1688 38.1917C21.6916 39.1271 25.4258 38.86 28.7797 37.4329C32.1335 36.0057 34.9152 33.5 36.6837 30.313L30.9671 27.1407C29.9048 29.0549 28.2341 30.5598 26.2198 31.417C24.2054 32.2742 21.9625 32.4346 19.8467 31.8727C17.7308 31.3109 15.863 30.059 14.5392 28.3154C13.2154 26.5719 12.5114 24.4364 12.5387 22.2474C12.5659 20.0584 13.323 17.9411 14.6899 16.2311C16.0567 14.521 17.9552 13.3161 20.0844 12.8072C22.2136 12.2983 24.4517 12.5146 26.4441 13.4217C28.4365 14.3288 30.0692 15.875 31.0833 17.8151L36.8773 14.7863Z"
                    fill="white"
                  />
                </g>
              </svg>
              <h1 className="text-white">Evermate</h1>
            </div>

            <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-7xl max-w-lg">
              <span className="text-[#AE70FE]">FIND</span> YOUR MATE
              <span className="text-[#AE70FE]"> AROUND</span> THE WORLD
            </h1>

            <p className="mt-8 leading-relaxed text-white opacity-60">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </main>
        <aside className="relative bg-[#AE70FE] block h-16 lg:col-span-4 lg:h-full xl:col-span-4">
          <Image
            alt="Image"
            src={Hero}
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover z-0"
          />
          <div className="relative z-10 flex items-center justify-center h-full p-6">
            <RegisterForm />
          </div>
        </aside>
      </div>
    </section>
  );
}
