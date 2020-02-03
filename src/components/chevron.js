import React from "react"
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion"

const chevron = {
  first: {
    d: "M 0 0 L 9 9 L 18 0",
  },
  second: {
    d: "M 0 9 L 9 0 L 18 0",
  },
  third: {
    d: "M 0 9 L 9 0 L 18 9",
  },
}

export default function Chevron(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <motion.div
      className="chevron"
      style={{
        bottom: "25px",
        position: "fixed",
        left: "30%",
        zIndex: "3",
      }}
      onTap={() => {
        open ? setOpen(false) : setOpen(true)
      }}
    >
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="18" height="9">
        <motion.path
          variants={chevron}
          initial={open ? "first" : "third"}
          animate={open ? "first" : "third"}
          // transition={mytransition}
          style={{
            strokeWidth: "2.5",
            stroke: "blue",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            fill: "transparent",
          }}
        />
      </motion.svg>
    </motion.div>
  )
}
