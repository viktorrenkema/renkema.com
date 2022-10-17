// 📦 Packages
import React, { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import styled from "styled-components"
import Typed from "typed.js"

// 🌱 Components
import SocialLink from "./sociallink"
import Link from "./link"
import Role from "./role"

// 🧰 Utils
import { palette } from "../../style/palette"

// 💅🏽 Styled Components
import {
  FlexColumn,
  FlexVertCenter,
  H1,
  H2,
  Paragraph,
} from "./resources/styledGlobal"
import { Arrow, PenScript } from "./resources/loaderExample"
import { roles } from "./resources/roles"

const SectionIntro = styled(motion.section)`
  background: white;
  min-height: 100vh;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FlexColumnPadded = styled(FlexColumn)`
  padding-left: 30%;

  @media (max-width: 767px) {
    padding-left: 5%;
  }
`

const GridParagraph = styled(Paragraph)`
  grid-area: 2 / 1 / 2 / 1;
  justify-self: start;
  padding-top: 0.75rem;
`

const MonospaceSpan = styled.span`
  font-family: "Roboto Mono", monospace;
  display: inline;
  font-size: 16px;
  padding-left: 2px;
  padding-right: 2px;
  position: relative;
  color: white;
  background: #1d1f35;
  white-space: nowrap;
  @media (max-width: 479px) {
    font-size: 14px;
  }
`

const SocialsContainer = styled(motion.div)`
  display: flex;
  gap: 16px;
  padding: 1rem 0rem 2rem 0rem;
  @media (max-width: 479px) {
    gap: 8px;
  }
`

const FlexVertHomePenScript = styled(FlexVertCenter)`
  position: absolute;
  left: 432px;
  top: 30px;
  @media (max-width: 767px) {
    // Medium up to tablet device
    left: 285px;
    top: 10px;
  }
  @media (max-width: 345px) {
    // Small up to medium device*
    left: -10px;
    top: 38px;
  }
`

export default function Introduction({ id }) {
  const [inputRange, setInputRange] = React.useState([0, 0])
  // Store the width of the div that animates roles
  const [rolesDiv, setRolesDiv] = React.useState(0)
  const [windowWidth, setWindowWidth] = React.useState(0)

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)
  const roleRef = React.useRef(null)
  const controls = useAnimation()

  // Create a ref to get access to the width of the animating roles div
  const animatingDiv = React.useRef(null)

  // Run an effect to measure the width of the roles + window
  React.useEffect(() => {
    setRolesDiv(animatingDiv.current.offsetWidth)
    setWindowWidth(window.innerWidth)
  }, [])

  React.useEffect(() => {
    const options = {
      strings: ["front-end web developer"],
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: 1000,
    }
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup to prevent memory leaks
      typed.current.destroy()
    }
  }, [])

  React.useEffect(() => {
    let el = document.querySelector(`#${id}`)
    setInputRange([
      el.getBoundingClientRect().top,
      el.getBoundingClientRect().top + 300,
    ])
  }, [])

  // Run an effect to start the roles animation, run again once rolesDiv is measured & set
  React.useEffect(() => {
    controls.start("end")
  }, [rolesDiv])

  const rolesVariants = {
    start: {
      x: "1%",
      transition: {
        duration: 180,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
    end: {
      x: `-${rolesDiv}px`,
      transition: {
        duration: 180,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }

  return (
    <SectionIntro id={`${id}`}>
      <FlexColumnPadded>
        <Strip>
          <ContainerForName
            variants={nameVariants}
            animate={"finish"}
            initial={"start"}
            transition={{
              duration: 2,
              ease: "linear",
            }}
          >
            <NameH1>Hey, I’m Viktor.</NameH1>
          </ContainerForName>
          <FlexVertHomePenScript
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <PenScript rotate={"rotate(8deg)"} color={palette.blue900}>
              I enjoy
            </PenScript>
            <Arrow
              style={{ WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }}
              fill={palette.blue900}
            ></Arrow>
          </FlexVertHomePenScript>
          <ContainerForRoles
            variants={rolesVariants}
            animate={controls}
            initial={"start"}
            ref={animatingDiv}
          >
            {roles.map((item, index) => {
              return (
                <Role
                  // Inline style required to avoid a bug where the backgroundImage reverts to the last gradient’s color instead of "none"
                  key={index}
                  id={index}
                  style={{
                    whiteSpace: "nowrap",
                    WebkitTextStroke: "0.5px #1d1f3580",
                    textStroke:
                      windowWidth < 768 ? "0.5px #1d1f3580" : "1px #1d1f3580",
                    color: "transparent",
                    backgroundImage: "none",
                  }}
                  title={item.title}
                  gradient={item.gradient}
                ></Role>
              )
            })}
          </ContainerForRoles>
        </Strip>
        <GridParagraph
          variants={description}
          initial="hidden"
          animate="visible"
        >
          I’m a <MonospaceSpan ref={el} /> with a strong interest in motion
          design. Happily contributing to the best platform to resell tickets at{" "}
          <a href="https://www.ticketswap.com" target="_blank">
            ticketswap
          </a>
          . Previously at{" "}
          <a href="https://www.framer.com" target="_blank">
            Framer
          </a>
          , helping teams build sites and prototypes.
        </GridParagraph>
        <SocialsContainer
          variants={socials}
          initial="hidden"
          animate={"visible"}
        >
          <SocialLink
            variants={items}
            whileHover="hover"
            text={"Twitter"}
            fill={palette.greys900}
            url={"https://www.twitter.com/vrenkema"}
          ></SocialLink>{" "}
          <SocialLink
            variants={items}
            whileHover="hover"
            text={"Linkedin"}
            fill={palette.greys900}
            url={"https://www.linkedin.com/in/viktor-renkema-7b3505133/"}
          ></SocialLink>{" "}
          <SocialLink
            variants={items}
            whileHover="hover"
            text={"Email"}
            fill={palette.greys900}
            url={"mailto:viktor@renkema.com"}
          ></SocialLink>
          <SocialLink
            variants={items}
            whileHover="hover"
            text={"Github"}
            fill={palette.greys900}
            url={"https://github.com/viktorrenkema"}
          ></SocialLink>
        </SocialsContainer>
        <Link
          variants={projectsLink}
          initial="hidden"
          animate={"visible"}
          text={"View projects"}
          url={"projects"}
          dark={false}
          external={false}
        ></Link>
      </FlexColumnPadded>
    </SectionIntro>
  )
}

const NameH1 = styled(H1)`
  white-space: nowrap;
  word-wrap: break-word;
`

const Strip = styled(motion.div)`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
`

const ContainerForName = styled(motion.div)`
  display: flex;
  gap: 20px;
  width: fit-content;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`
const ContainerForRoles = styled(motion.div)`
  display: flex;
  gap: 20px;
  width: fit-content;
  user-select: none;
  transform: rotate(90);
`

// 🌀 Variants

const nameVariants = {
  start: { x: "20%" },
  finish: { x: "0%" },
}

const description = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}
const currentlyat = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
}

const projectsLink = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.5,
    },
  },
}

const socials = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
}

const items = {
  hidden: {
    x: +50,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    opacity: 0.5,
  },
}
