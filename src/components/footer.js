import React from "react"
import Contact from "../components/contact"

export default function Footer(props) {
  const d = new Date()
  const n = d.getFullYear()

  // const year = Date.getFullYear()

  return (
    <section className="footer">
      <div className="container">
        <p>© {n} - Viktor Renkema</p>
        <p>Created with Gatsby and Framer Motion</p>

        <Contact></Contact>
      </div>
    </section>
  )
}
