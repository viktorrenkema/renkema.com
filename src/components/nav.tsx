// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

// 🌱 Components
import LinkNav from "./linkNav"

// 🧰 Utils

// 🌀 Variants
const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.1,
      duration: 0.3,
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.3,
      ease: "easeIn",
    },
    transitionEnd: {
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    },
  },
}

// 💅🏽 Styled Components
const Container = styled(motion.div)`
  font-size: 14px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  height: 70px;
  background-color: ${props =>
    props.dark ? "rgba(29, 32, 53, 0)" : `rgba(255, 255, 255, 0);`};
  z-index: 10;
`

const FlexLinkIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Indicator = styled.div`
  width: 20px;
  height: 1px;
  background: ${props => (props.dark ? "white" : "black")};
`

export default function Nav(props) {
  const { dark, current } = props
  return (
    <Container
      dark={dark}
      animate="visible"
      initial="hidden"
      variants={containerVariants}
    >
      <FlexLinkIndicator>
        <LinkNav nav dark={dark} text={"home"}></LinkNav>
        {current === "home" && <Indicator></Indicator>}
      </FlexLinkIndicator>
      <FlexLinkIndicator>
        <LinkNav nav dark={dark} text={"me"}></LinkNav>
        {current === "me" && <Indicator></Indicator>}
      </FlexLinkIndicator>
      <FlexLinkIndicator>
        <LinkNav nav dark={dark} text={"projects"}></LinkNav>
        {current === "projects" && <Indicator dark={dark}></Indicator>}
      </FlexLinkIndicator>
    </Container>
  )
}
