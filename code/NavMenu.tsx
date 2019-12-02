import * as React from "react"
import { useState } from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import styled from "styled-components"
import MenuToggle from "./MenuToggle"

const MenuButton = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
`

const Bar = styled.figure`
  background-color: ${props => props.color};
  display: block;
  width: 32px;
  height: 4px;
  margin: 5px auto;
  border-radius: 2px;
  transition: all 0.4s linear 0.1s;
  &:first-child {
    margin-top: 4px;
  }
`

const IconWrapper = styled.div`
  margin: pt;
  padding: 0;
  max-width: 30px;
`

export function NavMenu(props) {
  const { ...rest } = props

  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <Frame background="none" {...rest}>
      <MenuToggle toggle={() => toggleOpen()}></MenuToggle>
    </Frame>
  )
}

NavMenu.defaultProps = {}
