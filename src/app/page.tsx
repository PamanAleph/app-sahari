import Navbar from "@/components/Navbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "@/lib/data";
import React from "react";

export default function page() {
  return (
    <section>
      <Navbar />
      <BackgroundBeamsWithCollision className="absolute:none md:absolute inset-0">
        <div className="container">
          <HoverEffect items={projects} className="pb-8 pt-6 md:pt-36" />
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}
