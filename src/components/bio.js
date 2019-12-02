import React from "react"
import useIsInViewport from "use-is-in-viewport"
import Groningen from "../../src/images/groningen.jpeg"
import { motion } from "framer-motion"

const image = {
  default: {
    scale: 1,
  },
  hovered: {
    scale: 1.05,
  },
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}
const header = {
  hidden: { x: 20, opacity: 0, transition: { duration: 0.5 } },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
}

const copy = {
  hidden: { y: -20, opacity: 0, transition: { duration: 0.5 } },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

const section = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export default function Background(props) {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 70 })

  return (
    <motion.section
      className="bio"
      variants={section}
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <div className="grid">
        <motion.div
          variants={image}
          className="imagecard imgleft"
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <PictureFrame></PictureFrame>
        </motion.div>
        <motion.h1
          className={"titlebio header"}
          variants={header}
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
        >
          Bio
        </motion.h1>
        <motion.div className="description carddescriptionright">
          <motion.p
            ref={targetRef}
            className="copy"
            variants={copy}
            initial="hidden"
            animate={isInViewport ? "visible" : "hidden"}
          >
            While obtaining my Master's degree in Psychology in the beautiful
            city of Groningen, I got more and more interested in the combination
            of (web) technology and human behaviour. To pursue this, I started
            learning more about web development and digital user experiences.
            <br></br>
            <br></br>My first experiences with the former was when I got to
            create a/b tests for an online webshop, while learning more about
            user experiences when I started working at the University Medical
            Center Groningen. By researching the workflows of medical staff I
            helped build and implement custom interfaces of the hospital-wide
            electronic medical record (Epic).
            <br></br>
            <br></br>About a year later I started working at Framer, where I
            manage our thriving communities and make sure all our users and
            organizations are receiving the technical support they require.
          </motion.p>
          <motion.a
            className="learnmore copy"
            href="mailto:viktor@renkema.com"
            target="_blank"
            variants={copy}
            initial="hidden"
            animate={isInViewport ? "visible" : "hidden"}
            whileHover={{
              color: "#ff6661",
            }}
          >
            ASK ME MORE
          </motion.a>
        </motion.div>
        {/* </motion.div> */}
      </div>
    </motion.section>
  )
}

function PictureFrame(props) {
  const [isInViewportImg, targetRef] = useIsInViewport({ threshold: 30 })

  const [hovered, setHovered] = React.useState(false)

  const onHoverStart = () => {
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }

  return (
    <motion.img
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      variants={image}
      ref={targetRef}
      initial="default"
      initial="hidden"
      animate={isInViewportImg ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      className="imagegroningen image"
      src={Groningen}
      width={"100%"}
      height="100%"
    ></motion.img>
  )
}
