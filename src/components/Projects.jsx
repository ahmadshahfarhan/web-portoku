"use client";
import React, { useEffect } from "react";
import Globe from "../assets/image/gif/globe.gif";
import { dataRecent } from "../assets/api/admin";
import { useNavigate } from "react-router-dom";
import { BlurFade } from "./ui/blur";
import aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const aosDelay = 600;
  const cardDelay = 800;
  useEffect(() => {
    window.scrollTo(0, 0);
    aos.init({
      once: false,
      duration: 1000,
    });
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <BlurFade delay={0.3} inView>
        <div className="bg-[#171717] min-h-screen">
          <div className=" pt-12 pb-12 container">
            <div className=" flex items-center justify-between">
              <h1
                data-aos-delay={aosDelay}
                data-aos="fade-right"
                aria-label="About me"
                className="text-white text-[40px] sm:text-[65px] md:text-[65px] lg:text-[65px] text-left font-bold leading-[0,9em] tracking-tighter"
              >
                All Projects
              </h1>
              <div
                className="bg-neutral-800 p-1 rounded-full"
                data-aos-delay={aosDelay}
                data-aos="fade-left"
              >
                <img width={50} height={50} src={Globe} alt="" />
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay={cardDelay}
              className=" mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {dataRecent.map((recent, index) => (
                <div className="mt-6" key={index}>
                  <div
                    aria-hidden="true"
                    className="bg-zinc-800 border border-gray-600 rounded-2xl relative min-h-[500px] overflow-hidden flex flex-col"
                  >
                    <div className=" px-6 flex-grow">
                      <div className="mt-8 relative z-10">
                        <h1 className="text-zinc-100 md:text-[25px] text-[30px] font-bold">
                          {recent.title}
                        </h1>
                        <p className="text-gray-400 mt-2 w-[90%] max-w-[434px] text-[13px] leading-4 font-bold">
                          {recent.description}
                        </p>
                        <h2 className="text-gray-400 mt-3 w-[90%] max-w-[434px] text-[15px] leading-4 font-bold">
                          {recent.engine}
                        </h2>
                      </div>
                      <div className="flex gap-x-2 items-center relative z-20 mt-3">
                        <div className={recent.Github === "" ? "hidden" : ""}>
                          <a
                            href={recent.Github}
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
                              className="h-6 w-6 text-zinc-800 md:h-8 md:w-8 lg:h-5 lg:w-5 font-bold"
                            >
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                              <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                          </a>
                        </div>
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
                            className="h-6 w-6 text-zinc-800 md:h-8 md:w-8 lg:h-5 lg:w-5 text-bold"
                          >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="w-full flex justify-end">
                      <img
                        alt={recent.title}
                        fetchpriority="high"
                        width="1000"
                        height="600"
                        decoding="async"
                        data-nimg="1"
                        className="w-[80%] object-contain md:w-[75%]"
                        src={recent.image}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className=" space-y-5 py-24 text-center">
              <div>
                <h2 className=" md:text-5xl text-4xl font-bold text-white text-center">
                  Back To home
                </h2>
                <button
                  onClick={() => navigate("/")}
                  className="bg-black hover:bg-gray-800 text-white border-[1px] border-gray-800 px-8 py-[10px] rounded-md text-md font-semibold mt-4"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </>
  );
};

export default Projects;
