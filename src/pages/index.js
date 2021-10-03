import React from "react"
import { initState } from "../state"
import Intro from "../components/intro"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Scroller from "../components/scroller"
import { Projects } from "../components/projects"
import Framer from "../components/framer"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

initState()

export default function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Viktor Renkema</title>
        <meta
          name="description"
          content="Front-end developer with a background in psychology, exploring the field of design and development."
        />
        <meta property="og:title" content="Hey, my name is Viktor." />
        <meta
          property="twitter:description"
          content="Front-end developer with a background in psychology, exploring the field of design and development."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/CVqpHwz/groningen-7c27d7ef5c8875bad11adbda35810d08.jpg"
        />
        <meta property="og:url" content="http://renkema.com" />

        <link
          rel="icon"
          type="image/png"
          href="https://i.ibb.co/nsPWwRb/Fav.png"
        />
      </Helmet>
      <Intro></Intro>
      <Bio></Bio>
      <Framer></Framer>
      <Projects></Projects>
      <div style={{ display: "flex" }}>
        <Scroller label={"About me"}></Scroller>
        <Scroller label={"Roles"}></Scroller>
        <Scroller label={"Projects"}></Scroller>
      </div>
      <Footer></Footer>
    </Layout>
  )
}
