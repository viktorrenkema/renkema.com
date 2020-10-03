import React from "react"
import { motion } from "framer-motion"

export default function Input(props) {
  const [focused, setFocused] = React.useState(false)

  const { onChange, value } = props

  const handleChange = React.useCallback(e => onChange(e.target.value), [
    onChange,
  ])

  console.log(focused)

  const handleFocus = () => setFocused(true)
  const handleBlur = () =>
    setTimeout((console.log("timeout"), setFocused(false)), 5000)

  // const handleKey = event => {
  //   event.key === "Enter"
  //     ? document.getElementById("quantity").blur()
  //     : undefined
  // }

  const variants = {
    hide: {
      y: -10,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="wrap-labelinput">
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="12"
        value={value}
        onFocus={handleFocus}
        // onBlur={setTimeout(
        //   () => setFocused(false),
        //   console.log("BLURRED"),
        //   2000
        // )}
        onBlur={handleBlur}
        // onKeyPress={handleKey}
        onChange={handleChange}
      ></input>
      <motion.div
        animate={focused ? "show" : "hide"}
        initial={"hide"}
        variants={variants}
        style={{ fontSize: "12px" }}
      >
        Visit{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"http://loaders.io/"}
        >
          the site
        </a>{" "}
        to create your own loader.
      </motion.div>
    </div>
  )
}
