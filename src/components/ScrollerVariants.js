import * as React from "react"
import Link from "gatsby-link"
import { motion, useMotionValue, useViewportScroll } from "framer-motion"

export default function ScrollerVariants(props) {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "#f5f5f5",
      strokeWidth: "3",
      stroke: "#777777",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      strokeWidth: "3",
      stroke: "#777777",
    },
  }

  return (
    <motion.div className="Scroller_variants">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="52"
        viewBox="0 0 201 201"
        className="item"
      >
        <motion.path
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
