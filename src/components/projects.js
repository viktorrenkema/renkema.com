// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import useIsInViewport from "use-is-in-viewport"

// 🌱 Components
import Project from "../components/project"

// 🧰 Utils
import ladimorascroll from "../../src/images/ladimorascroll.png"

// 🌀 Variants
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

// 💅🏽 Styled Components
const Section = styled(motion.div)`
  background: #181818;
  align-self: center;
  padding: 4em 0em;
  justify-content: center;
  @media (max-width: 767px) {
    padding: 4em 0em;
  }
`
const Separator = styled(motion.div)`
  background: white;
  height: 1px;
  margin: 12rem 4rem 4rem 4rem;
  opacity: 0.1;
`

export function Projects() {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 10 })

  return (
    <Section
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
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
        projectlabel={"website"}
        projecttitle={"La Dimora"}
        projectinfo={
          "La Dimora is a beautiful house located at lake Como in Lombardia, Italy. The website was designed to provide information about renting the home and about the area."
        }
        asset={ladimorascroll}
        linktext={"Visit ladimora.org"}
        ladimora
        url={"https://ladimora.org/"}
      ></Project>
      <Separator />
      {/* <Project
        assetBackgroundColor={"#fbf8f8"}
        projectlabel={"Progressive Web App"}
        projecttitle={"Workout Tracker"}
        projectinfo={
          "The sole purpose of this project was to build a workout tracker that offers exactly the features that I needed and nothing more. "
        }
        url={"https://esteem-app.vercel.app/"}
      ></Project> */}
    </Section>
  )
}
