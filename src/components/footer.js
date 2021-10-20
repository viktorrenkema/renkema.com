// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

// 🌱 Components
// 🧰 Utils
// 🌀 Variants

// 💅🏽 Styled Components
const FooterContainer = styled.div`
  font-size: 14px;
  background: #1e1e1e;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  height: 70px;
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

export default function Footer() {
  const d = new Date()
  const n = d.getFullYear()

  return (
    <FooterContainer>
      <Span>
        Made with{" "}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#949494" }}
        >
          <Paragraph
            whileHover={{
              textDecoration: "underline",
              textDecorationColor: "#dfa2ac",
              color: "#ec7085",
            }}
            style={{ display: "inline", color: "#949494" }}
          >
            GatsbyJS
          </Paragraph>
        </a>
        ,{" "}
        <a
          href="https://www.vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#949494" }}
        >
          <Paragraph
            whileHover={{
              textDecoration: "underline",
              textDecorationColor: "#dfa2ac",
              color: "#ec7085",
            }}
            style={{ display: "inline", color: "#949494" }}
          >
            Vercel
          </Paragraph>
        </a>
        , and&nbsp;
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#949494" }}
        >
          <Paragraph
            whileHover={{
              textDecoration: "underline",
              textDecorationColor: "#dfa2ac",
              color: "#ec7085",
            }}
            style={{ display: "inline", color: "#949494" }}
          >
            Framer Motion
          </Paragraph>
        </a>
      </Span>
      {/* <Span>© {n} - Viktor Renkema</Span> */}
    </FooterContainer>
  )
}
