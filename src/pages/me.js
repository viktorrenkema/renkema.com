// 📦 Packages
import React from "react"

// 🌱 Components
import Bio from "../components/bio"
import Layout from "../components/resources/layout"
import Scroller from "../components/scroller"
import Nav from "../components/nav"

// 🧰 Utils
import { Helmet } from "react-helmet"

// 🌀 Variants

// 🖼️ Assets
import Groningen from "../../src/images/groningen.jpeg"
import FramerIcon from "../../src/images/framerlogo.png"

// 💅🏽 Styled Components

export default function Me() {
  return (
    <Layout>
      <Helmet></Helmet>
      <Nav current="me"></Nav>
      <Bio
        positioning={"left"}
        id={"groningen"}
        asset={Groningen}
        title={"More about me"}
        description={[
          "While achieving a Master’s in Psychology in 2018, an interest in web technology also started to develop. After briefly working in semi-technical roles at an e-commerce startup and the IT dept. of an academic hospital, I started at Framer in 2019.",
          // "After joining Framer in 2019, I started to focus more seriously on web development and design.",
        ]}
      ></Bio>
      <Bio
        positioning={"right"}
        id={"framer"}
        asset={FramerIcon}
        title={"Framer"}
        description={[
          "At Framer, I started out in the role of Community and Support Specialist which allowed me to get some exposure to design and code.",
          "In 2020, I moved into the Product Specialist role where I now focused on helping Enterprises such as Facebook, Microsoft, Shopify and many others become succesful with (on-site) workshops, technical support, and learning materials.",
          "I am currently in the Lead Product Specialist role, involving more strategic work as the team and company grows.",
        ]}
      ></Bio>
      <Scroller />
    </Layout>
  )
}
