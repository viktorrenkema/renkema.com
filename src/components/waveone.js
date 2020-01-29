import * as React from "react"
import { motion } from "framer-motion"

// Outer/lighter wave

const mytransition = {
  yoyo: Infinity,
  ease: "linear",
  duration: 4,
}
const wave = {
  first: {
    d:
      "M 571.468 0 L 0 0.25 C 0 0.25 220.101 43.832 271.981 100.126 C 323.86 156.42 336.044 191.98 418.973 207.128 C 501.902 222.275 498.758 228.077 536.882 242.795 C 575.006 257.513 571.468 266 571.468 266",
    fill: "#E8E8E8",
    opacity: 1,
  },
  second: {
    d:
      "M 571.545 4.634 L 0 4.884 C 0 4.884 180.113 -18.66 232 37.634 C 283.886 93.928 354.56 173.986 437.5 189.134 C 520.44 204.281 498.871 201.416 537 216.134 C 575.129 230.852 571.545 270.634 571.545 270.634",
    fill: "#E8E8E8",

    opacity: 1,
  },
}

export default function CornerMotionOne(props) {
  // const [hovered, setHovered] = React.useState(false)

  // const onHoverStart = () => {
  //   setHovered(true)
  // }

  // const onHoverEnd = () => {
  //   setHovered(false)
  // }

  return (
    <motion.div className="WrapperWaveOne">
      <motion.div className="Cont-MyWaveOne">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="572"
          height="270"
          className="SVG-MyWaveOne"
          // onHoverStart={onHoverStart}
          // onHoverEnd={onHoverEnd}
        >
          <motion.path
            variants={wave}
            // initial="first"
            // animate="second"
            initial={"first"}
            animate={"second"}
            transition={mytransition}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
