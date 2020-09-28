import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"

export default function Scroller(props) {
  let { scrollYProgress } = useViewportScroll() // Track the y scroll

  const modifier = useTransform(scrollYProgress, x => {
    if (x > 1) {
      return 1
    }
    if (x < 0) {
      return 0
    }
    return x
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
    >
      {/* <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="13"
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {" "}
        <motion.path
          style={{
            pathLength: 0,
          }}
          
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0 0"
          transform="translate(1.973 2.822) rotate(90 5.337 3.911)"
          fill="rgb(255, 40, 92)"
          strokeWidth="0.29"
          stroke="rgb(255, 40, 92)"
        />
      </motion.svg> */}
      <motion.svg width="14" height="13">
        <motion.defs>
          <linearGradient id="progress" x1="0" y1="1" x2="0" y2="0">
            <motion.stop id="stop1" offset={modifier} stopColor="transparent" />
            <motion.stop
              id="stop2"
              offset={modifier}
              stopColor="rgb(255, 40, 92)"
            />
          </linearGradient>
        </motion.defs>
        <motion.path
          d="M 7.649 1.41 L 7.791 10.464 L 10.577 7.855 L 11.221 8.461 L 7.367 12.07 L 3.399 8.337 L 4.024 7.753 L 6.893 10.451 L 6.752 1.396 Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="url(#progress)"
        ></motion.path>
      </motion.svg>
    </motion.div>
  )
}
