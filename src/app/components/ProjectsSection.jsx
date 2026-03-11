"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";

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
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12 text-[rgb(var(--foreground-rgb))]">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-2 py-6 overflow-x-auto">
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
