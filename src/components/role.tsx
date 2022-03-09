// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { detect } from "detect-browser"

// 🌱 Components
import { H2, Paragraph } from "./resources/styledGlobal"

export default function Role(props) {
  const { style, title, id, gradient, starter } = props
  // Store the width of the user's viewport
  const [viewportWidth, setViewportWidth] = React.useState(0)
  // Set the user's browser (necessary for differences in text-stroke across browsers)
  const [userBrowser, setUserBrowser] = React.useState("")
  // Set the distance of current el to left of viewport
  const [clientRectFromLeft, setClientRectFromLeft] = React.useState(0)
  const [clientRectFromRight, setClientRectFromRight] = React.useState(0)

  // const onResize = React.useCallback(() => {
  //   setViewportWidth(window.innerWidth)
  // })

  // window.onresize

  // Once our component mounts, set the viewPort & the user browser
  React.useEffect(() => {
    setViewportWidth(window.innerWidth)
    const browser = detect()
    setUserBrowser(browser.name)

    // // Ensure all style and layout depending on viewportWidth is updated once users resize window
    // window.addEventListener("resize", onResize)
    // return () => {
    //   window.removeEventListener('resize', onResize)
    // }
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

  // Calculate whether or not the gradient should be displayed based on [1] viewport and [2] distance from the left of the element
  let showGradient = false

  // When we're dealing with a smaller viewport, we want...
  if (viewportWidth < 768) {
    if (
      // ...the gradient to show within 20% from the viewportwidth and the gradient to disappear once the right bounding box is 10% from the left.
      clientRectFromLeft < 0.2 * viewportWidth &&
      clientRectFromRight > 0.1 * viewportWidth
    ) {
      showGradient = true
    }
  }
  if (viewportWidth >= 768) {
    if (
      // ...same as above, but at 40% for larger screens as the flexbox is then positioned with 40% left-padding.
      clientRectFromLeft < 0.4 * viewportWidth &&
      clientRectFromRight > 0.2 * viewportWidth
    ) {
      showGradient = true
    }
  }

  return (
    <RolesH2
      // A bug with styled components and text-stroke caused the below to only work when using inline style. Text stroke looks much different across browsers, so we conditionally set a different text stroke for different browsers.
      style={
        gradient && {
          color: "transparent",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage: starter ? "black" : showGradient ? gradient : "none",
          WebkitTextStroke: showGradient
            ? "0px #1d1f3580"
            : userBrowser === "chrome"
            ? "0.8px #1d1f3580"
            : userBrowser === "firefox"
            ? "0.6px #1d1f3580"
            : "0.5px #1d1f3580",
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
      ? "0.8px #1d1f3580"
      : props.userBrowser === "firefox"
      ? "0.6px #1d1f3580"
      : "0.5px #1d1f3580"};
  color: transparent;

  @media (max-width: 767px) {
    color: transparent;
    white-space: nowrap;
  }
`
