import React from "react"
import Intro from "../components/intro"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import CornerMotionOne from "../components/waveone"
import CornerMotionTwo from "../components/wavetwo"
import Wave3 from "../components/wavethree"
import Projects from "../components/projects"

import ProjectsMobile from "../components/exp-projectsmobile"
// import ProjectsMobile from "../components/projectsmobile"

import Framer from "../components/framer"
import Footer from "../components/footer"

export default function IndexPage(props) {
  return (
    <Layout>
      <CornerMotionOne></CornerMotionOne>
      <CornerMotionTwo></CornerMotionTwo>
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
