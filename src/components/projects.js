import React from "react"
import LearnCard from "../../src/images/learnarticle.png"
import accordion from "../../src/images/accordion.png"
import { motion } from "framer-motion"

export default function Projects(props) {
  const image = {
    default: {
      scale: 1,
    },
    hovered: {
      scale: 1.05,
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
  const [hovered, setHovered] = React.useState(false)

  const onHoverStart = () => {
    console.log("hoverstart")
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }
  return (
    <section className="projects">
      <div className="projectsTitle">Projects</div>
      <h2 className="subtitle_projects">Hover to learn more</h2>

      {/* Accordion design card */}
      <motion.div
        style={{ overflow: "hidden" }}
        className="imgFirstProject"
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
      >
        <motion.img
          className="imageplaceholder"
          variants={image}
          initial="default"
          animate={hovered ? "hovered" : "default"}
          transition={{ duration: 0.5 }}
          // src={accordion}
          width={"100%"}
          height="100%"
        ></motion.img>
        <motion.div
          className="overlay"
          style={{ backgroundColor: "#042639" }}
          variants={overlay}
          initial="default"
          animate={hovered ? "hovered" : "default"}
          transition={{ duration: 0.5 }}
        >
          <p className="projectdescriptions">
            A three-part tutorial to create a single-select accordion effect
            within Framer, guiding beginner users through intermediate concepts
            within React. <br></br>
            <br></br>These include utilizing React Hooks to give a card
            toggleable visual states, creating custom animations, and mapping
            over an array to populate cards with real JSON data.
          </p>
          <motion.div className="button_projectdetails">
            <a
              href="https://www.framer.com/learn/guide/accordion-design-part-1/"
              target="_blank"
            >
              VIEW ARTICLE
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="project1description">
        <p class="projecttitle">CREATING AN ACCORDION DESIGN</p>
      </div>
      <p class="projectlabel">Framer tutorial</p>

      {/* <div className="project_2"></div>
      <div className="project2description">
        {" "}
        <p className="projectdescriptions">
          Framer's Learn platform offers users guided tutorials to help them
          grasp new concepts better and quicker. This three-part article was
          written with the intent of teaching those that are open but new to
          code. It touches upon various topics, from creating animations to
          using real JSON data within your Framer prototypes.{" "}
        </p>
      </div>
      <div className="project3description">
        {" "}
        <p className="projectdescriptions">
          Framer's Learn platform offers users guided tutorials to help them
          grasp new concepts better and quicker. This three-part article was
          written with the intent of teaching those that are open but new to
          code. It touches upon various topics, from creating animations to
          using real JSON data within your Framer prototypes.{" "}
        </p>
      </div>
      <div className="project_3"></div> */}
    </section>
  )
}
