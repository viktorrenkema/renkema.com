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

  // const [isInViewport, targetRef] = useIsInViewport({ threshold: 40 })

  return (
    <motion.section
      className="projects"
      variants={container}
      initial="visible"
      // ref={targetRef}
      // animate={isInViewport ? "visible" : "hidden"}
    >
      <motion.section className="section_project">
        <ProjectOne variants={item}></ProjectOne>
        <motion.div
          style={{ width: "400px", height: "400px", color: "transparant" }}
        ></motion.div>
      </motion.section>
      <motion.section className="section_project">
        <motion.div
          style={{ width: "400px", height: "400px", color: "transparant" }}
        ></motion.div>
        <ProjectTwo variants={item}></ProjectTwo>
        {/* <ProjectThree variants={item}></ProjectThree>
      <ProjectFour variants={item}></ProjectFour> */}
      </motion.section>
    </motion.section>
  )
}
