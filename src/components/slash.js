import * as React from "react"
import { motion } from "framer-motion"

export default function Slash(props) {
  // const slash = {
  //   normal: {
  //     rotate: 180,
  //   },
  //   hovered: {
  //     rotate: 360,
  //   },
  // }

  // const [hovered, setHovered] = React.useState(false)

  // const onHoverStart = () => {
  //   setHovered(true)
  // }

  // const onHoverEnd = () => {
  //   setHovered(false)
  // }

  return (
    <motion.div
      className="slash"
      // onHoverStart={onHoverStart}
      // onHoverEnd={onHoverEnd}
    >
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="36.5" height="65.5">
        <motion.path
          // variants={slash}
          // initial="normal"
          // animate={hovered ? "hovered" : "normal"}
          // transition={{
          //   default: { duration: 2, ease: "easeInOut" },
          //   fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          // }}
          d="M 0 65.5 L 36.5 0"
          strokeWidth="4"
          strokeLinecap="round"
          stroke="#ff6661"
        ></motion.path>
      </motion.svg>
    </motion.div>
  )
}
