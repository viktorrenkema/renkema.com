import React from "react"
import { motion } from "framer-motion"

export default function Link(props) {
  const styleLinkWrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  }

  const styleLinkText = {
    overflow: "visible",
    fontFamily: `"Lato", serif`,
    color: "var(--Portfolio, #ff285c)",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 1.2,
    fontWeight: 600,
    fontStyle: "normal",
    paddingRight: "4px",
    borderBottom: "1px solid #fff",
  }
  return (
    <motion.div style={styleLinkWrapper}>
      <motion.span
        style={styleLinkText}
        whileHover={{ borderBottom: "1px solid #ff285c" }}
      >
        <a target="_blank" rel="noopener noreferrer" href={props.url}>
          {props.linktext}
        </a>
      </motion.span>
      <LinkArrow></LinkArrow>
    </motion.div>
  )
}

export function LinkArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13">
      <path
        d="M 0.014 3.572 L 9.068 3.43 L 6.459 0.644 L 7.065 0 L 10.674 3.854 L 6.941 7.822 L 6.357 7.197 L 9.055 4.328 L 0 4.469 Z"
        transform="translate(1.973 2.822) rotate(-45 5.337 3.911)"
        fill="rgb(255, 40, 92)"
        strokeWidth="0.29"
        stroke="rgb(255, 40, 92)"
        strokeMiterlimit="10"
      ></path>
    </svg>
  )
}
