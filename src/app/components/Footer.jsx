import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] text-white">
      <div className="container mx-auto px-6 py-12 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <img src="/images/Logo.png" alt="Logo" className="h-10 w-auto" />
        
        <div className="text-center sm:text-right">
          <p className="text-[#ADB7BE] text-sm sm:text-base">
            © {new Date().getFullYear()} Brandon Angulo. All rights reserved.
          </p>
          <p className="text-xs text-[#6B7280]">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;