import React, { useEffect, useRef } from "react"
import {
  motion,
  useDomEvent,
  useViewportScroll,
  useMotionValue,
} from "framer-motion"

import LearnmoreStaticBlob from "../components/learnmore-staticblob"

export default function ProjectsBlob(props) {
  // const [scrollPosition, setScrollPosition] = React.useState(0)

  // const handleScroll = () => {
  //   const position = window.pageYOffset

  //   // const y = useMotionValue(0)
  //   const { scrollYProgress } = useViewportScroll()

  //   console.log(scrollYProgress) // this allows us to log motionvalues each time we scroll

  //   setScrollPosition(position)
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true })
  // }, [])

  // Setting and controlling state

  const [isOpen, setOpen] = React.useState(false)

  // useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false))

  const onHoverStart = () => {
    setOpen(true)
  }

  const onHoverEnd = () => {
    setOpen(false)
  }

  const tapBlob = () => {
    window.matchMedia("(any-hover: none)").matches ? setOpen(!isOpen) : "null"
  }

  // Variants

  const overlay = {
    hidden: {
      opacity: 0,
      width: "0px",
      height: "0px",
      transition: {
        when: "beforeChildren",
        duration: 0.4,
        ease: "linear",
        staggerChildren: 0.01,
      },
      visibility: "hidden",
    },
    visible: {
      opacity: 1,
      height: "auto",
      width: "600px",
      transition: {
        ease: "linear",
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
      d: props.blobpath1,
      transition: {
        duration: 3,
        yoyo: Infinity,
        ease: "easeOut",
      },
    },
    second: {
      d: props.blobpath2,
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

  const blobwrap = {
    inactive: {
      zIndex: 3,
    },
    active: {
      zIndex: 4,
    },
  }

  const blobwrapper = {
    height: "400px",
    width: "600px",
    position: "relative",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  }
  return (
    <motion.div
      id="ProjectsBlob"
      variants={blobwrap}
      animate={isOpen ? "active" : "inactive"}
      initial="inactive"
      style={blobwrapper}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onTap={tapBlob}
    >
      <motion.div
        className="flexwrapper-blob"
        style={{ display: "flex", width: "800px", justifyContent: "center" }}
      >
        <motion.div
          className="overlay"
          variants={overlay}
          animate={isOpen ? "visible" : "hidden"}
          initial="hidden"
        >
          <motion.p variants={item} className="copy_projecttitle">
            {props.h1}
          </motion.p>
          <motion.p variants={item} class="copy_projectlabel">
            {props.label}
          </motion.p>
          <motion.div variants={item}>
            <p className="projectdescriptions">
              {props.mainbody}
              <br></br>
            </p>
            <ul className="projectdescriptions">
              <p style={{ paddingBottom: "1rem", color: "white" }}>
                {props.listintro}
              </p>
              {props.list1 ? (
                <li style={{ color: "white" }}>{props.list1}</li>
              ) : null}
              {props.list2 ? (
                <li style={{ color: "white" }}>{props.list2}</li>
              ) : null}
              {props.list3 ? (
                <li style={{ color: "white" }}>{props.list3}</li>
              ) : null}
              <LearnmoreStaticBlob
                destination={props.link}
                text={props.linktext}
              ></LearnmoreStaticBlob>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="wrap_imagecardone"
          variants={imgwrapper}
          style={{ width: "300px", margin: "auto" }}
          animate={isOpen ? "large" : "small"}
          initial="small"
        >
          {/* <a
            href="https://www.framer.com/learn/guide/accordion-design-part-1/"
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <motion.img
            className="imageplaceholder"
            src={props.assetfill}
            width="100%"
            height="100%"
          ></motion.img>
          {/* </a> */}
        </motion.div>
      </motion.div>
      <motion.div className="svg-wrapper" style={{ position: "absolute" }}>
        <motion.svg
          variants={blob}
          style={{
            zIndex: "4",
            pointerEvents: "none",
            verticalAlign: "middle",
            overflow: "visible",
          }}
          initial="normal"
          animate={isOpen ? "hovered" : "normal"}
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="355"
        >
          <motion.path
            variants={blobpath}
            initial={"first"}
            animate={"second"}
            fill={props.blobfill}
          ></motion.path>
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
