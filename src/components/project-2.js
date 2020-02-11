import React from "react"
import { motion } from "framer-motion"
import placeholdertwo from "../../src/images/placeholdertwo.png"
// import accordion from "../../src/images/proj_accordion.gif"
import Chevron from "./chevron"
import { useGlobal } from "reactn"

export function Project2() {
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

  const [global, setGlobalState] = useGlobal()

  const onClick2 = () => {
    setGlobalState({
      toggle: global.toggle === "toggle2" ? "none" : "toggle2",
    }),
      console.log("Tapped 2, current state is " + global.toggle)
  }

  return (
    <motion.div
      key="project2"
      onClick={onClick2}
      className="card_sm_projectone"
    >
      <motion.div className="wrap_imagecardone">
        <motion.img
          className="imageplaceholder"
          src={placeholdertwo}
        ></motion.img>
        <Chevron
          chevronVariant={global.toggle === "toggle2" ? "third" : "first"}
        ></Chevron>
      </motion.div>
      <motion.div
        className="sm_overlay"
        variants={sm_overlay}
        animate={global.toggle === "toggle2" ? "visible" : "hidden"}
        initial={global.toggle === "toggle2" ? "visible" : "hidden"}
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
            <br></br>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
