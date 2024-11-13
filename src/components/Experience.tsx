import React from "react";
import { cn } from "../lib/utils";
import Marquee from "./ui/Marque";
import { reviews } from "../assets/api/admin";

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
      </div>
    </div>
  );
}
