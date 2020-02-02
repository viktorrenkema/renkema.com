import * as React from "react"
import { motion } from "framer-motion"

// Inner/darker wave

export default function Wave2(props) {
  const mytransition = {
    yoyo: Infinity,
    ease: "easeInOut",
    duration: 6,
  }
  const wave = {
    first: {
      d:
        "M 592.799 0 L 0 0 L 0 24.51 C 0 24.51 87.232 24.543 142.5 33 C 197.768 41.457 246.363 70.179 272 98 C 297.637 125.821 312.462 181.514 394.5 196.5 C 476.46 211.472 504.75 211.94 553.5 242 C 602.25 272.06 593 264.5 593 264.5 Z",
      fill: "#efefef",
    },
    second: {
      d:
        "M 592.799 0 L 0 0 L 0 24.51 C 0 24.51 -0.486 29 60.5 29 C 121.486 29 162.997 28.509 207 61.5 C 251.003 94.491 272.962 144.014 355 159 C 436.96 173.972 461.182 172.007 520.5 192.5 C 579.818 212.993 593 264.5 593 264.5 Z",
      fill: "#efefef",
    },
  }
  return (
    <motion.div className="Outter-Wave2">
      <motion.div className="Inner-Wave2">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="593"
          height="265"
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
