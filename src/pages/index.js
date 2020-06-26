import React from "react"
import { initState } from "../state"
import Intro from "../components/intro"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import { Projects } from "../components/projects"
import Framer from "../components/framer"
import Footer from "../components/footer"
import Groningen from "../../src/images/groningen.jpeg"

initState()

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title={"Viktor Renkema"}
        description={"An online portfolio/resume."}
        image={Groningen}
      ></SEO>
      <Intro></Intro>
      <Bio></Bio>
      <Framer></Framer>
      <Projects></Projects>
      <Scroller></Scroller>
      <Footer></Footer>
      <SEO title="Viktor Renkema" />
    </Layout>
  )
}
