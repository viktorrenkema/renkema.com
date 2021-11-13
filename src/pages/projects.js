// 📦 Packages
import React from "react"

// 🌱 Components
import Layout from "../components/resources/Layout"
import { Projects } from "../components/Projects"
import Nav from "../components/Nav"

// 🧰 Utils
import { Helmet } from "react-helmet"

// 🌀 Variants

// 💅🏽 Styled Components

export default function Me() {
  return (
    <Layout dark>
      <Helmet></Helmet>
      <Nav current="projects" dark></Nav>
      <Projects dark></Projects>
    </Layout>
  )
}
