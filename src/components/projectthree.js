import React from "react"
import { motion } from "framer-motion"
import placeholderthree from "../../src/images/Placeholderthree.png"

export default function ProjectThree(props) {
  const overlay = {
    hidden: {
      opacity: 0,
      width: "0px",
      transition: {
        when: "afterChildren",
        duration: 0.3,
        staggerChildren: 0.01,
      },
    },
    visible: {
      opacity: 1,
      width: "600px",
      transition: {
        when: "beforeChildren",
        duration: 0.4,
        staggerChildren: 0.05,
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
      className="card_projectthree"
    >
      <motion.div
        className="overlay"
        variants={overlay}
        animate={hoveredImage ? "visible" : "hidden"}
        initial="hidden"
      >
        <motion.p variants={item} className="copy_projecttitle">
          Project Three
        </motion.p>
        <motion.p variants={item} class="copy_projectlabel">
          ARTICLE
        </motion.p>
        <motion.div variants={item} style={{ display: "flex" }}>
          <p className="projectdescriptions">
            Magna est ipsum ipsum commodo labore aliquip ad mollit ex tempor
            culpa. Mollit exercitation irure in enim reprehenderit ea amet
            adipisicing esse proident.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="wrap_imagecardone"
        style={{ width: hoveredImage ? "400px" : undefined }}
      >
        <a
          href="https://www.framer.com/learn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            className="imageplaceholder"
            src={placeholderthree}
            width="100%"
            height="100%"
          ></motion.img>
        </a>
      </motion.div>
    </motion.div>
  )
}
