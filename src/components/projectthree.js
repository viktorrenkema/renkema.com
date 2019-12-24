import React from "react"
import { motion } from "framer-motion"
import placeholderthree from "../../src/images/Placeholderthree.png"

export default function ProjectThree(props) {
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
    default: {
      opacity: 0,
    },
    hovered: {
      opacity: 1,
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
      className="card_projectthree"
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
            src={placeholderthree}
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
        <p className="copy_projecttitle">Project number two</p>
        <p class="copy_projectlabel">SECOND PROJECT</p>
        <p className="projectdescriptions">
          Bladiebla hier komt een hoop tekst terecht.
        </p>
      </motion.div>
    </motion.div>
  )
}
