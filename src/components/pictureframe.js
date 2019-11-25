import * as React from "react"
import { motion } from "framer-motion"
import Groningen from "../../src/images/groningen.jpeg"

const image = {
  default: {
    scale: 1,
  },
  hovered: {
    scale: 1.05,
  },
}

export default function PictureFrame(props) {
  const [hovered, setHovered] = React.useState(false)

  const onHoverStart = () => {
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }

  return (
    <motion.div
      className="imgwrapper"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <motion.img
        variants={image}
        initial="default"
        animate={hovered ? "hovered" : "default"}
        transition={{ duration: 0.5 }}
        className="imagegroningen"
        src={Groningen}
        width={"100%"}
        height="100%"
      ></motion.img>
    </motion.div>
  )
}
