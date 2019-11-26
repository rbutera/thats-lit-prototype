import * as React from "react"
import { useState, useEffect } from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import styled from "styled-components"
import { filter } from "ramda"

import { FONT_STACK } from "./font"

// Open Preview: Command + P
// Learn more: https://framer.com/api

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const SubtitleStyle = styled.div`
  text-align: left;
  font-family: ${FONT_STACK};
  padding: 0pt 8pt;
  font-weight: 700;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 1em;
  font-size: 1.618em;
  word-wrap
`

const Line = styled.span`
  display: block;
  flex: auto;
  width: 100%;
  //   background: rgba(0, 0, 0, 0.2);
`

export function Shuffler(props) {
  const { options, period } = props
  //   const defaultOption = options[i] || "..."
  const [current, setCurrent] = useState(
    options && options[0] ? options[0] : "..."
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const currentOrBlank = current || ""
      const notCurrent = word => word !== currentOrBlank
      console.log(`current is: ${current}`)
      const otherOptions = filter(notCurrent)(options)
      console.log(`otherOptions are: ${otherOptions}`)
      const shuffled = shuffle(otherOptions)
      const [first] = shuffled
      setCurrent(first)
    }, period)
    return () => clearInterval(interval)
  }, [])

  return <span>{current}</span>
}

export function Subtitle(props) {
  const { text, tint, opacity, ...rest } = props
  const firstLineOptions = [
    "curated collection",
    "sexy smörgåsbord",
    "supreme selection",
    "personal platter",
    "stupendous set"
  ]

  const secondLineOptions = [
    "dope developments",
    "superb suggestions",
    "incredible inspiration",
    "terrific tools",
    "incredible innovation",
    "delightful design",
    "electric endeavours",
    "fan favorites",
    "awesome apps",
    "tomorrow's technology",
    "wavy websites",
    "slapping songs"
  ]

  return (
    <Frame
      {...rest}
      background="none"
      width="100%"
      opacity={opacity}
      style={{
        margin: 0,
        padding: 0
      }}
    >
      <SubtitleStyle>
        <Line>
          a <Shuffler period={3000} options={firstLineOptions} />
        </Line>
        <Line>
          of <Shuffler period={3000} options={secondLineOptions} />
        </Line>
      </SubtitleStyle>
    </Frame>
  )
}

Subtitle.defaultProps = {
  height: 128,
  width: "100%",
  text: "Get started!",
  tint: "#0099ff"
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Subtitle, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Hello Framer!"
  },
  tint: {
    title: "Tint",
    type: ControlType.Color,
    defaultValue: "#0099ff"
  }
})
