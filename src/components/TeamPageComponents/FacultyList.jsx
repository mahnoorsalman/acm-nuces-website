import React from "react";
import FacultyCard from "./FacultyCard";
import { motion } from "framer-motion";

const FacultyList = () => {
  const facultyData = [
    {
      name: "Dr. John Doe",
      designation: "Professor of Computer Science",
      pic: "https://example.com/john-doe.jpg",
    },
    {
      name: "Dr. Jane Smith",
      designation: "Associate Professor of Math",
      pic: "https://example.com/jane-smith.jpg",
    },
  ];

  // Variants for animating the list of cards
  const listVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state for cards
    visible: {
      opacity: 1,
      y: 0, // Final state for cards
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.2, // Delay between each card animation
      },
    },
  };

  // Variants for animating the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 }, // Initial state for heading
    visible: {
      opacity: 1,
      y: 0, // Final state for heading
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col gap-8 justify-center h-screen">
      {/* Motion heading */}
      <motion.h2
        className="text-4xl md:text-6xl text-[#006984] font-extrabold mb-5 text-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Our Faculty Heads
      </motion.h2>

      {/* Motion container for the list of cards */}
      <motion.div
        className="flex flex-row gap-x-8 justify-center items-center"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {facultyData.map((faculty, index) => (
          <motion.div key={index} variants={listVariants}>
            <FacultyCard faculty={faculty} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FacultyList;
