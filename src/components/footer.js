import React from "react"
import { motion } from "framer-motion"
import Contact from "../components/contact"

export default function Footer(props) {
  return (
    <section className="footer">
      <div className="container">
        <p>© 2019 Viktor Renkema</p>
        <p>Created with Gatsby and Framer Motion</p>
        <Contact></Contact>
      </div>
    </section>
  )
}
