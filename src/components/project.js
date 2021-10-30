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
import SocialLink from "./sociallink"
import Headinglink from "./headinglink"

// 🖼️ Assets
// import Mesh from "../images/mesh-gradient.png"
import Macbook from "../images/macbook.png"

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
  padding: 4rem 2rem;
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
  padding: 2rem;
  /* background: #202020; */
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
  color: ${palette.greys700};
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

const MacbookRender = styled.div`
  background-image: url(${Macbook});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: 66.64%; /* (img-height / img-width * container-width) */
  /* (853 / 1280 * 100) */
  /* display: block;
  width: 100%;
  height: auto; */
  /* @media (max-width: 768px) {
    padding: 0;
    height: 30vh;
  } */
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

// Small mobile: < 370
// Mobile: <426
// Tablet: <769
// Desktop: >768

export default function Project({
  ladimora,
  loaders,
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

  const [inputRange, setInputRange] = React.useState([0, 0])
  const [
    inputRangeLaDimoraScroller,
    setInputRangeLaDimoraScroller,
  ] = React.useState([0, 0])

  React.useEffect(() => {
    let el = document.querySelector(`#${id}`)
    setInputRange([
      el.getBoundingClientRect().top + 400,
      el.getBoundingClientRect().top - 400,
    ])

    setInputRangeLaDimoraScroller([
      el.getBoundingClientRect().top - 400,
      el.getBoundingClientRect().top,
    ])
  }, [])

  let { scrollY } = useViewportScroll() // Track the y scroll in pixels from top

  // For the css transform, transform the scrollY into a 3, -3 range
  // const dynamicRotate = useTransform(scrollY, inputRange, [3, -3])

  // For the dynamic top position scroll, transform the scrollY into a distance range
  const dynamicTop = useTransform(scrollY, inputRangeLaDimoraScroller, [
    0,
    -675,
  ])
  // const rotate = useMotionTemplate`rotateX(${dynamicRotate}deg`

  const styleAssetFrame = {
    top: dynamicTop,
    width: "100%",
    height: 1035,
    position: "relative",
    overflow: "visible",
  }

  const styleAssetInnerFrame = {
    // top: dynamicTop,
    height: 1035,
    width: "100%",
    position: "absolute",
    overflow: "hidden",
    background: loaders ? "none" : "#fff",
    backgroundImage: `url(${asset})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  }

  const PenScript = styled.span`
    font-family: "Nanum Pen Script", cursive;
  `

  const styleAssetFrameMask = {
    overflow: "hidden",
    width: 800,
    height: 360,
    border: "8px solid white",
    boxShadow:
      "0 6.7px 5.3px rgba(0, 0, 0, 0.04),0 22.3px 17.9px rgba(0, 0, 0, 0.06),0 100px 80px rgba(0, 0, 0, 0.1)",
  }

  return (
    <ProjectFlexWrapper
      id={`${id}`}
      // style={{ transform: rotate }}
    >
      <TopSection>
        <Label>{projectlabel}</Label>
        <Title>
          <Headinglink title={projecttitle} url={url}></Headinglink>
        </Title>

        <ProjectDetails>{projectinfo}</ProjectDetails>
        {loaders && (
          <div>
            <a
              href="https://www.producthunt.com/posts/loader-generator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-loader-generator"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=270365&theme=light"
                alt="Loader generator - Create animated loaders and generate production React code | Product Hunt"
                style={{ width: "175px", height: "37.8px" }}
              />
            </a>
          </div>
        )}
        {/* <SocialLink text="Github" url="github.com" /> */}
        <BottomSection>
          {/* If project is La Dimora */}
          {ladimora && (
            <motion.div style={styleAssetFrameMask} className="assetframemask">
              <motion.div style={styleAssetFrame} className="assetframe">
                <motion.div style={styleAssetInnerFrame}></motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* If project is Loaders */}
          {loaders && (
            <LoaderExample
              setQuantityLoaders={setQuantityLoaders}
              quantityLoaders={quantityLoaders}
            />
          )}
        </BottomSection>
      </TopSection>
    </ProjectFlexWrapper>
  )
}

{
  /* {ladimora && (
            <>
              <motion.img
                style={{ maxWidth: "80%" }}
                src={Macbook}
              ></motion.img>
              <motion.div style={styleAssetInnerFrame}></motion.div>
            </>
          )} */
}
{
  /* {ladimora && (
            <MacbookRender>
              <LaDimoraScrollMask>
                <motion.div style={styleAssetFrame} className="assetframe">
                  <motion.div style={styleAssetInnerFrame}></motion.div>
                </motion.div>
              </LaDimoraScrollMask>
            </MacbookRender>
          )} */
}
