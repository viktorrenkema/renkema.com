import React from "react"
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion"

export default function Scroller(props) {
  let { scrollYProgress } = useViewportScroll() // Track the y scroll
  const modifier = useTransform(scrollYProgress, x => {
    if (x > 1) {
      return 0
    }
    if (x < 0) {
      return 1
    }
    return 1 - x
  })

  const opacity = useTransform(modifier, x => {
    if (x <= 0) {
      return 0
    }
    return 1
  })

  return (
    <motion.div
      className="scroller"
      style={{
        width: "fit-content",
        height: "fit-content",
        bottom: "25px",
        position: "fixed",
        left: "50%",
        zIndex: "3",
        marginLeft: "-13px",
      }}
      onTap={() => {
        window.scrollTo(0, 100)
      }}
      animate={scrollYProgress > 0.95 ? "rotate: 90" : "rotate: 0"}
    >
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="30" height="33">
        <motion.path
          style={{
            pathLength: 0,
            pathLength: modifier,
            strokeWidth: "1.1",
            stroke: "#ff285e",
            fill: "#f5f5f5",
            opacity: opacity,
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
