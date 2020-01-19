import React from "react"
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion"

export default function Scroller(props) {
  let { scrollYProgress } = useViewportScroll() // Track the y scroll
  const yRange = useTransform(scrollYProgress, [0, 1], [1, 0]) // First is the page second is the object
  const modifier = useSpring(yRange)

  return (
    <motion.div
      className="scroller"
      style={{
        width: "28px",
        height: "26px",
        bottom: "25px",
        position: "fixed",
        left: "50%",
        zIndex: "3",
        marginLeft: "-13px",
      }}
      animate={scrollYProgress > 0.95 ? "rotate: 90" : "rotate: 0"}
    >
      <motion.svg
        onTap={() => {
          window.scrollTo(0, 100)
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="33"
      >
        <motion.path
          style={{
            pathLength: modifier,
            strokeWidth: "1.2",
            stroke: "#ff6661",
            fill: "#f5f5f5",
            opacity: modifier > 0.5 ? 0 : 1,
          }}
          // visibility={modifier > 0.5 ? "hidden" : "visible"}
          // opacity={modifier > 0.5 ? 0 : 1}
          d="M 3 4.5 L 3 16 L 15 30 L 27 16 L 27 4.5 L 15 18 Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0 1"
        />
      </motion.svg>
    </motion.div>
  )
}
