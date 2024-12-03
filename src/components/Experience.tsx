import React from "react";
import { cn } from "../lib/utils";
import Marquee from "./ui/Marque";
import { reviews } from "../assets/api/admin";
import GitHubCalendar from "react-github-calendar";

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({
  img,
  judul,
  tanggal,
  deskripsi,
}: {
  img: string;
  judul: string;
  tanggal: string;
  deskripsi: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-700 bg-zinc-200 px-8 py-6 dark:bg-zinc-800 md:w-[420px]",
        // light styles
        "bg-zinc-200",
        // dark styles
        "dark:bg-gray-50/[.10] bg-zinc-200 border border-b-0 border-slate-700"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-md font-medium dark:text-white">
            {judul}
          </figcaption>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-xs text-gray-400 font-normal leading[1.6]">
          {tanggal}
        </p>
        <blockquote className="mt-2 text-xs leading-[1.6] font-normal text-gray-400">
          {deskripsi}
        </blockquote>
      </div>
    </figure>
  );
};

export function Experience() {
  return (
    <div className="bg-[#171717]">
      <div className="py-10 container">
        <h1 className=" text-2xl font-bold text-white py-3">Experience</h1>
        <div className="relative flex w-full flex-col justify-center overflow-hidden rounded-2xl">
          <Marquee pauseOnHover className="[--duration:80s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.tanggal} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/10 dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/10 dark:from-background"></div>
        </div>
        <div className="flex flex-wrap gap-x-20 items-center justify-center rounded-xl text-white border border-b-0 border-slate-700 p-4 bg-zinc-200 dark:bg-zinc-800 lg:mt-8">
          <div className="bg-slate-300 p-2 rounded-lg">
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
              className="h-28 w-auto text-zinc-100 dark:text-zinc-800"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </div>
          <GitHubCalendar
            colorScheme="dark"
            errorMessage="get data is error"
            loading={false}
            username="ahmadshahfarhan"
          />
        </div>
      </div>
    </div>
  );
}
