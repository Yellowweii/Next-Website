import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectTag = ({name, onClick, isSelected}: ProjectTagProps) => {
  const buttonStyles = isSelected ? "border-purple-500 text-white" : "text-[#adb7be] border-slate-600 hover:border-white";
  return <button onClick={onClick} className={`${buttonStyles} rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer`}>
    {name}
  </button>;
};

export default ProjectTag;
