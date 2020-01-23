// import * as React from "react"
// import { motion } from "framer-motion"

// // Outer/lighter wave

// const mytransition = {
//   yoyo: Infinity,
//   ease: "linear",
//   duration: 6,
// }
// const wave = {
//   first: {
//     d:
//       "M 1562 0 L 0 0 L 0 356.982 C 0 356.982 608.876 346.558 736.5 485 C 864.121 623.442 911.497 609.247 1115.5 646.5 C 1319.503 683.75 1363.76 715.386 1447.5 767 C 1531.24 818.614 1562 1213.5 1562 1213.5 Z",
//     // fill: "#f1f1f1",
//     fill: "#05f",
//     opacity: 1,
//   },
//   second: {
//     d:
//       "M 1562 0 L 0 0 L 0 320.5 C 0 320.5 395.876 313.058 523.5 451.5 C 651.121 589.942 738.497 661.247 942.5 698.5 C 1146.503 735.75 1311.26 811.386 1395 863 C 1478.74 914.614 1562 1213.5 1562 1213.5 Z",
//     // fill: "#f1f1f1",
//     fill: "#05f",
//     opacity: 1,
//   },
//   hovered: {
//     d:
//       "M 571.498 1.78 L 0 2.03 C 0 2.03 438.117 -82.293 490 -26 C 515.941 2.147 578.485 -27.094 604 -5 C 629.515 17.094 562.534 80.926 604 88.5 C 686.933 103.647 565.874 146.782 604 161.5 C 642.126 176.218 571.497 267.78 571.497 267.78",
//     opacity: 0,
//     transition: { duration: 0.5 },
//   },
// }

// export default function CornerMotionOne(props) {
//   // const [hovered, setHovered] = React.useState(false)

//   // const onHoverStart = () => {
//   //   setHovered(true)
//   // }

//   // const onHoverEnd = () => {
//   //   setHovered(false)
//   // }

//   return (
//     <motion.div className="WrapperWaveOne">
//       <motion.div className="Cont-MyWaveOne">
//         <motion.svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="1562"
//           height="1014"
//           className="SVG-MyWaveOne"
//           // onHoverStart={onHoverStart}
//           // onHoverEnd={onHoverEnd}
//         >
//           <motion.path
//             variants={wave}
//             // initial="first"
//             // animate="second"
//             initial={"first"}
//             animate={"second"}
//             transition={mytransition}
//           />
//         </motion.svg>
//       </motion.div>
//     </motion.div>
//   )
// }

import * as React from "react"
import { motion } from "framer-motion"

// Outer/lighter wave

const mytransition = {
  yoyo: Infinity,
  ease: "linear",
  duration: 4,
}
const wave = {
  first: {
    d:
      "M 571.468 0 L 0 0.25 C 0 0.25 220.101 43.832 271.981 100.126 C 323.86 156.42 336.044 191.98 418.973 207.128 C 501.902 222.275 498.758 228.077 536.882 242.795 C 575.006 257.513 571.468 266 571.468 266",
    fill: "#f1f1f1",
    opacity: 1,
  },
  second: {
    d:
      "M 571.545 4.634 L 0 4.884 C 0 4.884 180.113 -18.66 232 37.634 C 283.886 93.928 354.56 173.986 437.5 189.134 C 520.44 204.281 498.871 201.416 537 216.134 C 575.129 230.852 571.545 270.634 571.545 270.634",
    fill: "#f1f1f1",
    opacity: 1,
  },
  hovered: {
    d:
      "M 571.498 1.78 L 0 2.03 C 0 2.03 438.117 -82.293 490 -26 C 515.941 2.147 578.485 -27.094 604 -5 C 629.515 17.094 562.534 80.926 604 88.5 C 686.933 103.647 565.874 146.782 604 161.5 C 642.126 176.218 571.497 267.78 571.497 267.78",
    opacity: 0,
    transition: { duration: 0.5 },
  },
}

export default function CornerMotionOne(props) {
  // const [hovered, setHovered] = React.useState(false)

  // const onHoverStart = () => {
  //   setHovered(true)
  // }

  // const onHoverEnd = () => {
  //   setHovered(false)
  // }

  return (
    <motion.div className="WrapperWaveOne">
      <motion.div className="Cont-MyWaveOne">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="572"
          height="270"
          className="SVG-MyWaveOne"
          // onHoverStart={onHoverStart}
          // onHoverEnd={onHoverEnd}
        >
          <motion.path
            variants={wave}
            // initial="first"
            // animate="second"
            initial={"first"}
            animate={"second"}
            transition={mytransition}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
