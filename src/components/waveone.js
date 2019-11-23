import * as React from "react"
import { motion } from "framer-motion"

// innerwave

const mytransition = {
  yoyo: Infinity,
  ease: "linear",
  duration: 6,
}
const wave = {
  first: {
    d:
      "M 571.468 0 L 0 0.25 C 0 0.25 220.101 43.832 271.981 100.126 C 323.86 156.42 336.044 191.98 418.973 207.128 C 501.902 222.275 498.758 228.077 536.882 242.795 C 575.006 257.513 571.468 266 571.468 266",
    fill: "#f1f1f1",
  },
  second: {
    d:
      "M 571.545 4.634 L 0 4.884 C 0 4.884 180.113 -18.66 232 37.634 C 283.886 93.928 354.56 173.986 437.5 189.134 C 520.44 204.281 498.871 201.416 537 216.134 C 575.129 230.852 571.545 270.634 571.545 270.634",
    fill: "#f1f1f1",
  },
  hovered: {
    d:
      "M 571.498 1.78 L 0 2.03 C 0 2.03 438.117 -82.293 490 -26 C 515.941 2.147 578.485 -27.094 604 -5 C 629.515 17.094 562.534 80.926 604 88.5 C 686.933 103.647 565.874 146.782 604 161.5 C 642.126 176.218 571.497 267.78 571.497 267.78",
    fill: "#ff6661",
  },
}

export default function CornerMotionOne(props) {
  // const [hovered, setHovered] = React.useState(false); this throws an error Rendered more hooks than during the previous render.
  return (
    <motion.div className="WrapperWaveOne">
      <motion.div className="Cont-MyWaveOne">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="572"
          height="270"
          className="SVG-MyWaveOne"
        >
          <motion.path
            whileHover="hovered"
            // onHoverStart={setHovered(true)} uncomment once useState works
            // onHoverEnd={setHovered(false)} uncomment once useState works
            variants={wave}
            initial="first"
            animate="second"
            // initial={hovered ? "hovered" : "first"} uncomment once useState works
            // animate={hovered ? "hovered" : "second"} uncomment once useState works
            transition={mytransition}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
