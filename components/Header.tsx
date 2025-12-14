"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "What I Do", href: "#services" },
  { name: "Resume", href: "#resume" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Client", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const accentColorHex = "#20C997";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(item.href.substring(1));
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMobileNavOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 py-4 relative">
        {/* Logo */}
        <div className="text-lg  font-bold text-white z-20">Abdul Jabbar</div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <div className="flex space-x-4 sm:space-x-5 md:space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm sm:text-base md:text-base lg:text-lg xl:text-lg font-medium tracking-wider transition-colors ${
                    isActive ? `text-[${accentColorHex}]` : "text-white"
                  } hover:text-[${accentColorHex}]`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex space-x-3 sm:space-x-4 md:space-x-5 text-white text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
          <a href="#" className={`hover:text-[${accentColorHex}]`}>
            <FaLinkedin
              size={18}
              className="sm:scale-100 md:scale-110 lg:scale-125"
            />
          </a>
          <a href="#" className={`hover:text-[${accentColorHex}]`}>
            <FaFacebook
              size={18}
              className="sm:scale-100 md:scale-110 lg:scale-125"
            />
          </a>
          <a href="#" className={`hover:text-[${accentColorHex}]`}>
            <FaWhatsapp
              size={18}
              className="sm:scale-100 md:scale-110 lg:scale-125"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="fixed top-4 right-4 z-[110] block lg:hidden text-white text-2xl sm:text-2xl md:text-3xl"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileNavOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed inset-0 bg-gray-900 z-[100] transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-6 px-6 sm:px-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className={`text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-wider py-2 w-full text-center transition-colors ${
                  isActive ? `text-[${accentColorHex}]` : "text-white"
                } hover:text-[${accentColorHex}]`}
              >
                {item.name}
              </a>
            );
          })}
          <div className="flex space-x-6 pt-4 text-3xl sm:text-4xl">
            <a href="#" className={`text-white hover:text-[${accentColorHex}]`}>
              <FaLinkedin size={28} />
            </a>
            <a href="#" className={`text-white hover:text-[${accentColorHex}]`}>
              <FaFacebook size={28} />
            </a>
            <a href="#" className={`text-white hover:text-[${accentColorHex}]`}>
              <FaWhatsapp size={28} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
