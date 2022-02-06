// 📦 Packages
import React, { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import styled from "styled-components"
import Typed from "typed.js"

// 🌱 Components
import LinkSocial from "./link-social"
import Button from "./button"
import Role from "./role"

// 🧰 Utils
import { palette } from "../../style/palette"

// 💅🏽 Styled Components
import { FlexColumn, H1, H2, Paragraph } from "./resources/styledGlobal"

const SectionIntro = styled(motion.section)`
  background: white;
  min-height: 100vh;
  max-height: 700px;
  display: flex;
  justify-content: center;
`

const FlexColumnPadded = styled(FlexColumn)`
  padding-left: 30%;

  @media (max-width: 767px) {
    padding-left: 10%;
  }
`

const GridParagraph = styled(Paragraph)`
  grid-area: 2 / 1 / 2 / 1;
  justify-self: start;
  padding-top: 0.5rem;
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
  padding: 2rem 0rem 2rem 0rem;
  @media (max-width: 479px) {
    gap: 8px;
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
      strings: ["web development"],
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
          <ContainerForRoles
            variants={rolesVariants}
            animate={controls}
            initial={"start"}
            drag={"x"}
            dragConstraints={{ left: -rolesDiv, right: 0 }}
            dragTransition={{
              bounceStiffness: 1000,
              bounceDamping: 100,
              timeConstant: 400,
            }}
            ref={animatingDiv}
            onDragEnd={() => {
              setTimeout(() => {
                controls.start("end")
              }, 2000)
            }}
            onClick={() => {
              controls.start("end")
            }}
          >
            {roles.map((item, index) => {
              return (
                <Role
                  // Inline style required to avoid a bug where the backgroundImage reverts to the last gradient’s color instead of "none"
                  key={index}
                  id={index}
                  style={{
                    whiteSpace: "nowrap",
                    WebkitTextStroke: "0.5px #1d1f35",
                    textStroke:
                      windowWidth < 768 ? "0.5px #1d1f35" : "1px #1d1f35",
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
          I build fun and interactive experiences for the web, focusing on
          motion design and <MonospaceSpan ref={el}></MonospaceSpan>.
        </GridParagraph>
        <GridParagraph
          variants={currentlyat}
          initial="hidden"
          animate="visible"
        >
          Right now I'm helping teams build sites and prototypes at{" "}
          <a href="https://www.framer.com" target="_blank">
            Framer
          </a>
          &nbsp;.
        </GridParagraph>

        <SocialsContainer
          variants={socials}
          initial="hidden"
          animate={"visible"}
        >
          <LinkSocial
            variants={items}
            whileHover="hover"
            text={"Twitter"}
            fill={palette.greys900}
            url={"https://www.twitter.com/vrenkema"}
          ></LinkSocial>{" "}
          <LinkSocial
            variants={items}
            whileHover="hover"
            text={"Linkedin"}
            fill={palette.greys900}
            url={"https://www.linkedin.com/in/viktor-renkema-7b3505133/"}
          ></LinkSocial>{" "}
          <LinkSocial
            variants={items}
            whileHover="hover"
            text={"Email"}
            fill={palette.greys900}
            url={"mailto:viktor@renkema.com"}
          ></LinkSocial>
          <LinkSocial
            variants={items}
            whileHover="hover"
            text={"Github"}
            fill={palette.greys900}
            url={"https://github.com/viktorrenkema"}
          ></LinkSocial>
        </SocialsContainer>
        <Button
          variants={projectsLink}
          initial="hidden"
          animate={"visible"}
          text={"View projects"}
          url={"projects"}
          dark={false}
          external={false}
        ></Button>
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
`

const roles = [
  {
    title: "web development",
    gradient: "linear-gradient(-60deg,  #904e95 0%,#904e95, #e73c7e, #ee7752)",
  },
  {
    title: "·",
  },
  {
    title: "design",
    gradient: "linear-gradient(43deg,  #b0eaed 0%, #c3f2c7 50%, #d9f89f 100% )",
  },
  {
    title: "·",
  },
  {
    title: "interactivity",
    gradient: "linear-gradient(43deg,  #fa8495 0%,#f3aaab 46%,#eaf0da 100%)",
  },
  {
    title: "·",
  },
  {
    title: "motion",
    gradient: "linear-gradient(135deg,#e84c8e ,#fb8254)",
  },
  {
    title: "·",
  },
  {
    title: "creative coding",
    gradient: "linear-gradient(43deg,#4158d0 0%,#c850c0 46%,#ffcc70 100%)",
  },
  {
    title: "·",
  },
  {
    title: "web development",
    gradient: "linear-gradient(-60deg,  #904e95 0%,#904e95, #e73c7e, #ee7752)",
  },
  {
    title: "·",
  },
  {
    title: "design",
    gradient: "linear-gradient(43deg,  #b0eaed 0%, #c3f2c7 50%, #d9f89f 100% )",
  },
  {
    title: "·",
  },
  {
    title: "interactivity",
    gradient: "linear-gradient(43deg,  #fa8495 0%,#f3aaab 46%,#eaf0da 100%)",
  },
  {
    title: "·",
  },
  {
    title: "motion",
    gradient: "linear-gradient(135deg,#e84c8e ,#fb8254)",
  },
  {
    title: "·",
  },
  {
    title: "creative coding",
    gradient: "linear-gradient(43deg,#4158d0 0%,#c850c0 46%,#ffcc70 100%)",
  },
  {
    title: "·",
  },
  {
    title: "web development",
    gradient: "linear-gradient(-60deg,  #904e95 0%,#904e95, #e73c7e, #ee7752)",
  },
  {
    title: "·",
  },
  {
    title: "design",
    gradient: "linear-gradient(43deg,  #b0eaed 0%, #c3f2c7 50%, #d9f89f 100% )",
  },
  {
    title: "·",
  },
  {
    title: "interactivity",
    gradient: "linear-gradient(43deg,  #fa8495 0%,#f3aaab 46%,#eaf0da 100%)",
  },
  {
    title: "·",
  },
  {
    title: "motion",
    gradient: "linear-gradient(135deg,#e84c8e ,#fb8254)",
  },
  {
    title: "·",
  },
  {
    title: "creative coding",
    gradient: "linear-gradient(43deg,#4158d0 0%,#c850c0 46%,#ffcc70 100%)",
  },
  {
    title: "·",
  },
]

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
