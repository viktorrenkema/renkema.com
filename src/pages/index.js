// 📦 Packages
import React from "react"

// 🌱 Components
import Intro from "../components/Intro"
import Layout from "../components/resources/Layout"
import Nav from "../components/Nav"

// 🧰 Utils
import { Helmet } from "react-helmet"

// 💅🏽 Styled Components

// const variants = {
//   rotated: {
//     transform: "rotateX(5deg)",
//   },
//   normal: {
//     transform: "rotateX(0deg)",
//   },
// }

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
      <Nav current="home" dark={false}></Nav>
      <Intro id={"intro"}></Intro>
    </Layout>
  )
}
