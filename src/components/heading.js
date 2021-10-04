// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

// 🧰 Utils
import { palette } from "../../style/palette"

// 💅🏽 Styled Components
const Btn = styled(motion.button)`
  position: relative;
  width: fit-content;
  background: transparent;
  border: 0px;
  justify-content: center;
  display: flex;
`

const HoverFill = styled(motion.div)`
  position: absolute;
  left: 0;
  background: #eb7085;
  height: 60px !important;
`

const Hyperlink = styled.a`
  font-weight: 400;
  font-size: 58px;
  color: white;
  text-decoration: none;
  /* mix-blend-mode: difference; */
  color: white;
  font-family: "GT-Walsheim", sans-serif;
`

export default function Heading({ url, projecttitle }) {
  const variants = {
    default: {
      width: "0px",
    },
    hover: {
      width: "100%",
    },
  }

  return (
    <Btn whileHover="hover" className={"inverted-bar"}>
      <HoverFill
        variants={variants}
        initial="default"
        transition={{ type: "linear" }}
      />
      <Hyperlink
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        data-content={"blblsdflldfdsfldfldsfl"}
      >
        {projecttitle}
      </Hyperlink>
    </Btn>
  )
}
