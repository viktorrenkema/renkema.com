import React from "react"
import { motion } from "framer-motion"

export default function LearnmoreStaticBlob(props) {
  const text = {
    colored: {
      color: "#ff285e",
    },
    white: {
      color: "white",
    },
  }

  const blobwrapper = {
    // width: "100px",
    // height: "200px",
    position: "relative",
    paddingTop: "1rem",
  }
  return (
    <motion.div onclick="void(0)" style={blobwrapper}>
      <motion.div style={{ display: "flex", flexDirection: "row" }}>
        <motion.a
          className="learnmore copy"
          href={props.destination}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.p
            variants={text}
            initial="white"
            className="learnmore copy"
            style={{ zIndex: 1 }}
          >
            {props.text}
          </motion.p>
        </motion.a>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="6"
          style={{ paddingLeft: "3px", paddingTop: "3px" }}
        >
          <motion.path
            d="M 0 2.479 L 6.578 2.479 L 4.65 0.455 L 5.083 0 L 7.749 2.801 L 5.082 5.601 L 4.65 5.147 L 6.579 3.122 L 0 3.122 Z"
            transform="translate(0.125 0.199) rotate(-45 3.875 2.801)"
            fill={"hsl(0, 0%, 100%)"}
          ></motion.path>
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
