// 📦 Packages
import React from "react"

// 🌱 Components
import LayoutComponent from "../components/resources/layout.js"
import { ProjectsList } from "../components/projects.js"
import Navigation from "../components/nav.js"

// 🧰 Utils
import { Helmet } from "react-helmet"

// 🌀 Variants

// 💅🏽 Styled Components

export default function Me() {
  return (
    <LayoutComponent dark>
      <Helmet></Helmet>
      <Navigation current="projects" dark></Navigation>
      <ProjectsList dark></ProjectsList>
    </LayoutComponent>
  )
}
