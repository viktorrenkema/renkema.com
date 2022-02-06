// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { detect } from "detect-browser"

// 🌱 Components
import { H2, Paragraph } from "./resources/styledGlobal"

export default function Role(props) {
  const { style, title, id, gradient } = props
  // Store the width of the user's viewport
  const [viewportWidth, setViewportWidth] = React.useState(0)
  // Set the user's browser (necessary for differences in text-stroke across browsers)
  const [userBrowser, setUserBrowser] = React.useState("")
  // Set the distance of current el to left of viewport
  const [clientRectFromLeft, setClientRectFromLeft] = React.useState(0)
  const [clientRectFromRight, setClientRectFromRight] = React.useState(0)

  // Once our component mounts, set the viewPort & the user browser
  React.useEffect(() => {
    setViewportWidth(window.innerWidth)
    const browser = detect()
    setUserBrowser(browser.name)
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
              ? "0px #1d1f35"
              : userBrowser === "chrome"
              ? "0.8px #1d1f35"
              : userBrowser === "firefox"
              ? "0.6px #1d1f35"
              : "0.5px #1d1f35",
        }
      }
      userBrowser={userBrowser}
      id={id}
    >
      {title}
    </RolesH2>
  )
}

// 💅🏽 Styled Components
const RolesH2 = styled(H2)`
  white-space: nowrap;
  -webkit-text-stroke: ${props =>
    props.userBrowser === "chrome"
      ? "0.8px #1d1f35"
      : props.userBrowser === "firefox"
      ? "0.6px #1d1f35"
      : "0.5px #1d1f35"};
  color: transparent;

  @media (max-width: 767px) {
    color: transparent;
    white-space: nowrap;
  }
`
