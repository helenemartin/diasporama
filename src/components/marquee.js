import React from "react";
import { motion } from "framer-motion";
import "./marquee.css";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div className="marquee">
      <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        <h1>
          Think twice, cut once.Think twice, cut once. Think twice, cut once.
          Think twice, cut once. Think twice, cut once. Think twice, cut once.
          Think twice, cut once. Think twice, cut once. Think twice, cut
          once.Think twice, cut once. Think twice, cut once. Think twice, cut
          once. Think twice, cut once. Think twice, cut once. Think twice, cut
          once. Think twice, cut once. Think twice, cut once.Think twice, cut
          once. Think twice, cut once. Think twice, cut once. Think twice, cut
          once. Think twice, cut once. Think twice, cut once. Think twice, cut
          once. Think twice, cut once.Think twice, cut once. Think twice, cut
          once. Think twice, cut once. Think twice, cut once. Think twice, cut
          once. Think twice, cut once. Think twice, cut once.
        </h1>
      </motion.div>
    </div>
  );
};

export default Marquee;
