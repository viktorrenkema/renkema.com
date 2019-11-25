import React from "react"
import Intro from "../components/intro"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import CornerMotionOne from "../components/waveone"
import CornerMotionTwo from "../components/wavetwo"
import Projects from "../components/projects"
import Framer from "../components/framer"

const IndexPage = () => (
  <Layout>
    <CornerMotionOne></CornerMotionOne>
    <CornerMotionTwo></CornerMotionTwo>
    <Intro></Intro>
    <Bio></Bio>
    <Framer></Framer>
    <Projects></Projects>
    <Scroller></Scroller>
    <SEO title="Portfolio Viktor Renkema" />
  </Layout>
)

export default IndexPage
