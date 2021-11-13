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
`

export default function CodeBlock({ text }) {
  return (
    <Wrapper>
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
