// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

// 🌱 Components
import { H2 } from "./resources/styledGlobal"

// 🧰 Utils
import { palette } from "../../style/palette"

// 🌀 Variants

// 💅🏽 Styled Components
export default function Role(props) {
  const { style, title, id, gradient, showGradient, setShowGradient } = props
  const [state, setState] = React.useState(false)
  const [internal, setInteral] = React.useState(false)

  // Store the width of the user's viewport
  const [viewportWidth, setViewportWidth] = React.useState(0)

  setTimeout(() => {
    setState(!state)
  }, 2000)

  React.useEffect(() => {
    var myEl = document.getElementById(id.toString())

    // console.log("State changed", myEl.getBoundingClientRect().x)
    if (myEl.getBoundingClientRect().x < 0.3 * viewportWidth) {
      console.log(showGradient[id] > showGradient[id - 1])

      let newArray = [(showGradient[id] = myEl.getBoundingClientRect().x)]
      // console.log(newArray)
      setShowGradient(newArray)
    }

    setViewportWidth(window.innerWidth)
  }, [state])

  console.log(showGradient)
  // const closest = showGradient.reduce((a, b) => {
  //   return Math.abs(b - 0.3 * viewportWidth) < Math.abs(a - 0.3 * viewportWidth)
  //     ? b
  //     : a
  // })

  // console.log("closest is: ", closest)

  return (
    <RolesH2
      style={
        gradient && {
          WebkitTextStroke:
            showGradient[id] > showGradient[id - 1] ? "0px black" : "1px black",
          color: "transparent",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage:
            showGradient[id] > showGradient[id - 1] ? gradient : "none",
        }
      }
      id={id}
      state={state}
      whileHover={
        gradient && {
          WebkitTextStroke: "0px black",
          color: "transparent",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage: gradient,
        }
      }
    >
      {title}
    </RolesH2>
  )
}

const RolesH2 = styled(H2)`
  white-space: nowrap;
  -webkit-text-stroke: 1px black;
  color: transparent;

                    item.gradient && {
                      WebkitTextStroke: "0px black",
                      color: "transparent",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundImage: item.gradient,
                    }
                  }

  @media (max-width: 767px) {
    -webkit-text-stroke: 0.5px black;
    color: transparent;
    white-space: nowrap;
  }
`
