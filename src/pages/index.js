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
import MetaTags from "react-meta-tags"

initState()

export default function IndexPage() {
  return (
    <Layout>
      <MetaTags>
        <title>Test: Page 1</title>
        <meta name="description" content="Test: Some description." />
        <meta property="og:title" content="Test: MyApp" />
        <meta property="og:image" content="../../src/images/groningen.jpeg" />
      </MetaTags>
      {/* <SEO
        title={"Viktor Renkema"}
        description={"An online portfolio/resume."}
        image={Groningen}
      ></SEO> */}
      <Intro></Intro>
      <Bio></Bio>
      <Framer></Framer>
      <Projects></Projects>
      <Scroller></Scroller>
      <Footer></Footer>
      {/* <SEO title="Viktor Renkema" /> */}
    </Layout>
  )
}
