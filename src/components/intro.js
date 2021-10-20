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
import SocialLink from "./sociallink"

// 🧰 Utils

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

// 💅🏽 Styled Components
import { H1, Paragraph } from "./resources/styledGlobal.js"

const SectionIntro = styled(motion.section)`
  background: white;
  min-height: 100vh;
  max-height: 700px;
  display: flex;
  justify-content: center;
`

const Grid = styled(motion.div)`
  height: 60vh;
  justify-items: start;
  align-content: start;
  margin-top: 30vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, auto);
  grid-gap: 1rem;
  padding-top: 3rem;
  max-width: 600px;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: fit-content;

  @media (max-width: 767px) {
    row-gap: 0.5rem;
    padding: 0em 1em 0em 1em;
    width: auto;
    grid-template-rows: repeat(4, auto);
  }
`

const GridParagraph = styled(Paragraph)`
  grid-area: 2 / 1 / 2 / 1;
  justify-self: start;
`

const GridH1 = styled(H1)`
  grid-area: 1 / 1 / 2 / 1;
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
  gap: 5px;
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
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [])

  React.useEffect(() => {
    let el = document.querySelector(`#${id}`)
    setInputRange([
      el.getBoundingClientRect().top - 200,
      el.getBoundingClientRect().top + 200,
    ])
  }, [])

  let { scrollY } = useViewportScroll() // Track the y scroll in pixels from top
  const dynamicRotate = useTransform(scrollY, inputRange, [10, 0])
  const rotate = useMotionTemplate`rotateX(${dynamicRotate}deg`

  return (
    <SectionIntro
      id={`${id}`}
      // style={{ transform: rotate }}
    >
      <Grid>
        <GridH1 initial="hidden" animate="visible" variants={name}>
          Hey, my name is Viktor
        </GridH1>

        <GridParagraph
          variants={description}
          initial="hidden"
          animate="visible"
        >
          Front-end developer with a background in psychology, exploring the
          field of design and
          <MonospaceSpan ref={el}></MonospaceSpan>
        </GridParagraph>
        <SocialsContainer variants={socials}>
          <SocialLink
            inline={true}
            text={"Twitter"}
            url={"https://www.twitter.com/vrenkema"}
          ></SocialLink>{" "}
          <SocialLink
            inline={true}
            text={"Linkedin"}
            url={"https://www.linkedin.com/in/viktor-renkema-7b3505133/"}
          ></SocialLink>{" "}
          <SocialLink
            inline={true}
            text={"Email"}
            url={"mailto:viktor@renkema.com"}
          ></SocialLink>
        </SocialsContainer>
      </Grid>
    </SectionIntro>
  )
}
