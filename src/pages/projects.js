// 📦 Packages
import React from "react"

// 🌱 Components
import Layout from "../components/resources/layout"
import Scroller from "../components/scroller"
import { Projects } from "../components/projects"
import Nav from "../components/nav"

// 🧰 Utils
import { Helmet } from "react-helmet"

// 🌀 Variants

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
    <Layout dark>
      <Helmet></Helmet>
      <Nav current="projects" dark></Nav>
      <Projects dark></Projects>
      <Scroller></Scroller>
    </Layout>
  )
}
