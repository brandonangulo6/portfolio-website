"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>SQL</li>
        <li>JavaScript</li>
        <li>Data Visualization</li>
        <li>Statistical Analysis & Causal Inference</li>
        <li>Pandas & NumPy</li>
        <li>Scikit-Learn</li>
        <li>Git & GitHub</li>
        <li>Power BI</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of California, Berkeley</li>
        <li>Alliance Leichtman-Levine Environmental Science High School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>BCG - Data Science Job Simulation</li>
        <li>PwC Switzerland - Power BI Job Simulation</li>
        <li>Quantium - Data Analytics Job Simulation</li>
      </ul>
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

  return (
    <section className="text-[var(--color-foreground)]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/Me.jpg" width={500} height={500} alt="About Me" />
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
          <div className="flex flex-wrap justify-center gap-2 mt-8"> {/* Change justify-start to justify-center */}
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;