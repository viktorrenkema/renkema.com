import React from "react"
import { motion } from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
import { Sm_ProjectOne } from "./project-1"
import { useGlobal } from "reactn"
import accordion from "../../src/images/proj_accordion.gif"
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
        Various passion projects, educational articles, and other things.
      </p>
      <motion.div
        className="section_project"
        id="section-project-1"
        ref={targetRef1}
        animate={FirstCardInViewport ? "visible" : "hidden"}
        variants={card}
        initial="hidden"
      >
        <ProjectsBlob
          h1={"Creating an accordion design"}
          label={"FRAMER LEARN TUTORIAL"}
          mainbody={
            "While learning React, I documented some of the projects I worked on. One of these turned into a 3-part tutorial, guiding users through creating a single-select accordion effect within Framer."
          }
          listintro={"Some of the topics addressed include:"}
          list1={"applying React Hooks to toggle states"}
          list2={"creating custom animations"}
          list3={"mapping over an array with JSON data"}
          link={"https://www.framer.com/learn/guide/accordion-design-part-1/"}
          blobfill={"#ff2b64"}
          linktext={"Read the tutorial"}
          assetfill={accordion}
        ></ProjectsBlob>
        <ProjectsBlob
          h1={"La Dimora"}
          label={"WEBSITE"}
          mainbody={
            "For La Dimora, a restored holiday farmhouse in Italy at Lake Como, I created a website to present the home to potential renters. It presents various carousels with an impression of the home, information about the area, and a calendar to show live availability synced with Airbnb."
          }
          listintro={"Some of the topics addressed include:"}
          list1={"applying React Hooks to toggle states"}
          list2={"creating custom animations"}
          list3={"mapping over an array with JSON data"}
          link={"https://www.ladimora.org"}
          blobfill={"#FC5982"}
          linktext={"Visit the site"}
          // assetfill={accordion}
        ></ProjectsBlob>
      </motion.div>
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
          Various passion projects, educational articles, and other web content.
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
    </motion.section>
  )
}
