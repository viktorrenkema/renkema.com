import React from "react"
import { motion } from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
import { Project1 } from "./project-1"
import { Project2 } from "./project-2"
import Project3 from "./project-3"
import Project4 from "./project-4"
import { Sm_ProjectOne } from "./project-1"
import { Sm_ProjectTwo } from "./project-2"
// import Chevron from "./chevron"
import { useGlobal } from "reactn"

import ProjectsBlob from "../components/projects-blob"

export function Projects() {
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
  const [FirstCardInViewport, targetRef1] = useIsInViewport({ threshold: 40 })
  // const [SecondCardInViewport, targetRef2] = useIsInViewport({ threshold: 40 })
  // const [ThirdCardInViewport, targetRef3] = useIsInViewport({ threshold: 40 })
  // const [FourthCardInViewport, targetRef4] = useIsInViewport({ threshold: 40 })

  return (
    <motion.section
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
      className="projects projects_desktop"
      ref={targetRef}
      variants={container}
    >
      <motion.h1
        className="h1-projects header"
        variants={header}
        initial="hidden"
        animate={isInViewport ? "visible" : "hidden"}
      >
        Projects
      </motion.h1>
      <p className="copy-projects copy">
        Various passion projects, educational articles, and any other content
        related to web development.
      </p>
      {/* <div className="separator-sm"></div> */}
      <motion.div
        className="section_project"
        id="section-project-1"
        ref={targetRef1}
        animate={FirstCardInViewport ? "visible" : "hidden"}
        variants={card}
        initial="hidden"
      >
        {/* <Project1 variants={item}></Project1> */}
        <ProjectsBlob></ProjectsBlob>
      </motion.div>
      {/* <div className="separator"></div>
      <motion.div
        className="section_project"
        ref={targetRef2}
        animate={SecondCardInViewport ? "visible" : "hidden"}
        variants={card}
        initial="hidden"
      >
        <Project2 variants={item}></Project2>
      </motion.div>
      <div className="separator"></div>
      <motion.div
        className="section_project"
        ref={targetRef3}
        animate={ThirdCardInViewport ? "visible" : "hidden"}
        variants={card}
        initial="hidden"
      >
        <Project3 variants={item}></Project3>
      </motion.div>
      <div className="separator"></div>
      <motion.div
        className="section_project"
        ref={targetRef4}
        animate={FourthCardInViewport ? "visible" : "hidden"}
        variants={card}
        initial="hidden"
      >
        <Project4 variants={item}></Project4>
      </motion.div> */}
    </motion.section>
  )
}

export function ProjectsMobile(props) {
  const [Project, setOpenProject] = React.useState(false)

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
  // const [SecondCardInViewport, targetRef2] = useIsInViewport({ threshold: 20 })

  const [global, setGlobalState] = useGlobal()

  const onClick1 = () => {
    setGlobalState({
      toggle: global.toggle === "toggle1" ? "none" : "toggle1",
    }),
      console.log("Tapped 1, current state is " + global.toggle)
  }

  return (
    <motion.section
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
      className="projects projects_mobile"
      ref={targetRef}
      variants={container}
    >
      {" "}
      <motion.div
        onClick={onClick1}
        style={{
          display: "none",
          width: global.toggle === "toggle1" ? "0px" : "1px",
        }}
      ></motion.div>
      <motion.h1
        className="subject proj_subject header"
        variants={header}
        initial="hidden"
        animate={isInViewport ? "visible" : "hidden"}
      >
        Projects
      </motion.h1>
      <div className="projects--wrapper">
        {" "}
        <p className="copy-projects copy">
          Various passion projects, educational articles, and any other content
          related to web development.
        </p>
      </div>
      {/* <div className="separator-sm"></div> */}
      <motion.div
        className="section_project"
        id="section-project-1"
        animate={FirstCardInViewport ? "visible" : "hidden"}
        variants={card}
        initial="hidden"
        ref={targetRef1}
      >
        <Sm_ProjectOne
          onClick={() => setOpenProject(true)}
          variants={item}
        ></Sm_ProjectOne>
      </motion.div>
      {/* <div className="separator"></div> */}
      {/* <motion.div
        className="section_project"
        ref={targetRef2}
        animate={SecondCardInViewport ? "visible" : "hidden"}
        variants={card}
        initial="hidden"
      >
        <Sm_ProjectTwo variants={item}></Sm_ProjectTwo>
      </motion.div> */}
      {/* <div className="separator"></div> */}
    </motion.section>
  )
}
