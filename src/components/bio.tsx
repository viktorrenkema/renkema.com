// 📦 Packages
import React, { useRef } from "react"
import styled from "styled-components"
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion"
import useIsInViewport from "use-is-in-viewport"

// 🌱 Components
import LinkSocial from "./linkSocial"

// 🧰 Utils
import { palette } from "../../style/palette"

// 🌀 Variants
const container = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
}

// 💅🏽 Styled Components
import { H1 } from "./resources/styledGlobal"
import { FlexVertCenter } from "./resources/styledGlobal"

const Section = styled(motion.section)`
  background: white;
  margin: 12rem 2rem 4rem 2rem;
  max-height: 700px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: inherit;
    max-height: none;
    margin: 8rem 2rem 4rem 2rem;
  }
`

const FlexWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

// Old, use for updating above flexcontainer
const Grid = styled(motion.div)`
  display: grid;
  align-self: center;
  justify-content: center;
  grid-template-rows: repeat(1, auto);
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 10rem;
  padding: 4em;

  @media (min-width: 768px) and (max-width: 1200px) {
    padding: 2.5rem;
    column-gap: 5%;
    grid-template-columns: ${props =>
      props.positioning == "left" ? "50% auto" : `auto 50%`};
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    padding: 0rem;
  }
`
const BioH1 = styled(H1)`
  padding-bottom: 1rem;
  text-align: center;

  @media (max-width: 767px) {
    opacity: 1;
    font-size: 40px;
    justify-self: start;
    padding: 3rem 1.5rem 1.5rem 1.5rem;
  }

  @media (max-width: 479px) {
    font-size: 32px;
  }
`
const FlexVertCenterBio = styled(FlexVertCenter)`
  margin-top: 4rem;

  @media (max-width: 767px) {
    margin-top: 0rem;
  }
`

const ImageContainer = styled(motion.div)`
  justify-self: center;
  align-self: center;
  max-width: 450px;
  position: relative;

  grid-area: ${props =>
    props.positioning == "left" ? "1 / 1 / 1 / 1" : `1 / 2 / 1 / 2`};

  @media (max-width: 767px) {
    height: auto;
    background: none;
    /* width: 90%; */
    grid-area: 1 / 1 / 1 / 1;
    display: flex;
    justify-content: center;
    width: 90%;
  }
`
const Image = styled(motion.img)` 
  border: 8px solid #fbf8f8;
  background-size: cover;
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.04),
    0 22.3px 17.9px rgba(0, 0, 0, 0.06), 0 100px 80px rgba(0, 0, 0, 0.1);
  /* src: ${props => props.img}; */
  height: 100%;
  width: 100%;
  @media (max-width: 767px) {
    height: auto;
    background: none;
    /* width: 90%; */
    grid-area: 1 / 1 / 1 / 1;
    display: flex;
    justify-content: center;
  }
`
const Copy = styled(motion.p)`
  font-size: 16px;
  line-height: 1.8;
  text-align: center;
  letter-spacing: 0.1px;
  text-justify: inter-word;
  max-width: 600px;
  margin-bottom: 1rem;
  &:nth-child(1) {
    margin-bottom: 1rem;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    opacity: 1;
  }
`

// 🌀 Variants
// const variants = {
//   default: {
//     scale: 1,
//   },
//   hidden: { opacity: 0.5 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//     },
//   },
// }

export default function BioSection({
  positioning,
  asset,
  title,
  description,
  id,
  linktext,
  hyperlink,
}) {
  const [inputRange, setInputRange] = React.useState([0, 0])
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 })

  React.useEffect(() => {
    let el = document.querySelector(`#${id}`)
    console.log(el)
    // console.log(
    //   el.getBoundingClientRect().top,
    //   "el.getBoundingClientRect().top"
    // )
    setInputRange([
      el.getBoundingClientRect().top + 400,
      el.getBoundingClientRect().top - 400,
    ])
  }, [])

  const descriptions = description.map((p, index) => (
    <Copy key={p.index}>{p}</Copy>
  ))

  return (
    <Section
      id={`${id}`}
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
      ref={targetRef}
      variants={container}
    >
      <FlexWrapper positioning={positioning}>
        <ImageContainer positioning={positioning}>
          <Image src={asset}></Image>
        </ImageContainer>
        <FlexVertCenterBio>
          <BioH1 positioning={positioning}>{title}</BioH1>
          {descriptions}
          <LinkSocial
            text={linktext}
            url={hyperlink}
            style={{ padding: "0px" }}
            fill={palette.greys900}
          ></LinkSocial>{" "}
        </FlexVertCenterBio>{" "}
      </FlexWrapper>
    </Section>
  )
}

// scrollY.onChange(value => {
//   console.log(value)
//   console.log(inputRange, "inputRange")
//   console.log(rotate.current, "rotate")
// })
