import React from "react"
import { motion } from "framer-motion"

export default function Footer(props) {
  const d = new Date()
  const n = d.getFullYear()

  // const year = Date.getFullYear()

  return (
    <section className="footer">
      <div className="container">
        <p>
          <motion.p>
            Made with{" "}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <motion.p
                whileHover={{ textDecoration: "underline" }}
                style={{ display: "inline", color: "#532b84" }}
              >
                GatsbyJS
              </motion.p>{" "}
            </a>{" "}
            and{" "}
            <a
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <motion.p
                whileHover={{ textDecoration: "underline" }}
                style={{ display: "inline", color: "#9a21ed" }}
              >
                Framer Motion
              </motion.p>
            </a>
          </motion.p>
          {/* © {n} - Viktor Renkema{" "} */}
        </p>
        {/* <p>Created with Gatsby and Framer Motion</p> */}
        {/* <Contact></Contact> */}
      </div>
    </section>
  )
}
