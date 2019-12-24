import React from "react"
import { motion } from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
import ProjectOne from "../components/projectone"
import ProjectTwo from "../components/projecttwo"
import ProjectThree from "../components/projectthree"
import ProjectFour from "../components/projectfour"

export default function Projects(props) {
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

  return (
    <motion.section
      animate={isInViewport ? "visible" : "hidden"}
      className="projects"
      variants={stagger}
      ref={targetRef}
    >
      <ProjectOne></ProjectOne>
      <ProjectTwo></ProjectTwo>
      <ProjectThree></ProjectThree>
      <ProjectFour></ProjectFour>
    </motion.section>
  )
}
