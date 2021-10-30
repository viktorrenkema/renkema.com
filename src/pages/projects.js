// 📦 Packages
import React from "react"

// 🌱 Components
import Intro from "../components/intro"
import Bio from "../components/bio"
import Layout from "../components/resources/layout"
import Scroller from "../components/scroller"
import { Projects } from "../components/projects"
import Nav from "../components/nav"

// 🧰 Utils
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

// 🌀 Variants

// 🖼️ Assets
import Groningen from "../../src/images/groningen.jpeg"
import FramerIcon from "../../src/images/framerlogo.png"

// 💅🏽 Styled Components

// const variants = {
//   rotated: {
//     transform: "rotateX(5deg)",
//   },
//   normal: {
//     transform: "rotateX(0deg)",
//   },
// }

export default function Me() {
  return (
    <Layout>
      <Helmet></Helmet>
      <Nav></Nav>
      <Projects></Projects>
      <Scroller></Scroller>
    </Layout>
  )
}
