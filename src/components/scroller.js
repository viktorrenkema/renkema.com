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

  const modifier2 = useTransform(scrollYProgress, x => {
    if (x < 0.1) {
      return 1
    }
    if (x > 0.1 && x < 0.2) {
      return 0.5
    }
    if (x > 0.2) {
      return 0
    }
  })

  const yRange = [0, 0.05]
  const opacityRange = [1, 0]

  const reverse = useTransform(scrollYProgress, yRange, opacityRange)

  const styleScrolldownP = {
    opacity: reverse,
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
        Scroll down to learn a little more and view some projects.
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

        <motion.svg width="23" height="22">
          <motion.defs>
            <linearGradient id="progress" x1="0" y1="1" x2="0" y2="0">
              <motion.stop
                id="stop1"
                offset={modifier}
                stopColor="transparent"
              />
              <motion.stop
                id="stop2"
                offset={modifier}
                stopColor="rgb(255, 40, 92)"
              />
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
