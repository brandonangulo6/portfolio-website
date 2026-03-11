"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/data/navLinks";

const SECTION_IDS = ["about", "experience", "projects", "contact"];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed mx-auto border top-0 left-0 right-0 z-10 bg-[var(--main-bg)] bg-opacity-100" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
      <Link href={"/"}>
        <Image 
          src="/images/Logo.png" 
          alt="Logo" 
          width={150} 
          height={50} 
          className="h-8 sm:h-10 md:h-15 lg:h-14 w-auto" 
          priority
        />
      </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded mobile-nav-btn"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded mobile-nav-btn"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:flex md:flex-row md:items-center md:w-auto md:gap-4" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} active={activeSection === link.path.slice(1)} />
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;