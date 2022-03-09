// 📦 Packages
import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
import styled from "styled-components"

// 🧰 Utils
import { palette } from "../../style/palette"

// 🌱 Components
import LoaderExample from "./resources/loaderExample"
import LinkSocial from "./link-social"
import { ProductHunt } from "./resources/styledGlobal"
import { FlexVertCenter } from "./resources/styledGlobal"
import Link from "./link"

// 🖼️ Assets
import ladimoradesktop from "../../src/images/ladimoradesktop.png"
import ladimoramobile from "../../src/images/ladimoramobile.png"
import ladimoramobilenav from "../../src/images/ladimoramobilenav.png"
import pulse from "../../src/images/pulse.png"

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

export default function Project({
  project,
  projectlabel,
  projecttitle,
  projectinfo,
  url,
  id,
  githuburl,
}) {
  // State for the Loaders.io example to store how many loaders are selected
  const [quantityLoaders, setQuantityLoaders] = React.useState(5)
  // Store the width of the user's viewport
  const [viewportWidth, setViewportWidth] = React.useState(0)
  // Store an array reflecting the range input for La Dimora's scroll examples
  const [
    inputRangeLaDimoraScrollerDesktop,
    setInputRangeLaDimoraScrollerDesktop,
  ] = React.useState([0, 0])
  const [
    inputRangeLaDimoraScrollerMobile,
    setInputRangeLaDimoraScrollerMobile,
  ] = React.useState([0, 0])

  // Other hooks
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 30 })
  let { scrollY } = useViewportScroll() // Track the y scroll in pixels from top
  // For the dynamic top position scroll, transform the scrollY into a distance range
  const dynamicTopDesktop = useTransform(
    scrollY,
    inputRangeLaDimoraScrollerDesktop,
    [0, -308]
  )
  const dynamicTopMobile = useTransform(
    scrollY,
    inputRangeLaDimoraScrollerMobile,
    [0, -1116]
  )

  // useEffect to get the distance from the visual relative to the  & use it to set the range of 'parallax' scrolling
  React.useEffect(() => {
    let el = document.querySelector(`#${id}`)

    setInputRangeLaDimoraScrollerDesktop([
      el.getBoundingClientRect().top - 300,
      el.getBoundingClientRect().top + 600,
    ])

    setInputRangeLaDimoraScrollerMobile([
      el.getBoundingClientRect().top - 100,
      el.getBoundingClientRect().top + 600,
    ])

    setViewportWidth(window.innerWidth)
  }, [])

  const styleAssetFrame = {
    top: dynamicTopDesktop,
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
    height: 1626,
    width: 285,
    position: "absolute",
    overflow: "hidden",
    background: project === "loaders" ? "none" : "#fff",
    backgroundImage: `url(${ladimoramobile})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundPositionX: "left",
  }

  const PulseImage = {
    // To calculate the height and width, use the intrinsic aspect ratio. Find the asset’s dimensions, calculate (https://andrew.hedges.name/experiments/aspect_ratio/) the new height (or width) by plugging in the asset’s dimensions and the Frame’s set width (or height)
    height: 617,
    width: 285,
    position: "absolute",
    overflow: "hidden",
    background: "#fff",
    backgroundImage: `url(${pulse})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundPositionX: "left",
  }

  const styleAssetFrameMask = {
    overflow: "hidden",
    width: 800,
    height: 500,
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

        <FlexVertCenter>
          {project === "loaders" && <ProductHunt />}
          <FlexHorizontal>
            {url && (
              <Link
                title={`Visit this site to open the ` + project + `site`}
                text={"Visit"}
                url={url}
                dark
                external
              ></Link>
            )}
          </FlexHorizontal>
        </FlexVertCenter>
        <BottomSection>
          {/*                                */}
          {/* La dimora example for desktop  */}
          {/*                                */}
          {project === "ladimora" && viewportWidth > 1024 && (
            <>
              <motion.div
                style={styleAssetFrameMask}
                className="assetframemask"
              >
                <motion.div style={styleAssetFrame} className="assetframe">
                  <motion.div
                    style={styleAssetInnerFrame}
                    role="img"
                    aria-label="An image of the website of La Dimora"
                  ></motion.div>
                </motion.div>
              </motion.div>
              <ClayMacbookBottom />
            </>
          )}

          {/*                              */}
          {/* La dimora example for mobile */}
          {/*                              */}
          {project === "ladimora" && viewportWidth <= 1024 && (
            <ClayMobileMask>
              <ClayMobileNotch />
              <MobileLaDimoraNav></MobileLaDimoraNav>
              <motion.div style={MobileLaDimoraFrame}>
                <motion.div
                  style={MobileLaDimoraInnerFrame}
                  role="img"
                  aria-label="An image of the website of La Dimora"
                ></motion.div>
              </motion.div>
            </ClayMobileMask>
          )}

          {/*                 */}
          {/* Loaders example */}
          {/*                 */}

          {project === "loaders" && (
            <LoaderExample
              setQuantityLoaders={setQuantityLoaders}
              quantityLoaders={quantityLoaders}
            />
          )}

          {/*               */}
          {/* Pulse example */}
          {/*               */}

          {project === "pulse" && (
            <ClayMobileMask
              style={{
                borderColor: "#e98a9a",
                boxShadow: "1px 1px 20px 7px #eb708540",
              }}
            >
              <ClayMobileNotch style={{ background: "#e98a9a" }} />
              <motion.div
                style={PulseImage}
                role="img"
                aria-label="An image of the progressive web app Pulse"
              ></motion.div>
            </ClayMobileMask>
          )}
        </BottomSection>
      </TopSection>
    </ProjectFlexWrapper>
  )
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
  @media (max-width: 479px) {
    gap: 0rem;
  }
`

// Clay models

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
  width: 285px;
  height: 548px;
  border-radius: 40px;
  z-index: 20;
  border: 8px solid rgb(36 38 70);
  background-color: rgb(57 63 110);
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.04),
    0 22.3px 17.9px rgba(0, 0, 0, 0.06), 0 100px 80px rgba(0, 0, 0, 0.1);
`

const ClayMobileNotch = styled(motion.div)`
  width: 32.7%; // iPhone 13  notch is 0.99", total screen width is 2.56"
  background: rgb(36 38 70);
  height: 14px;
  top: -1px;
  border-radius: 0px 0px 8px 8px;
  z-index: 8;
  position: absolute;
  z-index: 22;
  margin: 0 auto;
  left: 34%;
`

// Clay models

const TopSection = styled(motion.div)`
  width: 100%;
  padding: 10rem 2rem 4rem 2rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
  @media (max-width: 768px) {
    padding: 4rem 2rem 4rem 2rem;
  }
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
  letter-spacing: 1px;
  line-height: 1;
  font-weight: 800;
  text-transform: uppercase;
  border-radius: 8px;
  padding: 10px;
  background: #eb70852b;
  padding-bottom: 10px;
  font-family: "Object Sans Heavy", "Arial";
`

const ProjectDetails = styled(motion.span)`
  color: ${palette.greys100};
  font-size: 16;
  letter-spacing: 0;
  line-height: 1.8;
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
  font-family: "Object Sans Heavy", "Arial";

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
  width: 285px;
  height: 43px;
  z-index: 20;
`
