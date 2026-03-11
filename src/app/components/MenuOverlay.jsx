import React from "react";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const MenuOverlay = ({ links }) => {
  return (
    <div className="flex flex-col py-4 items-center space-y-4">
      <ul className="flex flex-col items-center space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </div>
  );
};

export default MenuOverlay;