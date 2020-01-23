import React from "react"
import { motion } from "framer-motion"

const name_stagger = {
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

const role_stagger = {
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

const description_stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.4,
    },
  },
}

const email_stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.4,
    },
  },
}

const learnmore_separator = {
  hidden: {
    width: "30%",
  },
  visible: {
    width: "100%",
  },
}

export default function Introduction(props) {
  const [hovered, setHovered] = React.useState(false)

  const onHoverStart = () => {
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }

  return (
    <section className={"intro"}>
      <div className={"grid_intro container"}>
        <motion.div
          className={"name nameStagger"}
          variants={name_stagger}
          initial="hidden"
          animate="visible"
        >
          <h1>Viktor Renkema</h1>
        </motion.div>
        <motion.div
          className={"titles roleStagger"}
          variants={role_stagger}
          initial="hidden"
          animate="visible"
        >
          <p className="role_paragraph copy-intro">
            PSYCHOLOGIST WORKING IN UX AND INTERACTION DESIGN
          </p>
        </motion.div>
        <motion.div
          className="about descriptionStagger"
          variants={description_stagger}
          initial="hidden"
          animate="visible"
        >
          <p className="copy-intro">
            I'm interested in the space where human behaviour and technology
            meet, from web development to user experience research. Right now
            I'm helping users and organizations become succesful at Framer.
          </p>
        </motion.div>
        <motion.div
          className={"email_stagger"}
          variants={email_stagger}
          initial="hidden"
          animate="visible"
        >
          <a
            href="mailto: vrenkema@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.p
              className="learnmore copy"
              onHoverStart={onHoverStart}
              onHoverEnd={onHoverEnd}
            >
              SHOOT ME A MESSAGE ›
            </motion.p>
            <motion.div
              className="learnmore_separator"
              variants={learnmore_separator}
              initial="hidden"
              animate={hovered ? "visible" : "hidden"}
            ></motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
