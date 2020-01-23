import React from "react"
import { motion } from "framer-motion"
import placeholdertwo from "../../src/images/proj_accordion_noshadow.gif"
// import placeholdertwo from "../../src/images/proj_two.png"

export function ProjectTwo(props) {
  const overlay = {
    hidden: {
      opacity: 0,
      width: "0px",
      transition: {
        when: "afterChildren",
        duration: 0.3,
        staggerChildren: 0.01,
      },
      visibility: "hidden",
    },
    visible: {
      opacity: 1,
      width: "600px",
      transition: {
        when: "beforeChildren",
        duration: 0.6,
        staggerChildren: 0.05,
      },
      visibility: "visible",
    },
  }

  const wrapper = {
    small: {
      width: "400px",
      transition: {
        duration: 0.3,
      },
    },
    large: {
      width: "700px",
      transition: {
        duration: 0.2,
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 },
  }

  const [hoveredImage, setHoveredImage] = React.useState(false) // default should be set to false

  const onHoverStartImage = () => {
    setHoveredImage(true)
  }

  const onHoverEndImage = () => {
    setHoveredImage(false)
  }

  return (
    <motion.div
      onHoverStart={onHoverStartImage}
      onHoverEnd={onHoverEndImage}
      className="card_lg_projecttwo"
    >
      <motion.div
        className="wrap_imagecardone"
        variants={wrapper}
        animate={hoveredImage ? "small" : "large"}
        initial="large"
      >
        <a
          href="https://www.framer.com/learn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            className="imageplaceholder"
            src={placeholdertwo}
            width="100%"
            height="100%"
          ></motion.img>
        </a>
      </motion.div>
      <motion.div
        className="overlay"
        variants={overlay}
        animate={hoveredImage ? "visible" : "hidden"}
        initial="hidden"
      >
        <motion.p variants={item} className="copy_projecttitle">
          Project Two
        </motion.p>
        <motion.p variants={item} class="copy_projectlabel">
          WEB APP
        </motion.p>
        <motion.div variants={item} style={{ display: "flex" }}>
          <p className="projectdescriptions">
            Magna est ipsum ipsum commodo labore aliquip ad mollit ex tempor
            culpa. Mollit exercitation irure in enim reprehenderit ea amet
            adipisicing esse proident.
            <br></br>
            <br></br>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function Sm_ProjectTwo(props) {
  const sm_overlay = {
    hidden: {
      opacity: 0,
      height: "0px",
      transition: {
        when: "afterChildren",
        duration: 0.3,
        staggerChildren: 0.01,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        when: "beforeChildren",
        duration: 0.6,
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 },
  }

  const [clicked, setClicked] = React.useState(false)

  const onClick = () => {
    setClicked(!clicked)
  }

  return (
    <motion.div onClick={onClick} className="card_sm_projectone">
      <motion.div
        className="wrap_imagecardone"
        // style={{ width: clicked ? "400px" : undefined }}
      >
        <motion.img
          className="imageplaceholder"
          src={placeholdertwo}
          width="100%"
          height="100%"
        ></motion.img>
      </motion.div>
      <motion.div
        className="sm_overlay"
        variants={sm_overlay}
        animate={clicked ? "visible" : "hidden"}
        initial="hidden"
      >
        {" "}
        <motion.p variants={item} className="sm_copy_projecttitle">
          Creating an accordion design
        </motion.p>
        <motion.p variants={item} class="sm_copy_projectlabel">
          FRAMER LEARN TUTORIAL
        </motion.p>
        <motion.div variants={item}>
          <p className="sm_projectdescriptions">
            While learning React, I documented some of the projects I worked on.
            One of these turned into a 3-part tutorial, guiding users through
            creating a single-select accordion effect within Framer.
            <br></br>
          </p>
          <ul className="sm_projectdescriptions">
            <p style={{ paddingBottom: "1rem" }}>
              Some of the topics addressed include:
            </p>
            <li>applying React Hooks to toggle states</li>
            <li>creating custom animations</li>
            <li>mapping over an array with JSON data</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
