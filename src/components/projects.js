import React from "react"
import { motion } from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
import { useGlobal } from "reactn"
import accordion from "../../src/images/proj_accordion.gif"
import ladimora from "../../src/images/ladimora.png"
import ladimorascroll from "../../src/images/ladimorascroll.png"
import ladimorascroll2 from "../../src/images/ladimorascroll2.png"
import styled from "styled-components"

import Project from "../components/project"

const Separator = styled(motion.div)`
  background: white;
  height: 1px;
  margin: 4rem;
  opacity: 0.1;
`

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
        projectlabel={"web app"}
        projecttitle={"Loaders.io"}
        projectinfo={
          "Loaders.io is a tool that generates production-ready code for a React loader component, only requiring the user to customize style and animation using a UI instead of code."
        }
        linktext={"Visit loaders.io"}
        url={"https://loadergenerator.vercel.app/"}
        loaders
      ></Project>
      <Separator />
      <Project
        assetBackgroundColor={"#fbf8f8"}
        // assetBackgroundColor={"#E3EAED"}
        projectlabel={"website"}
        projecttitle={"La Dimora"}
        projectinfo={
          "La Dimora is a beautiful house located at lake Como in Lombardia, Italy. The website was designed to provide information about renting the home and about the area."
        }
        asset={ladimorascroll2}
        linktext={"Visit ladimora.org"}
        ladimora
        url={"https://ladimora.org/"}
      ></Project>
      <Separator />
      <Project
        assetBackgroundColor={"#fbf8f8"}
        projectlabel={"Progressive Web App"}
        projecttitle={"Workout Tracker"}
        projectinfo={
          "The sole purpose of this project was to build a workout tracker that offers exactly the features that I needed and nothing more. "
        }
        url={"https://esteem-app.vercel.app/"}
      ></Project>
      {/* <Project
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
      ></Project> */}
    </motion.section>
  )
}

// #f94e75
