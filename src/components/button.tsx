// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

// 🌱 Components
import { ArrowLink } from "./resources/icons"
import { Link } from "gatsby"

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

const GatsbyLink = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  color: ${props => (props.dark ? palette.greys200 : palette.greys900)};
  font-family: "GT-Walsheim", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  letter-spacing: 0.4px;
  font-family: "IBM Plex Sans", sans-serif;
  text-transform: uppercase;
  white-space: nowrap;
  text-decoration: "underline";
`

export default function Button(props) {
  const { text, url, variants, nav, style, fill } = props

  const [hovered, setHovered] = React.useState(false)

  console.log(hovered)
  return (
    <Btn
      nav={nav}
      style={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
      }}
      variants={variants}
      onHoverStart={() => {
        setHovered(true)
      }}
      onHoverEnd={() => {
        setHovered(false)
      }}
    >
      <GatsbyLink to={"projects"}>View projects</GatsbyLink>
      <ArrowLink
        fill={fill}
        animate={
          hovered
            ? { transform: "rotate(45deg)" }
            : { transform: "rotate(0deg)" }
        }
      />
    </Btn>
  )
}
