// 📦 Packages
import React from "react"
import { motion } from "framer-motion"

// 🌱 Components
// 🧰 Utils
// 🌀 Variants
// 💅🏽 Styled Components

const styleLoaderWrapper = {
  height: "40px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  overflow: "visible",
}

export default function Loader({ ease, quantityLoaders, rotation }) {
  let renderdots = []

  for (let i = 0; i < quantityLoaders; i = i + 1) {
    renderdots.push(
      <Dot key={i} ease={ease} rotation={rotation} customdelay={0.2 * i}></Dot>
    )
  }

  return (
    <motion.div style={styleLoaderWrapper} className="preview">
      {renderdots}
    </motion.div>
  )
}

function Dot({ ease, customdelay, rotation }) {
  const dot = {
    width: `20px`,
    height: `20px`,
    opacity: 1,
    margin: 8,
    borderRadius: 0,
    display: "inline-block",
    background: "#eb7085",
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
      rotate: parseInt(rotation),
    },
  }

  const transition = {
    repeat: "Infinity",
    repeatType: "reverse",
    ease: ease,
    duration: 1,
    delay: customdelay,
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
