import React from "react"
import { motion } from "framer-motion"
import { cardData } from "../data/data.json"

export default function Accordion(props) {
  const [activeCard, setActiveCard] = React.useState(null)

  const cardVariants = {
    open: {
      transition: {
        type: "tween",
        duration: 0.3,
      },
      height: "180px",
    },
    closed: {
      transition: {
        type: "tween",
        duration: 0.3,
      },
      height: "100px",
    },
  }

  const styleCard = {
    width: 340,
    height: 180,
    overflow: "hidden",
    boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.25)",
    borderRadius: 5,
    background: "white",
  }

  const styleFlexWrapper = {
    cursor: "pointer",
  }

  const styleBottomCard = {
    width: 340,
    height: 80,
    overflow: "hidden",
    background: `var(--token-16c646a3-c656-4764-925e-c312c235d179, #f0f0f0) /* {"name":"Lightergrey"} */`,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }

  const styleTopCard = {
    width: 340,
    height: 100,
    overflow: "visible",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  const styleTitle = {
    fontFamily: `"NunitoSans-ExtraBold", "Nunito Sans", sans-serif`,
    color: `var(--token-a20a2c7d-df16-4756-939a-15a6c2209091, #212121) /* {"name":"MyDarkGrey"} */`,
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 800,
    textAlign: "center",
    paddingBottom: "10px",
  }

  const styleSubtext = {
    width: 308,
    height: 11,
    fontFamily: `"NunitoSans-Regular", "Nunito Sans", sans-serif`,
    color: `var(--token-a20a2c7d-df16-4756-939a-15a6c2209091, #212121) /* {"name":"MyDarkGrey"} */`,
    fontSize: 11,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 400,
    textAlign: "center",
    paddingTop: "10px",
  }

  const styleFlexWrapHiddenBottomVertical = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  }

  const styleHiddenTextSmall = {
    fontFamily: `"NunitoSans-Regular", "Nunito Sans", sans-serif`,
    color: `var(--token-a20a2c7d-df16-4756-939a-15a6c2209091, #212121) /* {"name":"MyDarkGrey"} */`,
    fontSize: 9,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 400,
    textAlign: "center",
  }

  const styleHiddenText = {
    fontFamily: `"NunitoSans-Regular", "Nunito Sans", sans-serif`,
    color: `var(--token-a20a2c7d-df16-4756-939a-15a6c2209091, #212121) /* {"name":"MyDarkGrey"} */`,
    fontSize: 9,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 900,
    textAlign: "center",
  }

  return (
    <motion.div style={styleFlexWrapper}>
      {cardData.map(card => {
        return (
          <motion.div
            style={styleCard}
            variants={cardVariants}
            onTap={() => setActiveCard(activeCard === card ? null : card)}
            initial={activeCard === card ? "open" : "closed"}
            animate={activeCard === card ? "open" : "closed"}
            Hiddentext1={card.Hiddentext1}
            Hiddentext2={card.Hiddentext2}
            key={card}
          >
            <motion.div style={styleTopCard}>
              <span style={styleTitle}>{card.title}</span>
              <Separator></Separator>
              <span style={styleSubtext}>{card.subtext}</span>
            </motion.div>

            <motion.div style={styleBottomCard}>
              <motion.div style={styleFlexWrapHiddenBottomVertical}>
                <span style={styleHiddenText}>{card.lefth2}</span>
                <span style={styleHiddenTextSmall}>{card.leftsubtext}</span>
              </motion.div>
              <motion.div style={styleFlexWrapHiddenBottomVertical}>
                <span style={styleHiddenText}>{card.righth2}</span>
                <span style={styleHiddenTextSmall}>{card.rightsubtext}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

function Separator() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="277" height="1">
      <path
        d="M 0 0 L 277 0 L 277 1 L 0 1 Z"
        fill="var(--token-16c646a3-c656-4764-925e-c312c235d179, rgba(204, 204, 204, 0.25))"
      ></path>
    </svg>
  )
}
