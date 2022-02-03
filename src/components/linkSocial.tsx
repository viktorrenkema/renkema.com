// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

// 🌱 Components
import { ArrowLink } from "./resources/icons"

// 🧰 Utils
import { palette } from "../../style/palette"

// 🌀 Variants

// 💅🏽 Styled Components
const Btn = styled(motion.button)`
  position: relative;
  width: fit-content;
  border: 0px;
  justify-content: center;
  display: flex;
  border-style: solid !important;
  border-color: #1c2021 !important;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  gap: 0px;
  background-color: transparent;

  @media (max-width: 479px) {
    transform: scale(0.85);
    /* width: 175px; */
  }
`

const Hyperlink = styled(motion.a)`
  font-weight: 500;
  font-size: 12px;
  color: ${props => props.fill};
  text-decoration: none;
  font-family: "IBM Plex Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  letter-spacing: 0.8px;
  font-family: "IBM Plex Sans", sans-serif;
  text-transform: uppercase;
`

export default function LinkSocial(props) {
  const { text, url, variants, nav, style, fill } = props

  return (
    <Btn
      whileHover={{ textDecoration: "underline" }}
      nav={nav}
      style={style}
      variants={variants}
    >
      <Hyperlink
        fill={fill}
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        {/* {text === "Twitter" && <Twitter />}
        {text === "Email" && <Email />}
        {text === "Linkedin" && <Linkedin />}
        {text === "Github" && <Github />} */}
        {text}
      </Hyperlink>
      <ArrowLink fill={fill} />
    </Btn>
  )
}
