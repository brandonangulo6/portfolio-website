import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  const borderColor = active ? "border-[var(--color-primary)]" : "border-transparent";

  return (
    <button
      onClick={selectTab}
      className={`flex items-center justify-center border-2 ${borderColor} px-6 py-3 rounded-full gap-2`} // Added gap-2 instead of margins
    >
      <p className={`font-semibold hover:text-white cursor-pointer ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[var(--color-primary)] mt-2"
      ></motion.div>
    </button>
  );
};

export default TabButton;