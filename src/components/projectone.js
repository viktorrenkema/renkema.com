import React from "react"
import { motion } from "framer-motion"
import accordion from "../../src/images/accordion.gif"

export default function ProjectOne(props) {
  const cardHover = {
    inactive: {
      width: "300px",
      transition: { duration: 0.6 },
    },
    active: {
      width: "2500px",
      transition: { duration: 0.4 },
    },
  }

  const overlay = {
    hidden: {
      opacity: 0,
      // x: -100,
    },
    visible: {
      opacity: 1,
      // x: 0,
      transition: { delay: 0.4 },
    },
  }

  const [hoveredImage, setHoveredImage] = React.useState(false) // default should be set to false

  const onHoverStartImage = () => {
    setHoveredImage(true)
  }

  const onHoverEndImage = () => {
    setHoveredImage(false)
  }

  return (
    <motion.div
      variants={cardHover}
      style={{ overflow: "hidden" }}
      className="card_projectone"
      onHoverStart={onHoverStartImage}
      onHoverEnd={onHoverEndImage}
      initial="inactive"
      animate={hoveredImage ? "active" : "inactive"}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="wrap_imagecardone">
        <a
          href="https://www.framer.com/learn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            className="imageplaceholder"
            src={accordion}
            width="100%"
            height="100%"
          ></motion.img>
        </a>
      </motion.div>

      <motion.div
        className="overlay"
        variants={overlay}
        animate={hoveredImage ? "visible" : "hidden"}
        initial="hidden"
        transition={{ duration: 0.1 }}
      >
        <p className="copy_projecttitle">Creating an accordion design</p>
        <p class="copy_projectlabel">FRAMER LEARN TUTORIAL</p>
        <p className="projectdescriptions">
          While learning React, I enjoyed documenting projects that I worked on.
          One of these turned into a 3-part tutorial, which guides users through
          creating a single-select accordion effect within Framer. <br></br>
          <br></br>It touches upon various concepts, such as:
          <br></br>
          <ul>
            <li>applying React Hooks to toggle states</li>
            <li>creating custom animations</li>
            <li>mapping over an array with JSON data</li>
          </ul>
        </p>
      </motion.div>
    </motion.div>
  )
}
