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

// Components

import Link from "./link"
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

export default function Project(props) {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 10 })
  const [isDesktop, setIsDesktop] = React.useState(undefined)
  const [isTablet, setIsTablet] = React.useState(undefined)
  const [isMobile, setIsMobile] = React.useState(undefined)
  const [isLowMobile, setIsLowMobile] = React.useState(undefined)
  const [isLowTablet, setIsLowTablet] = React.useState(undefined)

  // console.log(isLowMobile, isMobile, isLowTablet, isTablet, isDesktop)

  let { scrollYProgress } = useViewportScroll() // Track the y scroll

  const scrollRange = [0, 0.75, 0.85]
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
    height: 600,
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

  const styleAssetFrameMask = {
    overflow: "hidden",
    width: isDesktop ? 800 : "90%",
    height: isDesktop || isTablet ? 360 : 200,

    // WebkitFilter: props.loaders
    //   ? "none"
    //   : "drop-shadow(0px 2.8px 1px rgba(0, 0, 0, 0.02)) drop-shadow(0px 6.7px 3px rgba(0, 0, 0, 0.028)) drop-shadow(0px 12.5px 5px rgba(0, 0, 0, 0.035)) drop-shadow(0px 22.3px 8px rgba(0, 0, 0, 0.042)) drop-shadow(0px 41px 15px rgba(0, 0, 0, 0.05)) drop-shadow(0px 100px 34px rgba(0, 0, 0, 0.07))",
    // filter: props.loaders
    //   ? "none"
    //   : "drop-shadow(0px 2.8px 1px rgba(0, 0, 0, 0.02)) drop-shadow(0px 6.7px 3px rgba(0, 0, 0, 0.028)) drop-shadow(0px 12.5px 5px rgba(0, 0, 0, 0.035)) drop-shadow(0px 22.3px 8px rgba(0, 0, 0, 0.042)) drop-shadow(0px 41px 15px rgba(0, 0, 0, 0.05)) drop-shadow(0px 100px 34px rgba(0, 0, 0, 0.07))",
    boxShadow:
      "0 6.7px 5.3px rgba(0, 0, 0, 0.04),0 22.3px 17.9px rgba(0, 0, 0, 0.06),0 100px 80px rgba(0, 0, 0, 0.1)",
  }

  const styleAssetFrame = {
    top:
      props.ladimora && isInViewport && isLowMobile
        ? adjustScrollYLowMobile
        : props.ladimora && isInViewport && isDesktop
        ? adjustScrollY
        : props.ladimora && isInViewport && isTablet
        ? adjustScrollYTablet
        : props.ladimora && isInViewport && isMobile
        ? adjustScrollYMobile // : props.ladimora && isInViewport && !isDesktop
        : // ? `-${adjustScrollYMobile.current}` + `%`
          0,
    // width: "100%",

    // height: !isDesktop ? "-webkit-fill-available" : 883,
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
    background: props.loaders || props.accordion ? "none" : "#fff",
    backgroundImage: `url(${props.asset})`,
    // backgroundImage: isDesktop ? `url(${props.asset})` : `url(${ladimora})`,
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
        <span style={styleLabel}>{props.projectlabel}</span>
        <span style={styleTitle} className="projectheader">
          {props.projecttitle}
        </span>
        <span style={styleInfo}>{props.projectinfo}</span>
        <Link inline={false} linktext={props.linktext} url={props.url}></Link>
        {props.loaders && (
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
        {props.ladimora && (
          <motion.div style={styleAssetFrameMask} className="assetframemask">
            <motion.div style={styleAssetFrame} className="assetframe">
              <motion.div style={styleAssetInnerFrame}></motion.div>
            </motion.div>
          </motion.div>
        )}
        {props.accordion && (
          <motion.div style={styleAssetFrame}>
            <Accordion />
          </motion.div>
        )}
        {props.loaders && (
          <LoaderExample
            setQuantityLoaders={setQuantityLoaders}
            quantityLoaders={quantityLoaders}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
