// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Typed from "typed.js"

// 🌱 Components
import { ArrowLink } from "./resources/icons"

// 🧰 Utils
import { palette } from "../../style/palette"

// 🌀 Variants
const variants = {
  default: {
    height: "0px",
  },
  hover: {
    height: "100%",
  },
}

// 💅🏽 Styled Components
const LinkWrapper = styled(motion.div)`
  display: flex;
`
const HoverLine = styled(motion.div)`
  height: 2px;
  width: 100px;
  background-color: black;
`

const Hyperlink = styled(motion.a)`
  color: ${props => (props.dark ? palette.greys100 : palette.greys700)};
  text-decoration: underline;
  text-decoration-color: rgba(235, 112, 133, 0);
`

const hoverTitleVariants = {
  default: { width: "0%" },
  hover: { width: "100%" },
  release: { width: "0%" },
}

const arrowVariants = {
  default: { transform: "rotate(0deg)" },
  rotate: { transform: "rotate(45deg)" },
}

export default function Headinglink({ text, url, title, dark }) {
  const [hoverTitle, setHoverTitle] = React.useState("")

  return (
    <LinkWrapper

    // onMouseEnter={() => setHoverTitle("enter")}
    // onMouseLeave={() => setHoverTitle("release")}
    >
      <Hyperlink whileHover={{ opacity: 0.7 }} dark target="_blank" href={url}>
        {title}
      </Hyperlink>

      <ArrowLink
        whileHover={{ opacity: 1 }}
        // variants={arrowVariants}
        // animate={hoverTitle ? "rotate" : "default"}
        // initial={"hoverTitle"}
      ></ArrowLink>
      {/* <HoverLine
        variants={hoverTitleVariants}
        animate={
          hoverTitle === "enter"
            ? "hover"
            : hoverTitle === "release"
            ? "release"
            : "default"
        }
        onHoverStart={() => setHoverTitle("enter")}
        onHoverEnd={() => setHoverTitle("release")}
      ></HoverLine> */}
    </LinkWrapper>
  )
}
