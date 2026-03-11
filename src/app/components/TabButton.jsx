import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const borderColor = active ? "border-[var(--color-primary)]" : "border-transparent";

  return (
    <button
      onClick={selectTab}
      className={`flex items-center justify-center border-2 ${borderColor} px-6 py-3 rounded-full gap-2 tab-button`}
    >
      <p className={`font-semibold cursor-pointer ${active ? "tab-button-active" : "tab-button-inactive"}`}>
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