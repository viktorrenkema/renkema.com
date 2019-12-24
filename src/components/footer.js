import React from "react"
import { motion } from "framer-motion"

export default function Footer(props) {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-col">
          <p>Created with Gatsby and Framer Motion</p>
          <p>© 2019 Viktor Renkema</p>
        </div>
      </div>
    </section>
  )
}
