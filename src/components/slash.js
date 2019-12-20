import * as React from "react"
import { motion } from "framer-motion"

export default function Slash(props) {
  return (
    <motion.div className="slash">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="36.5"
        height="65.5"
        overflow="visible"
      >
        <motion.path
          d="M 0 65.5 L 36.5 0"
          strokeWidth="4"
          strokeLinecap="round"
          stroke="#ff6661"
        ></motion.path>
      </motion.svg>
    </motion.div>
  )
}
