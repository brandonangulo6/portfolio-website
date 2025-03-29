"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "Project Title",
        description: "Project Description",
        image: "./images/dog-dummy.png",
        tag: ["All", "Something"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Project Title",
        description: "Project Description",
        image: "./images/dog-dummy.png",
        tag: ["All", "Something"],
        gitUrl: "/",
        previewUrl: "/"
    }
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTagChange} tag="All" isSelected={tag == "All"} />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project) => (<ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>))}
            </div>
        </>
    );
};

export default ProjectsSection;