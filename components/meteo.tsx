import React from "react";
import Link from 'next/link';
import { Meteors } from "./ui/meteors";

export function MeteorsDemo() {
  return (
    <div className="pb-28 pt-10 hover:scale-110 transition">
      <Link href="/allactivity">
        <div className="relative cursor-pointer">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="py-3 px-3 relative shadow-xl bg-gray-900 border-gray-800 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <h1 className="font-bold text-xl text-white relative z-50">
              ดูผลงานทั้งหมด
            </h1>
            {/* 05 */}
            {/* Meaty part - Meteor effect */}
            <Meteors number={40} />
          </div>
        </div>
      </Link>
    </div>
  );
}
