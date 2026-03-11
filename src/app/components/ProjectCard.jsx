"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div>
      {/* Image Container */}
      <div className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden project-card-placeholder">
        {!imgError ? (
          <Image
            src={imgUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--muted)] text-sm">
            No preview
          </div>
        )}
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[var(--muted)] hover:border-[var(--card-text)] flex items-center justify-center project-card-overlay-link"
            aria-label={`View the ${title} project on GitHub`}
          >
            <CodeBracketIcon className="h-10 w-10 project-card-overlay-icon transition-all duration-300" />
          </Link>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="project-card-content rounded-b-xl mt-3 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 project-card-title">{title}</h5>
        <p className="project-card-desc">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;