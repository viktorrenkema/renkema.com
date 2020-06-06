import React from "react"
import { motion } from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
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
          h1={"'Creating an accordion design'"}
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
          blobpath1={
            "M 269.349 65.192 C 298.372 77.85 334.65 81.836 361.566 100.824 C 388.483 119.578 406.037 153.1 395.972 180.762 C 385.908 208.659 348.459 230.46 329.969 263.749 C 311.245 297.271 311.947 341.812 292.755 352.126 C 273.796 362.441 235.412 338.061 200.304 332.435 C 165.196 326.809 133.364 339.702 100.831 337.123 C 68.531 334.779 35.53 316.963 17.04 289.301 C -1.217 261.639 -5.196 224.131 7.677 194.125 C 20.316 163.884 49.807 141.145 64.787 107.388 C 79.532 73.631 80 28.856 99.426 10.805 C 119.087 -7.48 158.174 1.194 188.367 15.962 C 218.794 30.966 240.327 52.298 269.349 65.192 Z"
          }
          blobpath2={
            "M 269.349 65.192 C 298.372 77.85 334.65 81.836 361.566 100.824 C 388.483 119.578 406.037 153.1 395.972 180.762 C 385.908 208.659 348.459 230.46 329.969 263.749 C 311.245 297.271 311.947 341.812 292.755 352.126 C 273.796 362.441 235.412 338.061 200.304 332.435 C 165.196 326.809 133.364 339.702 100.831 337.123 C 68.531 334.779 35.53 316.963 17.04 289.301 C -1.217 261.639 -5.196 224.131 7.677 194.125 C 20.316 163.884 49.807 141.145 64.787 107.388 C 79.532 73.631 80 28.856 99.426 10.805 C 119.087 -7.48 158.174 1.194 188.367 15.962 C 218.794 30.966 240.327 52.298 269.349 65.192 Z"
          }
        ></ProjectsBlob>
        {/* <ProjectsBlob
          h1={"La Dimora"}
          label={"WEBSITE"}
          mainbody={
            "For La Dimora, a restored holiday farmhouse in Italy at Lake Como, I created a website to present the home to potential renters. It presents various carousels with an impression of the home, information about the area, and a calendar to show live availability synced with Airbnb."
          }
          link={"https://www.ladimora.org"}
          blobfill={"#FC5982"}
          linktext={"Visit the site"}
          blobpath1={
            "M 389.818 4.004 C 405.818 12.377 379.636 88.461 376.364 137.241 C 373.091 186.022 392.727 207.864 396.727 232.254 C 400.727 256.645 388.727 283.583 371.636 309.43 C 354.545 335.276 332.364 360.031 304 372.408 C 275.273 385.149 240.364 385.877 186.545 395.706 C 132.727 405.171 60 424.101 33.818 398.982 C 8 374.228 29.091 305.789 24.727 243.904 C 20 182.018 -9.818 126.684 4.727 90.281 C 19.273 53.877 78.182 36.768 128 43.684 C 177.818 50.601 217.818 81.544 266.909 67.711 C 316 53.877 374.182 -4.732 389.818 4.004 Z"
          }
          blobpath2={
            "M 389.818 4.004 C 405.818 12.377 379.636 88.461 376.364 137.241 C 373.091 186.022 392.727 207.864 396.727 232.254 C 400.727 256.645 388.727 283.583 371.636 309.43 C 354.545 335.276 332.364 360.031 304 372.408 C 275.273 385.149 240.364 385.877 186.545 395.706 C 132.727 405.171 60 424.101 33.818 398.982 C 8 374.228 29.091 305.789 24.727 243.904 C 20 182.018 -9.818 126.684 4.727 90.281 C 19.273 53.877 78.182 36.768 128 43.684 C 177.818 50.601 217.818 81.544 266.909 67.711 C 316 53.877 374.182 -4.732 389.818 4.004 Z"
          }
          // assetfill={accordion}
        ></ProjectsBlob> */}
      </motion.div>
    </motion.section>
  )
}
