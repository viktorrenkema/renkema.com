// 📦 Packages
import React from "react"

// 🌱 Components
import LayoutComponent from "../components/resources/layout"
import { ProjectsList } from "../components/projects"

// 🧰 Utils
import { Helmet } from "react-helmet"

// 🌀 Variants

// 💅🏽 Styled Components

export default function Projects() {
  return (
    <LayoutComponent dark={true}>
      <Helmet></Helmet>
      <ProjectsList dark></ProjectsList>
    </LayoutComponent>
  )
}
