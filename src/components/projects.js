import React from "react"
import { motion } from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
import ProjectOne from "../components/projectone"
import ProjectTwo from "../components/projecttwo"
import ProjectThree from "../components/projectthree"
import ProjectFour from "../components/projectfour"

export default function Projects(props) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const header = {
    hidden: { y: -20, opacity: 0, transition: { duration: 1.3 } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const [isInViewport, targetRef] = useIsInViewport({ threshold: 10 })

  return (
    <motion.section
      className="projects"
      variants={container}
      initial="visible"
      ref={targetRef}
      // animate={isInViewport ? "visible" : "hidden"}
    >
      <motion.h1
        className="h1-projects header"
        variants={header}
        initial="hidden"
        animate={isInViewport ? "visible" : "hidden"}
      >
        Projects
      </motion.h1>
      <motion.div className="section_project">
        <ProjectOne variants={item}></ProjectOne>
      </motion.div>

      <motion.div className="section_project">
        <ProjectTwo variants={item}></ProjectTwo>
      </motion.div>

      <motion.div className="section_project">
        <ProjectThree variants={item}></ProjectThree>
      </motion.div>

      <motion.div className="section_project">
        <ProjectFour variants={item}></ProjectFour>
      </motion.div>
    </motion.section>
  )
}

// <motion.div
// style={{ width: "400px", height: "400px", color: "transparant" }}
// ></motion.div>
