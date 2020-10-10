import { motion } from "framer-motion"
import React from "react"
import useIsInViewport from "use-is-in-viewport"
import Link from "./link"

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

const reachout_stagger = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
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
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={name_stagger}>Hey, my name is Viktor.</motion.h1>
        </motion.div>
        <motion.div
          className="about descriptionStagger"
          variants={description_stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={name_stagger} className="copy-intro">
            Front-end developer with a background in psychology, exploring the
            field of design & development.
            {/* I’m a psychologist exploring design and web development. Right now
            I’m helping people make fun prototypes at Framer. */}
          </motion.p>
          <motion.p variants={reachout_stagger} className="contactlinks">
            Find me{" "}
            <Link
              inline={true}
              linktext={"on Twitter"}
              url={"https://www.twitter.com/vrenkema"}
            ></Link>{" "}
            or{" "}
            <Link
              inline={true}
              linktext={"by email"}
              url={"mailto:viktor@renkema.com"}
            ></Link>{" "}
            {/* to chat motorcycles, neurotransmitters, or anything, really. */}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
