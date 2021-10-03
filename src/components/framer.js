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
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://www.framer.com/"
            target="_blank"
          >
            <motion.h1
              className="subject subject-framer header"
              variants={header}
              initial="visible"
              // animate={isInViewport ? "visible" : "hidden"}
            >
              Framer
              <LinkArrow />
            </motion.h1>
          </a>

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
          </motion.div>
        </motion.div>
        <a href="https://www.framer.com" target="_blank">
          <motion.div
            className="imgright imagecard"
            variants={imagebackground}
            initial="visible"
            whileHover={{ rotate: 5 }}
            // animate={isInViewport ? "visible" : "hidden"}
          >
            <FramerImg></FramerImg>
          </motion.div>
        </a>
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

function LinkArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="13"
      // style={
      //   props.inline ? { transform: "scale(0.8)", marginLeft: "-2px" } : {}
      // }
      style={{ top: "10px", marginLeft: 10 }}
    >
      <path
        d="M 0.014 3.572 L 9.068 3.43 L 6.459 0.644 L 7.065 0 L 10.674 3.854 L 6.941 7.822 L 6.357 7.197 L 9.055 4.328 L 0 4.469 Z"
        transform="translate(1.973 2.822) rotate(-45 5.337 3.911)"
        fill="rgb(255, 40, 92)"
        strokeWidth="0.29"
        stroke="rgb(255, 40, 92)"
        strokeMiterlimit="10"
      ></path>
    </svg>
  )
}
