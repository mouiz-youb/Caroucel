import React, { useState } from "react";
import "../App.css";
import CaroucelItem from "./CaroucelItem";
import { motion } from "framer-motion";
import dark4 from "../assets/dark4.jpg";
import dark2 from "../assets/dark2.jpg";
import dark3 from "../assets/dark3.jpg";
// import { FaArrowLeft } from "react-icons/fa";
function Content() {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);
  const handeleNext = () => {
    setPositionIndex((prevIndex) => {
      const newPosition = prevIndex.map((prevIndex) => (prevIndex + 1) % 5);
      return newPosition;
    });
  };
  const images = [dark2, dark3, dark4, dark3, dark4];
  const positions = ["center", "left1", "left", "right", "right1"];
  const imagevariants = {
    center: {
      x: "0",
      scale: 1,
      zIndex: 5,
    },
    left1: {
      x: "-50%",
      scale: 0.7,
      zIndex: 2,
    },
    left: {
      zIndex: 1,
      scale: 0.5,
      x: "-90%",
    },
    right: {
      zIndex: 1,
      scale: 0.5,
      x: "90%",
    },
    right1: {
      zIndex: 2,
      scale: 0.7,
      x: "50%",
    },
  };
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-black ">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          className={`rounded-[12px]`}
          initial="center"
          animate={positions[positionIndex[index]]}
          variants={imagevariants}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute", width: "40%" }}
        />
      ))}
      <button
        className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4 z-50 absolute top-[400px]"
        onClick={handeleNext}
      >
        Next
      </button>
    </div>
  );
}

export default Content;
// const nextSlide = () => {
//   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// };

// const prevSlide = () => {
//   setCurrentIndex(
//     (prevIndex) => (prevIndex - 1 + images.length) % images.length
//   );
// };
