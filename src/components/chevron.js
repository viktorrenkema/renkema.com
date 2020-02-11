import React from "react"
import { motion } from "framer-motion"

const chevron = {
  first: {
    d: "M 5 9 L 14 18 L 23 9",
  },
  second: {
    d: "M 5 18 L 14 9 L 23 9",
  },
  third: {
    d: "M 5 18 L 14 9 L 23 18",
  },
}

export default function Chevron(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <motion.div
      className="chevron"
      style={{
        bottom: "5px",
        position: "absolute",
        zIndex: "3",
        width: "fit-content",
        display: "block",
        margin: "auto",
        left: "0",
        right: "0",
      }}
      onTap={() => {
        open ? setOpen(false) : setOpen(true)
      }}
    >
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="27" height="27">
        <motion.path
          variants={chevron}
          initial={props.chevronVariant}
          animate={props.chevronVariant}
          // initial={open ? "first" : "third"}
          // animate={open ? "first" : "third"}
          style={{
            strokeWidth: "2.5",
            stroke: "white",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            fill: "transparent",
          }}
        />
      </motion.svg>
    </motion.div>
  )
}
