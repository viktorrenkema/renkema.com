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

export default function Introduction(props) {
  return (
    <section
      className={"intro"}
      // variants={container}
      // initial="hidden"
      // animate="visible"
    >
      <div className={"grid_intro container"}>
        <motion.div
          className={"name nameStagger"}
          variants={name_stagger}
          initial="hidden"
          animate="visible"
        >
          <h1>Viktor Renkema</h1>
        </motion.div>
        {/* <Slash
        className={"nameStagger"}
        variants={nameStagger}
        initial="hidden"
        animate="visible"
      ></Slash> */}
        {/* <Contact></Contact> */}
        <motion.div
          className={"titles roleStagger"}
          variants={role_stagger}
          initial="hidden"
          animate="visible"
        >
          <p className="role_paragraph">
            {/* I am a psychologist interested in UX and interaction
          design */}
            PSYCHOLOGIST WORKING IN UX AND INTERACTION DESIGN
          </p>
        </motion.div>
        <motion.div
          className="about descriptionStagger"
          variants={description_stagger}
          initial="hidden"
          animate="visible"
        >
          <p>
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
            <p className="role_paragraph">Reach out ›</p>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
