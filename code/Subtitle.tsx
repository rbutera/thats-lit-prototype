import * as React from "react"
import { useState, useEffect } from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import styled from "styled-components"
import { filter } from "ramda"

import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"

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
  padding: 0pt 12pt;
  font-weight: 700;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 1em;
  color: rgba(0, 0, 0, 0.9);
  text-shadow: 1pt 1pt 1pt rgba(0, 0, 0, 0.1);
  font-size: 1.337rem;
  opacity: ${props => props.opacity};
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
      const otherOptions = filter(notCurrent)(options)
      const shuffled = shuffle(otherOptions)
      const [first, ...rest] = shuffled
      const [second, ...tail] = rest
      if (first !== current) {
        setCurrent(first)
      } else {
        setCurrent(second) // if you're reading this, this is only a prototype and debugging framer components isn't awesome, so this is a hack to mitigate getting the same option twice
      }
    }, period)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.span
        key={current}
        transition={{ duration: 1 }}
        initial={{ x: -300, opacity: 0, zIndex: 0 }}
        animate={{ x: 0, opacity: 1, zIndex: 1 }}
        exit={{ x: 300, opacity: 0, zIndex: 0 }}
      >
        {current}
      </motion.span>
    </AnimatePresence>
  )
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
    "songs that slap",
    "professional passion",
    "motivation and muse"
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
      <SubtitleStyle opacity={opacity}>
        <Line>
          a <Shuffler period={4000} options={firstLineOptions} />
        </Line>
        <Line>
          of <Shuffler period={4000} options={secondLineOptions} />
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
