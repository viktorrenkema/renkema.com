// 📦 Packages
import React from "react"
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion"
import styled from "styled-components"
import Typed from "typed.js"

// 🌱 Components
import LinkSocial from "./link-social"
import Button from "./button"

// 🧰 Utils
import { palette } from "../../style/palette"

// 🌀 Variants
const section = {
  hidden: { opacity: 0.3, transition: { duration: 1.3 } },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const name = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
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

// 💅🏽 Styled Components
import { FlexVertCenter, H1, Paragraph } from "./resources/styledGlobal"

const SectionIntro = styled(motion.section)`
  background: white;
  min-height: 100vh;
  max-height: 700px;
  display: flex;
  justify-content: center;
`

const Grid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 30%;

  /* @media (max-width: 767px) {
    row-gap: 0.5rem;
    padding: 0em 1em 0em 1em;
    width: auto;
    grid-template-rows: repeat(4, auto);
  } */
`

const GridParagraph = styled(Paragraph)`
  grid-area: 2 / 1 / 2 / 1;
  justify-self: start;
`

const GridH1 = styled(H1)`
  grid-area: 1 / 1 / 2 / 1;
  text-align: start;
  @media (max-width: 767px) {
    grid-area: 1 / 1 / 2 / 1;
  }
`

const MonospaceSpan = styled.span`
  font-family: "Roboto Mono", monospace;
  display: inline;
  font-size: 16px;
  margin-left: 4px;
  padding-left: 2px;
  padding-right: 2px;
  bottom: 2px;
  position: relative;
  color: white;
  background: black;
`

const SocialsContainer = styled(motion.div)`
  display: flex;
  gap: 16px;
  padding: 1rem 0rem;
  @media (max-width: 479px) {
    gap: 8px;
  }
`

export default function Introduction({ id }) {
  const [inputRange, setInputRange] = React.useState([0, 0])

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)

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

  const constraintsRef = React.useRef(null)
  return (
    <SectionIntro id={`${id}`}>
      <Grid>
        <Strip>
          <AnimatingBar
            variants={row}
            animate={"finish"}
            initial={"start"}
            transition={{
              duration: 60,
              ease: "linear",
            }}
            drag={"x"}
            dragConstraints={{ left: -2700, right: 0 }}
          >
            {words.map(item => {
              return <NameH1 outline={item.name}>{item.title}</NameH1>
            })}
          </AnimatingBar>
        </Strip>
        <GridParagraph
          variants={description}
          initial="hidden"
          animate="visible"
        >
          I like to build fun and interactive experiences for the web, focusing
          on motion design and <MonospaceSpan ref={el}></MonospaceSpan>.
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
        <Button></Button>
      </Grid>
    </SectionIntro>
  )
}

const NameH1 = styled(H1)`
  font-size: 62px;
  white-space: nowrap;
  -webkit-text-stroke: ${props => (props.outline ? "0px" : "1px black")};
  }
  color: ${props => (props.outline == true ? "inherit" : "transparent")}
`

const Strip = styled(motion.div)`
  margin-top: 3rem;
  width: 100vw;
  height: 100px;
`

const AnimatingBar = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin: 5px;
`

const StripComponent = styled(motion.div)`
  width: 50px;
  height: 50px;
`

const row = {
  start: { x: "5%" },
  finish: { x: "-3000px" },
}

const words = [
  {
    title: "Hey, I’m Viktor. I enjoy:",
    name: true,
  },
  {
    title: "web development",
    name: false,
  },
  {
    title: "·",
    name: false,
  },
  {
    title: "design",
    name: false,
  },
  {
    title: "·",
    name: false,
  },
  {
    title: "interactions",
    name: false,
  },
  {
    title: "·",
    name: false,
  },
  {
    title: "creative coding",
    name: false,
  },
  {
    title: "·",
    name: false,
  },
  {
    title: "motion",
    name: false,
  },
]
