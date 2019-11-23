import React from "react";
import LearnCard from "../../src/images/LearnCard.png";
import { motion } from "framer-motion";

export default function Projects(props) {
  const image = {
    default: {
      scale: 1
    },
    hovered: {
      scale: 1.05
    }
  };
  const [hovered, setHovered] = React.useState(false);

  const onHoverStart = () => {
    console.log("hoverstart");
    setHovered(true);
  };

  const onHoverEnd = () => {
    setHovered(false);
  };
  return (
    <div className="projects">
      <div className="projectsTitle">Projects</div>
      <div className="project_1">
        <motion.img
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          variants={image}
          initial="default"
          animate={hovered ? "hovered" : "default"}
          transition={{ duration: 0.5 }}
          className="imageproject1"
          src={LearnCard}
          width={"100%"}
          height="100%"
        ></motion.img>
      </div>
      <div className="project1description">
        <p className="projectdescriptions">
          Framer's Learn platform offers users guided tutorials to help them
          grasp new concepts better and quicker. This three-part article was
          written with the intent of teaching those that are open but new to
          code. It touches upon various topics, from creating animations to
          using real JSON data within your Framer prototypes.{" "}
        </p>
      </div>
      <div className="project_2"></div>
      <div className="project2description">Some description</div>
      <div className="project3description">Some description</div>
      <div className="project_3"></div>
    </div>
  );
}
