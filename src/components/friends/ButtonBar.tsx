import React from "react";

export default function ButtonBar() {
  return (
    <section className="flex items-center space-x-[5vw] border text-[1rem] text-[#808080]">
      <button className="border px-4 py-2 rounded-3xl">Prev</button>

      <div className=" border space-x-4 rounded-3xl p-2">
        <button className="border px-4 py-2 rounded-3xl">Online Date</button>
        <button className="border px-4 py-2 rounded-3xl text-white">
          Say Hi👏
        </button>
        <button className="border px-4 py-2 rounded-3xl">Offline Date</button>
      </div>
      <button className="border px-4 py-2 rounded-3xl">Next</button>
    </section>
  );
}
