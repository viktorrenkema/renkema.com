import * as React from "react"
import { motion } from "framer-motion"

// Bottom left wave

const mytransition = {
  yoyo: Infinity,
  ease: "linear",
  duration: 6,
}
const wave = {
  first: {
    d:
      "M 183 0 L 0 0 C 0 0 18.002 4.325 46 22 C 73.998 39.675 77.571 97.024 115 115 C 135.86 125.019 161.09 131.63 171.5 141.5 C 181.91 151.37 183 160 183 160 Z",
    fill: "#E8E8E8",
    // boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)",
  },
  second: {
    d:
      "M 183.093 0 L 0.093 0 C 0.093 0 -2.904 5.325 25.093 23 C 53.091 40.675 61.665 33.524 99.093 51.5 C 133.123 67.843 126.763 114.852 158.093 131.5 C 189.424 148.148 183.093 160 183.093 160 Z",
    fill: "#E8E8E8",
    // boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)",
  },
}

export default function Wave3(props) {
  return (
    <motion.div className="Outter-Wave3">
      <motion.div className="Inner-Wave3">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="183"
          height="160"
          style={{ transform: "rotate(180deg)" }}
        >
          <motion.path
            variants={wave}
            initial={"first"}
            animate={"second"}
            transition={mytransition}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
