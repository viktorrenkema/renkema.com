import * as React from "react"
import { motion } from "framer-motion"

// Inner/darker wave

export default function CornerMotionTwo(props) {
  const mytransition = {
    yoyo: Infinity,
    ease: "linear",
    duration: 4,
  }
  const wave = {
    first: {
      d:
        "M 761.884 0 L 0 0.294 C 0 0.294 132.768 29.259 201.933 95.5 C 271.099 161.741 355.554 203.5 519.933 203.5 C 684.313 203.5 762.433 296 762.433 296",
      fill: "#efefef",
      opacity: 1,
    },
    second: {
      d:
        "M 761.956 0 L -165 0 C -165 0 191.328 36.259 260.5 102.5 C 329.673 168.741 375.606 158.5 540 158.5 C 704.395 158.5 762.505 296 762.505 296",
      fill: "#efefef",
      opacity: 1,
    },
  }
  return (
    <motion.div className="WrapperWaveTwo">
      <motion.div className="Cont-MyWaveTwo">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="1200.936"
          height="266"
          className="item"
        >
          <motion.path
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

// copy this to framer to get a graphic
{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="678.936" height="266"><path d="M 761.884 0 L 0 0.294 C 0 0.294 192.268 21.259 261.433 87.5 C 330.599 153.741 342.554 172.5 506.933 172.5 C 671.313 172.5 762.433 296 762.433 296" fill="rgb(241,241,241)"></path></svg> */
}
