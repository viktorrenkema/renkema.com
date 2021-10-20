// 📦 Packages
import React, { useRef } from "react"
import styled from "styled-components"
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion"

// 🌱 Components

// 🧰 Utils

// 💅🏽 Styled Components
import { H1 } from "./resources/styledGlobal.js"

const Section = styled(motion.section)`
  background: white;
  margin: 10rem 0rem;
  max-height: 700px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: inherit;
    max-height: none;
    padding: 3rem 0rem;
  }
`
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
  grid-area: ${props =>
    props.positioning == "left" ? "1 / 2 / 2 / 3" : `1 / 1 / 2 / 1`};
  padding-bottom: 1rem;

  @media (min-width: 768px) and (max-width: 1200px) {
  }
  @media (max-width: 767px) {
    grid-area: 1/1/1/1;
    opacity: 1;
    font-size: 40px;
    justify-self: start;
    padding: 3rem 1.5rem 1.5rem 1.5rem;
  }
`
const ImageContainer = styled(motion.div)`
  justify-self: center;
  align-self: center;
  max-width: 650px;
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
  text-align: justify;
  letter-spacing: 0.1px;
  text-justify: inter-word;
  max-width: 700px;
  @media (max-width: 767px) {
    font-size: 14px;
    opacity: 1;
  }
`
const CopyContainer = styled(motion.div)`
  align-self: start;
  flex-direction: column;
  display: flex;
  grid-area: ${props =>
    props.positioning == "left" ? "2/ 2 / 3 / 2" : `2/ 1 / 3 / 1`};

  @media (max-width: 767px) {
    grid-area: 2 / 1 / 3 / 1;
    text-align: center;
    padding: 0rem 1.5rem 1.5rem 1.5rem;
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
}) {
  const [inputRange, setInputRange] = React.useState([0, 0])

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

  let { scrollY } = useViewportScroll() // Track the y scroll in pixels from top
  const dynamicRotate = useTransform(scrollY, inputRange, [6, -6])
  const rotate = useMotionTemplate`rotateX(${dynamicRotate}deg`

  return (
    <Section id={`${id}`} style={{ transform: rotate }}>
      <Grid positioning={positioning}>
        <ImageContainer positioning={positioning}>
          <Image src={asset}></Image>
        </ImageContainer>
        <motion.div
          style={{
            flexDirection: "column",
            opacity: "1",
            transform: "none",
            display: "flex",
            placeContent: "center",
          }}
        >
          <BioH1 positioning={positioning}>{title}</BioH1>
          {/* <h2>{pathLength.current}</h2> */}
          <CopyContainer positioning={positioning}>
            <Copy id={"section"}>{description}</Copy>
            {/* <SocialLink
              inline={false}
              forbio={true}
              linktext={"Ask me more"}
              url={"mailto:viktor@renkema.com"}
            ></SocialLink>{" "} */}
          </CopyContainer>
        </motion.div>{" "}
      </Grid>
    </Section>
  )
}

// scrollY.onChange(value => {
//   console.log(value)
//   console.log(inputRange, "inputRange")
//   console.log(rotate.current, "rotate")
// })
