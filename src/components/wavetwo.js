import * as React from "react"
import { motion } from "framer-motion"

// outerwave

export default function CornerMotionTwo(props) {
  const mytransition = {
    yoyo: Infinity,
    ease: "linear",
    duration: 6,
  }
  const wave = {
    first: {
      d:
        "M 761.884 0 L 0 0.294 C 0 0.294 132.768 29.259 201.933 95.5 C 271.099 161.741 355.554 203.5 519.933 203.5 C 684.313 203.5 762.433 296 762.433 296",
      fill: "#e8e8e8",
      // right: "-100px",
      // top: "-10px"
    },
    second: {
      d:
        "M 761.884 0 L 0 0.294 C 0 0.294 192.268 21.259 261.433 87.5 C 330.599 153.741 342.554 172.5 506.933 172.5 C 671.313 172.5 762.433 296 762.433 296",
      fill: "#e8e8e8",
      // right: "-100px",
      // top: "-10px"
    },
    hovered: {
      // d:
      //   "M 761.884 103.588 L 0 103.882 C 0 103.882 497.835 -49.653 567 16.588 C 636.166 82.828 626.622 98.588 791 98.588 C 955.381 98.589 762.434 399.588 762.434 399.588",
      d:
        "M 761.884 0 L 0 0.294 C 0 0.294 192.268 21.259 261.433 87.5 C 330.599 153.741 342.554 172.5 506.933 172.5 C 671.313 172.5 762.433 296 762.433 296",

      fill: "#ff6661",
      // right: "-1000px",
      // top: "-500px"
    },
  }
  return (
    <motion.div className="WrapperWaveTwo">
      <motion.div className="Cont-MyWaveTwo">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="678.936"
          height="266"
          // viewBox="0 0 201 201"
          className="item"
        >
          <motion.path
            whileHover="hovered"
            variants={wave}
            initial="first"
            animate="second"
            transition={mytransition}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
