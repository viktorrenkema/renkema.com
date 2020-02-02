import React from "react"
import Intro from "../components/intro"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import Wave1 from "../components/wave-1"
import Wave2 from "../components/wave-2"
import Wave3 from "../components/wave-3"
import { Projects, ProjectsMobile } from "../components/projects"
import Framer from "../components/framer"
import Footer from "../components/footer"

export default function IndexPage(props) {
  return (
    <Layout>
      <Wave1></Wave1>
      <Wave2></Wave2>
      <Wave3></Wave3>
      <Intro></Intro>
      <Bio></Bio>
      <Framer></Framer>
      <Projects></Projects>
      <ProjectsMobile></ProjectsMobile>
      <Scroller></Scroller>
      <Footer></Footer>
      <SEO title="Viktor Renkema" />
    </Layout>
  )
}
