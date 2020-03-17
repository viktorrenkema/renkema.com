import React from "react"
import { motion } from "framer-motion"
import accordion from "../../src/images/proj_accordion.gif"
import Chevron from "./chevron"
import { useGlobal } from "reactn"

export function Project1() {
  const overlay = {
    hidden: {
      opacity: 0,
      width: "0px",
      transition: {
        when: "beforeChildren",
        duration: 0.4,
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
    // <motion.div>
    <motion.div
      className="card_lg_projectone"
      onHoverStart={onHoverStartImage}
      onHoverEnd={onHoverEndImage}
    >
      <motion.div
        className="overlay"
        variants={overlay}
        animate={hoveredImage ? "visible" : "hidden"}
        initial="hidden"
      >
        <motion.p variants={item} className="copy_projecttitle">
          Creating an accordion design
        </motion.p>
        <motion.p variants={item} class="copy_projectlabel">
          FRAMER LEARN TUTORIAL
        </motion.p>
        <motion.div variants={item}>
          <p className="projectdescriptions">
            While learning React, I documented some of the projects I worked on.
            One of these turned into a 3-part tutorial, guiding users through
            creating a single-select accordion effect within Framer.
            <br></br>
          </p>
          <ul className="projectdescriptions">
            <p style={{ paddingBottom: "1rem" }}>
              Some of the topics addressed include:
            </p>
            <li>applying React Hooks to toggle states</li>
            <li>creating custom animations</li>
            <li>mapping over an array with JSON data</li>
          </ul>
        </motion.div>
      </motion.div>
      <motion.div
        className="wrap_imagecardone"
        variants={wrapper}
        animate={hoveredImage ? "small" : "large"}
        initial="large"
      >
        <a
          href="https://www.framer.com/learn/guide/accordion-design-part-1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            className="imageplaceholder"
            src={accordion}
            width="100%"
            height="100%"
          ></motion.img>
        </a>
      </motion.div>
    </motion.div>
    // </motion.div>
  )
}

export function Sm_ProjectOne() {
  const sm_overlay = {
    hidden: {
      opacity: 0,
      height: "0px",
      display: "none",
      transition: {
        when: "afterChildren",
        duration: 0.3,
        staggerChildren: 0.01,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      display: "block",
      transition: {
        when: "beforeChildren",
        duration: 0.6,
        staggerChildren: 0.05,
      },
    },
  }

  const [hovered, setHovered] = React.useState(false)

  const onHoverStart = () => {
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 },
  }
  const [global, setGlobalState] = useGlobal()

  const onClickAccordion = () => {
    setGlobalState({
      toggle: global.toggle === "toggle1" ? "none" : "toggle1",
    }),
      console.log("Tapped 1, current state is " + global.toggle)
  }

  const learnmore_separator = {
    hidden: {
      width: "30%",
    },
    visible: {
      width: "100%",
    },
  }

  return (
    <motion.div key="project1" className="card_sm_projectone">
      <motion.div className="wrap_imagecardone" onClick={onClickAccordion}>
        <Chevron
          chevronVariant={global.toggle === "toggle1" ? "third" : "first"}
        ></Chevron>
        <motion.img className="imageplaceholder" src={accordion}></motion.img>
      </motion.div>
      <motion.div
        className="sm_overlay"
        variants={sm_overlay}
        animate={global.toggle === "toggle1" ? "visible" : "hidden"}
        initial={global.toggle === "toggle1" ? "visible" : "hidden"}
      >
        {" "}
        <motion.div className="wrapper--project-1-heading">
          {" "}
          <motion.p variants={item} className="sm_copy_projecttitle">
            Creating an accordion design
          </motion.p>
          <motion.p variants={item} class="sm_copy_projectlabel">
            TUTORIAL
          </motion.p>
        </motion.div>
        <motion.div variants={item}>
          <p className="sm_projectdescriptions">
            While learning React, I documented some of the projects I worked on.
            One of these turned into a tutorial, guiding users through creating
            a single-select accordion effect within Framer.
            <br></br>
          </p>
          <p className="sm_projectdescriptions">
            The three-part tutorial covers various topics, including using React
            hooks to toggle state, creating custom animations, and mapping over
            JSON data.
            <br></br>
          </p>
          <a
            href="https://learn-accordion-design-part-1--framer-next.netlify.com/learn/guide/accordion-design-part-1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.p
              className="learnmore--projectcards"
              onHoverStart={onHoverStart}
              onHoverEnd={onHoverEnd}
            >
              LEARN MORE ›
              <motion.div
                className="learnmore_separator"
                variants={learnmore_separator}
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
              ></motion.div>
            </motion.p>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
