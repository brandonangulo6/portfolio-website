import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t text-[rgb(var(--foreground-rgb))]" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="container mx-auto px-6 py-12 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <Image src="/images/Logo.png" alt="Logo" width={120} height={40} className="h-10 w-auto" />
        
        <div className="text-center sm:text-right">
          <p className="text-[var(--muted)] text-sm sm:text-base">
            © {new Date().getFullYear()} Brandon Angulo. All rights reserved.
          </p>
          <p className="text-xs text-[var(--muted)]">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;