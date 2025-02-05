import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import dark4 from "../assets/dark4.jpg";
import dark2 from "../assets/dark2.jpg";
import dark3 from "../assets/dark3.jpg";
function Caroucel() {
  // 1. Create a new state variable called `positionIndex` and set it to the initial value of `[0, 1, 2, 3, 4]`
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);
  // 2. Create a new function called `handeleNext` that updates the state variable `positionIndex` by incrementing each value by 1
  const handeleNext = () => {
    setPositionIndex((prevIndex) => {
      const newPosition = prevIndex.map((prevIndex) => (prevIndex + 1) % 5);
      return newPosition;
    });
  };
  // 3. Create an array called `images` that contains the image paths for the carousel
  const images = [dark2, dark3, dark4, dark3, dark4];
  // 4. Create an array called `positions` that contains the position values for the carousel
  const positions = ["left", "left1", "left2", "left3", "left4"];
  // 5. Create an object called `imagevariants` that contains the variants for the carousel images
  const imagevariants = {
    left: {
      x: "-100%",
      scale: 0.5,
      zIndex: 1,
    },
    left1: {
      x: "-50%",
      scale: 0.7,
      zIndex: 2,
    },
    left2: {
      x: "0",
      scale: 1,
      zIndex: 5,
    },
    left3: {
      x: "50%",
      scale: 0.7,
      zIndex: 2,
    },
    left4: {
      x: "100%",
      scale: 0.5,
      zIndex: 1,
    },
  };
  const positions1 = ["one", "two", "three", "four", "five"];
  const imagevariants1 = {
    one: {
      //   x: "-100%",
      left: "0",
      scale: 0.5,
      zIndex: 1,
    },
    two: {
      //   x: "-50%",
      left: "20%",
      scale: 0.7,
      zIndex: 2,
    },
    three: {
      //   x: "0",
      left: "40%",
      scale: 1,
      zIndex: 5,
    },
    four: {
      //   x: "50%",
      left: "60%",
      scale: 0.7,
      zIndex: 2,
    },
    five: {
      //   x: "100%",
      left: "80%",
      scale: 0.5,
      zIndex: 1,
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

export default Caroucel;
