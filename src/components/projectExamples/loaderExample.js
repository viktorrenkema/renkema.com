// 📦 Packages
import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from "styled-components"

import Input from "../../components/input"
import Loader from "../../components/loader"

// 🧰 Utils
// import { palette } from "../../style/palette"

// 💅🏽 Styled Components
const DemoLoaders = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Label = styled.span`
  font-size: 10px;
  color: white;
  opacity: 0.6;
  margin-bottom: 0.25rem;
  font-family: Open Sans;
  text-transform: uppercase;
  font-weight: 500;
`

const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  align-items: flex-end;
  min-width: 25%;
`

export default function LoaderExample({ quantityLoaders, setQuantityLoaders }) {
  const [render, startRender] = React.useState(true)
  const [ease, setEase] = React.useState("anticipate")
  const [rotation, setRotation] = React.useState(360)

  console.log(rotation)
  console.log(quantityLoaders)
  return (
    <DemoLoaders>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRight: "1px solid #ffffff29",
          paddingRight: "2rem",
          alignItems: "flex-end",
          minWidth: "25%",
        }}
      >
        <LabelWrap>
          <Label>Quantity</Label>
          <Input
            quantityLoaders={quantityLoaders}
            value={quantityLoaders}
            onChange={setQuantityLoaders}
          />
        </LabelWrap>
        <LabelWrap>
          <Label>Rotation</Label>
          <Input value={rotation} onChange={setRotation} />
        </LabelWrap>

        <LabelWrap>
          <Label htmlFor="ease">Easing</Label>
          <select
            id="ease"
            name="ease"
            onChange={e => {
              setEase(e.target.value), setQuantityLoaders(quantityLoaders)
            }}
            onFocus={() => {
              setQuantityLoaders(0)
              // startRender(false)
            }}
            // onBlur={() => {
            //   startRender(false)
            // }}
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
          </select>
        </LabelWrap>
      </div>
      <FlexColumn>
        {/* {render && ( */}
        <Loader
          ease={ease}
          rotation={rotation}
          setQuantityLoaders={setQuantityLoaders}
          quantityLoaders={quantityLoaders}
        />
        {/* )} */}
      </FlexColumn>
    </DemoLoaders>
  )
}
