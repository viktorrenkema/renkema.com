import React from "react"
import { motion } from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
import { useGlobal } from "reactn"
import accordion from "../../src/images/proj_accordion.gif"
import ladimora from "../../src/images/proj_ladimora.gif"
import ProjectsBlob from "../components/projects-blob"

export function Projects(props) {
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

  const [selectedBlob, setSelectedBlob] = React.useState(undefined)

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
          selectedBlob={selectedBlob}
          setSelectedBlob={setSelectedBlob}
          identifier={"accordion"}
          key={"accordion"}
          h1={"Creating an accordion design"}
          label={"FRAMER TUTORIAL"}
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
          scaleasset={"0.6"}
          blobpath1={
            "M 269.349 65.192 C 298.372 77.85 334.65 81.836 361.566 100.824 C 388.483 119.578 406.037 153.1 395.972 180.762 C 385.908 208.659 348.459 230.46 329.969 263.749 C 311.245 297.271 311.947 341.812 292.755 352.126 C 273.796 362.441 235.412 338.061 200.304 332.435 C 165.196 326.809 133.364 339.702 100.831 337.123 C 68.531 334.779 35.53 316.963 17.04 289.301 C -1.217 261.639 -5.196 224.131 7.677 194.125 C 20.316 163.884 49.807 141.145 64.787 107.388 C 79.532 73.631 80 28.856 99.426 10.805 C 119.087 -7.48 158.174 1.194 188.367 15.962 C 218.794 30.966 240.327 52.298 269.349 65.192 Z"
          }
          blobpath2={
            "M 269.349 65.192 C 298.372 77.85 334.65 81.836 361.566 100.824 C 388.483 119.578 406.037 153.1 395.972 180.762 C 385.908 208.659 348.459 230.46 329.969 263.749 C 311.245 297.271 311.947 341.812 292.755 352.126 C 273.796 362.441 235.412 338.061 200.304 332.435 C 165.196 326.809 133.364 339.702 100.831 337.123 C 68.531 334.779 35.53 316.963 17.04 289.301 C -1.217 261.639 -5.196 224.131 7.677 194.125 C 20.316 163.884 49.807 141.145 64.787 107.388 C 79.532 73.631 80 28.856 99.426 10.805 C 119.087 -7.48 158.174 1.194 188.367 15.962 C 218.794 30.966 240.327 52.298 269.349 65.192 Z"
          }
        ></ProjectsBlob>
        <ProjectsBlob
          selectedBlob={selectedBlob}
          setSelectedBlob={setSelectedBlob}
          identifier={"ladimora"}
          id={"ladimoraimgwrapper"}
          key={"ladimora"}
          h1={"La Dimora"}
          label={"WEBSITE"}
          mainbody={
            "For La Dimora, a restored holiday farmhouse in Italy at Lake Como, I created a website to present the home to potential renters. It presents various carousels with an impression of the home, information about the area, and a calendar to show live availability synced with Airbnb."
          }
          link={"https://www.ladimora.org"}
          blobfill={"#fa4466"}
          linktext={"Visit the site"}
          blobpath1={
            "M 323.587 70.076 C 359.851 100.548 396.902 130.233 399.004 163.069 C 401.107 195.906 368.785 231.633 344.084 270.249 C 319.646 308.865 302.828 350.108 278.652 350.371 C 254.214 350.633 222.155 310.178 183.527 293.629 C 145.161 277.079 99.963 284.172 62.912 264.995 C 25.86 245.556 -3.308 200.109 0.633 157.29 C 4.575 114.471 41.627 74.541 83.146 44.857 C 124.402 14.91 170.388 -4.53 211.118 1.512 C 251.586 7.554 287.324 39.34 323.587 70.076 Z"
          }
          blobpath2={
            "M 323.587 70.076 C 359.851 100.548 396.902 130.233 399.004 163.069 C 401.107 195.906 368.785 231.633 344.084 270.249 C 319.646 308.865 302.828 350.108 278.652 350.371 C 254.214 350.633 222.155 310.178 183.527 293.629 C 145.161 277.079 99.963 284.172 62.912 264.995 C 25.86 245.556 -3.308 200.109 0.633 157.29 C 4.575 114.471 41.627 74.541 83.146 44.857 C 124.402 14.91 170.388 -4.53 211.118 1.512 C 251.586 7.554 287.324 39.34 323.587 70.076 Z"
          }
          assetfill={ladimora}
          scaleasset={"0.5"}
        ></ProjectsBlob>
      </motion.div>
    </motion.section>
  )
}

// #f94e75
