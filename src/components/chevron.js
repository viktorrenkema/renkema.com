import React from "react"
import { motion } from "framer-motion"
import { useGlobal } from "reactn"

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

export default function Chevron() {
  const [global, setGlobalState] = useGlobal()

  const [open, setOpen] = React.useState(false)

  console.log("chevron global state ", global)

  return (
    <motion.div
      className="chevron"
      style={{
        bottom: "25px",
        position: "relative",
        zIndex: "3",
        width: "20px",
        display: "block",
        margin: "0 auto",
      }}
      onTap={() => {
        setGlobalState({
          foo: "foo",
        })
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
