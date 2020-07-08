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
import { Helmet } from "react-helmet"

initState()

export default function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Helmet Title</title>
        <meta name="title" content="Hey, my name is Helmet Title" />
        <meta name="description" content="My Helmet Description" />
        <meta property="og:title" content="European Travel Destinations" />
        <meta
          property="og:description"
          content="Offering tour packages for individuals or groups."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/CVqpHwz/groningen-7c27d7ef5c8875bad11adbda35810d08.jpg"
        />
        <meta property="og:url" content="http://framer.com" />
        <meta name="twitter:card" content="summary_large_image"></meta>

        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* <MetaTags>
        <title>Test: Page 1</title>
        <meta name="description" content="Test: Some description." />
        <meta property="og:title" content="Test: MyApp" />
        <meta property="og:image" content="../../src/images/groningen.jpeg" />
      </MetaTags> */}
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
