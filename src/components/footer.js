import React from "react"
import { motion } from "framer-motion"

export default function Footer(props) {
  return (
    <motion.section className="footer">
      <div className="">
        <ul>
          <li>Created with Gatsby and Framer Motion</li>
          <li>© 2019 | Viktor Renkema </li>
        </ul>
      </div>
    </motion.section>
  )
}
