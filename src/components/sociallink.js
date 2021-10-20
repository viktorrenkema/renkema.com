// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Typed from "typed.js"

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
const Btn = styled(motion.button)`
  position: relative;
  width: fit-content;
  padding: 8px;
  background: white;
  border: 0px;
  justify-content: center;
  display: flex;
  border-style: solid !important;
  border-color: #1c2021 !important;
`

const HoverFill = styled(motion.div)`
  position: absolute;
  bottom: 0;
  background: black;
  width: 100%;
`

const Hyperlink = styled.a`
  font-weight: 400;
  font-size: 14px;
  color: ${palette.greys900};
  text-decoration: none;
  mix-blend-mode: difference;
  color: white;
  font-family: "GT-Walsheim", sans-serif;
`

export default function SocialLink({ text, inline, forbio, url }) {
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
        {text === "Twitter" && <Twitter />}
        {text === "Email" && <Email />}
        {text === "Linkedin" && <Linkedin />}
        {text}
      </Hyperlink>
    </Btn>
  )
}

function Twitter() {
  return (
    <svg
      style={{ marginRight: "4px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="9"
    >
      <path
        d="M 10.968 1.068 C 10.558 1.253 10.122 1.373 9.676 1.427 C 10.141 1.145 10.497 0.699 10.665 0.167 C 10.224 0.432 9.74 0.619 9.236 0.719 C 8.811 0.26 8.216 -0.001 7.594 -0 C 6.351 -0 5.344 1.02 5.344 2.278 C 5.344 2.457 5.363 2.631 5.402 2.797 C 3.532 2.702 1.874 1.795 0.764 0.417 C 0.563 0.765 0.458 1.16 0.459 1.562 C 0.459 2.353 0.856 3.05 1.46 3.459 C 1.103 3.447 0.753 3.35 0.441 3.174 C 0.441 3.183 0.441 3.193 0.441 3.202 C 0.441 4.306 1.216 5.227 2.246 5.436 C 1.914 5.528 1.567 5.541 1.229 5.475 C 1.516 6.38 2.347 7.039 3.332 7.057 C 2.561 7.669 1.591 8.033 0.537 8.033 C 0.355 8.033 0.176 8.022 0 8.001 C 0.996 8.647 2.179 9.025 3.45 9.025 C 7.589 9.025 9.852 5.553 9.852 2.542 C 9.852 2.444 9.85 2.345 9.846 2.248 C 10.286 1.925 10.666 1.526 10.968 1.068 Z"
        fill="white"
      ></path>
    </svg>
  )
}

function Linkedin() {
  return (
    <svg
      style={{ marginRight: "4px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
    >
      <path
        d="M 1.919 2.73 L 1.919 9 L 0.142 9 L 0.142 2.73 L 1.919 2.73 M 2.062 1.002 C 2.062 1.564 1.592 2.017 1.024 2.017 C 0.455 2.017 0 1.564 0 1.002 C 0 0.453 0.455 0 1.024 0 C 1.592 0 2.062 0.453 2.062 1.002 M 9 5.145 L 9 9 L 7.223 9 L 7.223 5.803 C 7.223 3.883 4.863 4.034 4.863 5.803 L 4.863 9 L 3.1 9 L 3.1 2.73 L 4.863 2.73 L 4.863 3.745 C 5.687 2.264 9 2.154 9 5.145"
        fill="white"
      ></path>
    </svg>
  )
}

function Email() {
  return (
    <svg
      style={{ marginRight: "4px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="10"
    >
      <path
        d="M 10.056 4.65 C 9.789 2.451 7.769 0.805 5.399 0.854 C 3.028 0.904 1.089 2.633 0.929 4.841 C 0.768 7.049 2.439 9.007 4.78 9.355 C 5.018 9.391 5.259 9.41 5.5 9.411 C 6.422 9.411 7.322 9.154 8.085 8.671 C 8.295 8.538 8.349 8.27 8.206 8.074 C 8.063 7.878 7.777 7.827 7.567 7.961 C 6.229 8.8 4.462 8.725 3.211 7.777 C 1.96 6.828 1.519 5.229 2.124 3.835 C 2.729 2.441 4.238 1.579 5.844 1.711 C 6.917 1.804 7.892 2.332 8.51 3.156 C 9.128 3.98 9.326 5.016 9.052 5.989 C 8.967 6.278 8.666 6.464 8.348 6.424 C 8.029 6.384 7.792 6.13 7.792 5.831 L 7.792 5.133 C 7.794 4.111 7.02 3.229 5.945 3.031 C 4.87 2.832 3.795 3.371 3.379 4.318 C 2.964 5.264 3.325 6.353 4.24 6.915 C 5.155 7.478 6.369 7.357 7.136 6.626 C 7.43 7.033 7.922 7.276 8.447 7.272 C 9.148 7.275 9.762 6.835 9.941 6.203 C 10.078 5.696 10.117 5.17 10.056 4.65 Z M 5.5 6.417 C 4.741 6.417 4.125 5.842 4.125 5.133 C 4.125 4.425 4.741 3.85 5.5 3.85 C 6.259 3.85 6.875 4.425 6.875 5.133 C 6.875 5.842 6.259 6.417 5.5 6.417 Z"
        fill="white"
      ></path>
    </svg>
  )
}
