import * as React from "react";
import { motion } from "framer-motion";
import Groningen from "../../src/images/groningen.jpeg";

const drawframe = {
  drawn: {
    pathLength: 1
  },
  undrawn: {
    pathLength: 0
  }
};

const image = {
  default: {
    scale: 1
  },
  hovered: {
    scale: 1.05
  }
};

export default function PictureFrame(props) {
  const [hovered, setHovered] = React.useState(false);

  const onHoverStart = () => {
    setHovered(true);
  };

  const onHoverEnd = () => {
    setHovered(false);
  };

  return (
    <motion.div
      className="imgwrapper"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {/* <motion.svg xmlns="http://www.w3.org/2000/svg" width="587" height="395">
        <motion.path
          d="M 47.25 2.916 L 0 42.289 L 0 88.952 L 90 0 L 138.375 0 L 0 109.367 L 0 150.197 L 177.75 0 L 230.625 0 L 0 173.529 L 0 242.066 L 270 0 L 340.875 0 L 0 278.522 L 0 332.476 L 396 2.916 L 396 56.871 L 0 361.641 L 0 402.471 L 396 116.658 L 396 173.529 L 0 446.218 L 0 498.714 L 396 196.861 L 396 269.772 L 0 532.253 L 0 564.334 L 396 303.311 L 396 347.058 L 27 576 L 103.5 576 L 396 374.765 L 396 425.803 L 150.75 576 L 207 576 L 396 454.967 L 396 498.714 L 241.875 576 L 313.875 576 L 396 532.253 L 396 576"
          transform="translate(89.5 -90.5) rotate(-90 198 288)"
          variants={drawframe}
          initial="undrawn"
          animate={hovered ? "undrawn" : "drawn"}
          transition={{ ease: "linear", duration: 1 }}
          strokeDasharray="0 1"
          fill="transparent"
          strokeWidth="2"
          stroke="#3c3c3c"
        />
      </motion.svg> */}
      <motion.img
        variants={image}
        initial="default"
        animate={hovered ? "hovered" : "default"}
        transition={{ duration: 0.5 }}
        className="imagegroningen"
        src={Groningen}
        width={"100%"}
        height="100%"
      ></motion.img>
    </motion.div>
  );
}
