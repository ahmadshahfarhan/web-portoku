import React, { useRef } from "react";
import Globe from "../assets/image/gif/globe.gif";
import { dataHome } from "../assets/api/admin";

export default function Home() {
  return (
    <div>
      <div className=" relative">
        <div className="">
          <p className=" text-white text-center text-[140px] font-extrabold mb-[-60px]">
            AHMAD
          </p>
          <p className=" text-white text-center text-[140px] font-extrabold mb-[-60px]">
            SHAH
          </p>
          <p className=" text-white text-center text-[140px] font-extrabold">
            FARHAN
          </p>
        </div>
        {dataHome.map((Home) => (
          <img
            className="w-[146px] rounded-[16px] grayscale hover:grayscale-0 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-52 object-cover"
            key={Home.name}
            src={Home.image}
            alt={Home.name}
          />
        ))}
        <div className=" absolute top-1/2">
          <div className=" bg-zinc-200 dark:bg-neutral-800 rounded-e-full flex gap-5 items-center p-3">
            {dataHome.map((Home) => (
              <p key={Home} className="text-white text-sm leading-[18px] w-20">
                {Home.location}
              </p>
            ))}
            <div className=" bg-gray-900 p-1 rounded-full">
              <img width={60} height={60} src={Globe} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
