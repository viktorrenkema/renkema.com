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
const hoverTitleVariants = {
  default: {
    width: "0px",
    transition: {
      ease: "easeOut",
    },
  },
  hover: {
    width: "60%",
    transition: {
      ease: "easeIn",
    },
  },
}

const arrowVariants = {
  default: { transform: "rotate(0deg)" },
  rotate: { transform: "rotate(45deg)" },
}

// 💅🏽 Styled Components
const LinkWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FlexHyperlinkArrow = styled(motion.div)`
  display: flex;
`

const HoverLine = styled(motion.div)`
  height: 2px;
  background-color: white;
  /* margin-left: 30%; */
`

const Hyperlink = styled(motion.a)`
  color: ${props => (props.dark ? palette.greys100 : palette.greys700)};
  text-decoration: underline;
  text-decoration-color: rgba(235, 112, 133, 0);
`

export default function Headinglink({ text, url, title, dark }) {
  const [hoverTitle, setHoverTitle] = React.useState(false)

  return (
    <LinkWrapper
      onMouseEnter={() => setHoverTitle(true)}
      onMouseLeave={() => setHoverTitle(false)}
    >
      <FlexHyperlinkArrow>
        <Hyperlink dark target="_blank" href={url}>
          {title}
        </Hyperlink>

        <ArrowLink
          whileHover={{ opacity: 1 }}
          // variants={arrowVariants}
          // animate={hoverTitle ? "rotate" : "default"}
          // initial={"hoverTitle"}
        ></ArrowLink>
      </FlexHyperlinkArrow>
      <HoverLine
        variants={hoverTitleVariants}
        animate={hoverTitle ? "hover" : "default"}
        initial="default"
      ></HoverLine>
    </LinkWrapper>
  )
}
