import React from "react"
import { motion } from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
import { useGlobal } from "reactn"
import accordion from "../../src/images/proj_accordion.gif"
import ladimora from "../../src/images/ladimora.png"
import ladimorascroll from "../../src/images/ladimorascroll.png"

import Project from "../components/Project"

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

  // const [selectedBlob, setSelectedBlob] = React.useState(undefined)

  const [isInViewport, targetRef] = useIsInViewport({ threshold: 10 })
  // const [FirstCardInViewport, targetRef1] = useIsInViewport({ threshold: 40 })

  return (
    <motion.section
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
      className="projects projects_desktop"
      ref={targetRef}
      variants={container}
    >
      <Project
        assetBackgroundColor={"#fbf8f8"}
        // assetBackgroundColor={"#ebe0e5"}
        projectlabel={"web app"}
        projecttitle={"Loaders.io"}
        projectinfo={
          "Loaders is a tool that generates production-ready code for a loader, allowing the user to fully customize the loader’s style and animation."
        }
        linktext={"Visit loaders.io"}
        url={"http://loaders.io/"}
        loaders={true}
      ></Project>
      <Project
        assetBackgroundColor={"#fbf8f8"}
        // assetBackgroundColor={"#E3EAED"}
        projectlabel={"site"}
        projecttitle={"La Dimora"}
        projectinfo={
          "A website created to provide information about casa La Dimora, a holiday home in northern Italy at lake Como."
        }
        asset={ladimorascroll}
        linktext={"Visit ladimora.org"}
        ladimora={true}
        url={"https://ladimora.org/"}
        // assetid={"ladimorawrapper"}
      ></Project>
      <Project
        assetBackgroundColor={"#fbf8f8"}
        // assetBackgroundColor={"#EDE3E6"}
        projectlabel={"TUTORIAL"}
        projecttitle={"Creating an Accordion Design"}
        projectinfo={
          "A 3-part Framer tutorial to guide users through creating a React component with a single-select accordion effect."
        }
        accordion={true}
        linktext={"Read the tutorial"}
        url={"https://www.framer.com/learn/guide/accordion-design-part-1"}
      ></Project>
    </motion.section>
  )
}

// #f94e75
