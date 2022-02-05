// 📦 Packages
import React from "react"
import { motion } from "framer-motion"

export function ArrowLink(props) {
  const { dark, animate, style } = props

  return (
    <motion.div
      style={{
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "top",
      }}
      animate={animate}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        style={style}
      >
        <motion.path
          d="M 1.987 0 L 8 0 L 8 6.017 L 6.018 8 L 6.018 3.428 L 1.523 7.921 L 0.068 6.464 L 4.546 1.983 L 0 1.983 Z"
          fill={dark ? "white" : "black"}
        ></motion.path>
      </motion.svg>
    </motion.div>
  )
}
