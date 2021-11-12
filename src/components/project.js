// 📦 Packages
import React from "react"
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
import styled from "styled-components"

// 🧰 Utils
import { palette } from "../../style/palette"

// 🌱 Components
import LoaderExample from "./resources/loaderExample"
import LinkSocial from "./LinkSocial"
import Headinglink from "./headinglink"

// 🖼️ Assets
import ladimoradesktop from "../../src/images/ladimoradesktop.png"
import ladimoramobile from "../../src/images/ladimoramobile.png"
import ladimoramobilenav from "../../src/images/ladimoramobilenav.png"

// 💅🏽 Styled Components
const ProjectFlexWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background-color: #f5f5f5; */
  /* background-color: hsl(0deg 0% 10%); */
`

const TopSection = styled(motion.div)`
  width: 100%;
  padding: 6rem 2rem 6rem 2rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
`

const BottomSection = styled(motion.div)`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`

const Label = styled(motion.div)`
  color: hsl(350, 75%, 68%);
  font-size: 12px;
  letter-spacing: 0px;
  line-height: 1;
  font-weight: 800;
  text-transform: uppercase;
  border-radius: 8px;
  padding: 10px;
  background: #eb70852b;
  padding-bottom: 10px;
  font-family: "GT-Walsheim-Bold";
`

const ProjectDetails = styled(motion.span)`
  color: ${palette.greys100};
  font-size: 16;
  letter-spacing: 0;
  line-height: 1.4;
  font-weight: 400;
  text-align: center;
  width: 90%;
  max-width: 500px;
`

const Title = styled(motion.p)`
  color: ${palette.greys100};
  font-size: 44px;
  letter-spacing: 0;
  line-height: 1.2;
  font-weight: 900;
  @media (max-width: 500px) {
    font-size: 32px !important;
    text-align: center !important;
    max-width: 300px;
  }
`

const DemoLoaders = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const LaDimoraScrollMask = styled(motion.div)`
  overflow: hidden;
  border-radius: 4px;
  width: 90vw;
  height: 60vh;
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.04),
    0 22.3px 17.9px rgba(0, 0, 0, 0.06), 0 100px 80px rgba(0, 0, 0, 0.1);
  /* transform: rotate(-1deg); */
  @media (max-width: 768px) {
    padding: 0;
    width: 80%;
    height: 30vh;
  }
`

const ProjectsLabel = styled(motion.div)`
  color: hsl(0deg 0% 10%);
  font-size: 36px;
  letter-spacing: 0px;
  line-height: 1;
  /* text-transform: uppercase; */
  border-radius: 8px;
  /* background: #eb70852b; */
  padding-bottom: 6rem;
  font-family: "GT-Walsheim", sans-serif;
  align-self: center;
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: block;
  letter-spacing: 0.05rem;
  height: fit-content;
`

const MobileLaDimoraMask = styled.div`
  overflow: hidden;
  width: 267px;
  height: 360px;
  border-radius: 4px;
  border: 8px solid rgb(36 38 70);
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.04),
    0 22.3px 17.9px rgba(0, 0, 0, 0.06), 0 100px 80px rgba(0, 0, 0, 0.1);
`

const MobileLaDimoraNav = styled.div`
  background-image: url(${ladimoramobilenav});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-position-x: left;
  position: relative;
  top: 0;
  width: 267px;
  height: 43px;
  z-index: 20;
`

// const MobileLaDimoraFrame = styled.div`

// `

// const MobileLaDimoraInnerFrame = styled.div`

// `

// Small mobile: < 370
// Mobile: <426
// Tablet: <769
// Desktop: >768

export default function Project({
  project,
  hyperlink,
  asset,
  projectlabel,
  projecttitle,
  projectinfo,
  linktext,
  url,
  id,
}) {
  const [quantityLoaders, setQuantityLoaders] = React.useState(5)

  const [
    inputRangeLaDimoraScroller,
    setInputRangeLaDimoraScroller,
  ] = React.useState([0, 0])

  const [viewportWidth, setViewportWidth] = React.useState(0)
  React.useEffect(() => {
    let el = document.querySelector(`#${id}`)

    setInputRangeLaDimoraScroller([
      el.getBoundingClientRect().top - 300,
      el.getBoundingClientRect().top + 300,
    ])

    setViewportWidth(window.innerWidth)
  }, [])

  let { scrollY } = useViewportScroll() // Track the y scroll in pixels from top

  // For the dynamic top position scroll, transform the scrollY into a distance range
  const dynamicTop = useTransform(scrollY, inputRangeLaDimoraScroller, [
    0,
    -446,
  ])
  const dynamicTopMobile = useTransform(scrollY, inputRangeLaDimoraScroller, [
    0,
    -1200,
  ])

  console.log(viewportWidth)

  const styleAssetFrame = {
    top: dynamicTop,
    width: "100%",
    position: "relative",
    overflow: "visible",
  }

  const styleAssetInnerFrame = {
    height: 810,
    width: "800px",
    position: "absolute",
    overflow: "hidden",
    background: project === "loaders" ? "none" : "#fff",
    backgroundImage: `url(${ladimoradesktop})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundPositionX: "left",
  }

  const MobileLaDimoraFrame = {
    top: dynamicTopMobile,
    width: "100%",
    position: "relative",
    overflow: "visible",
  }

  const MobileLaDimoraInnerFrame = {
    // To calculate the height and width, use the intrinsic aspect ratio. Find the asset’s dimensions, calculate (https://andrew.hedges.name/experiments/aspect_ratio/) the new height (or width) by plugging in the asset’s dimensions and the Frame’s set width (or height)
    height: 1518,
    width: 267,
    position: "absolute",
    overflow: "hidden",
    background: project === "loaders" ? "none" : "#fff",
    backgroundImage: `url(${ladimoramobile})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundPositionX: "left",
  }

  const PenScript = styled.span`
    font-family: "Nanum Pen Script", cursive;
  `

  const styleAssetFrameMask = {
    overflow: "hidden",
    width: 800,
    height: 360,
    borderRadius: "4px",
    border: "8px solid rgb(36 38 70)",
    boxShadow:
      "0 6.7px 5.3px rgba(0, 0, 0, 0.04),0 22.3px 17.9px rgba(0, 0, 0, 0.06),0 100px 80px rgba(0, 0, 0, 0.1)",
  }

  return (
    <ProjectFlexWrapper id={`${id}`}>
      <TopSection>
        <Label>{projectlabel}</Label>
        <Title>
          <Headinglink title={projecttitle} url={url}></Headinglink>
        </Title>

        <ProjectDetails>{projectinfo}</ProjectDetails>
        {project === "loaders" && (
          <div style={{ paddingTop: "24px" }}>
            <a
              href="https://www.producthunt.com/posts/loader-generator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-loader-generator"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=270365&theme=dark"
                alt="Loader generator - Create animated loaders and generate production React code | Product Hunt"
                style={{ width: "175px", height: "37.8px" }}
              />
            </a>
          </div>
        )}
        {/* <SocialLink text="Github" url="github.com" /> */}
        <BottomSection>
          {/* If project is La Dimora & viewport is under laptop */}
          {project === "ladimora" && viewportWidth <= 1024 && (
            <MobileLaDimoraMask>
              <MobileLaDimoraNav></MobileLaDimoraNav>
              <motion.div style={MobileLaDimoraFrame}>
                <motion.div style={MobileLaDimoraInnerFrame}></motion.div>
              </motion.div>
            </MobileLaDimoraMask>
          )}

          {/* If project is La Dimora & viewport is over laptop */}
          {project === "ladimora" && viewportWidth > 1024 && (
            <motion.div style={styleAssetFrameMask} className="assetframemask">
              <motion.div style={styleAssetFrame} className="assetframe">
                <motion.div style={styleAssetInnerFrame}></motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* If project is Loaders */}
          {project === "loaders" && (
            <LoaderExample
              setQuantityLoaders={setQuantityLoaders}
              quantityLoaders={quantityLoaders}
            />
          )}

          {/* If project is Pulse */}
          {project === "pulse" && (
            <div
              style={{
                width: 267,
                height: 396,
                backgroundColor: "rgb(57 63 110)",
                overflow: "visible",
                opacity: 0.3,
                borderRadius: 30,
                border: "8px solid rgb(36 38 70)",
              }}
            ></div>
          )}
        </BottomSection>
      </TopSection>
    </ProjectFlexWrapper>
  )
}
