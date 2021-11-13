// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import useIsInViewport from "use-is-in-viewport"

// 🌱 Components
import Project from "../components/project"

// 🧰 Utils
import ladimoradesktop from "../../src/images/ladimoradesktop.png"
import ladimoramobile from "../../src/images/ladimoramobile.png"

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
  /* background: #181818; */
  width: 80%;
  align-self: center;
  padding: 4em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* perspective: 1000px;
  perspective-origin: 50% 50%; */
  @media (max-width: 767px) {
    padding: 4em 0em;
  }
`

const ProjectsLabel = styled(motion.div)`
  color: hsl(0deg 0% 10%);
  font-size: 36px;
  letter-spacing: 0px;
  line-height: 1;
  /* text-transform: uppercase; */
  border-radius: 8px;
  /* background: #eb70852b; */
  padding-bottom: 6rem;
  font-family: "GT-Walsheim", sans-serif;
  align-self: center;
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: block;
  letter-spacing: 0.05rem;
`

export function Projects(props) {
  const { dark } = props
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 10 })

  return (
    <Section>
      {/* <ProjectsLabel>Projects</ProjectsLabel> */}
      <Project
        initial="hidden"
        animate={isInViewport ? "visible" : "hidden"}
        ref={targetRef}
        variants={container}
        projectlabel={"web app"}
        projecttitle={"Loaders.io"}
        projectinfo={
          "Loaders.io is a tool that generates production-ready code for a React loader component, only requiring the user to customize style and animation using an interface instead of code."
        }
        linktext={"Visit loaders.io"}
        url={"https://loadergenerator.vercel.app/"}
        githuburl={"https://www.github.com/viktorrenkema"}
        project="loaders"
        id={"loaders"}
      ></Project>

      <Project
        assetBackgroundColor={"#fbf8f8"}
        projectlabel={"website"}
        projecttitle={"La Dimora"}
        projectinfo={
          "La Dimora is a beautiful house located at lake Como in Lombardia, Italy. The website was designed to provide information about renting the home and about the area."
        }
        asset={ladimoradesktop}
        linktext={"Visit ladimora.org"}
        project="ladimora"
        id={"ladimora"}
        url={"https://ladimora.org/"}
        githuburl={"https://www.github.com/viktorrenkema"}
      ></Project>
      <Project
        project="pulse"
        assetBackgroundColor={"#fbf8f8"}
        projectlabel={"Progressive Web App"}
        projecttitle={"Pulse"}
        projectinfo={
          "The sole purpose of this project was to build a workout tracker that offers exactly the features that I needed and nothing more. "
        }
        url={"https://esteem-app.vercel.app/"}
        githuburl={"https://www.github.com/viktorrenkema"}
      ></Project>
    </Section>
  )
}
