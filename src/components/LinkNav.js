// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

// 🧰 Utils
import { palette } from "../../style/palette"
import { Link } from "gatsby"

// 🌀 Variants

// 💅🏽 Styled Components
const Btn = styled(motion.div)`
  position: relative;
  width: fit-content;
  border: 0px;
  justify-content: center;
  display: flex;
  border-style: solid !important;
  border-color: #1c2021 !important;
  cursor: pointer;
`

const GatsbyLink = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  color: ${props => (props.dark ? palette.greys200 : palette.greys900)};
  text-decoration: none;
  font-family: "GT-Walsheim", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  letter-spacing: 0.4px;
  font-family: "IBM Plex Sans", sans-serif;
  text-transform: uppercase;
  width: 100px;
`

export default function SocialLink(props) {
  const { text, variants, style, dark } = props
  return (
    <Btn style={style} variants={variants}>
      <GatsbyLink dark={dark} to={text == "home" ? "/" : "/" + text}>
        {text}
      </GatsbyLink>
    </Btn>
  )
}
