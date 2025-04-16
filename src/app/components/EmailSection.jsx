"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center text-center py-24 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-primary)] to-transparent rounded-full h-80 w-80 z-0 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      <h2 className="text-4xl sm:text-5xl font-bold text-white z-10 mb-4">
        Let’s Connect
      </h2>
      <p className="text-[#ADB7BE] max-w-xl z-10 mb-6 text-lg">
        I'm currently open to new opportunities and collaborations.
        Whether you're hiring or just want to talk tech, feel free to reach out.
      </p>

      <a
        href="mailto:brandonangulo6@berkeley.edu"
        className="text-white font-medium z-10 bg-gradient-primary px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition mb-6"
      >
        Email Me
      </a>

      <div className="flex gap-4 z-10">
        <Link href="https://github.com/brandonangulo6" target="_blank">
          <div className="w-10 h-10 relative hover:scale-110 transition">
            <Image
              src={GithubIcon}
              alt="Github Icon"
              fill
              className="object-contain cursor-pointer"
            />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/brandon-angulo-825171267/" target="_blank">
          <div className="w-10 h-10 relative hover:scale-110 transition">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              fill
              className="object-contain cursor-pointer"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;

