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
      fill: "none",
      opacity: 0,
    },
    hovered: {
      fill: "#022435",
      opacity: 0.5,
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
      <motion.div
        style={{ overflow: "hidden" }}
        className="imgFirstProject"
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
      >
        {" "}
        {/* <motion.div
          className="overlay"
          variants={overlay}
          initial="default"
          animate={hovered ? "hovered" : "default"}
          transition={{ duration: 0.5 }}
        ></motion.div> */}
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
      </motion.div>

      <div className="project1description">
        <p class="projecttitle">CREATING AN ACCORDION DESIGN</p>

        <p className="projectdescriptions">
          {/* Due to Framer’s nature that it allows to bring in (production) code
          straight to your canvas, Framer’s learning curve can be considered
          steep.
          <br></br>
          <br></br>Framer Learn aims to ease the learning curve, by providing
          many different forms of educational resources. While learning Framer
          myself, I recognized trends in the type of knowledge that I wished was
          shared with me while following tutorials. <br></br>
          <br></br>This sparked the creation of a three-part tutorial to create
          a single-select accordion effect. Those new to code should be able to
          follow along and are being guided through various topics, such as:-
          utilizing React Hooks to give a card toggleable visual states-
          creating different animations with the Framer API- mapping over an
          array to render cards on our canvas- populating elements with ‘real’
          JSON data objects{" "} */}
        </p>
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
