import React from "react"
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion"

export default function ScrollerExperimental(props) {
  let { scrollYProgress } = useViewportScroll() // Track the y scroll
  const yRange = useTransform(scrollYProgress, [0, 1], [1, 0]) // First is the page second is the object
  const modifier = useSpring(yRange)
  console.log(scrollYProgress, yRange, modifier)

  const icon = {
    hidden: {
      // opacity: 0,
      // pathLength: 0,
      fill: "#f5f5f5",
      strokeWidth: "3",
      stroke: "orange",
    },
    visible: {
      // opacity: 1,
      // pathLength: 1,
      strokeWidth: "3",
      stroke: "orange",
    },
  }
  return (
    <motion.div
      style={{
        opacity: modifier,
        width: "25px",
        height: "25px",
        top: "100px",
        position: "fixed",
        left: "50%",
        marginLeft: "12px",
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="52"
        viewBox="0 0 201 201"
      >
        <motion.path
          style={{ pathLength: modifier }}
          variants={icon}
          whileHover={"hidden"}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          d="M 0.5 0.5 L 0.5 47 L 54.5 101 L 109 46.5 L 109 0.5 L 54.5 55 Z"
          strokeDasharray="0 1"
        />
      </motion.svg>
    </motion.div>
  )
}
