import React from "react";

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
      toggle.textContent = "O";
    }

    if (toggle.textContent === "O") {
      sidebar.classList.remove("w-full");
    }

    function closeSidebar() {
      sidebar.classList.remove("w-full");
      plus.classList.remove("open");
      toggle.textContent = "O";
    }
    
    document.addEventListener("click", (event) => {
      if (event.target.id === "add") {
        closeSidebar();
      }
    });
  }

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
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <div className="contain-plus">
            <h1>Links</h1>
            <div className="mt-5 mb-5">
              <hr />
            </div>
            <ul className="links flex gap-5">
              <li>Github</li>
              <li>LikedIn</li>
              <li>Instagram</li>
              <li>Gmail</li>
            </ul>
          </div>
        </div>
        <div className="fixed top-5 right-5">
          <button
            id="toggle"
            onClick={Opennav}
            className="absolute top-5 right-5 bg-white shadow-lg shadow-gray-400 text-xl p-3 rounded-full cursor-pointer"
          >
            O
          </button>
        </div>
      </nav>
    </>
  );
}
