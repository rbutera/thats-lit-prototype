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

const TextEffects = styled.h1`
  display: inline-block;
  border-radius: "2pt";
  font-family: "Aktiv Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: "bold";
  height: 100%;
  width: 100%;
  /* line-height: 1rem; */
  margin: 0;
  padding: 0;
  position: relative;
  left: 0px;
  top: 0;
  text-align: center;
  vertical-align: middle;
`

export function Logo(props) {
  const { x, y, scale, left, opacity, color, background, ...rest } = props
  return (
    <Frame
      {...rest}
      left={left}
      scale={scale}
      background={background}
      x={x}
      y={y}
      opacity={opacity}
      color={color}
      style={{
        fontSize: "1.8rem",
        display: "flex",
        margin: 0,
        padding: 0,
        flexDirection: "column",
        backdropFilter: "invert(1)"
      }}
    >
      <TextEffects>That's Lit!</TextEffects>
    </Frame>
  )
}

Logo.defaultProps = {
  fill: "tomato",
  background: "tomato"
}

addPropertyControls(Logo, {
  fill: {
    title: "fill",
    type: ControlType.Color,
    defaultValue: "tomato"
  },
  background: {
    title: "background",
    type: ControlType.Color,
    defaultValue: "tomato"
  }
})
