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

export default function Me() {
  return (
    <Layout>
      <Helmet></Helmet>
      <Nav></Nav>
      <Bio
        positioning={"left"}
        id={"groningen"}
        asset={Groningen}
        title={"A bit more about me"}
        description={[
          "I graduated with a Master’s degree in Psychology back in 2018. At the same time, an interest in web technology grew which brought me to two roles focused more on entry-level HTML/CSS user experience.",
          "After joining Framer in 2019, I started to focus more seriously on web development and design.",
        ]}
      ></Bio>
      <Bio
        positioning={"right"}
        id={"framer"}
        asset={FramerIcon}
        title={"Framer"}
        description={[
          "Joining Framer, I started out in the role of Community and Support Specialist where I ensured users are getting the support they required. Next to providing direct help via our support channels, I wrote support articles, created educational community posts, and assisted users with organising meetups in their local communities.",
          "I have since moved into the Product Specialist role, where my focus extends to also help organizations like KLM, Google, AirFrance and others become succesful by providing them with on-site workshops, direct support, and learning materials.",
        ]}
      ></Bio>
      <Scroller />
    </Layout>
  )
}
