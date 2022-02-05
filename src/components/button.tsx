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
  }
`

const InternalLink = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  color: ${props => (props.dark ? palette.greys200 : palette.greys900)};
  /* font-family: "GT-Walsheim", sans-serif; */
  font-family: "Object Sans Regular", "Arial";
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

const ExternalLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  color: ${props => (props.dark ? palette.greys200 : palette.greys900)};
  /* font-family: "GT-Walsheim", sans-serif; */
  font-family: "Object Sans Regular", "Arial";
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  letter-spacing: 0.4px;
  font-family: "IBM Plex Sans", sans-serif;
  text-transform: uppercase;
  white-space: nowrap;
  text-decoration: none;
  border: 1px solid white;
  padding: 8px;
  width: 55px;
  border-radius: 8px;
`

export default function Button(props) {
  const {
    text,
    url,
    dark,
    nav,
    external,
    style,
    fill,
    variants,
    initial,
    animate,
    iconLeft,
  } = props

  const [hovered, setHovered] = React.useState(false)

  return (
    <Btn
      variants={variants}
      initial={initial}
      animate={animate}
      nav={nav}
      style={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        ...style,
      }}
      onHoverStart={() => {
        setHovered(true)
      }}
      onHoverEnd={() => {
        setHovered(false)
      }}
    >
      {iconLeft && (
        <ArrowLink
          dark={dark}
          animate={
            hovered
              ? { transform: "rotate(270deg)" }
              : { transform: "rotate(225deg)" }
          }
        />
      )}
      {external && (
        <ExternalLink target="_blank" href={url} dark={dark}>
          {text}
        </ExternalLink>
      )}
      {!external && (
        <InternalLink to={url} dark={dark}>
          {text}
        </InternalLink>
      )}

      {/* {!iconLeft && (
        <ArrowLink
          dark={dark}
          animate={
            hovered
              ? { transform: "rotate(45deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      )} */}
    </Btn>
  )
}
