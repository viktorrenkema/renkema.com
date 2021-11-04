// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

// 🌱 Components
import SocialLink from "./sociallink"

// 🧰 Utils
// 🌀 Variants

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
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  z-index: 10;
`

const Segment = styled.div`
  display: flex;
  flex-direction: row;
`
const Span = styled(motion.span)`
  color: #7a7a7a;
`
const Paragraph = styled(motion.p)`
  font-size: 12px;
  line-height: 170%;
  letter-spacing: -0.02em;
  color: #626265;
  margin: 8px 0 8px;
`

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: "easeIn",
    },
  },
}

export default function Nav(props) {
  const { dark } = props
  return (
    <Container
      dark={dark}
      animate="visible"
      initial="hidden"
      variants={containerVariants}
    >
      <SocialLink nav dark={dark} text={"home"}></SocialLink>
      {/* <Segment> */}
      <SocialLink nav dark={dark} text={"me"}></SocialLink>
      <SocialLink nav dark={dark} text={"projects"}></SocialLink>
      {/* </Segment> */}
    </Container>
  )
}
