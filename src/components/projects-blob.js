import React from "react"
import { motion } from "framer-motion"
import accordion from "../../src/images/proj_accordion.gif"
import Chevron from "./chevron"
import { useGlobal } from "reactn"
import LearnmoreStaticBlob from "../components/learnmore-staticblob"

export default function ProjectsBlob(props) {
  // Setting and controlling state

  const [hovered, setHovered] = React.useState(false)

  const onHoverStart = () => {
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }

  // Variants

  const overlay = {
    hidden: {
      opacity: 0,
      width: "0px",
      transition: {
        when: "beforeChildren",
        duration: 0.4,
        staggerChildren: 0.01,
      },
      visibility: "hidden",
    },
    visible: {
      opacity: 1,
      width: "600px",
      transition: {
        when: "beforeChildren",
        duration: 0.6,
        staggerChildren: 0.05,
      },
      visibility: "visible",
    },
  }

  const imgwrapper = {
    small: {
      transform: "scale(0.5)",
      transition: {
        ease: "linear",
        duration: 0.3,
      },
    },
    large: {
      transform: "scale(1)",
      transition: {
        ease: "linear",
        duration: 0.3,
      },
    },
  }

  const blob = {
    normal: {
      transform: "scale(1)",
      transition: {
        ease: "linear",
        duration: 0.3,
      },
    },
    hovered: {
      transform: "scale(3)",
      transition: {
        ease: "linear",
        duration: 0.3,
      },
    },
  }

  const blobpath = {
    first: {
      d:
        "M 269.349 65.192 C 298.372 77.85 334.65 81.836 361.566 100.824 C 388.483 119.578 406.037 153.1 395.972 180.762 C 385.908 208.659 348.459 230.46 329.969 263.749 C 311.245 297.271 311.947 341.812 292.755 352.126 C 273.796 362.441 235.412 338.061 200.304 332.435 C 165.196 326.809 133.364 339.702 100.831 337.123 C 68.531 334.779 35.53 316.963 17.04 289.301 C -1.217 261.639 -5.196 224.131 7.677 194.125 C 20.316 163.884 49.807 141.145 64.787 107.388 C 79.532 73.631 80 28.856 99.426 10.805 C 119.087 -7.48 158.174 1.194 188.367 15.962 C 218.794 30.966 240.327 52.298 269.349 65.192 Z",
      // d: "M 389.818 4.004 C 405.818 12.377 379.636 88.461 376.364 137.241 C 373.091 186.022 392.727 207.864 396.727 232.254 C 400.727 256.645 388.727 283.583 371.636 309.43 C 354.545 335.276 332.364 360.031 304 372.408 C 275.273 385.149 240.364 385.877 186.545 395.706 C 132.727 405.171 60 424.101 33.818 398.982 C 8 374.228 29.091 305.789 24.727 243.904 C 20 182.018 -9.818 126.684 4.727 90.281 C 19.273 53.877 78.182 36.768 128 43.684 C 177.818 50.601 217.818 81.544 266.909 67.711 C 316 53.877 374.182 -4.732 389.818 4.004 Z",
      transition: {
        duration: 3,
        yoyo: Infinity,
        ease: "easeOut",
      },
    },
    second: {
      // d:
      //   "M 374.754 1.967 C 404.918 13.441 400.984 82.284 389.18 133.097 C 377.377 183.583 357.377 216.365 350.82 258.655 C 343.934 300.944 350.82 352.741 330.82 368.804 C 310.492 385.196 263.607 365.854 228.525 349.135 C 193.443 332.416 170.492 318.319 133.77 307.501 C 97.049 296.683 46.23 289.143 21.311 261.605 C -3.279 234.068 -2.295 186.533 5.574 134.737 C 13.115 82.612 27.541 26.226 63.607 16.391 C 100 6.884 158.033 43.929 219.344 39.667 C 280.656 35.733 344.918 -9.835 374.754 1.967 Z",
      d:
        "M 269.349 65.192 C 298.372 77.85 334.65 81.836 361.566 100.824 C 388.483 119.578 406.037 153.1 395.972 180.762 C 385.908 208.659 348.459 230.46 329.969 263.749 C 311.245 297.271 311.947 341.812 292.755 352.126 C 273.796 362.441 235.412 338.061 200.304 332.435 C 165.196 326.809 133.364 339.702 100.831 337.123 C 68.531 334.779 35.53 316.963 17.04 289.301 C -1.217 261.639 -5.196 224.131 7.677 194.125 C 20.316 163.884 49.807 141.145 64.787 107.388 C 79.532 73.631 80 28.856 99.426 10.805 C 119.087 -7.48 158.174 1.194 188.367 15.962 C 218.794 30.966 240.327 52.298 269.349 65.192 Z",
      transition: {
        duration: 3,
        yoyo: "easeOut",
        flip: Infinity,
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 },
  }

  const blobwrapper = {
    height: "600px",
    width: "600px",
    position: "relative",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  }
  return (
    <motion.div
      id="ProjectsBlob"
      style={blobwrapper}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <motion.div
        className="flexwrapper-blob"
        style={{ display: "flex", width: "800px", justifyContent: "center" }}
      >
        <motion.div
          className="overlay"
          variants={overlay}
          animate={hovered ? "visible" : "hidden"}
          initial="hidden"
        >
          <motion.p variants={item} className="copy_projecttitle">
            Creating an accordion design
          </motion.p>
          <motion.p variants={item} class="copy_projectlabel">
            FRAMER LEARN TUTORIAL
          </motion.p>
          <motion.div variants={item}>
            <p className="projectdescriptions">
              While learning React, I documented some of the projects I worked
              on. One of these turned into a 3-part tutorial, guiding users
              through creating a single-select accordion effect within Framer.
              <br></br>
            </p>
            <ul className="projectdescriptions">
              <p style={{ paddingBottom: "1rem", color: "white" }}>
                Some of the topics addressed include:
              </p>
              <li style={{ color: "white" }}>
                applying React Hooks to toggle states
              </li>
              <li style={{ color: "white" }}>creating custom animations</li>
              <li style={{ color: "white" }}>
                mapping over an array with JSON data
              </li>
              <LearnmoreStaticBlob
                destination={
                  "https://www.framer.com/learn/guide/accordion-design-part-1/"
                }
                text={"Read the tutorial"}
              ></LearnmoreStaticBlob>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="wrap_imagecardone"
          variants={imgwrapper}
          style={{ width: "300px", margin: "auto" }}
          animate={hovered ? "large" : "small"}
          initial="small"
        >
          <a
            href="https://www.framer.com/learn/guide/accordion-design-part-1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              className="imageplaceholder"
              src={accordion}
              width="100%"
              height="100%"
            ></motion.img>
          </a>
        </motion.div>
      </motion.div>
      <motion.div className="svg-wrapper" style={{ position: "absolute" }}>
        <motion.svg
          variants={blob}
          style={{
            // position: "absolute",
            zIndex: "4",
            verticalAlign: "middle",
          }}
          initial="normal"
          animate={hovered ? "hovered" : "normal"}
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="355"
        >
          <motion.path
            variants={blobpath}
            initial={"first"}
            animate={"second"}
            fill="#ff2b64"
          ></motion.path>
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
