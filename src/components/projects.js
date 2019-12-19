import React from "react"
import { motion } from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
import accordion from "../../src/images/accordion3.gif"

export default function Projects(props) {
  const image = {
    default: {
      // scale: 1,
      top: "0%",
    },
    hovered: {
      // scale: 1.05,
      top: "70%",
    },
  }

  const overlay = {
    default: {
      opacity: 0,
    },
    hovered: {
      opacity: 1,
    },
  }
  const stagger = {
    visible: {
      opacity: 1,
      bottom: "0px",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      bottom: "-50px",
      transition: {
        when: "afterChildren",
      },
    },
  }
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 30 })
  const [hoveredImage, setHoveredImage] = React.useState(false)

  const onHoverStartImage = () => {
    console.log("onHoverStartImage")
    setHoveredImage(true)
  }

  const onHoverEndImage = () => {
    console.log("onHoverEndImage")
    setHoveredImage(false)
  }

  return (
    <motion.section
      className="projects"
      variants={stagger}
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
    >
      <div className="projectsTitle">Projects</div>
      <h2 className="subtitle_projects">Hover to learn more</h2>
      {/* Placeholder card 1*/}
      <motion.div
        variants={stagger}
        ref={targetRef}
        style={{ overflow: "hidden" }}
        className="card_projectthree"
      >
        <motion.div>
          {/* <a
            href="https://www.framer.com/learn/"
            target="_blank"
            rel="noopener noreferrer"
          ></a> */}
        </motion.div>
      </motion.div>
      {/* Placeholder card 2 / Accordion effect*/}
      <motion.div
        variants={stagger}
        style={{ overflow: "hidden" }}
        className="card_projectone"
        onHoverStart={onHoverStartImage}
        onHoverEnd={onHoverEndImage}
      >
        <motion.div className="wrap_imagecardone">
          <a
            href="https://www.framer.com/learn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              className="imageplaceholder"
              variants={image}
              initial="default"
              animate={hoveredImage ? "hovered" : "default"}
              transition={{ duration: 0.8 }}
              src={accordion}
              width="100%"
              height="100%"
            ></motion.img>
          </a>
        </motion.div>
        <motion.div
          className="overlay"
          variants={overlay}
          animate={hoveredImage ? "hovered" : "default"}
          initial="default"
          transition={{ duration: 0.5 }}
        >
          <p className="copy_projecttitle">Framer Learn tutorial</p>
          <p className="projectdescriptions">
            While learning React, I documented what I worked on which turned
            into a 3-part tutorial to create a single-select accordion effect
            within Framer. <br></br>
            <br></br>The tutorial aims to guide beginner users through
            intermediate concepts within React. <br></br>
            <br></br>It touches upon various concepts, such as:
            <br></br>
            <ul>
              <li>applying React Hooks to toggle states</li>
              <li>creating custom animations</li>
              <li>mapping over an array with JSON data</li>
            </ul>
          </p>
        </motion.div>
      </motion.div>

      {/* Placeholder card 3*/}
      <motion.div
        variants={stagger}
        style={{ overflow: "hidden" }}
        className="card_projecttwo"
      >
        <motion.div>
          {/* <a
            href="https://www.framer.com/learn/"
            target="_blank"
            rel="noopener noreferrer"
          ></a> */}
        </motion.div>
      </motion.div>
      {/* Headers*/}
      <div className="project1description">
        <p class="projecttitle">CREATING AN ACCORDION DESIGN</p>
      </div>
      <p class="projectlabel">Framer tutorial</p>
    </motion.section>
  )
}
