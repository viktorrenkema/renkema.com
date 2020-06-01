import { motion } from "framer-motion"
import React from "react"

const name_stagger = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
}

const description_stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.4,
    },
  },
}

const email_stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.4,
    },
  },
}

const learnmore_separator = {
  hidden: {
    width: "30%",
  },
  visible: {
    width: "100%",
  },
}

export default function Introduction(props) {
  const [hovered, setHovered] = React.useState(false)

  const onHoverStart = () => {
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }

  const blob = {
    hidden: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        ease: "linear",
      },
    },
    visible: {
      transform: "scale(1)",
      opacity: 1,
    },
  }

  const text = {
    white: {
      color: "white",
    },
    black: {
      color: "white",
    },
  }

  const blobpath = {
    first: {
      d:
        "M 118.164 16.158 C 130.164 26.358 137.964 41.258 140.964 57.158 C 143.864 73.158 142.064 90.058 133.164 100.858 C 124.364 111.558 108.664 116.158 92.164 124.958 C 75.664 133.658 58.364 146.658 42.064 145.558 C 25.764 144.558 10.564 129.458 4.064 112.158 C -2.436 94.958 -0.236 75.558 4.364 57.758 C 8.864 39.958 15.764 23.758 27.764 13.658 C 39.764 3.458 56.964 -0.542 73.564 0.058 C 90.164 0.658 106.264 6.058 118.164 16.158 Z",

      transition: {
        duration: 3,
      },
    },
    second: {
      d:
        "M 122.599 18.203 C 138.399 27.303 157.799 36.203 160.099 48.203 C 162.299 60.303 147.399 75.503 135.799 89.803 C 124.299 104.103 115.999 117.503 102.899 125.703 C 89.799 133.903 71.899 137.003 55.299 132.603 C 38.599 128.303 23.199 116.603 12.599 100.903 C 1.999 85.103 -3.801 65.303 2.799 51.103 C 9.299 36.903 28.199 28.303 43.599 19.103 C 58.899 9.903 70.699 0.203 82.699 0.003 C 94.599 -0.197 106.799 9.103 122.599 18.203 Z",
      // d:
      //   "M 140.1 56.4 C 155.9 65.5 175.3 74.4 177.6 86.4 C 179.8 98.5 164.9 113.7 153.3 128 C 141.8 142.3 133.5 155.7 120.4 163.9 C 107.3 172.1 89.4 175.2 72.8 170.8 C 56.1 166.5 40.7 154.8 30.1 139.1 C 19.5 123.3 13.7 103.5 20.3 89.3 C 26.8 75.1 45.7 66.5 61.1 57.3 C 76.4 48.1 88.2 38.4 100.2 38.2 C 112.1 38 124.3 47.3 140.1 56.4 Z",
      transition: {
        duration: 3,
      },
    },
  }

  return (
    <section className={"intro"}>
      <div className={"grid_intro container"}>
        <motion.div
          className={"name nameStagger"}
          variants={name_stagger}
          initial="hidden"
          animate="visible"
        >
          {/* <h1>
            Hey! I’m Viktor, a psychologist exploring design and web
            development.
          </h1> */}
          <h1>Hey, my name is Viktor</h1>
          {/* <h1>Hey, my name is Viktor.</h1> */}
        </motion.div>
        <motion.div
          className="about descriptionStagger"
          variants={description_stagger}
          initial="hidden"
          animate="visible"
        >
          {/* <p className="copy-intro">
            I’m currently helping people become succesful at Framer.
          </p> */}
          <p className="copy-intro">
            I’m a psychologist exploring design and web development. Right now
            I’m helping people make fun prototypes at Framer.
          </p>
          <p className="subcopy-intro">
            Feel free to reach out{" "}
            <a
              href="https://www.twitter.com/vrenkema"
              target="_blank"
              rel="noopener noreferrer"
            >
              on Twitter
            </a>{" "}
            or{" "}
            <a
              href="mailto:viktor@renkema.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              by email
            </a>{" "}
            to chat motorcycles, neurotransmitters, or anything, really.
          </p>
          {/* <p className="copy-intro">
            I’m interested in the space where human behaviour and technology
            meet, from web development to user experience. Right now I’m helping
            users and organizations become succesful at Framer.
          </p> */}
        </motion.div>
        <motion.div
          className={"email_stagger"}
          variants={email_stagger}
          initial="hidden"
          animate="visible"
        ></motion.div>
      </div>
    </section>
  )
}
