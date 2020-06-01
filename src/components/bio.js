import React from "react"
import useIsInViewport from "use-is-in-viewport"
import Groningen from "../../src/images/groningen.jpeg"
import { motion } from "framer-motion"
import LearnmoreBlob from "../components/learnmore-blob"

const image = {
  default: {
    scale: 1,
  },
  hovered: {
    scale: 1.05,
  },
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}
const header = {
  hidden: { opacity: 0, transition: { duration: 1.3 } },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const copy = {
  hidden: { opacity: 0, transition: { duration: 1.3 } },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const section = {
  hidden: { opacity: 0, transition: { duration: 1.3 } },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export default function Background(props) {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 40 })

  return (
    <motion.section
      ref={targetRef}
      className="bio"
      variants={section}
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
    >
      <div className="grid grid--bio">
        <motion.div
          style={{ position: "relative" }}
          variants={image}
          className="imagecard imgleft"
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
        >
          {/* <motion.div style={svgstyle}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="500"
              height="475"
            >
              <motion.path
                d="M 478.723 378.759 C 402.128 505.308 97.34 505.308 20.745 379.291 C -55.319 252.743 97.34 0.177 250 0.177 C 402.66 0.177 555.319 252.743 478.723 378.759 Z"
                fill="rgb(255,0,102)"
              ></motion.path>
            </motion.svg>
          </motion.div> */}
          <PictureFrame></PictureFrame>
        </motion.div>
        <motion.div
          style={{
            flexDirection: "column",
            opacity: "1",
            transform: "none",
            display: "flex",
            placeContent: "start",
          }}
        >
          <motion.h1
            className={"subject subject-bio header"}
            variants={header}
            initial="hidden"
            animate={isInViewport ? "visible" : "hidden"}
          >
            About me
          </motion.h1>
          <motion.div className="description carddescriptionright">
            <motion.p
              className="copy"
              variants={copy}
              initial="hidden"
              animate={isInViewport ? "visible" : "hidden"}
            >
              While obtaining my Master’s degree in Psychology, my interest in
              human behaviour started to extend to include the field of
              behaviour and web technology. To pursue this, I began learning
              more about web development and digital user experiences.
              <br></br>
              <br></br>After starting out learning about web technologies
              creating A/B tests for an online webshop. After this, I got to
              learn more about the UX side when I started working at the Medical
              Center Groningen. I studied the workflows of medical staff for
              whom we built and implemented custom user interfaces in Epic, the
              hospital-wide electronic medical record.
              <br></br>
              {/* <br></br>About a year later I started working at Framer, where I
            manage our thriving communities and ensure all our users and
            organizations are receiving the technical support they require. */}
            </motion.p>

            <LearnmoreBlob
              destination={"mailto:viktor@renkema.com"}
              text={"Ask me more"}
              d1={
                "M 135.781 20.857 C 143.104 33.576 138.9 53.464 137.815 69.7 C 136.73 85.801 138.9 98.113 135.781 111.237 C 132.662 124.361 124.389 138.162 112.998 141.274 C 101.742 144.385 87.231 136.944 75.297 129.503 C 63.363 122.196 54.006 114.89 39.224 103.796 C 24.306 92.701 4.1 77.683 0.574 59.959 C -2.952 42.37 10.203 22.075 27.968 11.116 C 45.733 0.292 68.11 -1.196 88.723 0.698 C 109.336 2.727 128.322 8.139 135.781 20.857 Z"
              }
              d2={
                "M 138.613 0.28 C 156.669 2.744 169.567 23.978 168.981 44.04 C 168.395 64.219 154.324 83.225 140.606 97.89 C 126.77 112.555 113.169 122.762 97.574 129.097 C 81.98 135.433 64.392 137.779 52.901 130.505 C 41.528 123.231 36.134 106.337 26.52 91.203 C 16.905 76.069 3.069 62.577 0.49 46.621 C -2.207 30.666 6.469 12.012 20.774 8.844 C 34.962 5.677 54.66 17.761 76.117 15.766 C 97.574 13.772 120.673 -2.301 138.613 0.28 Z"
              }
            ></LearnmoreBlob>
          </motion.div>
        </motion.div>{" "}
      </div>
    </motion.section>
  )
}

function PictureFrame(props) {
  const [isInViewportImg, targetRef] = useIsInViewport({ threshold: 30 })

  const [, setHovered] = React.useState(false)

  const onHoverStart = () => {
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }

  return (
    <motion.img
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      variants={image}
      ref={targetRef}
      initial="hidden"
      animate={isInViewportImg ? "visible" : "hidden"}
      className="img-groningen image"
      src={Groningen}
      width={"100%"}
      height="100%"
    ></motion.img>
  )
}
