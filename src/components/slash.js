import * as React from "react"
import { motion } from "framer-motion"

export default function Slash(props) {
  return (
    <motion.div className="slash">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="82"
        overflow="visible"
      >
        <motion.path
          d="M 43 6 L 5 73.5 L 2 72 L 40 4.5 Z"
          strokeWidth="1"
          stroke="#ff6661"
          // stroke="rgb(255,102,97)"
          fill="transparent"
        ></motion.path>
      </motion.svg>
    </motion.div>
  )
}
