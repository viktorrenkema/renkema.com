import React from "react"
import { motion } from "framer-motion"

export default function LearnmoreBlob(props) {
  const [hovered, setHovered] = React.useState(false)

  const onHoverStart = () => {
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }

  const learnmore = {
    hidden: { opacity: 0, transition: { duration: 1.3 } },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  const blob = {
    normal: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 0.3,
      },
    },
    hovered: {
      transform: "scale(0)",
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 0.3,
      },
    },
  }
  const text = {
    colored: {
      color: "#ff285e",
    },
    white: {
      color: "white",
    },
  }

  const blobpath = {
    first: {
      d: props.d1,
      transition: {
        duration: 3,
        yoyo: Infinity,
        ease: "easeOut",
      },
    },
    second: {
      d: props.d2,
      transition: {
        duration: 3,
        yoyo: "easeOut",
        flip: Infinity,
      },
    },
  }

  const blobwrapper = {
    // height: "200px",
    position: "relative",
    paddingTop: "1rem",
  }
  return (
    <motion.div
      style={blobwrapper}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onTapStart={onHoverStart}
      onTapCancel={onHoverEnd}
    >
      <motion.svg
        variants={blob}
        style={{ top: "-39px", left: "-40px" }}
        className={"intro-blob"}
        initial="normal"
        // animate={hovered ? "visible" : "hidden"}
        animate={hovered ? "hovered" : "normal"}
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
      >
        <motion.path
          variants={blobpath}
          initial={"first"}
          animate={"second"}
          fill="#ff285e"
        ></motion.path>
      </motion.svg>
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
            animate={hovered ? "colored" : "white"}
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
            fill={hovered ? "#ff285e" : "none"}
            strokeWidth="0.4"
            stroke="#ff285e"
            strokeMiterlimit="10"
            // fill={hovered ? "#ff285e" : "hsl(0, 0%, 100%)"}
          ></motion.path>
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
