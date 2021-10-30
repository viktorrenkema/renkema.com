// 📦 Packages
import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

// 🌱 Components
import "../../../style/layout.css"

// 🧰 Utils
import { useStaticQuery, graphql } from "gatsby"

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
      <motion.main
        initial={{
          opacity: 0,
          x: -50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 50,
        }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
      >
        {children}
      </motion.main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
