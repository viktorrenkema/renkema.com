import React from "react"
// import useIsInViewport from "use-is-in-viewport"
import { motion } from "framer-motion"
import framerlogo from "../../src/images/framerlogo.png"
import Link from "./link"

const image = {
  default: {
    scale: 1,
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}
const header = {
  hidden: { opacity: 0, transition: { duration: 1.3 } },
  visible: { opacity: 1, transition: { duration: 1 } },
}

const copy = {
  hidden: { opacity: 0, transition: { duration: 1.3 } },
  visible: { opacity: 1, transition: { duration: 1 } },
}

const imagebackground = {
  hidden: { opacity: 0, transition: { duration: 1.3 } },
  visible: { opacity: 1, transition: { duration: 1 } },
}

export default function Framer(props) {
  // const [isInViewport, targetRef] = useIsInViewport({ threshold: 40 })

  return (
    <section
      className="framer"
      // ref={targetRef}
    >
      <div className="grid grid--framer">
        <motion.div
          style={{
            flexDirection: "column",
            opacity: "1",
            transform: "none",
            display: "flex",
            placeContent: "center",
          }}
        >
          <motion.h1
            className="subject subject-framer header"
            variants={header}
            initial="visible"
            // animate={isInViewport ? "visible" : "hidden"}
          >
            Framer.
          </motion.h1>
          <motion.div
            variants={copy}
            className="description carddescriptionleft"
            initial="visible"
            // animate={isInViewport ? "visible" : "hidden"}
          >
            <motion.p className="copy">
              Joining Framer, I started out in the role of Community and Support
              Specialist where I ensured users are getting the support they
              required. Next to providing direct help via our support channels,
              I wrote support articles, created educational community posts, and
              assisted users with organising meetups in their local communities.
              <br></br>
              <br></br>I have since moved into the Product Specialist role,
              where my focus extends to also help organizations like KLM,
              Google, AirFrance and others become succesful by providing them
              with on-site workshops, direct support, and learning materials.
            </motion.p>{" "}
            <Link
              inline={false}
              forbio={true}
              linktext={"Visit Framer.com"}
              url={"https://www.framer.com/"}
            ></Link>{" "}
            {/* <LearnmoreBlob
              destination={"https://www.framer.com/"}
              text={"Visit Framer.com"}
              d1={
                "M 118.164 16.158 C 130.164 26.358 137.964 41.258 140.964 57.158 C 143.864 73.158 142.064 90.058 133.164 100.858 C 124.364 111.558 108.664 116.158 92.164 124.958 C 75.664 133.658 58.364 146.658 42.064 145.558 C 25.764 144.558 10.564 129.458 4.064 112.158 C -2.436 94.958 -0.236 75.558 4.364 57.758 C 8.864 39.958 15.764 23.758 27.764 13.658 C 39.764 3.458 56.964 -0.542 73.564 0.058 C 90.164 0.658 106.264 6.058 118.164 16.158 Z"
              }
              d2={
                "M 122.599 18.203 C 138.399 27.303 157.799 36.203 160.099 48.203 C 162.299 60.303 147.399 75.503 135.799 89.803 C 124.299 104.103 115.999 117.503 102.899 125.703 C 89.799 133.903 71.899 137.003 55.299 132.603 C 38.599 128.303 23.199 116.603 12.599 100.903 C 1.999 85.103 -3.801 65.303 2.799 51.103 C 9.299 36.903 28.199 28.303 43.599 19.103 C 58.899 9.903 70.699 0.203 82.699 0.003 C 94.599 -0.197 106.799 9.103 122.599 18.203 Z"
              }
            ></LearnmoreBlob> */}
          </motion.div>
        </motion.div>
        <motion.div
          className="imgright imagecard"
          variants={imagebackground}
          initial="visible"
          // animate={isInViewport ? "visible" : "hidden"}
        >
          <FramerImg></FramerImg>
        </motion.div>
      </div>
    </section>
  )
}

function FramerImg(props) {
  // const [isInViewportImg, targetRef] = useIsInViewport({ threshold: 30 })

  return (
    <motion.img
      variants={image}
      // ref={targetRef}
      initial="visible"
      // animate={isInViewportImg ? "visible" : "hidden"}
      className="img-framer image"
      src={framerlogo}
      width={"100%"}
      height="100%"
    ></motion.img>
  )
}
