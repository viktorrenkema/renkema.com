import React from "react"
import Slash from "../components/slash"
import {
  motion,
  useMotionValue,
  useViewportScroll,
  useTransform,
} from "framer-motion"

export default function Introduction(props) {
  return (
    <div className="intro">
      {/* <div className="hi">
        <p>Hey! My name is</p>
      </div> */}
      <div className="name">
        <h1>Viktor Renkema.</h1>
      </div>
      <Slash></Slash>
      <div className="titles">
        <p>PSYCHOLOGIST EXPLORING UX AND INTERACTION DESIGN</p>
      </div>
      <div className="about">
        <p>
          I'm very interested in the space where human behaviour and technology
          meet, from web development to user experience research. Right now I'm
          helping users and organizations become succesful at Framer.
        </p>
      </div>
    </div>
  )
}

// export function Scroller(props) {
//   const { scrollYProgress } = useViewportScroll()
//   const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2])

//   const icon = {
//     hidden: {
//       opacity: 0,
//       pathLength: 0,
//       fill: "#f5f5f5",
//       strokeWidth: "3",
//       stroke: "#777777",
//     },
//     visible: {
//       opacity: 1,
//       pathLength: 1,
//       strokeWidth: "3",
//       stroke: "#777777",
//     },
//   }

//   return (
//     <motion.div className="Cont-ScrollIcon">
//       <motion.svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="50"
//         height="52"
//         viewBox="0 0 201 201"
//         className="item"
//       >
//         <motion.path
//           variants={icon}
//           whileHover={"hidden"}
//           initial="hidden"
//           animate="visible"
//           transition={{
//             default: { duration: 2, ease: "easeInOut" },
//             fill: { duration: 2, ease: [1, 0, 0.8, 1] },
//           }}
//           d="M 0.5 0.5 L 0.5 47 L 54.5 101 L 109 46.5 L 109 0.5 L 54.5 55 Z"
//           strokeDasharray="0 1"
//         />
//       </motion.svg>
//     </motion.div>
//   )
// }
