import React from "react"
import useIsInViewport from "use-is-in-viewport"
import { motion } from "framer-motion"
import framerlogo from "../../src/images/framerlogo.png"

const image = {
  default: {
    scale: 1,
  },
  hovered: {
    scale: 1.05,
  },
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}
const header = {
  hidden: { x: -20, opacity: 0, transition: { duration: 0.5 } },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
}

const copy = {
  hidden: { y: -20, opacity: 0, transition: { duration: 0.5 } },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

export default function Framer(props) {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 70 })

  return (
    <motion.div className="Framer">
      <motion.div className="Cards">
        <motion.h1
          className="titleframer header"
          variants={header}
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
        >
          Framer
        </motion.h1>
        <motion.div className="description carddescriptionleft">
          <motion.p
            className="copy"
            ref={targetRef}
            variants={copy}
            initial="hidden"
            animate={isInViewport ? "visible" : "hidden"}
          >
            Starting out at Framer, as Community and Support Specialist I
            ensured our users are getting the support they required. This not
            only meant providing direct help via our support channels, but also
            creating support articles, writing helpful community posts and
            helping users with organising meetups in their local communities.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            iaculis venenatis risus non rutrum. Phasellus ut pharetra massa. Nam
            elementum tellus venenatis sapien venenatis, sed pulvinar neque
            malesuada. Etiam eu ante id lacus interdum sagittis. Nullam ex eros,
            accumsan eget lacus a, vehicula accumsan libero. Ut eget lorem et
            felis scelerisque consectetur.
            {/* Currently I moved into the Product Specialist role, where
            my focus extended to also helping users at organizations such as
            KLM, Google and others to become succesful, effective teams that can
            fully utilize Framer as their prototyping resource. This is done in
            the form of on-site workshops and online calls. */}
          </motion.p>
          <motion.a
            class="learnmore copy"
            href="https://www.framer.com"
            target="_blank"
            variants={copy}
            initial="hidden"
            animate={isInViewport ? "visible" : "hidden"}
            whileHover={{
              color: "#ff6661",
            }}
          >
            VISIT FRAMER.COM
          </motion.a>
        </motion.div>

        <motion.div className="imgright imagecard">
          <FramerImg></FramerImg>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function FramerImg(props) {
  const [isInViewportImg, targetRef] = useIsInViewport({ threshold: 30 })

  const [hovered, setHovered] = React.useState(false)

  const onHoverStart = () => {
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }

  return (
    <motion.div
      className="imgwrapper"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <motion.img
        variants={image}
        ref={targetRef}
        initial="hidden"
        // animate={hovered ? "hovered" : "default"}
        animate={isInViewportImg ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        className="imgframer image"
        src={framerlogo}
        width={"100%"}
        height="100%"
      ></motion.img>
    </motion.div>
  )
}
