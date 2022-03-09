// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

// 🌱 Components
import Input from "./input"
import Loader from "./loader"
import { generateCodeSnippet } from "./generateCode"
import CodeBlock from "./codeBlock"
import { FlexVertCenter } from "./styledGlobal"

// 🧰 Utils
import { palette } from "../../../style/palette"

// 🌀 Variants
const labelVariants = {
  show: {
    display: "inline-block",
    y: "0px",
    color: "white",
    opacity: "1",
  },
  focus: {
    color: "#eb7084",
    opacity: 1,
  },
}

// 🧰 Utils

// 💅🏽 Styled Components
export const PenScript = styled.span`
  font-family: "Nanum Pen Script", cursive;
  font-size: 18px;
  transform: ${props => props.rotate};
  top: 0px;
  color: ${props => props.color};
  @media (max-width: 345px) {
    // Small up to medium device
    transform: rotate(350deg);
  }
`

const Select = styled.select`
  background: #25273f;
  width: 90px;
  height: 26px;
  padding: 5px;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  color: white;
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  -webkit-appearance: none;

  :focus {
    border: 1px solid #eb7085;
    outline: none;
    filter: none;
  }
`
const DemoLoaders = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  position: relative;
`

const Label = styled(motion.span)`
  font-size: 10px;
  margin-bottom: 0.25rem;
  font-family: Open Sans;
  text-transform: uppercase;
  font-weight: 500;
  color: white;
  letter-spacing: 1px;
`

const Notice = styled(motion.span)`
  font-family: Open Sans;
  font-weight: 500;
  color: white;
  opacity: 1;
  font-size: 12px;
  margin-bottom: 0.35rem;
`

const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const FlexInputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
`
const FlexLoadersPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  min-width: 30%;
  align-items: center;
  margin: 2rem;
  overflow: hidden;
`
const FlexColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  min-width: 30%;
  max-height: 300px;
  overflow: scroll;
  position: relative;
  padding-left: 2rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);

  :-webkit-scrollbar {
    background-color: white;
  }
`
export const FlexVertCenterPenScript = styled(FlexVertCenter)`
  left: -80px;
  position: absolute;
  top: -30px;
  @media (max-width: 767px) {
    left: -50px;
  }
  @media (max-width: 385px) {
    left: 50px;
    top: -35px;
    transform: rotate(8deg);
    display: none;
  }
`

const Span = styled(motion.span)`
  color: ${palette.greys100};
  font-size: 12;
  letter-spacing: 0;
  line-height: 1.4;
  font-weight: 400;
`
const SVGArrow = styled(motion.svg)`
  width: 16px;
  height: 18px;
  @media (max-width: 345px) {
    // Small up to medium device
    display: none;
  }
`

export default function LoaderExample({ quantityLoaders, setQuantityLoaders }) {
  const [render, startRender] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [ease, setEase] = React.useState("anticipate")
  const [rotation, setRotation] = React.useState(45)
  const [focus, setFocus] = React.useState("")

  React.useEffect(() => {
    if (quantityLoaders > 10) {
      setQuantityLoaders(10)
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }, [quantityLoaders])

  return (
    <DemoLoaders>
      <FlexInputs>
        <LabelWrap>
          <FlexVertCenterPenScript>
            <PenScript rotate={"rotate(346deg)"} color={palette.primary500}>
              Take it for a spin
            </PenScript>
            <Arrow fill={palette.primary500}></Arrow>
          </FlexVertCenterPenScript>
          <Label
            variants={labelVariants}
            animate={focus === "quantity" ? "focus" : error ? "hide" : "show"}
            initial={"show"}
            transition={{ duration: "0.3" }}
          >
            Quantity
          </Label>
          <Input
            quantityLoaders={quantityLoaders}
            value={quantityLoaders}
            onChange={setQuantityLoaders}
            onFocus={() => {
              setFocus("quantity")
            }}
            onBlur={() => {
              setFocus("")
            }}
          />
        </LabelWrap>
        <LabelWrap>
          <Label
            variants={labelVariants}
            animate={focus === "rotation" ? "focus" : error ? "hide" : "show"}
            initial={"show"}
            transition={{ duration: "0.3" }}
          >
            Rotation
          </Label>
          <Input
            id="rotation"
            value={rotation}
            onChange={setRotation}
            onFocus={() => {
              startRender(false)
              setFocus("rotation")
            }}
            onBlur={() => {
              startRender(true)
              setFocus("")
            }}
            onKeyPress={event => {
              event.key === "Enter"
                ? document.getElementById("rotation").blur()
                : undefined
            }}
          />
        </LabelWrap>

        <LabelWrap>
          <Label
            htmlFor="ease"
            variants={labelVariants}
            animate={focus === "ease" ? "focus" : error ? "hide" : "show"}
            initial={"show"}
            transition={{ duration: "0.3" }}
          >
            Easing
          </Label>
          <Select
            id="ease"
            name="ease"
            onChange={e => setEase(e.target.value)}
            onFocus={() => {
              startRender(false)
              setFocus("ease")
            }}
            onBlur={() => {
              startRender(true)
              setFocus("")
            }}
            onKeyPress={event => {
              event.key === "Enter"
                ? document.getElementById("ease").blur()
                : undefined
            }}
          >
            <option value="anticipate">anticipate</option>
            <option value="linear">linear</option>
            <option value="easeIn">easeIn</option>
            <option value="easeOut">easeOut</option>
            <option value="easeInOut">easeInOut</option>
            <option value="circIn">circIn</option>
            <option value="circOut">circOut</option>
            <option value="circInOut">circInOut</option>
            <option value="backIn">backIn</option>
            <option value="backOut">backOut</option>
            <option value="backInOut">backInOut</option>
          </Select>
        </LabelWrap>
      </FlexInputs>
      <FlexLoadersPreview>
        {render == false ? (
          <Span>
            Hit <code>enter</code> (or click anywhere) to generate{" "}
          </Span>
        ) : (
          <Loader
            ease={ease}
            rotation={rotation}
            setQuantityLoaders={setQuantityLoaders}
            quantityLoaders={quantityLoaders}
          />
        )}
      </FlexLoadersPreview>
      <FlexColumnRight id={"CodeColumn"}>
        <CodeBlock
          text={generateCodeSnippet({
            ease,
            rotation,
            quantityLoaders,
          })}
        />
      </FlexColumnRight>
    </DemoLoaders>
  )
}

export function Arrow(props) {
  return (
    <SVGArrow
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="18"
      style={props.style}
    >
      <path
        d="M 14.921 3.344 L 11.797 0.22 L 11.796 0.219 C 11.779 0.202 11.76 0.185 11.741 0.169 C 11.73 0.16 11.719 0.153 11.708 0.144 C 11.699 0.138 11.691 0.132 11.682 0.126 C 11.668 0.116 11.653 0.108 11.638 0.099 C 11.632 0.096 11.626 0.092 11.62 0.089 C 11.606 0.081 11.591 0.074 11.576 0.068 C 11.569 0.064 11.561 0.06 11.554 0.057 C 11.541 0.052 11.528 0.048 11.515 0.043 C 11.505 0.039 11.495 0.036 11.484 0.032 C 11.474 0.029 11.463 0.027 11.453 0.024 C 11.44 0.021 11.426 0.017 11.413 0.014 C 11.405 0.013 11.397 0.012 11.389 0.011 C 11.372 0.008 11.356 0.005 11.34 0.004 C 11.334 0.003 11.327 0.003 11.32 0.003 C 11.303 0.001 11.285 0 11.267 0 C 11.258 0 11.248 0.001 11.238 0.001 C 11.224 0.002 11.21 0.002 11.195 0.003 C 11.17 0.006 11.146 0.009 11.121 0.014 L 11.12 0.014 C 11.117 0.015 11.114 0.016 11.11 0.017 C 11.09 0.021 11.069 0.026 11.049 0.032 C 11.041 0.035 11.033 0.038 11.025 0.041 C 11.01 0.046 10.994 0.051 10.979 0.057 C 10.969 0.062 10.959 0.067 10.949 0.071 C 10.937 0.077 10.925 0.082 10.913 0.088 C 10.901 0.095 10.89 0.102 10.878 0.109 C 10.869 0.115 10.859 0.12 10.85 0.126 C 10.836 0.135 10.823 0.146 10.81 0.156 C 10.804 0.161 10.797 0.165 10.791 0.17 C 10.774 0.184 10.758 0.199 10.743 0.214 C 10.741 0.216 10.738 0.218 10.736 0.22 L 10.735 0.221 L 10.733 0.223 L 7.612 3.344 C 7.319 3.637 7.319 4.112 7.612 4.404 C 7.753 4.545 7.943 4.624 8.142 4.624 C 8.341 4.624 8.532 4.545 8.673 4.404 L 10.614 2.463 C 10.4 4.828 8.654 6.876 6.211 7.362 C 5.109 7.581 3.967 7.458 2.938 7.008 C 2.32 6.738 1.757 6.357 1.276 5.883 C 0.981 5.593 0.506 5.597 0.216 5.892 C -0.075 6.187 -0.071 6.662 0.224 6.952 C 0.633 7.355 1.089 7.706 1.584 7.998 C 2.66 8.633 3.887 8.968 5.137 8.968 L 5.137 8.968 C 5.596 8.968 6.054 8.922 6.504 8.833 C 9.598 8.217 11.811 5.637 12.104 2.648 L 13.861 4.404 C 14.153 4.697 14.628 4.697 14.921 4.404 C 15.214 4.111 15.214 3.637 14.921 3.344 Z"
        transform="translate(0 4.087) rotate(104 7.57 4.484)"
        fill={props.fill}
      ></path>
    </SVGArrow>
  )
}
