import * as React from 'react'
import Link from 'gatsby-link'
import { motion, useMotionValue, useViewportScroll } from 'framer-motion'

export default function IconEmail(props) {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  }

  return (
    <motion.div className="IconEmail">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 201 201"
        className="item"
      >
        <motion.path
          variants={icon}
          whileHover={'hidden'}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          d="M 9 22 C 7.91 22 7 22.91 7 24 L 7 76 C 7 77.09 7.91 78 9 78 L 91 78 C 92.09 78 93 77.09 93 76 L 93 24 C 93 22.91 92.09 22 91 22 Z M 9.563 24 L 90.438 24 L 50 58.656 Z M 9 26.156 L 35 48.47 L 9 74.47 Z M 91 26.156 L 91 74.47 L 65 48.47 L 91 26.157 Z M 36.562 49.781 L 49.344 60.75 C 49.72 61.077 50.28 61.077 50.656 60.75 L 63.437 49.78 L 89.657 76 L 10.343 76 L 36.561 49.781 Z M 9 75.906 L 9.094 76 L 9 76 Z M 91 75.906 L 91 76 L 90.906 76 Z"
          strokeDasharray="3 2 4 1"
          fill="rgb(0,0,0)"
          strokeWidth="1"
          stroke="#777777"
        />
      </motion.svg>
    </motion.div>
  )
}

// ;<svg xmlns="http://www.w3.org/2000/svg" width="100" height="125">
//   <path d="M 9 22 C 7.91 22 7 22.91 7 24 L 7 76 C 7 77.09 7.91 78 9 78 L 91 78 C 92.09 78 93 77.09 93 76 L 93 24 C 93 22.91 92.09 22 91 22 Z M 9.563 24 L 90.438 24 L 50 58.656 Z M 9 26.156 L 35 48.47 L 9 74.47 Z M 91 26.156 L 91 74.47 L 65 48.47 L 91 26.157 Z M 36.562 49.781 L 49.344 60.75 C 49.72 61.077 50.28 61.077 50.656 60.75 L 63.437 49.78 L 89.657 76 L 10.343 76 L 36.561 49.781 Z M 9 75.906 L 9.094 76 L 9 76 Z M 91 75.906 L 91 76 L 90.906 76 Z"></path>
// </svg>
