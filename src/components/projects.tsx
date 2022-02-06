// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import useIsInViewport from "use-is-in-viewport"

// 🌱 Components
import Project from "./project"
import Button from "./button"
import { ArrowLink } from "./resources/icons"

// 🧰 Utils

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
  width: 90%;
  align-self: center;
  padding: 4em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 767px) {
    padding: 4em 0em;
  }
`

export function ProjectsList(props) {
  const { dark } = props
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 10 })

  return (
    <>
      <Button
        text={""}
        url={"/"}
        dark={true}
        external={false}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: "99",
          width: "40px",
          height: "40px",
          borderRadius: "8px",
          padding: "8px",
          border: "1px solid white",
        }}
        iconLeft
      ></Button>
      {/* <ArrowLink
        dark
        style={{ transform: "rotate(225deg)" }}
        // animate={
        //   hovered
        //     ? { transform: "rotate(45deg)" }
        //     : { transform: "rotate(0deg)" }
        // }
      ></ArrowLink> */}
      <Section>
        <Project
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
          ref={targetRef}
          variants={container}
          projectlabel={"web app"}
          projecttitle={"Loaders.io"}
          projectinfo={
            "Loaders.io is a tool that generates production-ready code for a React loader component, only requiring the user to customize the style and animation properties using an interface instead of code."
          }
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
          project="ladimora"
          id={"ladimora"}
          url={"https://www.ladimora.org/"}
          // githuburl={"https://www.github.com/viktorrenkema"}
        ></Project>
        <Project
          project="pulse"
          assetBackgroundColor={"#fbf8f8"}
          projectlabel={"PWA"}
          projecttitle={"Pulse"}
          projectinfo={
            "A workout tracker for personal use that offers exactly the features that I needed and nothing more."
          }
          // url={""}
          // githuburl={"https://www.github.com/viktorrenkema"}
        ></Project>
      </Section>
    </>
  )
}
