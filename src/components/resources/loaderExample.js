// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

// 🌱 Components
import Input from "./input"
import Loader from "./loader"
import { generateCodeSnippet } from "./generateCode"
import CodeBlock from "./codeSnippet"

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
  // hide: {
  //   display: "none",
  //   y: "5px",
  //   color: "white",
  //   opacity: "0.6",
  // },
  focus: {
    color: "#eb7084",
    opacity: 1,
  },
}

// 🧰 Utils

// 💅🏽 Styled Components
const Select = styled.select`
  background: #25273f;
  width: 90px;
  padding: 5px;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  color: white;
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
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
const FlexColumnMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  min-width: 30%;
  padding: 0rem 1rem;
  /* border: 2px solid #fbfbfb; */
  align-items: center;
  margin: 0rem 1rem;
  overflow: hidden;
  /* box-shadow: 0 6.7px 5.3px rgb(0 0 0 / 4%), 0 22.3px 17.9px rgb(0 0 0 / 6%),
    0 100px 80px rgb(0 0 0 / 2%); */
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
  /* border-radius: 10px; */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);

  :-webkit-scrollbar {
    background-color: white;
  }
`

const Span = styled(motion.span)`
  color: ${palette.greys100};
  font-size: 12;
  letter-spacing: 0;
  line-height: 1.4;
  font-weight: 400;
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
          <Label
            variants={labelVariants}
            animate={focus === "quantity" ? "focus" : error ? "hide" : "show"}
            initial={"show"}
            transition={{ duration: "0.3" }}
          >
            Quantity
          </Label>
          {/* <Notice
            variants={labelVariants}
            animate={focus === "quantity" ? "focus" : error ? "show" : "hide"}
            initial={"hide"}
            transition={{ duration: "0.3" }}
          >
            Max is 10
          </Notice> */}
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
      <FlexColumnMiddle>
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
      </FlexColumnMiddle>
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
