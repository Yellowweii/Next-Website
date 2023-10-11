import React from "react";
import NavLink from "../NavLink";

interface MenuOverlayProps {
  links: Array<{
    title: string;
    href: string;
  }>;
}

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="md:hidden flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink title={link.title} href={link.href} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
