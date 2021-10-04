// 📦 Packages
import React from "react"
import {
  motion,
  useViewportScroll,
  useDomEvent,
  useRef,
  useTransform,
} from "framer-motion"
import useIsInViewport from "use-is-in-viewport"
import styled from "styled-components"
import Mesh from "../images/mesh-gradient.png"

// Components

// import Heading from "./heading"
{
  /* <Heading projecttitle={projecttitle} url={"www.google.com"}></Heading> */
}
import Accordion from "../components/accordion"
import LoaderExample from "./projectExamples/loaderExample"

// 🧰 Utils
import { palette } from "../../style/palette"

// 💅🏽 Styled Components
const DemoLoaders = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const MeshBg = styled.div`
  border-radius: 10px;
  width: fit-content;
  height: auto;
  padding: 2rem;
  background-image: url(${Mesh});
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  transform: rotate(1deg);
`

const LaDimoraScrollMask = styled(motion.div)`
  overflow: hidden;
  border-radius: 4px;
  width: ${props => (props.isDesktop ? "1023px" : "90%")};
  height: ${props => (props.isDesktop || props.isTablet ? "520px" : "200px")};
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.04),
    0 22.3px 17.9px rgba(0, 0, 0, 0.06), 0 100px 80px rgba(0, 0, 0, 0.1);
  transform: rotate(-1deg);
`

export default function Project({
  ladimora,
  loaders,
  accordion,
  hyperlink,
  asset,
  projectlabel,
  projecttitle,
  projectinfo,
  linktext,
  url,
}) {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 10 })
  const [isDesktop, setIsDesktop] = React.useState(undefined)
  const [isTablet, setIsTablet] = React.useState(undefined)
  const [isMobile, setIsMobile] = React.useState(undefined)
  const [isLowMobile, setIsLowMobile] = React.useState(undefined)
  const [isLowTablet, setIsLowTablet] = React.useState(undefined)

  // console.log(isLowMobile, isMobile, isLowTablet, isTablet, isDesktop)

  let { scrollYProgress } = useViewportScroll() // Track the y scroll

  const scrollRange = [0, 0.82, 0.92]
  const ladimoraRange = [0, 0, -520]
  const ladimoraTablet = [0, 0, -400]
  const ladimoraLowTablet = [0, 0, -295]
  const ladimoraMobile = [0, 0, -170]
  const ladimoraLowMobile = [0, 0, -140]

  const adjustScrollY = useTransform(
    scrollYProgress,
    scrollRange,
    ladimoraRange
  )
  const adjustScrollYTablet = useTransform(
    scrollYProgress,
    scrollRange,
    ladimoraTablet
  )

  const adjustScrollYLowTablet = useTransform(
    scrollYProgress,
    scrollRange,
    ladimoraLowTablet
  )
  const adjustScrollYMobile = useTransform(
    scrollYProgress,
    scrollRange,
    ladimoraMobile
  )
  const adjustScrollYLowMobile = useTransform(
    scrollYProgress,
    scrollRange,
    ladimoraLowMobile
  )

  /// Issues converting motionvalues to percentages

  // const adjustScrollYMobile = useTransform(
  //   scrollYProgress,
  //   scrollRange,
  //   ladimoraRangeMobile
  // )

  // const ladimoraRangeMobile = [0, 0, -10]

  // const stringify = JSON.stringify(adjustScrollYMobile)
  // const toPercentage = adjustScrollYMobile.current.toString() + "%"

  // console.log(adjustScrollYMobile)

  // console.log("toPercentage:" + toPercentage)
  // console.log("stringify: " + stringify)

  ///

  React.useEffect(() => {
    const clientWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )
    if (clientWidth < 370) {
      setIsLowMobile(true)
    } else if (clientWidth < 426) {
      setIsMobile(true)
    } else if (clientWidth < 600) {
      setIsLowTablet(true)
    } else if (clientWidth < 769) {
      setIsTablet(true)
    } else if (clientWidth > 769) {
      setIsDesktop(true)
    }
  }, [])

  const [quantityLoaders, setQuantityLoaders] = React.useState(5)

  const styleFlexWrapper = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#181818",
  }

  const styleTopSection = {
    width: "100%",
    height: "500px",
    gap: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    backgroundColor: "#181818",
    // borderTop: "1px solid #e6e6e6",
  }

  const styleBottomSection = {
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    background: "#1e1e1e",
  }

  const styleLabel = {
    color: "hsl(350, 75%, 68%)",
    fontSize: "12px",
    letterSpacing: "0px",
    lineHeight: 1,
    fontWeight: 800,
    textTransform: "uppercase",
    borderRadius: "8px",
    padding: "10px",
    background: "#eb70852b",
    paddingBottom: "10px",
    fontFamily: "GT-Walsheim-Bold",
  }

  const styleTitle = {
    // fontFamily: `"Lato", serif`,
    color: palette.greys100,
    fontSize: 44,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 900,
    // paddingBottom: "20px",
  }

  const styleInfo = {
    // fontFamily: `"Lato", serif`,
    color: palette.greys100med,
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 1.4,
    fontWeight: 400,
    textAlign: "center",
    width: "90%",
    // paddingBottom: "20px",
    maxWidth: "500px",
  }

  console.log(isMobile)

  const styleAssetFrame = {
    top:
      ladimora && isInViewport && isLowMobile
        ? adjustScrollYLowMobile
        : ladimora && isInViewport && isDesktop
        ? adjustScrollY
        : ladimora && isInViewport && isTablet
        ? adjustScrollYTablet
        : ladimora && isInViewport && isMobile
        ? adjustScrollYMobile // : ladimora && isInViewport && !isDesktop
        : // ? `-${adjustScrollYMobile.current}` + `%`
          0,
    width: "100%",

    height: !isDesktop ? "-webkit-fill-available" : 1035,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  }

  const styleAssetInnerFrame = {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    background: loaders || accordion ? "none" : "#fff",
    backgroundImage: `url(${asset})`,
    // backgroundImage: isDesktop ? `url(${asset})` : `url(${ladimora})`,
    backgroundSize:
      isMobile || isTablet || isLowTablet || isLowMobile ? "contain" : "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    // transform: isTablet ? "scale(0.9)" : "unset",
  }

  // const [isDesktop, setIsDesktop] = React.useState(undefined)

  // React.useEffect(() => {
  //   window.matchMedia("(any-hover: none)").matches
  //     ? setIsDesktop(false)
  //     : setIsDesktop(true)
  // }, [])

  return (
    <motion.div style={styleFlexWrapper} ref={targetRef}>
      <motion.div style={styleTopSection}>
        <span style={styleLabel}>{projectlabel}</span>
        <span style={styleTitle} className="projectheader">
          <motion.a
            style={{
              color: "white",
              textDecoration: "underline",
              textDecorationColor: "rgba(235, 112, 133, 0)",
            }}
            target="_blank"
            href={url}
            whileHover={{
              textDecoration: "underline",
              textDecorationColor: "rgba(235, 112, 133, 0.9)",
            }}
          >
            {projecttitle}
          </motion.a>
        </span>
        <span style={styleInfo}>{projectinfo}</span>
        {loaders && (
          <div style={{ transform: "scale(0.7)" }}>
            <a
              href="https://www.producthunt.com/posts/loader-generator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-loader-generator"
              target="_blank"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=270365&theme=light"
                alt="Loader generator - Create animated loaders and generate production React code | Product Hunt"
                style={{ width: "250px", height: "54px" }}
              />
            </a>
          </div>
        )}
      </motion.div>
      <motion.div style={styleBottomSection}>
        {/* Project == La Dimora */}
        {ladimora && (
          <MeshBg>
            <LaDimoraScrollMask isDesktop={isDesktop} isTablet={isTablet}>
              <motion.div style={styleAssetFrame} className="assetframe">
                <motion.div style={styleAssetInnerFrame}></motion.div>
              </motion.div>
            </LaDimoraScrollMask>
          </MeshBg>
        )}
        {/* Project == Loaders */}
        {loaders && (
          <LoaderExample
            setQuantityLoaders={setQuantityLoaders}
            quantityLoaders={quantityLoaders}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
