import React, { useEffect } from "react";
import video from "../assets/video/id card.mp4";
import FlickeringGrid from "./ui/FlickeringGrid";
import { Iphone15Pro } from "./ui/mobile";
import Footer from "./footer";
import { useState } from "react";
import axios from "axios";
import aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Mengirim...");

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      setStatus(response.data.message);
    } catch (error) {
      setStatus("Gagal mengirim email");
    }
  };
  
  const aosDelay =400;
  useEffect(() => {
    aos.init({
      once:false,
      duration:1000,
    });
  }, []);

  return (
    <>
      <div className=" relative bg-background overflow-hidden border">
        <div className=" hidden lg:block md:block">
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
        </div>
        <div data-aos="fade-up" data-aos-delay={aosDelay} className="py-5 flex lg:flex-nowrap flex-wrap justify-center gap-x-24 gap-y-6 rounded-lg w-full container">
          <div className="lg:h-[670px] lg:mt-16">
            <Iphone15Pro className="size-full" src={video} />
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-8 w-full"
              action=""
            >
              <h1 className="font-bold lg:text-5xl text-2xl lg:py-20 text-[#171717]">
                Contact
              </h1>
              <div className="relative">
                <input
                  className="p-1 pb-3 border-b-[2.3px] border-gray-600 lg:w-[530px] w-[270px] focus:outline-none focus:border-transparent transition duration-300 placeholder-gray-400 placeholder:font-bold placeholder:text-xl bg-transparent"
                  placeholder="Your Name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out input-underline"></span>
              </div>
              <div className="relative">
                <input
                  className="p-1 pb-3 border-b-[2.3px] border-gray-600 lg:w-[530px] w-[270px] focus:outline-none focus:border-transparent transition duration-300 placeholder-gray-400 placeholder:font-bold placeholder:text-xl bg-transparent"
                  placeholder="Your email"
                  name="email"
                  type="text"
                  onChange={handleChange}
                  required
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out input-underline"></span>
              </div>
              <div className="relative">
                <input
                  className="p-1 pb-3 border-b-[2.3px] border-gray-600 lg:w-[530px] w-[270px] focus:outline-none focus:border-transparent transition duration-300 placeholder-gray-400 placeholder:font-bold placeholder:text-xl bg-transparent"
                  placeholder="Subject"
                  name="subject"
                  onChange={handleChange}
                  type="text"
                  required
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out input-underline"></span>
              </div>
              <div className="relative">
                <textarea
                  className="p-1 pb-3 border-b-[2.3px] border-gray-600 lg:w-[530px] w-[270px] focus:outline-none focus:border-transparent transition duration-300 placeholder-gray-400 placeholder:font-bold placeholder:text-xl bg-transparent"
                  placeholder="Your Message"
                  name="message"
                  onChange={handleChange}
                  id=""
                  rows={4}
                  required
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
            <p>{status && status}</p>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
