import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const variants = {
  default: {
    width: "0%",
  },
  active: {
    width: "calc(100% - 0.75rem)",
  },
};

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = active ? "text-white" : "text-[#adb7be]";
  return (
    <button onClick={selectTab} className="">
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
      <motion.div variants={variants} animate={active ? "active" : "default"} className="h-1 bg-primary-500 mt-2 mr-3" />
    </button>
  );
};

export default TabButton;
