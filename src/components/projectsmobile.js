import React from "react"
import { motion } from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
import { Sm_ProjectOne } from "../components/projectone"
import { Sm_ProjectTwo } from "../components/projecttwo"

export default function ProjectsMobile(props) {
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
    hidden: { y: -20, opacity: 0, transition: { duration: 0.5 } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const card = {
    hidden: { y: 20, opacity: 0, transition: { duration: 0.5 } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const [isInViewport, targetRef] = useIsInViewport({ threshold: 10 })
  const [FirstCardInViewport, targetRef1] = useIsInViewport({ threshold: 20 })
  const [SecondCardInViewport, targetRef2] = useIsInViewport({ threshold: 20 })
  // const [ThirdCardInViewport, targetRef3] = useIsInViewport({ threshold: 40 })
  // const [FourthCardInViewport, targetRef4] = useIsInViewport({ threshold: 40 })

  return (
    <motion.section
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
      className="projects projects_mobile"
      ref={targetRef}
      variants={container}
    >
      <motion.h1
        className="subject proj_subject header"
        variants={header}
        initial="hidden"
        animate={isInViewport ? "visible" : "hidden"}
      >
        Projects
      </motion.h1>
      <motion.div
        className="section_project"
        animate={FirstCardInViewport ? "visible" : "hidden"}
        variants={card}
        initial="hidden"
        ref={targetRef1}
      >
        <Sm_ProjectOne variants={item}></Sm_ProjectOne>
      </motion.div>

      <motion.div
        className="section_project"
        ref={targetRef2}
        animate={SecondCardInViewport ? "visible" : "hidden"}
        variants={card}
        initial="hidden"
      >
        <Sm_ProjectTwo variants={item}></Sm_ProjectTwo>
      </motion.div>
      {/* 
      <motion.div
        className="section_project"
        ref={targetRef3}
        animate={ThirdCardInViewport ? "visible" : "hidden"}
        variants={card}
        initial="hidden"
      >
        <ProjectThree variants={item}></ProjectThree>
      </motion.div>

      <motion.div
        className="section_project"
        ref={targetRef4}
        animate={FourthCardInViewport ? "visible" : "hidden"}
        variants={card}
        initial="hidden"
      >
        <ProjectFour variants={item}></ProjectFour>
      </motion.div> */}
    </motion.section>
  )
}
