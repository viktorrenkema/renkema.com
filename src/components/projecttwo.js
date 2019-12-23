import React from "react"
import { motion } from "framer-motion"
import useIsInViewport from "use-is-in-viewport"

export default function ProjectTwo(props) {
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
      top: "0%",
    },
    hovered: {
      top: "70%",
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
      className="card_projecttwo"
      onHoverStart={onHoverStartImage}
      onHoverEnd={onHoverEndImage}
      initial="inactive"
      animate={hoveredImage ? "active" : "inactive"}
    >
      <motion.div style={{ backgroundColor: "cyan" }}></motion.div>

      <motion.div
        className="overlay"
        variants={overlay}
        animate={hoveredImage ? "hovered" : "default"}
        initial="default"
        transition={{ duration: 0.5 }}
      >
        <p className="copy_projecttitle">Project number two</p>
        <p class="copy_projectlabel">SECOND PROJET</p>
        <p className="projectdescriptions">
          Bladiebla hier komt een hoop tekst terecht.
        </p>
      </motion.div>
    </motion.div>
  )
}
