import React, { useEffect } from "react";
import { footerIcon } from "../assets/api/admin";
import aos from "aos";
import "aos/dist/aos.css";

export default function Sidebar() {
  function Opennav() {
    const toggle = document.getElementById("toggle");
    const plus = document.getElementById("plus");
    const sidebar = document.getElementById("add");
    toggle.textContent = "X";
    plus.classList.toggle("open");
    sidebar.classList.add("w-full");

    if (plus.classList.contains("open")) {
      toggle.textContent = "X";
    } else {
      toggle.innerHTML = ` <svg
      width="35"
      height="35"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="18" height="3" fill="black" />
      <rect x="10" y="22" width="30" height="2" fill="black" />
      <rect x="20" y="34" width="18" height="3" fill="black" />
    </svg>`;
    }

    if (toggle.textContent === "O") {
      sidebar.classList.remove("w-full");
    }

    function closeSidebar() {
      sidebar.classList.remove("w-full");
      plus.classList.remove("open");
      toggle.innerHTML = ` <svg
      width="35"
      height="35"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="18" height="3" fill="black" />
      <rect x="10" y="22" width="30" height="2" fill="black" />
      <rect x="20" y="34" width="18" height="3" fill="black" />
    </svg>`;
    }

    document.addEventListener("click", (event) => {
      const sidebar = document.getElementById("add");

      if (event.target === sidebar || sidebar.contains(event.target)) {
        closeSidebar();
      }
    });
  }

  // routing single pages
  const scrollSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // aos
  useEffect(() => {
    aos.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <nav id="add" className="fixed z-[999] h-full right-0">
        <div
          id="plus"
          className="bg-white absolute w-full max-w-lg h-full p-8 plus xl:overflow-y-scroll"
        >
          <div className="contain-plus mt-16">
            <h1>Navigation</h1>
            <div className="mt-5 mb-5">
              <hr />
            </div>
          </div>
          <ul className="navbar">
            <li>
              <button onClick={() => scrollSection("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollSection("about")}>About</button>
            </li>
            <li>
              <button onClick={() => scrollSection("recent")}>Best Project</button>
            </li>
            <li>
              <button onClick={() => scrollSection("contact")}>Contact</button>
            </li>
          </ul>
          <div className="contain-plus">
            <h1>Links</h1>
            <div className="mt-5 mb-5">
              <hr />
            </div>
            <ul className="links flex gap-5">
              {footerIcon.map((icon) => (
                <a
                  key={icon.id}
                  target="_blank"
                  href={icon.url}
                  rel=" noperener noreferrer"
                >
                  <li className={icon.title == 'gmail' ? 'hidden' : ''}>{icon.title}</li>
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="300" className="fixed top-5 right-5">
          <button
            id="toggle"
            onClick={Opennav}
            className="absolute top-5 right-5 bg-white shadow-lg shadow-gray-400 text-xl w-11 h-11 flex items-center justify-center rounded-full cursor-pointer font-semibold border-[1px] border-gray-500"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="10" width="18" height="3" fill="black" />
              <rect x="10" y="22" width="30" height="2" fill="black" />
              <rect x="20" y="34" width="18" height="3" fill="black" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
