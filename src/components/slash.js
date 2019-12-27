import * as React from "react"
import { motion } from "framer-motion"

export default function Slash(props) {
  return (
    <motion.div className="slash">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="55"
        height="81"
        overflow="visible"
      >
        <motion.path
          d="M 42.5 3 L 46.5 3 L 17.5 78 L 13.5 78 Z"
          strokeWidth="3"
          stroke="#ff6661"
          // stroke="rgb(255,102,97)"
          fill="transparent"
          strokeLinejoin="round"
        ></motion.path>
      </motion.svg>
    </motion.div>
  )
}
