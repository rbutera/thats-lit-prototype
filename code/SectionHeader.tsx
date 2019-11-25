import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

import styled from "styled-components"

// Open Preview: Command + P
// Learn more: https://framer.com/api

const Heading = styled.h1`
  display: inline-block;
  background: rgba(0, 0, 0, 0.9);
  padding: 4pt 8pt;
  border-radius: 2pt;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1.618pt;
`

export function SectionHeader(props) {
  const { text, tint, ...rest } = props

  return (
    <Frame
      {...rest}
      background="none"
      style={{
        color: tint,
        fontSize: 16,
        fontWeight: 600,
        margin: 0,
        padding: 0,
        textAlign: "top"
      }}
    >
      <Heading>{text}</Heading>
    </Frame>
  )
}

SectionHeader.defaultProps = {
  width: "100%",
  text: "Get started!",
  tint: "#0099ff"
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(SectionHeader, {
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
