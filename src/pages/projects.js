// 📦 Packages
import React from "react"

// 🌱 Components
import LayoutComponent from "../components/resources/layout"
import { ProjectsList } from "../components/projects"
import Navigation from "../components/nav"

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
