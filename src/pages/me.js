// 📦 Packages
import React from "react"

// 🌱 Components
import Biography from "../components/bio.js"
import LayoutComponent from "../components/resources/layout.js"
import Navigation from "../components/nav.js"

// 🧰 Utils
import { Helmet } from "react-helmet"

// 🌀 Variants

// 🖼️ Assets
import Groningen from "../../src/images/groningen.jpeg"
import FramerIcon from "../../src/images/framerlogo.png"

// 💅🏽 Styled Components

export default function Me() {
  return (
    <LayoutComponent>
      <Helmet></Helmet>
      <Navigation current="me"></Navigation>
      <Biography
        positioning={"left"}
        id={"groningen"}
        asset={Groningen}
        title={"About myself"}
        description={[
          "While achieving my Master’ degree in Psychology, I also started to develop an interest in web technology. After briefly working in semi-technical roles at an e-commerce startup and the IT dept. of an academic hospital, I started at Framer in 2019. After joining Framer, I began learning web development and design.",
        ]}
        linktext="Visit LinkedIn for more"
        hyperlink="https://www.linkedin.com/in/vrenkema/"
      ></Biography>
      <Biography
        positioning={"right"}
        id={"framer"}
        asset={FramerIcon}
        title={"Framer"}
        description={[
          "At Framer, I started out as Community and Support Specialist. In this role, I learned about design and code by helping users with their projects. In 2020, I moved into the Product Specialist role to enable Enterprises like Google, Microsoft, Shopify, and KLM with on-site and digital workshops, technical support, and documentation.",
          "As of 2021, I moved into the Lead Product Specialist role, which now also involves helping leadership with strategic work around Enterprise expansion, fostering our large community, onboarding team hires, and more.",
        ]}
        linktext="Visit Framer"
        hyperlink="https://www.framer.com"
      ></Biography>
    </LayoutComponent>
  )
}
