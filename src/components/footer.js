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
            Created with{" "}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <motion.p
                whileHover={{ color: "#532b84" }}
                style={{ display: "inline" }}
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
                whileHover={{ color: "#60f" }}
                style={{ display: "inline" }}
              >
                Framer Motion
              </motion.p>
            </a>
          </motion.p>
          © {n} - Viktor Renkema{" "}
        </p>
        {/* <p>Created with Gatsby and Framer Motion</p> */}
        {/* <Contact></Contact> */}
      </div>
    </section>
  )
}
