// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

// 🌱 Components
import { H2, Paragraph } from "./resources/styledGlobal"

// 🧰 Utils
import { palette } from "../../style/palette"

// 🌀 Variants

// 💅🏽 Styled Components
export default function Role(props) {
  const { style, title, id, gradient } = props
  const [state, setState] = React.useState(false)
  const [clientRectFromLeft, setClientRectFromLeft] = React.useState(0)
  const [clientRectFromRight, setClientRectFromRight] = React.useState(0)

  // Store the width of the user's viewport
  const [viewportWidth, setViewportWidth] = React.useState(0)

  // Once our component mounts, set the viewPort.
  React.useEffect(() => {
    setViewportWidth(window.innerWidth)
  }, [])

  // Once our component mounts, at an interval, find this component el and calculate its position relative to left of viewport
  React.useEffect(() => {
    let myEl = document.getElementById(id.toString())
    const interval = setInterval(() => {
      setClientRectFromLeft(Math.round(myEl.getBoundingClientRect().x))
      setClientRectFromRight(Math.round(myEl.getBoundingClientRect().right))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <RolesH2
      style={
        gradient && {
          color: "transparent",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage:
            clientRectFromLeft < 0.2 * viewportWidth &&
            clientRectFromRight > 0.2 * viewportWidth
              ? gradient
              : "none",
          WebkitTextStroke:
            clientRectFromLeft < 0.2 * viewportWidth &&
            clientRectFromRight > 0.2 * viewportWidth
              ? "0px black"
              : "0.5px black",
        }
      }
      id={id}
      state={state}
    >
      {title}
      {/* For debugging, uncomment to see the current position: */}
      {/* <Paragraph>
        {doneSettingRolePositions && rolePositions[id].position}
      </Paragraph>
      <Paragraph>{doneSettingRolePositions && fromRight}</Paragraph> */}
    </RolesH2>
  )
}

const RolesH2 = styled(H2)`
  white-space: nowrap;
  -webkit-text-stroke: 0.5px black;
  color: transparent;

  @media (max-width: 767px) {
    -webkit-text-stroke: 0.5px black;
    color: transparent;
    white-space: nowrap;
  }
`
