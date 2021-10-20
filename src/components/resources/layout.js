// 📦 Packages
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// 🌱 Components
import "../../../style/layout.css"

// 🧰 Utils
// 🌀 Variants
// 💅🏽 Styled Components

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
