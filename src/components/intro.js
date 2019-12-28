import React from "react"
import Slash from "../components/slash"
import Contact from "../components/contact-intro"
import { motion } from "framer-motion"

const nameStagger = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
}

const roleStagger = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.4,
    },
  },
}

const descriptionStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.4,
    },
  },
}

export default function Introduction(props) {
  return (
    <section
      className={"intro container"}
      // variants={container}
      // initial="hidden"
      // animate="visible"
    >
      <motion.div
        className={"name nameStagger"}
        variants={nameStagger}
        initial="hidden"
        animate="visible"
      >
        <h1>Viktor Renkema</h1>
      </motion.div>
      <Slash
        className={"nameStagger"}
        variants={nameStagger}
        initial="hidden"
        animate="visible"
      ></Slash>
      <Contact></Contact>
      <motion.div
        className={"titles roleStagger"}
        variants={roleStagger}
        initial="hidden"
        animate="visible"
      >
        <p className="role_paragraph">
          PSYCHOLOGIST EXPLORING UX AND INTERACTION DESIGN
        </p>
      </motion.div>
      <motion.div
        className="about descriptionStagger"
        variants={descriptionStagger}
        initial="hidden"
        animate="visible"
      >
        <p>
          I'm interested in the space where human behaviour and technology meet,
          from web development to user experience research. Right now I'm
          helping users and organizations become succesful at Framer.
        </p>
      </motion.div>
    </section>
  )
}
