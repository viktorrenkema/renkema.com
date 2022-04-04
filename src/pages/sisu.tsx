// 📦 Packages
import React from "react"
import axios from "axios"
import styled from "styled-components"
import { motion } from "framer-motion"
import _ from "lodash"

// 🌱 Components
import LayoutComponent from "../components/resources/layout"
import { Paragraph } from "../components/resources/styledGlobal"

// 🧰 Utils
import "../../style/projects.css"

// 🌀 Variants

// 💅🏽 Styled Components

const ParagraphPanel = styled(Paragraph)`
  color: white;
  width: unset;
  font-family: "Object Sans Regular", "Arial";
`

const Page = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #1f1f1f;
  position: relative;
  justify-content: center;
  align-items: center;
  align-items: center;
`

const Panel = styled(motion.div)`
  background-color: #1c1c1c;
  width: 60%;
  border: 1px solid #333333;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 1rem;
  box-sizing: border-box;
`

const Table = styled(motion.div)`
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  overflow: hidden;
`

const SearchResults = styled(motion.div)`
  width: 250px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  overflow: hidden;
  max-height: 300px;
  overflow: scroll;
  background: #2e2e2e;
  position: absolute;
  border-radius: 10px;
  padding: 1rem 0rem 1rem 2rem;
  top: 50px;
  right: -50px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
`

const FlexTH = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 75px;
  background: #353535;
  height: 50px;
  align-items: center;
  padding-left: 20px;
}
`

const TableHeaderName = styled(motion.span)`
  color: #c5c5c5;
  width: unset;
  font-family: "Object Sans Regular", "Arial";
  font-size: 16px;
  vertical-align: middle;
  line-height: 30px;
  text-align: start;
`

const SearchWrapper = styled(motion.div)`
  position: relative;
`
const FlexHeader = styled(motion.div)`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-between;
`

export default function Sisu() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [filtered, setFiltered] = React.useState([])
  const [myData, setMyData] = React.useState({})
  const [myDataAsArray, setMyDataAsArray] = React.useState([])

  const bURL = "https://api.binance.com"
  let query = "/api/v3/ticker/price"
  let url = bURL + query

  React.useEffect(() => {
    console.log("Retrieving data from Binance")
    const fetchData = async () => {
      axios.get(url, {}).then(res => {
        setMyData(res.data)
      })
    }
    fetchData().catch(console.error)
  }, [])

  React.useEffect(() => {
    console.log("Setting data as array in other effect")
    setMyDataAsArray(Object.entries(myData))
  }, [myData])

  // Todo: allow for multiple elements to be added to `filtered`
  const filterTable = arg => {
    setFiltered(myDataAsArray.filter(([key, value]) => value.symbol === arg))
  }

  return (
    <LayoutComponent>
      <Page>
        <FlexHeader>
          {" "}
          <FlexWrapper>
            <SVG></SVG>
            <ParagraphPanel>Ticker for Binance Prices</ParagraphPanel>
          </FlexWrapper>
          <SearchWrapper>
            <InputSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            ></InputSearch>

            {searchQuery && (
              <SearchResults>
                {myDataAsArray
                  .filter(([key, result]) =>
                    result.symbol
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map(item => {
                    return (
                      <DataPoint
                        onClick={() => {
                          // console.log(item[1].symbol)
                          filterTable(item[1].symbol)
                          setSearchQuery("")
                        }}
                      >
                        {item[1].symbol}
                      </DataPoint>
                    )
                  })}
              </SearchResults>
            )}
          </SearchWrapper>
        </FlexHeader>

        <Panel>
          <Table>
            <FlexTH>
              <TableHeaderName>Asset</TableHeaderName>
              <TableHeaderName>Price</TableHeaderName>
              <TableHeaderName>Position</TableHeaderName>
            </FlexTH>
            {filtered.length ? (
              filtered.map(item => {
                return (
                  <TableRow
                    symbol={item[1].symbol}
                    price={item[1].price}
                    position={item[0]}
                  ></TableRow>
                )
              })
            ) : (
              <FlexRow style={{ justifyContent: "center", padding: 0 }}>
                <DataPoint>
                  Use the filter to select an asset from Binance
                </DataPoint>
              </FlexRow>
            )}
          </Table>
        </Panel>
      </Page>
    </LayoutComponent>
  )
}

const DataPoint = styled(motion.span)`
  color: white;
  width: unset;
  font-family: "Object Sans Regular", "Arial";
  font-size: 14px;
  vertical-align: middle;
  line-height: 30px;
  text-align: start;
  min-width: 70px;
  cursor: pointer;
`

const FlexRow = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 50px;
  background-color: #2e2e2e;
  height: 50px;
  padding-left: 20px;
  align-items: center;
`

const FlexWrapper = styled(motion.div)`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`

function TableRow(props) {
  const { symbol, price, position } = props

  let roundedPrice = _.round(price, 2)

  return (
    <FlexRow>
      <DataPoint>{symbol}</DataPoint>
      <DataPoint>
        {roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </DataPoint>
      <DataPoint>{position}</DataPoint>
    </FlexRow>
  )
}

// 💅🏽 Styled Components
const Input = styled(motion.input)`
  width: 100%;
  height: 30px;
  overflow: visible;
  background-color: #1c1c1c;
  border-radius: 10px;
  color: white;
  padding: 0px 0px 0px 20px;
  font-size: 14px;
  letter-spacing: 0px;
  overflow: hidden;
  font-weight: 400;
  -webkit-appearance: none;
  border: 1px solid #333333;
  box-sizing: border-box;
  cursor: pointer;
  ::placeholder {
    color: #787879;
  }
  &:focus {
    border: 1px solid #00dab9;
    caret-color: #00dab9;
    outline: none;
  }
`

function InputSearch({ searchQuery, setSearchQuery }) {
  function handleChange(event) {
    setSearchQuery(event.target.value)
  }

  return (
    <motion.form autoComplete="off">
      <Input
        id="search"
        name="quantity"
        value={searchQuery}
        placeholder={"Filter"}
        type="text"
        onChange={handleChange}
      />
    </motion.form>
  )
}

function SVG() {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.75 19.2502H9.25C9.80229 19.2502 10.25 18.8025 10.25 18.2502V5.75C10.25 5.19772 9.80229 4.75 9.25 4.75H5.75C5.19772 4.75 4.75 5.19772 4.75 5.75V18.2502C4.75 18.8025 5.19772 19.2502 5.75 19.2502Z"
      />
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.75 10.2502H18.25C18.8023 10.2502 19.25 9.80253 19.25 9.25025V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H14.75C14.1977 4.75 13.75 5.19772 13.75 5.75V9.25025C13.75 9.80253 14.1977 10.2502 14.75 10.2502Z"
      />
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.75 19.2502H18.25C18.8023 19.2502 19.25 18.8025 19.25 18.2502V14.75C19.25 14.1977 18.8023 13.75 18.25 13.75H14.75C14.1977 13.75 13.75 14.1977 13.75 14.75V18.2502C13.75 18.8025 14.1977 19.2502 14.75 19.2502Z"
      />
    </svg>
  )
}
