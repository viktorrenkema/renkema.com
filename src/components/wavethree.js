import * as React from "react"
import { motion } from "framer-motion"

// Left wave

const mytransition = {
  yoyo: Infinity,
  ease: "linear",
  duration: 3,
}
const wave = {
  first: {
    d:
      "M 263 0 L 0 0 C 0 0 71.502 0.825 99.5 18.5 C 127.498 36.175 119.571 99.524 157 117.5 C 175.714 126.488 190.399 130.899 219 159.5 C 248.667 189.167 232.294 250.213 243.5 272 C 254.706 293.787 263 306 263 306 Z",
    fill: "#e8e8e8",
  },
  second: {
    d:
      "M 249.5 0 L 0 0 C 0 0 42.502 9.825 70.5 27.5 C 98.498 45.175 110.071 90.024 147.5 108 C 166.214 116.988 179.899 124.399 208.5 153 C 238.167 182.667 220.294 232.213 231.5 254 C 242.706 275.787 249.5 284.5 249.5 284.5 Z",
    fill: "#e8e8e8",
  },
}

export default function Wave3(props) {
  return (
    <motion.div className="Wrapper-Wave3">
      <motion.div className="Container-Wave3">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="343"
          height="337"
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
