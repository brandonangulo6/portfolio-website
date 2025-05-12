"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 7,
    title: "Walmart Advanced Software Engineering Job Simulation",
    description: "Gained hands-on experience solving technical challenges for Walmart teams by developing a custom heap data structure in Java, designing UML diagrams for system architecture, and creating ER diagrams to model databases based on real-world requirements.",
    image: "/images/Proj-prev/wal-se-cpa-prev.png",
    tag: ["All", "Software"],
    gitUrl: "https://github.com/brandonangulo6/walmart-se-cpath",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Quantium Data Analytics Job Simulation",
    description: "Gained hands-on experience analyzing customer transaction data, conducting uplift testing, and delivering strategic commercial insights through data-driven reports.",
    image: "/images/Proj-prev/qua-dat-ana-prev.png",
    tag: ["All", "Data Viz"],
    gitUrl: "https://github.com/brandonangulo6/quantium-data-analytics",
    previewUrl: "",
  },
  {
    id: 5,
    title: "BCG Data Science Job Simulation",
    description: "Performed customer churn analysis, developed a predictive model with 85% accuracy, and provided insights using Python and data visualization.",
    image: "/images/Proj-prev/BCG-dat-sci-prev.png",
    tag: ["All", "AI & ML", "Data Viz"],
    gitUrl: "https://github.com/brandonangulo6/bcg-data-science",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Action Map (Private)",
    description: "Developed a civic data visualization tool using Ruby on Rails and JavaScript, integrating APIs to empower informed decision-making.",
    image: "/images/Proj-prev/act-map-prev.png",
    tag: ["All", "Data Viz"],
    gitUrl: "https://github.com/brandonangulo6",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Presidential Candidate Analysis",
    description: "Conducted a causal inference study on U.S. primary elections, revealing a 71.9% increase in success with party support using machine learning models.",
    image: "/images/Proj-prev/pre-can-ana-prev.png",
    tag: ["All", "AI & ML", "Data Viz"],
    gitUrl: "https://github.com/brandonangulo6/presidential-candidate-analysis",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Pacman AI (Private)",
    description: "Designed AI algorithms using A* search, Q-learning, and reinforcement learning to optimize in-game decision-making.",
    image: "/images/Proj-prev/pac-AI-prev.png",
    tag: ["All", "AI & ML", "Gaming"],
    gitUrl: "https://github.com/brandonangulo6",
    previewUrl: "",
  },
  {
    id: 1,
    title: "Predicting Housing Prices in Cook County (Private)",
    description: "Developed a regression model to improve property tax assessments, applying feature engineering and bias evaluation techniques.",
    image: "/images/Proj-prev/pre-hous-pri-prev.png",
    tag: ["All", "AI & ML", "Data Viz"],
    gitUrl: "https://github.com/brandonangulo6",
    previewUrl: "",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6 overflow-x-auto">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI & ML"
          isSelected={tag === "AI & ML"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Viz"
          isSelected={tag === "Data Viz"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Gaming"
          isSelected={tag === "Gaming"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software"
          isSelected={tag === "Software"}
        />
      </div>

      {/* Scrollable container */}
      <div
        className="max-h-[1000px] overflow-y-auto pr-2"
        ref={ref}
      >
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
