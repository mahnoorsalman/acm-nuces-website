import React from "react";
import { motion } from "framer-motion";

const FacultyCard = ({ faculty }) => {
  return (
    <motion.div
      className="bg-white w-64 h-96 rounded-lg shadow-lg p-4 flex flex-col justify-between transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }} // Initial state when the card is hidden
      animate={{ opacity: 1, y: 0 }} // Final state when the card is visible
      transition={{ duration: 0.5, ease: "easeOut" }} // Animation duration and easing
      whileHover={{ scale: 1.05 }} // Slight scale on hover
    >
      {/* Dots Section */}
      <div className="flex p-2 gap-1">
        <div>
          <span className="bg-[#257fb5] inline-block w-4 h-4 rounded-full"></span>
        </div>
        <div>
          <span className="bg-gray-500 inline-block w-4 h-4 rounded-full"></span>
        </div>
        <div>
          <span className="bg-cyan-500 inline-block w-4 h-4 rounded-full"></span>
        </div>
      </div>

      {/* Faculty Image */}
      <div
        className="w-full h-72 bg-cover bg-center rounded-lg mb-4"
        style={{
          backgroundImage: `url(${faculty.pic})`,
          backgroundColor: "#257fb5", // fallback background color
        }}
      ></div>

      {/* Faculty Details */}
      <div className="text-center">
        <h2 className="text-lg font-bold text-[#0b466d] truncate">{faculty.name}</h2>
        <p className="text-md text-gray-600">{faculty.designation}</p>
      </div>
    </motion.div>
  );
};

export default FacultyCard;
