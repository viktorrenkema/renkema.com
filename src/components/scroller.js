import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"

export default function Scroller({ label }) {
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

  const yRange = [0, 0.01]
  const opacityRange = [1, 0]

  const reverse = useTransform(scrollYProgress, yRange, opacityRange)

  const styleScrolldownP = {
    opacity: 1,
    // opacity: reverse,
    width: "fit-content",
    height: "fit-content",
    bottom: "58px",
    position: "fixed",
    zIndex: 3,
    color: "#171717",
    fontSize: "12px",
    left: "50%",
    transform: "translate(-50%, 0%)",
  }
  return (
    <motion.div>
      <motion.p style={styleScrolldownP} className="subcopy-intro">
        Welcome
      </motion.p>
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
        <motion.svg width="23" height="22">
          <motion.defs>
            <linearGradient id="progress" x1="0" y1="1" x2="0" y2="0">
              <motion.stop
                id="stop1"
                offset={modifier}
                stopColor="transparent"
              />
              <motion.stop id="stop2" offset={modifier} stopColor="black" />
            </linearGradient>
          </motion.defs>
          <motion.path
            d="M 10.927 2.061 L 11.13 15.294 L 15.11 11.48 L 16.03 12.366 L 10.524 17.641 L 4.856 12.185 L 5.749 11.331 L 9.847 15.275 L 9.646 2.04 Z"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="url(#progress)"
          ></motion.path>
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
