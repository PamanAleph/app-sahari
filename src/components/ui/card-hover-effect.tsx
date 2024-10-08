"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Modal, ModalTrigger } from "./animated-modal";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
    icon:string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 py-10", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#7F56D9] dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0, filter:"blur(10px)" }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="py-8 bg-gradient-to-b from-[#1F1F1F] to-transparent">
            <CardImage
              src={item.image}
              alt={item.title}
              className="hidden md:flex justify-center items-center pointer-events-none"
            />
            <CardTitle className="text-center text-2xl py-4">
              {item.title}
            </CardTitle>
            <CardDescription className="text-center text-md max-w-lg mx-auto">
              {item.description}
            </CardDescription>
            <Link href={item.link} className="flex justify-center mt-4">
              <Modal>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                  <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    Start
                  </span>
                  <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    <Image src={item.icon} alt={item.title} width={18} height={18}/>
                  </div>
                </ModalTrigger>{" "}
              </Modal>
            </Link>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardButton = ({
  className,
  children,
  iconSrc, // Tambahkan prop untuk sumber gambar ikon
  iconAlt, // Tambahkan prop untuk alt text gambar ikon
}: {
  className?: string;
  children: React.ReactNode;
  iconSrc: string; // Sumber gambar ikon
  iconAlt: string; // Alt text untuk gambar ikon
}) => {
  return (
    <button
      className={cn(
        "relative text-white rounded-xl px-12 py-3 mt-4 flex justify-center items-center overflow-hidden group", // Tambahkan group untuk efek hover
        className
      )}
    >
      {/* Teks element */}
      <span className="transition-transform duration-300 transform group-hover:translate-x-full absolute">
        {children}
      </span>

      {/* Ikon element */}
      <span className="transition-transform duration-300 transform opacity-0 group-hover:opacity-100 absolute">
        <Image
          src={iconSrc} // Path ke ikon
          alt="Icon"
          width={24} // Sesuaikan ukuran ikon
          height={24}
          className="w-6 h-6" // Mengatur ukuran agar responsif
        />
      </span>

      {/* Membuat ikon berada di tengah tombol */}
      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Image
          src={iconSrc} // Ganti dengan path ikonmu
          alt={iconAlt}
          width={24} // Sesuaikan ukuran ikon
          height={24}
          className="w-6 h-6"
        />
      </span>
    </button>
  );
};

export const CardImage = ({
  className,
  src,
  alt,
}: {
  className?: string;
  src: string;
  alt: string;
}) => {
  return (
    <div className={cn("rounded-full overflow-hidden", className)}>
      <Image src={src} alt={alt} width={120} height={120} />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
