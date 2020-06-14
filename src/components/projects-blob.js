import React from "react"
import { motion } from "framer-motion"

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

  // Variants

  const overlay = {
    hidden: {
      opacity: 0,
      width: "0px",
      height: "0px",
      visibility: "hidden",
      transition: {
        when: "beforeChildren",
        duration: 0.4,
        ease: "easeIn",
        staggerChildren: 0.01,
      },
      transitionEnd: { zIndex: 0 },
    },
    visible: {
      zIndex: 10,
      opacity: 1,
      height: "400px",
      width: "600px",
      visibility: "visible",
      transition: {
        ease: "easeIn",
        when: "beforeChildren",
        duration: 0.4,
        staggerChildren: 0.05,
      },
      // transitionEnd: { visibility: "visible" },
    },
  }

  const imgwrapper = {
    small: {
      transform: `scale(${props.scaleasset})`,
      transition: {
        ease: "easeIn",
        duration: 0.4,
      },
    },
    large: {
      transform: "scale(1)",
      transition: {
        ease: "easeIn",
        duration: 0.4,
      },
    },
  }

  const blob = {
    normal: {
      transform: "scale(1)",
      transition: {
        ease: "easeIn",
        duration: 0.4,
      },
    },
    hovered: {
      transform: "scale(3)",
      transition: {
        ease: "easeIn",
        duration: 0.4,
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
      opacity: 1,
      transition: { duration: 0.5 },
      transitionEnd: { zIndex: 3 },
    },
    active: {
      opacity: 0.99,
      transition: { duration: 0.5 },
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
    // marginBottom: "20rem",
  }

  const shouldAnimate = props.selectedBlob === props.identifier

  // Setting and controlling state
  const [isOpen, setOpen] = React.useState(false)

  // useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false))

  const onHoverStart = () => {
    props.setSelectedBlob(props.identifier)
  }

  const onHoverEnd = () => {
    props.setSelectedBlob(undefined)
  }

  const tapBlob = () => {
    window.matchMedia("(any-hover: none)").matches
      ? props.setSelectedBlob(
          // props.identifier
          props.selectedBlob === props.identifier ? undefined : props.identifier
        )
      : null
  }

  return (
    <motion.div
      identifier={props.identifier}
      id="ProjectsBlob"
      variants={blobwrap}
      animate={shouldAnimate ? "active" : "inactive"}
      initial="inactive"
      style={blobwrapper}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onTap={tapBlob}
    >
      <motion.div
        className="flexwrapper-blob"
        style={{
          display: "flex",
          width: "800px",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <motion.div
          className="wrap_imagecardone"
          variants={imgwrapper}
          style={{ width: "500px", margin: "auto", height: "280px" }}
          id={props.id}
          animate={shouldAnimate ? "large" : "small"}
          initial="small"
        >
          <motion.img
            className="imageplaceholder"
            src={props.assetfill}
            width="100%"
            height="100%"
          ></motion.img>
        </motion.div>
        <motion.div
          className="overlay"
          variants={overlay}
          animate={shouldAnimate ? "visible" : "hidden"}
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
          animate={shouldAnimate ? "hovered" : "normal"}
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
