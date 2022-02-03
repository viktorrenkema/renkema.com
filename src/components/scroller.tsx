// 📦 Packages
import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from "styled-components"

// 💅🏽 Styled Components

const ScrollerContainer = styled(motion.div)`
  width: fit-content;
  height: fit-content;
  bottom: 25px;
  position: fixed;
  z-index: 3;
  margin-left: -13px;
  width: fit-content;
  height: fit-content;
  left: 2rem;
  z-index: 3;
  margin-left: -13px;
`

const floatingVariants = {
  initial: {
    y: -10,
    transition: { repeat: Infinity, repeatType: "reverse", duration: 2 },
  },
  second: {
    y: 0,
    transition: { repeat: Infinity, repeatType: "reverse", duration: 2 },
  },
}

export default function Scroller({ label }) {
  let { scrollYProgress } = useViewportScroll() // Track the y scroll

  const adjustedPathLength = useTransform(scrollYProgress, [0, 1], [1, 0]) // Transforms our scrollYProgress from [0, 1] to [1, 0]

  return (
    <ScrollerContainer
      variants={floatingVariants}
      animate={"second"}
      initial={"initial"}
    >
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="23" height="22">
        <motion.path
          style={{
            pathLength: adjustedPathLength,
          }}
          d="M 11 3 L 11 18 L 7 14"
          fill="transparent"
          stroke="#fff"
          strokeLinejoin="round"
        ></motion.path>
        <motion.path
          style={{
            pathLength: adjustedPathLength,
          }}
          d="M 11 3 L 11 18 L 15 14"
          fill="transparent"
          stroke="#fff"
          strokeLinejoin="round"
        ></motion.path>
      </motion.svg>
    </ScrollerContainer>
  )
}
