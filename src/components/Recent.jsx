import React from "react";
import { dataRecent } from "../assets/api/admin";

export default function Recent() {
  return (
    <div className="mt-20">
      <h1
        aria-label="About me"
        className=" text-white text-[80px] text-left font-bold leading-[0,9em] tracking-tighter"
      >
        Recent Project
      </h1>
      {dataRecent.map((recent) => (
        <div className=" mt-14">
          <div className="bg-zinc-200 dark:bg-zinc-800 rounded-2xl relative h-[500px]">
            <div className="p-10">
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6 text-zinc-100 dark:text-zinc-800 md:h-8 md:w-8 lg:h-10 lg:w-10"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6 text-zinc-100 dark:text-zinc-800 md:h-8 md:w-8 lg:h-10 lg:w-10"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </a>
              </div>
              <div className="mt-8">
                <h1
                  className=" text-zinc-100 text-[45px] font-bold"
                  key={recent}
                >
                  {recent.title}
                </h1>
                <p
                  className=" text-gray-400 mt-2 w-[90%] max-w-[434px] text-[13px] leading-4 font-bold text-foreground/50"
                  key={recent}
                >
                  {recent.description}
                </p>
                <h2
                  className="text-gray-400 mt-3 w-[90%] max-w-[434px] text-[15px] leading-4 font-bold text-foreground/50"
                  key={recent}
                >
                  {recent.engine}
                </h2>
              </div>
              <div className="flex justify-end absolute right-0 bottom-0">
                <img
                  className="rounded-br-2xl rounded-tl-2xl"
                  width={600}
                  height={600}
                  key={recent}
                  src={recent.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
