import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }: ProjectCardProps) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link href={gitUrl} className="flex items-center justify-center mr-2 h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white">
            <CodeBracketIcon className="h-10 w-10 text-[#adb7be] cursor-pointer hover:text-white" />
          </Link>
          <Link href={previewUrl} className="flex items-center justify-center h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white">
            <EyeIcon className="h-10 w-10 text-[#adb7be] cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] mt-2 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#adb7be]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
