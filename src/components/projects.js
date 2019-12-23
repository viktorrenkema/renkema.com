import React from "react"
import { motion } from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
import accordion from "../../src/images/accordion.gif"
import ProjectTwo from "../components/projecttwo"
import ProjectOne from "../components/projectone"

export default function Projects(props) {
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
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 30 })
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
    <motion.section className="projects" variants={stagger} ref={targetRef}>
      <ProjectOne></ProjectOne>
      <ProjectTwo></ProjectTwo>
    </motion.section>
  )
}
