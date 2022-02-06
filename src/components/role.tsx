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
  const {
    style,
    title,
    id,
    gradient,
    rolePositions,
    setRolePositions,
    doneSettingRolePositions,
  } = props
  const [state, setState] = React.useState(false)
  const [clientRectFromLeft, setClientRectFromLeft] = React.useState(0)
  const [clientRectFromRight, setClientRectFromRight] = React.useState(0)

  // Testing

  // Store the width of the user's viewport
  const [viewportWidth, setViewportWidth] = React.useState(0)

  // Once our component mounts, set the viewPort.
  React.useEffect(() => {
    setViewportWidth(window.innerWidth)
  }, [])

  // Once our component mounts, at an interval, find this component el and calculate its position relative to left of viewport
  React.useEffect(() => {
    let myEl = document.getElementById(id.toString())
    console.log(myEl.getBoundingClientRect())
    const interval = setInterval(() => {
      setClientRectFromLeft(Math.round(myEl.getBoundingClientRect().x))
      setClientRectFromRight(Math.round(myEl.getBoundingClientRect().right))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Once doneSettingRolePositions is true at the intro.tsx component, the roles array is fully looped over and we have set a default `position` for each index. Now we can override the initial of 0 for the actual position (see above useEffect.
  if (doneSettingRolePositions) {
    // Create a new temporary array and set it to equal the rolePositions state array
    let cloneRolePositions = rolePositions
    // Override the `position` property at the current el’s index in the cloned array to the new position
    cloneRolePositions[id].position = clientRectFromLeft
    // Update the state with the new array
    setRolePositions(cloneRolePositions)
  }

  // **Todo**
  // ✔️ Store all elements rendered with their position one level up (`rolePositions` & `setRolePositions`)
  // ✔️ Update the position at an interval
  // Calculate which element is closest to a certain position
  // Show gradient for said element

  return (
    <RolesH2
      style={
        gradient &&
        doneSettingRolePositions && {
          color: "transparent",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          // WebkitTextStroke: "1px black",
          // backgroundImage: "none",
          backgroundImage:
            rolePositions[id].position < 0.2 * viewportWidth &&
            clientRectFromRight > 0.2 * viewportWidth
              ? gradient
              : "none",
          WebkitTextStroke:
            rolePositions[id].position < 0.2 * viewportWidth &&
            clientRectFromRight > 0.2 * viewportWidth
              ? "0px black"
              : "1px black",
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
  -webkit-text-stroke: 1px black;
  color: transparent;

  @media (max-width: 767px) {
    -webkit-text-stroke: 0.5px black;
    color: transparent;
    white-space: nowrap;
  }
`
