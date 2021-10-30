// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Typed from "typed.js"

// 🧰 Utils
import { palette } from "../../style/palette"
import { Link } from "gatsby"

// 🌀 Variants
const variantsHoverFill = {
  default: {
    height: "0px",
  },
  hover: {
    height: "100%",
  },
}

// 💅🏽 Styled Components
const Btn = styled(motion.div)`
  position: relative;
  width: fit-content;
  background: white;
  border: 0px;
  justify-content: center;
  display: flex;
  border-style: solid !important;
  border-color: #1c2021 !important;
  cursor: pointer;
`

const HoverFill = styled(motion.div)`
  position: absolute;
  bottom: 0;
  background: black;
  width: 100%;
`

const Hyperlink = styled(motion.a)`
  font-weight: 300;
  padding-right:1rem;
  font-size: 14px;
  color: ${palette.greys100};
  text-decoration: none;
  /* color: ${palette.greys500}; */
  font-family: "GT-Walsheim", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  letter-spacing: 0.4px;
  font-family: "IBM Plex Sans", sans-serif;
  text-transform: uppercase;
  mix-blend-mode: difference;
`

const GatsbyLink = styled(Link)`
padding:1rem;
  font-weight: 300;
  font-size: 14px;
  color: ${palette.greys100};
  text-decoration: none;
  /* mix-blend-mode: difference; */
  /* color: ${palette.greys500}; */
  font-family: "GT-Walsheim", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  letter-spacing: 0.4px;
  font-family: "IBM Plex Sans", sans-serif;
  text-transform: uppercase;
  mix-blend-mode: difference;
`

const Line = styled(motion.div)`
  width: 5px;
  margin-right: 4px;
  height: 1px;
  background: black;
`

export default function SocialLink({
  text,
  inline,
  forbio,
  url,
  variants,
  nav,
  style,
}) {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <Btn
      className={"inverted-bar"}
      style={style}
      variants={variants}
      onHoverStart={() => {
        setIsHovered(true)
      }}
      onHoverEnd={() => {
        setIsHovered(false)
      }}
    >
      <HoverFill
        variants={variantsHoverFill}
        initial="default"
        animate={isHovered ? "hover" : "default"}
        transition={{ type: "linear" }}
      />
      {nav && (
        <GatsbyLink to={text == "home" ? "/" : "/" + text}>{text}</GatsbyLink>
      )}

      {!nav && (
        <Hyperlink target="_blank" rel="noopener noreferrer" href={url}>
          {text === "Twitter" && <Twitter />}
          {text === "Email" && <Email />}
          {text === "Linkedin" && <Linkedin />}
          {text === "Github" && <Github />}
          {text}
        </Hyperlink>
      )}
    </Btn>
  )
}

function Twitter() {
  return (
    <svg
      style={{ marginRight: "4px", transform: "scale(0.5)" }}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="25"
    >
      <path
        d="M 29.913 2.967 C 28.795 3.481 27.605 3.814 26.389 3.964 C 27.657 3.181 28.628 1.942 29.086 0.464 C 27.884 1.2 26.565 1.719 25.189 1.997 C 24.036 0.724 22.412 -0 20.711 0 C 17.321 0 14.575 2.833 14.575 6.328 C 14.575 6.825 14.626 7.308 14.733 7.769 C 9.783 7.506 5.18 5.101 2.084 1.158 C 1.536 2.125 1.249 3.223 1.252 4.339 C 1.252 6.536 2.335 8.472 3.982 9.608 C 3.006 9.576 2.053 9.304 1.203 8.817 L 1.203 8.894 C 1.203 11.961 3.316 14.519 6.125 15.1 C 5.222 15.355 4.272 15.392 3.352 15.208 C 4.141 17.774 6.448 19.542 9.087 19.603 C 6.526 21.683 3.252 22.628 0 22.225 C 2.799 24.082 6.068 25.07 9.409 25.069 C 20.697 25.069 26.869 15.425 26.869 7.061 C 26.869 6.789 26.864 6.514 26.853 6.244 C 28.053 5.347 29.089 4.239 29.913 2.967 Z"
        fill="white"
      ></path>
    </svg>
  )
}

function Linkedin() {
  return (
    <svg
      style={{ marginRight: "4px", transform: "scale(0.5)" }}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
    >
      <path
        d="M 6.397 9.1 L 6.397 30 L 0.473 30 L 0.473 9.1 L 6.397 9.1 M 6.873 3.34 C 6.846 5.227 5.301 6.738 3.413 6.723 C 2.511 6.73 1.643 6.377 1.003 5.742 C 0.362 5.107 0.001 4.242 0 3.34 C 0 1.51 1.517 0 3.413 0 C 5.307 0 6.873 1.51 6.873 3.34 M 30 17.15 L 30 30 L 24.077 30 L 24.077 19.343 C 24.077 12.943 16.21 13.447 16.21 19.343 L 16.21 30 L 10.333 30 L 10.333 9.1 L 16.21 9.1 L 16.21 12.483 C 18.957 7.547 30 7.18 30 17.15"
        fill="white"
      ></path>
    </svg>
  )
}

function Email() {
  return (
    <svg
      style={{ marginRight: "4px", transform: "scale(0.5)" }}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="27"
    >
      <path
        d="M 27.425 12.555 C 26.697 6.618 21.188 2.174 14.725 2.306 C 8.258 2.441 2.97 7.109 2.534 13.071 C 2.095 19.032 6.652 24.319 13.036 25.259 C 16.167 25.734 19.367 25.078 22.05 23.412 C 22.321 23.251 22.512 22.985 22.575 22.678 C 22.637 22.371 22.567 22.052 22.38 21.8 C 21.967 21.266 21.21 21.133 20.637 21.495 C 16.988 23.76 12.169 23.558 8.757 20.998 C 5.345 18.436 4.143 14.118 5.793 10.355 C 7.443 6.591 11.558 4.263 15.938 4.62 C 18.865 4.871 21.524 6.296 23.209 8.521 C 24.895 10.746 25.435 13.543 24.687 16.17 C 24.455 16.951 23.635 17.453 22.767 17.345 C 21.897 17.237 21.251 16.551 21.251 15.744 L 21.251 13.859 C 21.256 11.1 19.145 8.718 16.214 8.184 C 13.282 7.646 10.35 9.102 9.215 11.659 C 8.084 14.213 9.068 17.153 11.564 18.67 C 14.059 20.191 17.37 19.864 19.462 17.89 C 20.3 19.008 21.631 19.657 23.037 19.634 C 24.949 19.642 26.624 18.455 27.112 16.748 C 27.485 15.383 27.592 13.96 27.425 12.555 Z M 15 17.326 C 12.93 17.326 11.25 15.773 11.25 13.859 C 11.25 11.948 12.93 10.395 15 10.395 C 17.07 10.395 18.75 11.948 18.75 13.859 C 18.75 15.773 17.07 17.326 15 17.326 Z"
        fill="white"
      ></path>
    </svg>
  )
}

function Github() {
  return (
    <svg
      style={{ marginRight: "4px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        d="M 7.5 0 C 3.356 0 0 3.356 0 7.5 C 0 10.819 2.147 13.622 5.128 14.616 C 5.503 14.681 5.644 14.456 5.644 14.259 C 5.644 14.081 5.634 13.491 5.634 12.863 C 3.75 13.209 3.262 12.403 3.113 11.981 C 3.028 11.766 2.662 11.1 2.344 10.922 C 2.081 10.781 1.706 10.434 2.334 10.425 C 2.925 10.416 3.347 10.969 3.488 11.194 C 4.163 12.328 5.241 12.009 5.672 11.813 C 5.737 11.325 5.934 10.997 6.15 10.809 C 4.481 10.622 2.737 9.975 2.737 7.106 C 2.737 6.291 3.028 5.616 3.506 5.091 C 3.431 4.903 3.169 4.134 3.581 3.103 C 3.581 3.103 4.209 2.906 5.644 3.872 C 6.244 3.703 6.881 3.619 7.519 3.619 C 8.156 3.619 8.794 3.703 9.394 3.872 C 10.828 2.897 11.456 3.103 11.456 3.103 C 11.869 4.134 11.606 4.903 11.531 5.091 C 12.009 5.616 12.3 6.281 12.3 7.106 C 12.3 9.984 10.547 10.622 8.878 10.809 C 9.15 11.044 9.384 11.494 9.384 12.197 C 9.384 13.2 9.375 14.006 9.375 14.259 C 9.375 14.456 9.516 14.691 9.891 14.616 C 12.853 13.622 15 10.809 15 7.5 C 15 3.356 11.644 0 7.5 0 Z"
        fill="white"
      ></path>
    </svg>
  )
}
