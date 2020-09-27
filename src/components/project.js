import React from "react"
import { motion } from "framer-motion"
import Link from "./link"
import Loader from "../components/loader"
import Accordion from "../components/accordion"

export default function Project(props) {
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
    textTransform: "capitalize",
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
    width: "50%",
    paddingBottom: "20px",
  }

  const styleAssetFrame = {
    width: 704,
    height: 391,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    WebkitFilter: props.loaders
      ? "none"
      : "drop-shadow(0px 2.8px 1px rgba(0, 0, 0, 0.02)) drop-shadow(0px 6.7px 3px rgba(0, 0, 0, 0.028)) drop-shadow(0px 12.5px 5px rgba(0, 0, 0, 0.035)) drop-shadow(0px 22.3px 8px rgba(0, 0, 0, 0.042)) drop-shadow(0px 41px 15px rgba(0, 0, 0, 0.05)) drop-shadow(0px 100px 34px rgba(0, 0, 0, 0.07))",
    filter: props.loaders
      ? "none"
      : "drop-shadow(0px 2.8px 1px rgba(0, 0, 0, 0.02)) drop-shadow(0px 6.7px 3px rgba(0, 0, 0, 0.028)) drop-shadow(0px 12.5px 5px rgba(0, 0, 0, 0.035)) drop-shadow(0px 22.3px 8px rgba(0, 0, 0, 0.042)) drop-shadow(0px 41px 15px rgba(0, 0, 0, 0.05)) drop-shadow(0px 100px 34px rgba(0, 0, 0, 0.07))",
    background: props.loaders || props.accordion ? "none" : "#fff",
    backgroundImage: `url(${props.asset})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }

  // const [isDesktop, setIsDesktop] = React.useState(undefined)

  // React.useEffect(() => {
  //   window.matchMedia("(any-hover: none)").matches
  //     ? setIsDesktop(false)
  //     : setIsDesktop(true)
  // }, [])

  return (
    <motion.div style={styleFlexWrapper}>
      <motion.div style={styleTopSection}>
        <span style={styleLabel}>{props.projectlabel}</span>
        <span style={styleTitle}>{props.projecttitle}</span>
        <span style={styleInfo}>{props.projectinfo}</span>
        <Link linktext={props.linktext} url={props.url}></Link>
      </motion.div>
      <motion.div style={styleBottomSection}>
        <motion.div style={styleAssetFrame}>
          {props.loaders && <Loader />}
          {props.accordion && <Accordion />}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
