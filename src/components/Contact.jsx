import React from "react";
import video from "../assets/video/id card.mp4";
import FlickeringGrid from "./ui/FlickeringGrid";
import { Iphone15Pro } from "./ui/mobile";
import Footer from "./footer";

export default function Contact() {
  return (
    <>
      <div className=" relative bg-background overflow-hidden border">
        <FlickeringGrid
          className="z-[-1] absolute inset-0 size-full"
          squareSize={4}
          gridGap={5}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.2}
          height={2000}
          width={1800}
        />
        <div className="py-5 flex flex-wrap gap-x-44 justify-center rounded-lg w-full container">
          <div className="lg:h-[670px] lg;mt-16">
            <Iphone15Pro className="size-full" src={video} />
          </div>
          <div>
            <form className="flex flex-col space-y-8 w-full" action="">
              <h1 className="font-bold lg:text-5xl lg:py-20 text-[#171717]">
                Contact
              </h1>
              <div className="relative">
                <input
                  className="p-1 pb-3 border-b-[2.3px] border-gray-600 w-[630px] focus:outline-none focus:border-transparent transition duration-300 placeholder-gray-400 placeholder:font-bold placeholder:text-xl bg-transparent"
                  placeholder="Your Name"
                  name="name"
                  type="text"
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out input-underline"></span>
              </div>
              <div className="relative">
                <input
                  className="p-1 pb-3 border-b-[2.3px] border-gray-600 w-[630px] focus:outline-none focus:border-transparent transition duration-300 placeholder-gray-400 placeholder:font-bold placeholder:text-xl bg-transparent"
                  placeholder="Your email"
                  name="email"
                  type="text"
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out input-underline"></span>
              </div>
              <div className="relative">
                <input
                  className="p-1 pb-3 border-b-[2.3px] border-gray-600 w-[630px] focus:outline-none focus:border-transparent transition duration-300 placeholder-gray-400 placeholder:font-bold placeholder:text-xl bg-transparent"
                  placeholder="Subject"
                  name="telpon"
                  type="text"
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out input-underline"></span>
              </div>
              <div className="relative">
                <textarea
                  className="p-1 pb-3 border-b-[2.3px] border-gray-600 w-[630px] focus:outline-none focus:border-transparent transition duration-300 placeholder-gray-400 placeholder:font-bold placeholder:text-xl bg-transparent"
                  placeholder="Your Message"
                  name="message"
                  id=""
                  rows={4}
                ></textarea>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out input-underline"></span>
              </div>
              <button className="inline-flex max-w-max gap-x-2 bg-[#171717] items-center py-2 px-10 rounded-md">
                <svg
                  style={{ color: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="font-semibold text-white inline-flex">
                  Send
                </span>
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
