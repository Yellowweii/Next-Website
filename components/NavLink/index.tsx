import React from "react";
import Link from "next/link";

interface NavLinkProps {
  title: string;
  href: string;
}

const NavLink = ({ title, href }: NavLinkProps) => {
  return (
    <>
      <Link className="block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white" href={href}>
        {title}
      </Link>
    </>
  );
};

export default NavLink;
