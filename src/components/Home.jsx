import React, { useRef, useEffect } from "react";
import Globel from "../assets/image/gif/globe.gif";
import { dataHome } from "../assets/api/admin";
import Meteors from "./ui/meteors";
import aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    aos.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <div className="bg-[#171717] relative overflow-hidden">
      <Meteors number={8} />
      <div className=" pt-24 lg:pt-0">
        <div className=" relative">
          <div data-aos="fade-up">
            <p className=" text-white text-center text-[83px] md:text-[120px] lg:text-[140px] font-extrabold mb-[-40px] md:mb-[-60px] lg:mb-[-60px]">
              AHMAD
            </p>
            <p className=" text-white text-center text-[83px]  md:text-[120px] lg:text-[140px] font-extrabold mb-[-40px] md:mb-[-60px] lg:mb-[-60px]">
              SHAH
            </p>
            <p className=" text-white text-center text-[83px]  md:text-[120px] lg:text-[140px] font-extrabold">
              FARHAN
            </p>
          </div>
          {dataHome.map((Home) => (
            <img
              className="lg:w-[146px] lg:h-[190px] w-32 h-32 rounded-[16px] grayscale hover:grayscale-0 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-52 object-cover"
              key={Home.name}
              src={Home.image}
              alt={Home.name}
            />
          ))}
          <div data-aos="fade-right" data-aos-delay="300" className=" absolute lg:top-1/2 md:top-1/2 sm:top:1/2 top-[-60px] sm:block md:block lg:block xl:block">
            <div className="bg-neutral-800 rounded-e-full flex gap-5 items-center p-3">
              {dataHome.map((Home) => (
                <p
                  key={Home}
                  className="text-white text-sm leading-[18px] lg:w-20 md:w-20 sm:w-20 w-32"
                >
                  {Home.location}
                </p>
              ))}
              <div className=" bg-gray-900 p-1 rounded-full lg:w-auto md:w-auto sm:w-auto w-[40px] lg:h-auto md:h-auto sm:h-auto h-[40px]">
                <img width={60} height={60} src={Globel} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
