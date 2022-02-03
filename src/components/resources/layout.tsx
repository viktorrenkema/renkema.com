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

const LayoutComponent = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { dark, children } = props

  return (
    <>
      <motion.main
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
        style={
          dark
            ? {
                background: "linear-gradient(180deg, #1E2035 0%, #000000 100%)",
              }
            : { background: "white" }
        }
      >
        {children}
      </motion.main>
    </>
  )
}

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutComponent
