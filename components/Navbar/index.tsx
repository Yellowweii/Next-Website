"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import NavLink from "../NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../MenuOverlay";

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed mx-auto border border-[#33353f] top-0 left-0 z-10 bg-[#121212] bg-opacity-100 w-full">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 container lg:py-4">
        <Link className="text-4xl md:text-5xl text-white font-semibold" href="/">
          Logo
        </Link>
        <div className="mobile-menu block md:hidden">
          {showMenu ? (
            <button onClick={() => setShowMenu(false)} className="buttonClass">
              <XMarkIcon className="w-5 h-5" />
            </button>
          ) : (
            <button onClick={() => setShowMenu(true)} className="buttonClass">
              <Bars3Icon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <NavLink key={index} title={link.title} href={link.href} />
            ))}
          </ul>
        </div>
      </div>
      {showMenu ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
