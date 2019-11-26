import * as React from "react"
import { motion } from "framer-motion"

// outerwave

export default function CornerMotionTwo(props) {
  const [hovered, setHovered] = React.useState(false)

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
      opacity: 1,
    },
    second: {
      d:
        "M 761.884 0 L 0 0.294 C 0 0.294 192.268 21.259 261.433 87.5 C 330.599 153.741 342.554 172.5 506.933 172.5 C 671.313 172.5 762.433 296 762.433 296",
      fill: "#e8e8e8",
      opacity: 1,
    },
    hovered: {
      d:
        "M 761.884 0 L 0 0.294 C 0 0.294 192.268 21.259 261.433 87.5 C 330.599 153.741 342.554 172.5 506.933 172.5 C 671.313 172.5 762.433 296 762.433 296",
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }
  return (
    console.log(hovered),
    (
      <motion.div className="WrapperWaveTwo">
        <motion.div
          className="Cont-MyWaveTwo"
          onHoverStart={(() => setHovered(!hovered), console.log("hovered"))}
          onHoverEnd={(() => setHovered(!hovered), console.log("unhovered"))}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="678.936"
            height="266"
            // viewBox="0 0 201 201"
            className="item"
          >
            <motion.path
              // whileHover="hovered"
              onHoverStart={() => "hovered"}
              onHoverEnd={() => "unhovered"}
              variants={wave}
              initial="first"
              animate="second"
              transition={mytransition}
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    )
  )
}
