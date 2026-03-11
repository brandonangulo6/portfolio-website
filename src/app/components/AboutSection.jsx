"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { AnimatePresence, motion } from "framer-motion";
import { skills, education, certifications } from "@/data/about";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    items: skills,
    gridCols: "grid-cols-2 sm:grid-cols-3",
  },
  {
    title: "Education",
    id: "education",
    items: education,
    gridCols: "grid-cols-1 sm:grid-cols-2",
  },
  {
    title: "Certifications",
    id: "certifications",
    items: certifications,
    gridCols: "grid-cols-1 sm:grid-cols-2",
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
            Hi, I’m Brandon Angulo, a data engineer, data scientist, and software engineer with a B.A. in Data Science 
            from UC Berkeley. Currently at Atrium, I design and maintain ELT pipelines, time-series databases, and data infrastructure 
            for hospitality and utility data. I have experience in predictive 
            modeling, data analytics, and software development, with projects spanning customer churn analysis, AI-driven gaming 
            analytics, and causal inference in elections. Proficient in Python, SQL, Airflow, TimeScaleDB, Scikit-learn, Pandas, NumPy, and JavaScript, I 
            excel at transforming data into actionable insights and building scalable solutions. I’m passionate about leveraging 
            data to solve real-world challenges and am actively seeking opportunities in data engineering, data science, or software engineering.
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
                <div className={`grid ${currentTab.gridCols} gap-4`}>
                  {currentTab.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="skill-card text-[rgb(var(--foreground-rgb))] px-4 py-3 rounded-lg shadow-md text-center text-sm transition flex items-center justify-center min-h-[72px]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;