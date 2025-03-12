import React from "react";
import { dataRecent } from "../assets/api/admin";
import { BorderBeam } from "./ui/borderBeem";

export default function Recent() {
  return (
    <div className="bg-[#171717] bug-border">
      <div className="py-10 container">
        <h1
          aria-label="About me"
          className=" text-white text-[40px] sm:text-[65px] md:text-[80px] lg:text-[80px] text-left font-bold leading-[0,9em] tracking-tighter"
        >
          Recent Project
        </h1>
        {dataRecent.map((recent, index) => (
          <div className="mt-6" key={index}>
            <div
              aria-hidden="true"
              className="bg-zinc-800 rounded-2xl relative min-h-[500px] overflow-hidden flex flex-col"
            >
              <BorderBeam
                className="z-10"
                size={350}
                duration={12}
                delay={10}
              />
              <div className=" lg:p-10 md:p-10 p-6 flex-grow">
                <div className="flex gap-x-2 items-center">
                  <a
                    href={recent.url}
                    target="_blank"
                    className="bg-zinc-200 rounded-full inline-flex p-2 mt-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="h-6 w-6 text-zinc-100 dark:text-zinc-800 md:h-8 md:w-8 lg:h-10 lg:w-10"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a
                    href={recent.url}
                    target="_blank"
                    className="bg-zinc-200 rounded-full inline-flex p-2 mt-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-zinc-100 dark:text-zinc-800 md:h-8 md:w-8 lg:h-10 lg:w-10"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </a>
                </div>
                <div className="mt-8 relative z-10">
                  <h1 className="text-zinc-100 lg:text-[45px] md:text-[45px] text-[30px] font-bold">
                    {recent.title}
                  </h1>
                  <p className="text-gray-400 mt-2 w-[90%] max-w-[434px] text-[13px] leading-4 font-bold text-foreground/50">
                    {recent.description}
                  </p>
                  <h2 className="text-gray-400 mt-3 w-[90%] max-w-[434px] text-[15px] leading-4 font-bold text-foreground/50">
                    {recent.engine}
                  </h2>
                </div>
              </div>
              <div className="lg:absolute md:absolute lg:-bottom-2 md:-bottom-2 lg:right-0 md:right-0 relative w-full flex justify-end">
                <img
                  alt={recent.title}
                  fetchpriority="high"
                  width="1000"
                  height="600"
                  decoding="async"
                  data-nimg="1"
                  className="w-[80%] object-contain md:w-[55%] lg:max-w-[50%]"
                  src={recent.image}
                />
              </div>
            </div>
          </div>
        ))}
        <div className=" space-y-5 py-24 text-center">
          <h2 className="lg:text-5xl md:text-5xl text-4xl font-bold text-white text-center">
            See other Project
          </h2>
          <button className="bg-black hover:bg-gray-800 text-white border-[1px] border-gray-800 px-8 py-[10px] rounded-md text-md font-semibold">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}
