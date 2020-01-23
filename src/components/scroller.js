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
  console.log("scrollyprogress is " + scrollYProgress)
  const inverseModifier = useSpring(scrollYProgress)

  const [endReached, endReachedSet] = React.useState(false)

  const checkEnd = () => {
    console.log(modifier, yRange, scrollYProgress)
    modifier > 0.5 ? endReachedSet(true) : endReachedSet(false)
  }

  const fireOnScroll = () => {
    console.log("Fire!")
  }

  return (
    <motion.div
      onScroll={fireOnScroll}
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
      <motion.svg
        width="14"
        height="7"
        style={{ margin: "0 auto", display: "block" }}
      >
        <motion.path
          style={{
            opacity: inverseModifier,
            margin: "0 auto",
            display: "block",
          }}
          d="M 11 6 L 7 1.5 L 3 6"
          fill="transparent"
          stroke="#ff285e"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></motion.path>
      </motion.svg>

      <motion.svg xmlns="http://www.w3.org/2000/svg" width="30" height="33">
        <motion.path
          style={{
            pathLength: 0,
            pathLength: modifier,
            strokeWidth: "1.1",
            stroke: "#ff285e",
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
