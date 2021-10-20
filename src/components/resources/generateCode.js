// 📦 Packages
// 🌱 Components
// 🧰 Utils
// 🌀 Variants
// 💅🏽 Styled Components

export function generateCodeSnippet({
  ease,
  rotation,
  quantityLoaders,
  customdelay,
}) {
  function generateDots(quantityLoaders) {
    let dots = []
    for (let i = 0; i < quantityLoaders; i++) {
      dots.push(`<motion.div
                      style={style}
                      variants={variants}
                      initial={"start"}
                      animate={"end"}
                  />`)
    }

    return dots
  }

  return `
import { motion } from "framer-motion";
import React from "react";
  
const variants = {
  start: {
    scale: 0,
    rotate: 0,
  },
  end: {
    scale: 1,
    rotate: ${rotation},
  },
}

transition={{    
  repeat: "Infinity",
  repeatType: "reverse",
  ease: "${ease}",
  duration: 1, 
  delay: {0.2 * i}
}}

const style = {
  width: "20px",
  height: "20px",
  margin: "8px",
  display: "inline-block",
  background: "#eb7085",
}
    
export default function Loader(props) {
  return (
    <motion.div>${generateDots(quantityLoaders).reduce(
      (acc, dot) => (acc += `\n          ${dot}`),
      ""
    )}    
    </motion.div>
  )
}`
}
