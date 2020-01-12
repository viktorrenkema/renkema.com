import React from "react"
import { motion } from "framer-motion"
import accordion from "../../src/images/proj_accordion_noshadow.gif"

export default function ProjectOne(props) {
  const overlay = {
    hidden: {
      opacity: 0,
      width: "0px",
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      width: "600px",
      transition: { duration: 0.6 },
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
      onHoverStart={onHoverStartImage}
      onHoverEnd={onHoverEndImage}
      className="card_projectone"
    >
      <motion.div
        className="overlay"
        variants={overlay}
        animate={hoveredImage ? "visible" : "hidden"}
        initial="hidden"
        transition={{ duration: 1 }}
      >
        <p className="copy_projecttitle">Creating an accordion design</p>
        <p class="copy_projectlabel">FRAMER LEARN TUTORIAL</p>
        <div>
          <p className="projectdescriptions">
            While learning React, I enjoyed documenting projects that I worked
            on. One of these turned into a 3-part tutorial, which guides users
            through creating a single-select accordion effect within Framer.{" "}
            <br></br>
            <br></br>
          </p>
          <ul className="projectdescriptions">
            <p style={{ paddingBottom: "1rem" }}>
              The tutorial touches upon various concepts within React,
              Javascript and Framer, such as:
            </p>
            <li>applying React Hooks to toggle states</li>
            <li>creating custom animations</li>
            <li>mapping over an array with JSON data</li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        className="wrap_imagecardone"
        style={{ width: hoveredImage ? "400px" : undefined }}
      >
        <a
          href="https://learn-accordion-design-part-1--framer-next.netlify.com/learn/guide/accordion-design-part-1/"
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
    </motion.div>
  )
}
