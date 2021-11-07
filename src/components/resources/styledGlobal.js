// 📦 Packages
import styled from "styled-components"
import { motion } from "framer-motion"

// 🌱 Components
// 🧰 Utils
// 🌀 Variants
// 💅🏽 Styled Components

export const H1 = styled(motion.h1)`
  font-size: 44px;
  font-family: "GT-Walsheim", sans-serif;
  font-weight: 600;
  line-height: 1;

  @media (max-width: 479px) {
    font-size: 30px;
  }
  @media (max-width: 737px) {
    font-size: 36px;
  }
`

export const Paragraph = styled(motion.p)`
  color: rgb(28, 28, 28);
  font-size: 20px;
  vertical-align: middle;
  line-height: 30px;
  text-align: start;
  max-width: 550px;
  @media (max-width: 479px) {
    font-size: 16px;
  }
`
