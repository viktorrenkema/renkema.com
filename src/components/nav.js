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
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  height: 70px;
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
    y: -50,
    transition: {
      delay: 0.4,
      duration: 0.3,
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.3,
      ease: "easeIn",
    },
  },
}

export default function Nav() {
  return (
    <Container animate="visible" initial="hidden" variants={containerVariants}>
      <SocialLink nav text={"home"}></SocialLink>
      <Segment>
        <SocialLink nav text={"me"}></SocialLink>
        <SocialLink nav text={"projects"}></SocialLink>
      </Segment>
    </Container>
  )
}
