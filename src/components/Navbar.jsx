import React, { useState } from "react";
import lksa from "../assets/img/lksa-logo-ls.png";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="h-20 flex justify-between items-center px-3 w-full fixed z-10 bg-white backdrop-blur-md bg-opacity-50 shadow-sm lg:px-72">
      <a href="">
        <img src={lksa} alt="" className="h-20 lg:h-24" />
      </a>
      <div className="flex items-center gap-3">
        <div className="hidden lg:flex gap-8">
          <a
            href="#home"
            onClick={() => handleSetActiveSection("home")}
            className={`${activeSection === "home" ? "text-[#2487ce]" : ""}`}
          >
            Beranda
          </a>
          <a
            href="#about"
            onClick={() => handleSetActiveSection("about")}
            className={`${activeSection === "about" ? "text-[#2487ce]" : ""}`}
          >
            Tentang
          </a>
          <a
            href="#comment"
            onClick={() => handleSetActiveSection("comment")}
            className={`${activeSection === "comment" ? "text-[#2487ce]" : ""}`}
          >
            Pendapat
          </a>
          <a
            href="#program"
            onClick={() => handleSetActiveSection("program")}
            className={`${activeSection === "program" ? "text-[#2487ce]" : ""}`}
          >
            Program
          </a>
          <a
            href="#documentation"
            onClick={() => handleSetActiveSection("documentation")}
            className={`${
              activeSection === "documentation" ? "text-[#2487ce]" : ""
            } mr-6`}
          >
            Dokumentasi
          </a>
        </div>
        <a
          href="#contact"
          onClick={() => handleSetActiveSection("contact")}
        >
          <Button>Hubungi Kami</Button>
        </a>
        <div className="relative lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-7 cursor-pointer"
            onClick={toggleMenu}
          >
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              <a
                href="#home"
                onClick={() => handleSetActiveSection("home")}
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                  activeSection === "home" ? "text-[#2487ce]" : ""
                }`}
              >
                Beranda
              </a>
              <a
                href="#about"
                onClick={() => handleSetActiveSection("about")}
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                  activeSection === "about" ? "text-[#2487ce]" : ""
                }`}
              >
                Tentang
              </a>
              <a
                href="#comment"
                onClick={() => handleSetActiveSection("comment")}
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                  activeSection === "comment" ? "text-[#2487ce]" : ""
                }`}
              >
                Pendapat
              </a>
              <a
                href="#program"
                onClick={() => handleSetActiveSection("program")}
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                  activeSection === "program" ? "text-[#2487ce]" : ""
                }`}
              >
                Program
              </a>
              <a
                href="#documentation"
                onClick={() => handleSetActiveSection("documentation")}
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                  activeSection === "documentation" ? "text-[#2487ce]" : ""
                }`}
              >
                Dokumentasi
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
