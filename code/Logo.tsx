import * as React from "react"
import { Frame, addPropertyControls, ControlType, useTransform } from "framer"
import { useSticky, useScroll } from "@framer/lintonye.parallax/code"
import styled from "styled-components"

// Open Preview: Command + P
// Learn more: https://framer.com/api

const StyledLogo = styled.svg`
  display: block;
  & path {
    fill: ${props => props.fill};
  }
`

export function Logo(props) {
  const { x, y, scale, left, opacity, fill } = props
  return (
    <Frame
      left={left}
      scale={scale}
      background={background}
      x={x}
      y={y}
      opacity={opacity}
      color={fill}
      style={{
        fontFamily: "Aktiv Grotesk",
        fontSize: "4rem"
      }}
    >
      That's Lit!
    </Frame>
  )
}

Logo.defaultProps = {
  fill: "tomato"
}

addPropertyControls(Logo, {
  fill: {
    title: "fill",
    type: ControlType.Color,
    defaultValue: "tomato"
  }
})
