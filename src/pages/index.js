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
import SEO from "../components/seo"

initState()

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Portfolio of Viktor Renkema"
        image="https://i.ibb.co/CVqpHwz/groningen-7c27d7ef5c8875bad11adbda35810d08.jpg"
      />
      <meta
        property="og:image"
        content="https://i.ibb.co/CVqpHwz/groningen-7c27d7ef5c8875bad11adbda35810d08.jpg"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@vrenkema" />
      <meta name="twitter:title" content="Portfolio of Viktor Renkema" />
      <meta
        name="twitter:description"
        content="Psychology graduate moving into web development."
      />
      <meta
        name="twitter:image"
        content="https://i.ibb.co/CVqpHwz/groningen-7c27d7ef5c8875bad11adbda35810d08.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://i.ibb.co/2d4ZHy4/site-icon.png"
      />
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Viktor Renkema</title>
        <meta
          name="description"
          content="Psychologist by trade, now learning all about design and web development."
        />
        <meta property="og:title" content="Hey, my name is Viktor." />
        <meta
          property="twitter:description"
          content="Psychologist by trade, now learning all about design and web development."
        />

        <meta property="og:url" content="http://renkema.com" />


      </Helmet> */}
      <Intro></Intro>
      <Bio></Bio>
      <Framer></Framer>
      <Projects></Projects>
      <Scroller></Scroller>
      <Footer></Footer>
    </Layout>
  )
}
