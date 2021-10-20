// 📦 Packages
import * as React from "react"
import { motion, useAnimation } from "framer-motion"
import styled from "styled-components"

// 🌱 Components
import { CopyBlock } from "react-code-blocks"

// 🧰 Utils
import theme from "./customTheme.ts"

// 🌀 Variants

// 💅🏽 Styled Components
const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0px;
  background: none;
  /* padding-left: 2rem; */
`

export default function CodeBlock({ text }) {
  // const controls = useAnimation()

  // const variants = {
  //   start: { top: "0px" },
  //   end: { top: "-1100px" },
  // }

  // React.useEffect(() => {
  //   controls.start("end")
  // }, [])

  return (
    <Wrapper
    // onHoverStart={() => {
    //   return controls.stop
    // }}
    // onHoverEnd={() => {
    //   controls.start
    // }}
    // onClick={() => {
    //   controls.stop
    // }}
    // animate={controls}
    // variants={variants}
    // transition={{ duration: 10 }}
    >
      <CopyBlock
        text={text}
        language={"jsx"}
        theme={theme}
        wrapLines={true}
        showLineNumbers={false}
        codeBlock
      />
    </Wrapper>
  )
}
