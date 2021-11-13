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
import { ProductHunt } from "./resources/styledGlobal.js"
import { FlexVertCenter } from "./resources/styledGlobal.js"

// 🖼️ Assets
import ladimoradesktop from "../../src/images/ladimoradesktop.png"
import ladimoramobile from "../../src/images/ladimoramobile.png"
import ladimoramobilenav from "../../src/images/ladimoramobilenav.png"
import SocialLink from "./LinkNav"

// 🌀 Variants
const container = {
  hidden: { opacity: 0.2 },
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

const ProjectFlexWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const FlexHorizontal = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`

//// Clay models

const ClayMacbookBottom = styled(motion.div)`
  width: 875px;
  background: rgb(36 38 70);
  height: 16px;
  margin: 0px 4px;
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.04),
    0 22.3px 17.9px rgba(0, 0, 0, 0.06), 0 100px 80px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
  border-radius: 4px 4px 8px 8px;
  padding: 0px 8px;
`

const ClayMacbookNotch = styled(motion.div)`
  width: 60px;
  background: rgb(36 38 70);
  height: 12px;
  top: 28px;
  border-radius: 0px 0px 4px 4px;
  z-index: 8;
  position: relative;
`

const ClayMobileAsset = styled.div`
  height: 810px;
  width: 800px;
  position: absolute;
  overflow: hidden;
  background: #fff;
  background-image: url(${ladimoramobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-position-x: left;
`

const ClayMobileFrame = styled.div`
  top: ${props => props.top}px;
  width: 100%;
  position: relative;
  overflow: visible;
`

const ClayMobileMask = styled.div`
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 548px;
  border-radius: 40px;
  border: 12px solid rgb(36 38 70);
  background-color: rgb(57 63 110);
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.04),
    0 22.3px 17.9px rgba(0, 0, 0, 0.06), 0 100px 80px rgba(0, 0, 0, 0.1);
`

const ClayMobileNotch = styled(motion.div)`
  width: 32.7%; // iPhone 13  notch is 0.99", total screen width is 2.56"
  background: rgb(36 38 70);
  height: 18px;
  top: -1px;
  border-radius: 0px 0px 12px 12px;
  z-index: 8;
  position: absolute;
  z-index: 22;
  margin: 0 auto;
  left: 34%;
`

//// Clay models

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
  position: relative;
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

const MobileLaDimoraNav = styled.div`
  background-image: url(${ladimoramobilenav});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-position-x: left;
  position: relative;
  top: 0;
  width: 300px;
  height: 43px;
  z-index: 20;
`

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
  githuburl,
}) {
  // State
  const [quantityLoaders, setQuantityLoaders] = React.useState(5)
  const [viewportWidth, setViewportWidth] = React.useState(0)
  const [
    inputRangeLaDimoraScroller,
    setInputRangeLaDimoraScroller,
  ] = React.useState([0, 0])

  // Other hooks
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 })
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

  // useEffect
  React.useEffect(() => {
    let el = document.querySelector(`#${id}`)

    setInputRangeLaDimoraScroller([
      el.getBoundingClientRect().top - 300,
      el.getBoundingClientRect().top + 300,
    ])

    setViewportWidth(window.innerWidth)
  }, [])

  const styleAssetFrame = {
    top: dynamicTop,
    width: "100%",
    position: "relative",
    overflow: "visible",
  }

  const MobileLaDimoraFrame = {
    top: dynamicTopMobile,
    width: "100%",
    position: "relative",
    overflow: "visible",
  }

  const MobileLaDimoraInnerFrame = {
    // To calculate the height and width, use the intrinsic aspect ratio. Find the asset’s dimensions, calculate (https://andrew.hedges.name/experiments/aspect_ratio/) the new height (or width) by plugging in the asset’s dimensions and the Frame’s set width (or height)
    height: 1712,
    width: 300,
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
    font-size: 18px;
    color: hsl(14, 99%, 72%);
    transform: rotate(346deg);
    top: 0px;
    color: ${palette.primary500};
  `

  const styleAssetFrameMask = {
    overflow: "hidden",
    width: 800,
    height: 360,
    borderRadius: "4px 4px 0px 0px",
    border: "16px solid rgb(26 28 52)",
    boxShadow:
      "0 6.7px 5.3px rgba(0, 0, 0, 0.04),0 22.3px 17.9px rgba(0, 0, 0, 0.06),0 100px 80px rgba(0, 0, 0, 0.1)",
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

  const ClayMobileAsset = styled.div`
    height: 810px;
    width: 800px;
    position: absolute;
    overflow: hidden;
    background-image: url(${ladimoradesktop});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    background-position-x: left;
  `

  return (
    <ProjectFlexWrapper
      id={`${id}`}
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
      ref={targetRef}
      variants={container}
    >
      <TopSection>
        <Label>{projectlabel}</Label>
        <Title>{projecttitle}</Title>

        <ProjectDetails>{projectinfo}</ProjectDetails>

        <FlexVertCenter style={{ margin: "1rem 0rem 0rem 0rem" }}>
          {project === "loaders" && <ProductHunt />}
          <FlexHorizontal>
            <LinkSocial
              text={"Visit " + projecttitle}
              url={url}
              fill={palette.greys100}
            ></LinkSocial>
            <LinkSocial
              text={"View code on Github"}
              url={githuburl}
              fill={palette.greys100}
            ></LinkSocial>
          </FlexHorizontal>
        </FlexVertCenter>
        <BottomSection>
          {/* 💡 La dimora example for desktop  */}
          {project === "ladimora" && viewportWidth > 1024 && (
            <>
              {" "}
              <ClayMacbookNotch />
              <motion.div
                style={styleAssetFrameMask}
                className="assetframemask"
              >
                <motion.div style={styleAssetFrame} className="assetframe">
                  <motion.div style={styleAssetInnerFrame}></motion.div>
                </motion.div>
              </motion.div>
              <ClayMacbookBottom />
            </>
          )}

          {/* 💡 La dimora example for mobile */}
          {project === "ladimora" && viewportWidth <= 1024 && (
            <ClayMobileMask>
              <ClayMobileNotch />
              <MobileLaDimoraNav></MobileLaDimoraNav>
              <motion.div style={MobileLaDimoraFrame}>
                <motion.div style={MobileLaDimoraInnerFrame}></motion.div>
              </motion.div>
            </ClayMobileMask>
          )}

          {/* 💡 Loaders example */}
          {project === "loaders" && (
            <>
              <FlexVertCenter
                style={{ left: "270px", position: "absolute", top: 0 }}
              >
                <PenScript>Take it for a spin</PenScript>
                <Arrow></Arrow>
              </FlexVertCenter>
              <LoaderExample
                setQuantityLoaders={setQuantityLoaders}
                quantityLoaders={quantityLoaders}
              />
            </>
          )}

          {/* 💡 Pulse example */}
          {project === "pulse" && (
            <ClayMobileMask style={{ backgroundColor: "rgb(57 63 110)" }}>
              <ClayMobileNotch />
            </ClayMobileMask>
          )}
        </BottomSection>
      </TopSection>
    </ProjectFlexWrapper>
  )
}

function Arrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18">
      <path
        d="M 14.921 3.344 L 11.797 0.22 L 11.796 0.219 C 11.779 0.202 11.76 0.185 11.741 0.169 C 11.73 0.16 11.719 0.153 11.708 0.144 C 11.699 0.138 11.691 0.132 11.682 0.126 C 11.668 0.116 11.653 0.108 11.638 0.099 C 11.632 0.096 11.626 0.092 11.62 0.089 C 11.606 0.081 11.591 0.074 11.576 0.068 C 11.569 0.064 11.561 0.06 11.554 0.057 C 11.541 0.052 11.528 0.048 11.515 0.043 C 11.505 0.039 11.495 0.036 11.484 0.032 C 11.474 0.029 11.463 0.027 11.453 0.024 C 11.44 0.021 11.426 0.017 11.413 0.014 C 11.405 0.013 11.397 0.012 11.389 0.011 C 11.372 0.008 11.356 0.005 11.34 0.004 C 11.334 0.003 11.327 0.003 11.32 0.003 C 11.303 0.001 11.285 0 11.267 0 C 11.258 0 11.248 0.001 11.238 0.001 C 11.224 0.002 11.21 0.002 11.195 0.003 C 11.17 0.006 11.146 0.009 11.121 0.014 L 11.12 0.014 C 11.117 0.015 11.114 0.016 11.11 0.017 C 11.09 0.021 11.069 0.026 11.049 0.032 C 11.041 0.035 11.033 0.038 11.025 0.041 C 11.01 0.046 10.994 0.051 10.979 0.057 C 10.969 0.062 10.959 0.067 10.949 0.071 C 10.937 0.077 10.925 0.082 10.913 0.088 C 10.901 0.095 10.89 0.102 10.878 0.109 C 10.869 0.115 10.859 0.12 10.85 0.126 C 10.836 0.135 10.823 0.146 10.81 0.156 C 10.804 0.161 10.797 0.165 10.791 0.17 C 10.774 0.184 10.758 0.199 10.743 0.214 C 10.741 0.216 10.738 0.218 10.736 0.22 L 10.735 0.221 L 10.733 0.223 L 7.612 3.344 C 7.319 3.637 7.319 4.112 7.612 4.404 C 7.753 4.545 7.943 4.624 8.142 4.624 C 8.341 4.624 8.532 4.545 8.673 4.404 L 10.614 2.463 C 10.4 4.828 8.654 6.876 6.211 7.362 C 5.109 7.581 3.967 7.458 2.938 7.008 C 2.32 6.738 1.757 6.357 1.276 5.883 C 0.981 5.593 0.506 5.597 0.216 5.892 C -0.075 6.187 -0.071 6.662 0.224 6.952 C 0.633 7.355 1.089 7.706 1.584 7.998 C 2.66 8.633 3.887 8.968 5.137 8.968 L 5.137 8.968 C 5.596 8.968 6.054 8.922 6.504 8.833 C 9.598 8.217 11.811 5.637 12.104 2.648 L 13.861 4.404 C 14.153 4.697 14.628 4.697 14.921 4.404 C 15.214 4.111 15.214 3.637 14.921 3.344 Z"
        transform="translate(0 4.087) rotate(104 7.57 4.484)"
        fill={palette.primary500}
      ></path>
    </svg>
  )
}
