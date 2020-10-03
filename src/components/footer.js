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
              style={{ textDecoration: "underline", color: "#949494" }}
            >
              <motion.p
                whileHover={{
                  textDecoration: "underline",
                  textDecorationColor: "#532b84",
                  color: "#532b84",
                }}
                style={{ display: "inline", color: "#949494" }}
              >
                GatsbyJS
              </motion.p>{" "}
            </a>{" "}
            and{" "}
            <a
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "#949494" }}
            >
              <motion.p
                whileHover={{
                  textDecoration: "underline",
                  textDecorationColor: "#9a21ed",
                  color: "#9a21ed",
                }}
                style={{ display: "inline", color: "#949494" }}
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
