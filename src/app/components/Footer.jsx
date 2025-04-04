import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <img src="images/Logo.png" alt="Logo" className="h-10 w-auto" />
        <p className="text-[#ADB7BE]">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;