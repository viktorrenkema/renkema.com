import { motion } from "framer-motion"
import React from "react"
import useIsInViewport from "use-is-in-viewport"

const name_stagger = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const description_stagger = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

export default function Introduction(props) {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 40 })

  const section = {
    hidden: { opacity: 0, transition: { duration: 1.3 } },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <motion.section
      className={"intro"}
      variants={section}
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
    >
      <motion.div className={"grid_intro container"}>
        <motion.div
          ref={targetRef}
          className={"name nameStagger"}
          variants={name_stagger}
          initial="hidden"
          animate="visible"
        >
          <h1>Hey, my name is Viktor</h1>
        </motion.div>
        <motion.div
          className="about descriptionStagger"
          variants={description_stagger}
          initial="hidden"
          animate="visible"
        >
          <p className="copy-intro">
            I’m a psychologist exploring design and web development. Right now
            I’m helping people make fun prototypes at Framer.
          </p>
          <p className="subcopy-intro">
            Feel free to reach out{" "}
            <a
              href="https://www.twitter.com/vrenkema"
              target="_blank"
              rel="noopener noreferrer"
            >
              on Twitter
            </a>{" "}
            or{" "}
            <a
              href="mailto:viktor@renkema.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              by email
            </a>{" "}
            to chat motorcycles, neurotransmitters, or anything, really.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
