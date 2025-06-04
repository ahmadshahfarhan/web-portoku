"use client";
import { LineShadowText } from "./ui/shadowText";
import { RainbowButton } from "./ui/rainbowButton";
import { FaArrowRightLong } from "react-icons/fa6";
import { dataCertificate } from "../assets/api/admin";

const Certificate = () => {
  return (
    <>
      <div className=" mt-12">
        <div className=" flex justify-center items-center gap-x-4 flex-wrap">
          <h1 className="text-balance md:text-7xl text-3xl font-semibold leading-none tracking-tighter  text-white">
            <LineShadowText className="italic">certificate</LineShadowText>
          </h1>
          {dataCertificate.map((item, index) => (
            <a key={index} href={item.url} target="_blank">
              <RainbowButton className="mt-6">
                show certificate <FaArrowRightLong className="ml-2" />
              </RainbowButton>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificate;
