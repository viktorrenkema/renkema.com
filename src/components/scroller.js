// 📦 Packages
import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from "styled-components"

// 💅🏽 Styled Components
import { Paragraph } from "./resources/styledGlobal.js"

const ScrollerContainer = styled(motion.div)`
  width: fit-content;
  height: fit-content;
  bottom: 25px;
  position: fixed;
  z-index: 3;
  margin-left: -13px;
  width: fit-content;
  height: fit-content;
  left: 2rem;
  z-index: 3;
  margin-left: -13px;
  /* box-shadow: 0 6.7px 5.3px rgb(0 0 0 / 4%), 0 22.3px 17.9px rgb(0 0 0 / 6%),
    0 100px 80px rgb(0 0 0 / 10%);
  border-radius: 100px;
  width: 30px;
  height: 30px;
  display: flex;
  background: white;
  align-items: center;
  justify-content: center; */
`

const floatingVariants = {
  initial: {
    y: -10,
    transition: { repeat: Infinity, repeatType: "reverse", duration: 2 },
  },
  second: {
    y: 0,
    transition: { repeat: Infinity, repeatType: "reverse", duration: 2 },
  },
}

export default function Scroller({ label }) {
  let { scrollYProgress } = useViewportScroll() // Track the y scroll

  const adjustedPathLength = useTransform(scrollYProgress, [0, 1], [1, 0]) // Transforms our scrollYProgress from [0, 1] to [1, 0]

  return (
    <ScrollerContainer
      variants={floatingVariants}
      animate={"second"}
      initial={"initial"}
    >
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="23" height="22">
        <motion.path
          style={{
            pathLength: adjustedPathLength,
          }}
          d="M 11 3 L 11 18 L 7 14"
          fill="transparent"
          stroke="#000000"
          strokeLinejoin="round"
        ></motion.path>
        <motion.path
          style={{
            pathLength: adjustedPathLength,
          }}
          d="M 11 3 L 11 18 L 15 14"
          fill="transparent"
          stroke="#000000"
          strokeLinejoin="round"
        ></motion.path>
      </motion.svg>
    </ScrollerContainer>
  )
}

// // 📦 Packages
// import React from "react"
// import { motion, useViewportScroll, useTransform } from "framer-motion"
// import styled from "styled-components"

// // 💅🏽 Styled Components
// import { Paragraph } from "./resources/styledGlobal.js"

// const ScrollerContainer = styled(motion.span)`
//   width: fit-content;
//   height: fit-content;
//   bottom: 25px;
//   position: fixed;
//   left: 50%;
//   z-index: 3;
//   margin-left: -13px;
//   width: fit-content;
//   height: fit-content;
//   bottom: 25px;
//   position: fixed;
//   left: 50%;
//   z-index: 3;
//   margin-left: -13px;
// `

// export default function Scroller({ label }) {
//   let { scrollYProgress } = useViewportScroll() // Track the y scroll

//   const modifier = useTransform(scrollYProgress, x => {
//     if (x > 1) {
//       return 1
//     }
//     if (x < 0) {
//       return 0
//     }
//     return x
//   })

//   scrollYProgress.onChange(() => {
//     console.log(modifier.current)
//   })

//   const yRange = [0, 0.01]
//   const opacityRange = [1, 0]

//   const reverse = useTransform(scrollYProgress, yRange, opacityRange)

//   const styleScrolldownP = {
//     opacity: 1,
//     // opacity: reverse,
//     width: "fit-content",
//     height: "fit-content",
//     bottom: "58px",
//     position: "fixed",
//     zIndex: 1000,
//     color: "#171717",
//     fontSize: "12px",
//     left: "50%",
//     transform: "translate(-50%, 0%)",
//   }
//   return (
//     <ScrollerContainer>
//       <motion.svg width="23" height="22">
//         <motion.defs>
//           <linearGradient id="progress" x1="0" y1="1" x2="0" y2="0">
//             <motion.stop id="stop1" offset={modifier} stopColor="transparent" />
//             <motion.stop id="stop2" offset={modifier} stopColor="black" />
//           </linearGradient>
//         </motion.defs>
//         <motion.path
//           d="M 10.927 2.061 L 11.13 15.294 L 15.11 11.48 L 16.03 12.366 L 10.524 17.641 L 4.856 12.185 L 5.749 11.331 L 9.847 15.275 L 9.646 2.04 Z"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           fill="url(#progress)"
//         ></motion.path>
//       </motion.svg>
//     </ScrollerContainer>
//   )
// }
