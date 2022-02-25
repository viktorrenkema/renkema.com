// 📦 Packages
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// 🌱 Components
// 🧰 Utils
// 🌀 Variants
// 💅🏽 Styled Components

export const H1 = styled(motion.h1)`
  font-size: 56px;
  font-family: "Object Sans Heavy", "Arial";
  line-height: 1.2;
  color: #1d1f35;
  @media (max-width: 767px) {
    font-size: 38px;
  }
  @media (max-width: 425px) {
    font-size: 38px;
  }
`

// Must use a motion.div due to how Firefox renders text-stroke with h1's
export const H2 = styled(motion.div)`
  font-size: 48px;
  font-family: "Object Sans Heavy", "Arial";
  line-height: 1.2;
  @media (max-width: 479px) {
    font-size: 24px;
  }
  @media (max-width: 737px) {
    font-size: 36px;
  }
`

export const Paragraph = styled(motion.p)`
  font-family: "Object Sans Thin", "Arial";
  color: #1d1f35;
  font-size: 18px;
  vertical-align: middle;
  line-height: 30px;
  text-align: start;
  width: 90%;
  max-width: 600px;
  @media (max-width: 479px) {
    font-size: 16px;
  }
`

export const FlexVertCenter = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FlexColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`

export function ProductHunt() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <a
        href="https://www.producthunt.com/posts/loader-generator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-loader-generator"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=270365&theme=dark"
          alt="Loader generator - Create animated loaders and generate production React code | Product Hunt"
          style={{ width: "175px", height: "37.8px" }}
        />
      </a>
    </div>
  )
}
