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
          d="M 43 3 L 45.5 3 L 16.5 78 L 14 78 Z"
          strokeWidth="3"
          stroke="#ff6661"
          fill="#ff6661"
          strokeLinejoin="round"
        ></motion.path>
      </motion.svg>
    </motion.div>
  )
}
