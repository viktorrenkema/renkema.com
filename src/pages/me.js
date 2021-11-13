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
        title={"About myself"}
        description={[
          "While achieving my Master’ degree in Psychology, I also started to develop an interest in web technology. After briefly working in semi-technical roles at an e-commerce startup and the IT dept. of an academic hospital, I started at Framer in 2019. After joining Framer, I began learning web development and design.",
        ]}
        linktext="Visit LinkedIn for more"
        hyperlink="https://www.linkedin.com/in/vrenkema/"
      ></Bio>
      <Bio
        positioning={"right"}
        id={"framer"}
        asset={FramerIcon}
        title={"Framer"}
        description={[
          "At Framer, I started out as Community and Support Specialist. In this role, I learned about design and code by helping users with their projects. In 2020, I moved into the Product Specialist role to enable Enterprises like Facebook, Microsoft, Shopify with on-site and digital workshops, technical support, and documentation.",
          "As of 2021, I moved into the Lead Product Specialist role, which now also involves helping leadership with strategic work around Enterprise expansion, fostering our large community, onboarding team hires, and more.",
        ]}
        // description={[
        //   "At Framer, I started out in the role of Community and Support Specialist. In this role, I was able to get exposure to design and code by helping users with their projects.",
        //   "In 2020, I moved into the Product Specialist role where I now focused on enabling Enterprises such as Facebook, Microsoft, Shopify with on-site and digital workshops, technical support, and learning materials.",
        //   "Currently I moved into the Lead Product Specialist role, which involves helping leadership with more strategic work around team expansion, fostering the community, and onboarding team hires.",
        // ]}
        linktext="Visit Framer"
        hyperlink="https://www.framer.com"
      ></Bio>
      <Scroller />
    </Layout>
  )
}
