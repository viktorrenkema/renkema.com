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
    position: "relative",
    paddingTop: "1rem",
  }
  return (
    <motion.a
      style={blobwrapper}
      className="learnmore copy"
      href={props.destination}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div style={{ display: "flex", flexDirection: "row" }}>
        <motion.p
          variants={text}
          initial="white"
          className="learnmore copy"
          style={{ zIndex: 1 }}
        >
          {props.text}
        </motion.p>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          style={{ paddingLeft: "3px", paddingTop: "3px" }}
        >
          <motion.path
            d="M 1.032 6.512 L 5.684 1.861 L 2.889 1.793 L 2.874 1.165 L 6.739 1.261 L 6.833 5.126 L 6.207 5.111 L 6.139 2.315 L 1.487 6.967 Z"
            // transform="translate(0.125 0.199) rotate(-45 3.875 2.801)"
            fill={"hsl(0, 0%, 100%)"}
            strokeWidth="0.4"
            stroke="#FFFFFF"
            strokeMiterlimit="10"
          ></motion.path>
        </motion.svg>
      </motion.div>
    </motion.a>
  )
}
