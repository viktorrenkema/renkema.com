import React from "react"
import Intro from "../components/intro"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollerVariants from "../components/ScrollerVariants"
import ScrollerExperimental from "../components/ScrollerExperimental"

import CornerMotionOne from "../components/waveone"
import CornerMotionTwo from "../components/wavetwo"
import Projects from "../components/projects"
import Framer from "../components/Framer"

const IndexPage = () => (
  <Layout>
    <CornerMotionOne></CornerMotionOne>
    <CornerMotionTwo></CornerMotionTwo>
    <Intro></Intro>
    <Bio></Bio>
    <Framer></Framer>
    <Projects></Projects>
    <ScrollerExperimental></ScrollerExperimental>
    <ScrollerVariants></ScrollerVariants>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
