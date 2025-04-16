"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { AnimatePresence, motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          "Python",
          "SQL",
          "JavaScript",
          "Data Visualization",
          "Statistical Analysis & Causal Inference",
          "Pandas & NumPy",
          "Scikit-Learn",
          "Git & GitHub",
          "Power BI",
          "Node.js",
        ].map((skill, idx) => (
          <div
            key={idx}
            className="bg-[#1F2937] text-white px-4 py-3 rounded-lg shadow-md text-center text-sm hover:bg-[#374151] transition flex items-center justify-center min-h-[72px]"
          >
            {skill}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          "University of California, Berkeley",
          "Alliance Leichtman-Levine Environmental Science High School",
        ].map((edu, idx) => (
          <div
            key={idx}
            className="bg-[#1F2937] text-white px-4 py-3 rounded-lg shadow-md text-center text-sm hover:bg-[#374151] transition flex items-center justify-center min-h-[72px]"
          >
            {edu}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          "BCG - Data Science Job Simulation",
          "PwC Switzerland - Power BI Job Simulation",
          "Quantium - Data Analytics Job Simulation",
        ].map((cert, idx) => (
          <div
            key={idx}
            className="bg-[#1F2937] text-white px-4 py-3 rounded-lg shadow-md text-center text-sm hover:bg-[#374151] transition flex items-center justify-center min-h-[72px]"
          >
            {cert}
          </div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-[var(--color-foreground)]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/About-Me.webp"
          alt="About Me"
          width={500}
          height={500}
          priority
          className="rounded-xl object-cover shadow-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I’m Brandon Angulo, a data scientist, analyst, and software engineer with a B.A. in Data Science 
            from UC Berkeley and expertise in Python, SQL, Power BI, and machine learning. I have experience in predictive 
            modeling, data analytics, and software development, with projects spanning customer churn analysis, AI-driven gaming 
            analytics, and causal inference in elections. Proficient in Scikit-learn, Pandas, NumPy, Java, C#, and JavaScript, I 
            excel at transforming data into actionable insights and building scalable solutions. I’m passionate about leveraging 
            data to solve real-world challenges and am actively seeking opportunities in data science, analytics, or software 
            engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-8"> 
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          <div className="mt-8 min-h-[140px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {currentTab.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;