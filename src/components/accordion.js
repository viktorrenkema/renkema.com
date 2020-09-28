import React from "react"
import { motion } from "framer-motion"
import { cardData } from "../data/data.json"

export default function Accordion(props) {
  const [activeCard, setActiveCard] = React.useState(null)

  const cards = {
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

  const chevron = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 180,
    },
  }

  const styleCard = {
    width: 340,
    height: 180,
    overflow: "hidden",
    // boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.25)",
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
    background: `var(--token-16c646a3-c656-4764-925e-c312c235d179, #F7F7F7) /* {"name":"Lightergrey"} */`,
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
    flexDirection: "row",
    justifyContent: "flex-start",
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
  }
  const styleTemperature = {
    fontFamily: `"Nunito Sans", sans-serif`,
    color: `var(--token-a20a2c7d-df16-4756-939a-15a6c2209091, #212121) /* {"name":"MyDarkGrey"} */`,
    fontSize: 28,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 400,
    fontStyle: "normal",
    textAlign: "center",
    padding: "0px 20px",
  }

  const styleSubtext = {
    fontFamily: `"NunitoSans-Regular", "Nunito Sans", sans-serif`,
    color: `var(--token-a20a2c7d-df16-4756-939a-15a6c2209091, #212121) /* {"name":"MyDarkGrey"} */`,
    fontSize: 11,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 400,
    textAlign: "center",
  }
  const styleForecastText = {
    fontFamily: `"NunitoSans-Regular", "Nunito Sans", sans-serif`,
    color: `var(--token-a20a2c7d-df16-4756-939a-15a6c2209091, #212121) /* {"name":"MyDarkGrey"} */`,
    fontSize: 11,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 600,
    textAlign: "center",
    paddingLeft: "40px",
  }

  const styleFlexWrapHiddenBottomVertical = {
    height: "100%",
    width: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    padding: "0px 15px 0px 0px",
  }

  const styleAmsterdamWrapper = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflow: "visible",
  }

  const styleTimeText = {
    fontFamily: `"Nunito Sans", sans-serif`,
    color: "#2222227a",
    fontSize: 8,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 600,
  }

  const styleSmallTemp = {
    fontFamily: `"Nunito Sans", sans-serif`,
    color: `var(--token-a20a2c7d-df16-4756-939a-15a6c2209091, #212121) /* {"name":"MyDarkGrey"} */`,
    fontSize: 8,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 700,
  }

  return (
    <motion.div style={styleFlexWrapper}>
      {cardData.map(card => {
        return (
          <motion.div
            style={styleCard}
            variants={cards}
            onTap={() => setActiveCard(activeCard === card ? null : card)}
            initial={activeCard === card ? "open" : "closed"}
            animate={activeCard === card ? "open" : "closed"}
            Hiddentext1={card.Hiddentext1}
            Hiddentext2={card.Hiddentext2}
            key={card}
          >
            <motion.div style={styleTopCard}>
              <span style={styleTemperature}>{card.temperature}</span>
              <motion.div style={styleAmsterdamWrapper}>
                <span style={styleTitle}>{card.title}</span>
                <span style={styleSubtext}>{card.subtext}</span>
              </motion.div>
              <span style={styleForecastText}>Show forecast</span>
              <motion.div
                variants={chevron}
                animate={activeCard ? "closed" : "open"}
                initial={activeCard ? "closed" : "open"}
              >
                <Chevrondown></Chevrondown>
              </motion.div>
            </motion.div>

            <motion.div style={styleBottomCard}>
              <motion.div style={styleFlexWrapHiddenBottomVertical}>
                <span style={styleTimeText}>{card.time1}</span>
                <Cloud1></Cloud1>
                <span style={styleSmallTemp}>{card.temp1}</span>
              </motion.div>
              <motion.div style={styleFlexWrapHiddenBottomVertical}>
                <span style={styleTimeText}>{card.time2}</span>
                <Cloud2></Cloud2>
                <span style={styleSmallTemp}>{card.temp2}</span>
              </motion.div>
              <motion.div style={styleFlexWrapHiddenBottomVertical}>
                <span style={styleTimeText}>{card.time3}</span>
                <Cloud3></Cloud3>
                <span style={styleSmallTemp}>{card.temp3}</span>
              </motion.div>
              <motion.div style={styleFlexWrapHiddenBottomVertical}>
                <span style={styleTimeText}>{card.time4}</span>
                <Cloud4></Cloud4>
                <span style={styleSmallTemp}>{card.temp4}</span>
              </motion.div>
              <motion.div style={styleFlexWrapHiddenBottomVertical}>
                <span style={styleTimeText}>{card.time5}</span>
                <Cloud5></Cloud5>
                <span style={styleSmallTemp}>{card.temp5}</span>
              </motion.div>
              <motion.div style={styleFlexWrapHiddenBottomVertical}>
                <span style={styleTimeText}>{card.time6}</span>
                <Cloud5></Cloud5>
                <span style={styleSmallTemp}>{card.temp6}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

function Cloud1() {
  return (
    <svg
      style={{ padding: "8px 0px", overflow: "visible" }}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="12"
    >
      <path
        d="M 12.689 8.172 C 12.726 7.98 12.745 7.782 12.745 7.58 C 12.745 5.799 11.259 4.356 9.426 4.356 C 8.134 4.356 7.014 5.074 6.466 6.121 C 6.016 5.694 5.402 5.431 4.724 5.431 C 3.35 5.431 2.235 6.514 2.235 7.849 C 2.235 7.961 2.243 8.071 2.258 8.18 C 1.294 8.411 0.576 9.258 0.576 10.266 C 0.576 11.451 1.567 12.415 2.789 12.415 L 12.19 12.415 C 13.41 12.415 14.405 11.453 14.405 10.267 C 14.405 9.248 13.671 8.392 12.689 8.172 Z M 2.814 5.548 C 2.797 5.422 2.788 5.293 2.788 5.162 C 2.788 3.53 4.15 2.207 5.831 2.207 C 7.05 2.207 8.1 2.903 8.586 3.908 C 8.856 3.85 9.138 3.819 9.426 3.819 C 11.565 3.819 13.298 5.503 13.298 7.58 C 13.298 7.654 13.296 7.728 13.292 7.801 C 14.272 8.215 14.958 9.165 14.958 10.266 C 14.958 11.75 13.723 12.953 12.193 12.953 L 2.788 12.953 C 1.261 12.953 0.023 11.747 0.023 10.267 C 0.023 9.164 0.704 8.217 1.683 7.803 C 1.698 6.892 2.136 6.082 2.815 5.549 L 2.814 5.549 Z M 3.342 5.215 C 3.757 5.01 4.227 4.894 4.724 4.894 C 5.31 4.894 5.857 5.054 6.321 5.333 C 6.757 4.765 7.355 4.32 8.049 4.064 C 7.637 3.28 6.798 2.744 5.831 2.744 C 4.456 2.744 3.342 3.827 3.342 5.162 C 3.342 5.179 3.342 5.198 3.342 5.215 Z M 5.831 0.058 C 5.984 0.058 6.108 0.174 6.108 0.324 L 6.108 1.403 C 6.108 1.551 5.979 1.67 5.831 1.67 C 5.678 1.67 5.554 1.553 5.554 1.403 L 5.554 0.324 C 5.554 0.177 5.683 0.058 5.831 0.058 Z M 2.106 1.557 C 2.214 1.452 2.386 1.449 2.496 1.555 L 3.282 2.319 C 3.389 2.422 3.385 2.595 3.28 2.697 C 3.172 2.802 3 2.805 2.891 2.698 L 2.105 1.935 C 1.998 1.831 2.002 1.659 2.106 1.556 Z M 0.564 5.174 C 0.564 5.026 0.683 4.905 0.837 4.905 L 1.949 4.905 C 2.1 4.905 2.222 5.03 2.222 5.174 C 2.222 5.322 2.103 5.443 1.949 5.443 L 0.837 5.443 C 0.686 5.443 0.564 5.318 0.564 5.174 Z M 9.555 1.557 C 9.663 1.661 9.666 1.829 9.557 1.935 L 8.77 2.698 C 8.664 2.802 8.486 2.798 8.381 2.697 C 8.273 2.592 8.27 2.425 8.379 2.319 L 9.166 1.555 C 9.273 1.451 9.45 1.455 9.555 1.557 Z"
        fill="rgb(0,0,0)"
      ></path>
    </svg>
  )
}

function Cloud2() {
  return (
    <svg
      style={{ padding: "8px 0px", overflow: "visible" }}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="12"
    >
      <path
        d="M 2.311 7.962 C 2.274 7.774 2.255 7.58 2.255 7.382 C 2.255 5.637 3.74 4.222 5.572 4.222 C 6.864 4.222 7.983 4.925 8.531 5.952 C 8.98 5.534 9.594 5.276 10.272 5.276 C 11.646 5.276 12.76 6.337 12.76 7.645 C 12.76 7.755 12.752 7.864 12.736 7.969 C 13.7 8.196 14.418 9.026 14.418 10.014 C 14.418 11.175 13.428 12.12 12.205 12.12 L 2.809 12.121 C 1.59 12.121 0.597 11.178 0.597 10.015 C 0.597 9.017 1.329 8.178 2.311 7.962 Z M 12.181 5.391 C 12.197 5.267 12.206 5.14 12.206 5.012 C 12.206 3.413 10.845 2.116 9.166 2.116 C 7.948 2.116 6.897 2.798 6.412 3.783 C 6.141 3.726 5.861 3.696 5.572 3.696 C 3.435 3.696 1.702 5.346 1.702 7.382 C 1.702 7.454 1.704 7.526 1.709 7.599 C 0.729 8.004 0.043 8.935 0.043 10.014 C 0.043 11.468 1.278 12.647 2.807 12.647 L 12.207 12.647 C 13.733 12.647 14.97 11.466 14.97 10.015 C 14.97 8.934 14.289 8.006 13.311 7.6 C 13.297 6.708 12.859 5.913 12.18 5.392 Z M 11.653 5.064 C 11.238 4.863 10.769 4.749 10.271 4.749 C 9.686 4.749 9.14 4.906 8.676 5.179 C 8.24 4.622 7.642 4.187 6.949 3.935 C 7.36 3.168 8.199 2.642 9.166 2.642 C 10.54 2.642 11.653 3.703 11.653 5.012 C 11.653 5.029 11.653 5.047 11.653 5.064 Z M 4.19 13.174 C 4.038 13.174 3.914 13.288 3.914 13.435 L 3.914 14.492 C 3.914 14.637 4.042 14.753 4.19 14.753 C 4.343 14.753 4.466 14.639 4.466 14.492 L 4.466 13.435 C 4.466 13.29 4.338 13.174 4.19 13.174 Z M 5.849 14.227 C 5.696 14.227 5.572 14.341 5.572 14.487 L 5.572 15.545 C 5.572 15.69 5.7 15.806 5.849 15.806 C 6.001 15.806 6.125 15.692 6.125 15.545 L 6.125 14.487 C 6.125 14.343 5.997 14.227 5.849 14.227 Z M 7.507 13.174 C 7.355 13.174 7.231 13.288 7.231 13.435 L 7.231 14.492 C 7.231 14.637 7.359 14.753 7.507 14.753 C 7.66 14.753 7.784 14.639 7.784 14.492 L 7.784 13.435 C 7.784 13.29 7.655 13.174 7.507 13.174 Z M 9.166 14.227 C 9.013 14.227 8.889 14.341 8.889 14.487 L 8.889 15.545 C 8.889 15.69 9.018 15.806 9.166 15.806 C 9.318 15.806 9.442 15.692 9.442 15.545 L 9.442 14.487 C 9.442 14.343 9.314 14.227 9.166 14.227 Z M 10.824 13.174 C 10.672 13.174 10.548 13.288 10.548 13.435 L 10.548 14.492 C 10.548 14.637 10.676 14.753 10.824 14.753 C 10.977 14.753 11.101 14.639 11.101 14.492 L 11.101 13.435 C 11.101 13.29 10.973 13.174 10.824 13.174 Z M 9.166 0.01 C 9.013 0.01 8.889 0.124 8.889 0.271 L 8.889 1.329 C 8.889 1.473 9.018 1.589 9.166 1.589 C 9.318 1.589 9.442 1.475 9.442 1.329 L 9.442 0.271 C 9.442 0.126 9.314 0.01 9.166 0.01 Z M 12.888 1.479 C 12.78 1.376 12.608 1.373 12.499 1.477 L 11.713 2.225 C 11.606 2.327 11.61 2.496 11.715 2.596 C 11.823 2.699 11.995 2.702 12.104 2.598 L 12.89 1.849 C 12.997 1.748 12.993 1.579 12.888 1.479 Z M 14.43 5.024 C 14.43 4.878 14.311 4.76 14.156 4.76 L 13.046 4.76 C 12.894 4.76 12.772 4.883 12.772 5.024 C 12.772 5.169 12.892 5.287 13.046 5.287 L 14.156 5.287 C 14.308 5.287 14.43 5.165 14.43 5.024 Z M 5.443 1.479 C 5.336 1.581 5.332 1.745 5.442 1.849 L 6.227 2.598 C 6.334 2.699 6.512 2.695 6.617 2.596 C 6.724 2.493 6.728 2.33 6.618 2.225 L 5.833 1.477 C 5.726 1.375 5.548 1.379 5.443 1.479 Z"
        fill="rgb(0,0,0)"
      ></path>
    </svg>
  )
}

function Cloud3() {
  return (
    <svg
      style={{ padding: "8px 0px", overflow: "visible" }}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
    >
      <path
        d="M 11.711 4.308 C 12.605 4.517 13.272 5.325 13.272 6.287 C 13.272 7.408 12.367 8.317 11.257 8.317 L 2.703 8.317 C 1.59 8.317 0.688 7.406 0.688 6.287 C 0.688 5.335 1.342 4.535 2.219 4.316 C 2.206 4.213 2.198 4.109 2.198 4.003 C 2.198 2.742 3.213 1.719 4.463 1.719 C 5.081 1.719 5.64 1.968 6.048 2.372 C 6.547 1.382 7.566 0.704 8.742 0.704 C 10.41 0.704 11.762 2.067 11.762 3.749 C 11.762 3.941 11.744 4.128 11.711 4.308 L 11.711 4.308 Z M 1.696 3.96 C 0.806 4.351 0.185 5.246 0.185 6.287 C 0.185 7.686 1.312 8.825 2.701 8.825 L 11.259 8.825 C 12.651 8.825 13.775 7.688 13.775 6.287 C 13.775 5.246 13.15 4.349 12.259 3.958 C 12.262 3.889 12.265 3.82 12.265 3.749 C 12.265 1.787 10.687 0.197 8.741 0.197 C 7.585 0.197 6.559 0.759 5.915 1.626 C 5.493 1.363 4.996 1.212 4.463 1.212 C 2.948 1.212 1.718 2.438 1.695 3.96 Z M 0.185 11.363 C 0.185 10.241 1.089 9.333 2.198 9.333 C 3.31 9.333 4.212 10.24 4.212 11.363 L 3.708 11.363 C 3.708 10.522 3.03 9.84 2.198 9.84 C 1.364 9.84 0.688 10.524 0.688 11.363 C 0.688 12.204 1.364 12.886 2.202 12.886 L 13.775 12.885 L 13.775 13.393 L 2.197 13.393 C 1.086 13.393 0.185 12.482 0.185 11.363 Z M 4.715 10.855 C 4.715 10.014 5.393 9.332 6.225 9.332 C 7.059 9.332 7.735 10.013 7.735 10.851 L 7.735 10.855 L 7.232 10.855 C 7.232 10.294 6.785 9.84 6.225 9.84 C 5.669 9.84 5.218 10.291 5.218 10.855 C 5.218 11.416 5.67 11.87 6.228 11.87 L 12.265 11.87 L 12.265 12.378 L 6.225 12.378 C 5.391 12.378 4.715 11.694 4.715 10.855 Z M 2.702 14.916 C 2.702 15.477 3.149 15.931 3.708 15.931 C 4.265 15.931 4.715 15.477 4.715 14.919 L 4.715 14.916 L 4.212 14.916 C 4.212 15.196 3.988 15.423 3.708 15.423 C 3.43 15.423 3.205 15.198 3.205 14.916 C 3.205 14.635 3.431 14.408 3.712 14.408 L 10.755 14.408 L 10.755 13.9 L 3.705 13.9 C 3.151 13.9 2.702 14.352 2.702 14.916 Z"
        fill="rgb(0,0,0)"
      ></path>
    </svg>
  )
}

function Cloud4() {
  return (
    <svg
      style={{ padding: "8px 0px", overflow: "visible" }}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="12"
    >
      <path
        d="M 2.485 7.608 C 2.183 8.053 2.005 8.605 2.005 9.203 C 2.005 10.668 3.08 11.86 4.407 11.86 L 12.575 11.86 C 13.904 11.86 14.977 10.67 14.977 9.203 C 14.977 8.113 14.381 7.174 13.53 6.765 C 13.534 6.693 13.535 6.62 13.535 6.546 C 13.535 4.492 12.03 2.826 10.172 2.826 C 9.812 2.826 9.464 2.889 9.138 3.005 C 8.892 1.984 8.05 1.232 7.049 1.232 C 6.677 1.232 6.325 1.337 6.02 1.52 C 5.607 0.714 4.825 0.169 3.927 0.169 C 2.6 0.169 1.524 1.36 1.524 2.826 C 1.524 3.027 1.545 3.222 1.583 3.41 C 0.724 3.625 0.083 4.474 0.083 5.483 C 0.083 6.657 0.948 7.609 2.01 7.609 L 2.484 7.608 Z M 2.965 7.078 L 2.003 7.078 C 1.209 7.078 0.564 6.364 0.564 5.483 C 0.564 4.604 1.208 3.889 2.003 3.889 L 2.262 3.889 C 2.099 3.576 2.005 3.213 2.005 2.826 C 2.005 1.652 2.866 0.701 3.927 0.701 C 4.847 0.701 5.617 1.417 5.805 2.373 C 6.112 1.998 6.556 1.763 7.049 1.763 C 7.849 1.763 8.518 2.38 8.689 3.206 C 8.209 3.468 7.793 3.853 7.476 4.323 C 7.073 4.048 6.598 3.888 6.089 3.888 C 4.644 3.888 3.469 5.172 3.447 6.766 C 3.275 6.849 3.114 6.954 2.965 7.077 Z M 14.497 9.203 C 14.497 10.376 13.633 11.328 12.574 11.328 L 4.409 11.328 C 3.347 11.328 2.486 10.374 2.486 9.203 C 2.486 8.205 3.11 7.368 3.947 7.139 C 3.934 7.032 3.927 6.923 3.927 6.811 C 3.927 5.491 4.895 4.421 6.089 4.421 C 6.678 4.421 7.212 4.681 7.601 5.103 C 8.077 4.067 9.05 3.358 10.173 3.358 C 11.765 3.358 13.055 4.785 13.055 6.546 C 13.055 6.746 13.039 6.942 13.007 7.132 C 13.86 7.35 14.497 8.195 14.497 9.203 L 14.497 9.203 Z"
        fill="rgb(0,0,0)"
      ></path>
    </svg>
  )
}

function Cloud5() {
  return (
    <svg
      style={{ padding: "8px 0px", overflow: "visible" }}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="12"
    >
      <path
        d="M 2.485 7.608 C 2.183 8.053 2.005 8.605 2.005 9.203 C 2.005 10.668 3.08 11.86 4.407 11.86 L 12.575 11.86 C 13.904 11.86 14.977 10.67 14.977 9.203 C 14.977 8.113 14.381 7.174 13.53 6.765 C 13.534 6.693 13.535 6.62 13.535 6.546 C 13.535 4.492 12.03 2.826 10.172 2.826 C 9.812 2.826 9.464 2.889 9.138 3.005 C 8.892 1.984 8.05 1.232 7.049 1.232 C 6.677 1.232 6.325 1.337 6.02 1.52 C 5.607 0.714 4.825 0.169 3.927 0.169 C 2.6 0.169 1.524 1.36 1.524 2.826 C 1.524 3.027 1.545 3.222 1.583 3.41 C 0.724 3.625 0.083 4.474 0.083 5.483 C 0.083 6.657 0.948 7.609 2.01 7.609 L 2.484 7.608 Z M 2.965 7.078 L 2.003 7.078 C 1.209 7.078 0.564 6.364 0.564 5.483 C 0.564 4.604 1.208 3.889 2.003 3.889 L 2.262 3.889 C 2.099 3.576 2.005 3.213 2.005 2.826 C 2.005 1.652 2.866 0.701 3.927 0.701 C 4.847 0.701 5.617 1.417 5.805 2.373 C 6.112 1.998 6.556 1.763 7.049 1.763 C 7.849 1.763 8.518 2.38 8.689 3.206 C 8.209 3.468 7.793 3.853 7.476 4.323 C 7.073 4.048 6.598 3.888 6.089 3.888 C 4.644 3.888 3.469 5.172 3.447 6.766 C 3.275 6.849 3.114 6.954 2.965 7.077 Z M 14.497 9.203 C 14.497 10.376 13.633 11.328 12.574 11.328 L 4.409 11.328 C 3.347 11.328 2.486 10.374 2.486 9.203 C 2.486 8.205 3.11 7.368 3.947 7.139 C 3.934 7.032 3.927 6.923 3.927 6.811 C 3.927 5.491 4.895 4.421 6.089 4.421 C 6.678 4.421 7.212 4.681 7.601 5.103 C 8.077 4.067 9.05 3.358 10.173 3.358 C 11.765 3.358 13.055 4.785 13.055 6.546 C 13.055 6.746 13.039 6.942 13.007 7.132 C 13.86 7.35 14.497 8.195 14.497 9.203 L 14.497 9.203 Z"
        fill="rgb(0,0,0)"
      ></path>
    </svg>
  )
}

function Chevrondown() {
  return (
    <motion.svg
      style={{ padding: "2px 5px 0px 5px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
    >
      <path
        d="M 3 4.5 L 6 7.5 L 9 4.5"
        fill="transparent"
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </motion.svg>
  )
}
