import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div>
      {/* Image Container */}
      <div className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#181818]/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white transition-all duration-300" />
          </Link>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;