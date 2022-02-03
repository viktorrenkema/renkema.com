// 📦 Packages
import React from "react"

// 🌱 Components
import Introduction from "../components/intro"
import LayoutComponent from "../components/resources/layout"

// 🧰 Utils
import { Helmet } from "react-helmet"

// 💅🏽 Styled Components

export default function IndexPage() {
  return (
    <LayoutComponent>
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
      <Introduction id={"intro"}></Introduction>
    </LayoutComponent>
  )
}
