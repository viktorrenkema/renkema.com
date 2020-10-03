import React from "react"
import {
  motion,
  useViewportScroll,
  useDomEvent,
  useRef,
  useTransform,
} from "framer-motion"
import useIsInViewport from "use-is-in-viewport"

import Link from "./link"
import Loader from "../components/loader"
import Input from "../components/input"
import Accordion from "../components/accordion"

export default function Project(props) {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 10 })

  console.log(isInViewport)

  let { scrollYProgress } = useViewportScroll() // Track the y scroll

  const scrollRange = [0, 0.75, 0.9]
  const ladimoraRange = [0, 0, -520]

  const adjustScrollY = useTransform(
    scrollYProgress,
    scrollRange,
    ladimoraRange
  )

  const modifier = useTransform(scrollYProgress, x => x * -300)

  setTimeout(function() {
    console.log(modifier)
  }, 1000)

  // useDomEvent(useRef(window), "scroll", () => console.log(scrollYProgress))

  const [quantityLoaders, setQuantityLoaders] = React.useState(5)

  const styleFlexWrapper = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
  }

  const styleTopSection = {
    width: "100%",
    height: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderTop: "1px solid #e6e6e6",
  }

  const styleBottomSection = {
    width: "100%",
    height: 600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: props.assetBackgroundColor,
  }

  const styleLabel = {
    fontFamily: `"Lato", serif`,
    color: "#1c1c1c",
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 1,
    fontWeight: 400,
    textTransform: "uppercase",
    paddingBottom: "10px",
  }

  const styleTitle = {
    fontFamily: `"Lato", serif`,
    color: "#000000",
    fontSize: 44,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 900,
    paddingBottom: "20px",
  }

  const styleInfo = {
    fontFamily: `"Lato", serif`,
    color: "#1c1c1c",
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 400,
    textAlign: "center",
    width: "90%",
    paddingBottom: "20px",
    maxWidth: "500px",
  }

  const styleAssetFrameMask = {
    overflow: "hidden",
    width: 800,
    height: 360,
    WebkitFilter: props.loaders
      ? "none"
      : "drop-shadow(0px 2.8px 1px rgba(0, 0, 0, 0.02)) drop-shadow(0px 6.7px 3px rgba(0, 0, 0, 0.028)) drop-shadow(0px 12.5px 5px rgba(0, 0, 0, 0.035)) drop-shadow(0px 22.3px 8px rgba(0, 0, 0, 0.042)) drop-shadow(0px 41px 15px rgba(0, 0, 0, 0.05)) drop-shadow(0px 100px 34px rgba(0, 0, 0, 0.07))",
    filter: props.loaders
      ? "none"
      : "drop-shadow(0px 2.8px 1px rgba(0, 0, 0, 0.02)) drop-shadow(0px 6.7px 3px rgba(0, 0, 0, 0.028)) drop-shadow(0px 12.5px 5px rgba(0, 0, 0, 0.035)) drop-shadow(0px 22.3px 8px rgba(0, 0, 0, 0.042)) drop-shadow(0px 41px 15px rgba(0, 0, 0, 0.05)) drop-shadow(0px 100px 34px rgba(0, 0, 0, 0.07))",
  }

  const styleAssetFrame = {
    top: props.ladimora && isInViewport ? adjustScrollY : 0,
    width: 800,
    height: 883,
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
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
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
      </motion.div>
      <motion.div style={styleBottomSection}>
        {props.ladimora && (
          <motion.div style={styleAssetFrameMask}>
            <motion.div style={styleAssetFrame}>
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
          <motion.div style={styleAssetFrame}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Input
                // quantityLoaders={quantityLoaders}
                value={quantityLoaders}
                onChange={setQuantityLoaders}
              />
              <Loader
                setQuantityLoaders={setQuantityLoaders}
                quantityLoaders={quantityLoaders}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
