import * as React from "react"
import { Override, Data, useTransform } from "framer"
import { useSticky, useScroll } from "@framer/lintonye.parallax/code"

// Learn more: https://framer.com/docs/overrides/

const appState = Data({
  menuOpen: false
})

export function TapFrame(props): Override {
  return {
    borderRadius: 12,
    whileTap: {
      scale: 0.9
    },
    onTap: () => {
      appState.taps += 1
    }
  }
}

export function MenuOpen(props): Override {
  return {
    onTap: () => {
      appState.menuOpen = !appState.menuOpen
      console.log("appState:", appState)
    }
  }
}

export function MenuOverlay(props): Override {
  const opacity = appState.menuOpen ? "1" : "0"
  return {
    onTap: () => {
      appState.menuOpen = !appState.menuOpen
    },
    opacity
  }
}

export function RotateFrame(props): Override {
  return {
    animate: {
      rotate: appState.taps * 90
    }
  }
}

export function TextElement(props): Override {
  return {
    text: appState.taps
  }
}
