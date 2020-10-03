import React from "react"
import { motion } from "framer-motion"

const styleLoaderWrapper = {
  height: "40px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  overflow: "visible",
}

export default function Loader(props) {
  const { quantityLoaders } = props
  let renderdots = []

  for (let i = 0; i < quantityLoaders; i = i + 1) {
    renderdots.push(<Dot key={i} customdelay={0.2 * i}></Dot>)
  }

  return (
    <motion.div style={styleLoaderWrapper} className="preview">
      {renderdots}
    </motion.div>
  )
}

function Dot(props) {
  const dot = {
    width: `20px`,
    height: `20px`,
    opacity: 1,
    margin: 8,
    borderRadius: 0,
    display: "inline-block",
    background: "#c81c60",
    transform: "translateZ(42px)",
    perspective: "20px",
  }

  const variants = {
    show: {
      scale: 0,
      rotate: 0,
    },
    hide: {
      scale: 0.8,
      rotate: 360,
    },
  }

  const transition = {
    repeat: "Infinity",
    repeatType: "reverse",
    ease: "easeInOut",
    duration: 1,
    delay: props.customdelay,
  }

  return (
    <motion.div
      animate={"show"}
      initial={"hide"}
      variants={variants}
      transition={transition}
      style={dot}
    ></motion.div>
  )
}
