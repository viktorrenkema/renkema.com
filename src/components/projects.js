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

  const [isInViewport, targetRef] = useIsInViewport({ threshold: 40 })

  return (
    <motion.section
      className="projects"
      variants={container}
      initial="hidden"
      ref={targetRef}
      animate={isInViewport ? "visible" : "hidden"}
    >
      <motion.div variants={item}>
        <ProjectOne></ProjectOne>
      </motion.div>
      <motion.div variants={item}>
        <ProjectTwo></ProjectTwo>
      </motion.div>
      <motion.div variants={item}>
        <ProjectThree></ProjectThree>
      </motion.div>
      <motion.div variants={item}>
        <ProjectFour></ProjectFour>
      </motion.div>
    </motion.section>
  )
}
