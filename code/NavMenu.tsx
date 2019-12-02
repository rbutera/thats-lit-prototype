import * as React from "react"
import { useState, useRef } from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { motion, useCycle } from "framer-motion"
import styled from "styled-components"
import MenuToggle from "./MenuToggle"
import { Navigation } from "./Navigation"
import { useDimensions } from "./useDimensions"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

export const NavMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

NavMenu.defaultProps = {}
