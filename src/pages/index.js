// 📦 Packages
import React from "react"

// 🌱 Components
import Intro from "../components/intro"
import Bio from "../components/bio"
import Layout from "../components/resources/layout"
import Scroller from "../components/scroller"
import Footer from "../components/footer"
import { Projects } from "../components/projects"

// 🧰 Utils
import { Helmet } from "react-helmet"

// 🌀 Variants

// 🖼️ Assets
import Groningen from "../../src/images/groningen.jpeg"
import FramerIcon from "../../src/images/framerlogo.png"

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
      <Intro id={"intro"}></Intro>
      <Bio
        positioning={"left"}
        id={"groningen"}
        asset={Groningen}
        title={"About me"}
        description={
          "While obtaining my Master’s degree in Psychology, my interest for behaviour expanded to the field of web technology. Around the start of 2019, I began learning more about web development and digital user experiences to learn more about the web. My first experience in this area was learning HTML and CSS to create A/B tests for an online webshop. After this, I got to learn more about UX when I started working at the University Medical Center Groningen. Here, I studied the workflows of medical staff  for whom we built and implemented custom user interfaces in Epic, the hospital-wide electronic medical record."
        }
      ></Bio>
      <Bio
        positioning={"right"}
        id={"framer"}
        asset={FramerIcon}
        title={"Framer"}
        description={
          "Joining Framer, I started out in the role of Community and Support Specialist where I ensured users are getting the support they required. Next to providing direct help via our support channels, I wrote support articles, created educational community posts, and assisted users with organising meetups in their local communities. I have since moved into the Product Specialist role, where my focus extends to also help organizations like KLM, Google, AirFrance and others become succesful by providing them with on-site workshops, direct support, and learning materials."
        }
      ></Bio>
      <Projects></Projects>
      <div style={{ display: "flex" }}>
        <Scroller></Scroller>
      </div>
      <Footer></Footer>
    </Layout>
  )
}
