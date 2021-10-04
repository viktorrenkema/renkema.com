import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

// 💅🏽 Styled Components
const FooterContainer = styled.div`
  font-size: 14px;
  background: #1e1e1e;
  display: inline-flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  height: 70px;
`

const Span = styled.span`
  color: #7a7a7a;
`

export default function Footer(props) {
  const d = new Date()
  const n = d.getFullYear()

  // const year = Date.getFullYear()

  return (
    <FooterContainer>
      <div className="container">
        <p>
          <Span>
            Made with{" "}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#949494" }}
            >
              <motion.p
                whileHover={{
                  textDecoration: "underline",
                  textDecorationColor: "#dfa2ac",
                  color: "#ec7085",
                }}
                style={{ display: "inline", color: "#949494" }}
              >
                GatsbyJS
              </motion.p>
            </a>
            ,{" "}
            <a
              href="https://www.vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#949494" }}
            >
              <motion.p
                whileHover={{
                  textDecoration: "underline",
                  textDecorationColor: "#dfa2ac",
                  color: "#ec7085",
                }}
                style={{ display: "inline", color: "#949494" }}
              >
                Vercel
              </motion.p>
            </a>
            , and&nbsp;
            <a
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#949494" }}
            >
              <motion.p
                whileHover={{
                  textDecoration: "underline",
                  textDecorationColor: "#dfa2ac",
                  color: "#ec7085",
                }}
                style={{ display: "inline", color: "#949494" }}
              >
                Framer Motion
              </motion.p>
            </a>
          </Span>
          {/* © {n} - Viktor Renkema{" "} */}
        </p>
      </div>
    </FooterContainer>
  )
}
