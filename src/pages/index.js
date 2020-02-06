import React from "react"
import setGlobal from "reactn"
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
import GlobalStateProvider from "../components/useGlobalState"

export default function IndexPage(props) {
  // setGlobal({
  //   cards: [],
  //   disabled: false,
  //   initial: "values",
  //   x: 1,
  // })

  // gives error when using

  return (
    // <GlobalStateProvider>
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
    // </GlobalStateProvider>
  )
}
