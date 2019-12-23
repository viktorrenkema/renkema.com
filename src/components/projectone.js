import React from "react"
import { motion } from "framer-motion"
import accordion from "../../src/images/accordion.gif"

export default function ProjectOne(props) {
  const cardHover = {
    inactive: {
      width: "300px",
    },
    active: {
      width: "600px",
    },
  }

  const image = {
    default: {
      right: "0%",
    },
    hovered: {
      right: "70%",
    },
  }

  const overlay = {
    default: {
      opacity: 0,
    },
    hovered: {
      opacity: 1,
    },
  }
  const stagger = {
    visible: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      transition: {
        when: "afterChildren",
      },
    },
  }
  const [hoveredImage, setHoveredImage] = React.useState(false) // default should be set to false

  const onHoverStartImage = () => {
    console.log("onHoverStartImage")
    setHoveredImage(true)
  }

  const onHoverEndImage = () => {
    console.log("onHoverEndImage")
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
    >
      <motion.div className="wrap_imagecardone">
        <a
          href="https://www.framer.com/learn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            className="imageplaceholder"
            variants={image}
            initial="default"
            animate={hoveredImage ? "hovered" : "default"}
            transition={{ duration: 0.8 }}
            src={accordion}
            width="100%"
            height="100%"
          ></motion.img>
        </a>
      </motion.div>

      <motion.div
        className="overlay"
        variants={overlay}
        animate={hoveredImage ? "hovered" : "default"}
        initial="default"
        transition={{ duration: 0.5 }}
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
