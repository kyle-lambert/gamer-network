import React from "react";
import { motion } from "framer-motion";
import "./loading-spinner.scss";

function LoadingSpinner(props) {
  return (
    <div className="loading-spinner">
      <motion.span
        animate={{ rotate: 360 }}
        transition={{
          loop: Infinity,
          duration: 0.5,
          ease: "linear",
        }}
        className="loading-spinner__circle"></motion.span>
    </div>
  );
}

export default LoadingSpinner;
