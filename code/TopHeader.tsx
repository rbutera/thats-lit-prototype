import * as React from "react"
import { Override, Data, useTransform } from "framer"
import { useSticky, useScroll } from "@framer/lintonye.parallax/code"

// Learn more: https://framer.com/docs/overrides/

const appState = Data({
  menuOpen: false
})

export function AlwaysSticky(): Override {
  const { scrollY } = useScroll()
  // y is a MotionValue too
  const y = useSticky(scrollY, [0, 999999])
  return {
    y
  }
}

const MENU_GONE_BREAKPOINT = 220

export function DarkMenuButton(): Override {
  const { scrollY } = useScroll()
  const y = useSticky(scrollY, [0, 9999999999])
  const opacity = useTransform(
    scrollY,
    [MENU_GONE_BREAKPOINT - 20, MENU_GONE_BREAKPOINT + 20],
    [1, 0]
  )
  return { y, opacity }
}

export function LightMenuButton(): Override {
  const { scrollY } = useScroll()
  const y = useSticky(scrollY, [0, 9999999999])
  const opacity = useTransform(
    scrollY,
    [MENU_GONE_BREAKPOINT - 20, MENU_GONE_BREAKPOINT + 20],
    [0, 1]
  )
  return { y, opacity }
}

const FIRST_HEADING_Y = 150
const FIRST_SECTION_HEIGHT = 1125
const END_OF_FIRST_SECTION = FIRST_HEADING_Y + FIRST_SECTION_HEIGHT
const SECOND_HEADING_Y = END_OF_FIRST_SECTION
const SECOND_SECTION_HEIGHT = 750
const END_OF_SECOND_SECTION = END_OF_FIRST_SECTION + SECOND_SECTION_HEIGHT
const THIRD_HEADING_Y = END_OF_SECOND_SECTION
const THIRD_SECTION_HEIGHT = 1125
const END_OF_THIRD_SECTION = END_OF_SECOND_SECTION + THIRD_SECTION_HEIGHT

export function StickySubheading(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll()
  // y is a MotionValue too
  const y = useSticky(scrollY, [
    FIRST_HEADING_Y,
    FIRST_HEADING_Y + FIRST_SECTION_HEIGHT - 100
  ])
  const opacity = useTransform(scrollY, [0, 100], [1, 0])

  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  return { y, opacity }
}

export function StickySubheading2(): Override {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [1100, 1310], [0.5, 1])
  const y = useSticky(scrollY, [
    END_OF_FIRST_SECTION,
    END_OF_SECOND_SECTION - 50
  ])

  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  // return { y }
  return { y, opacity }
}

export function StickySubheading3(): Override {
  const { scrollY } = useScroll()
  const opacity = useTransform(
    scrollY,
    [END_OF_SECOND_SECTION - 100, END_OF_SECOND_SECTION],
    [0.5, 1]
  )
  const y = useSticky(scrollY, [END_OF_SECOND_SECTION, END_OF_THIRD_SECTION])

  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  // return { y }
  return { y, opacity }
}

export function RecentFadeOutOnScroll(): Override {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [100, 500], [0, 1])
  return { opacity }
}

export function TopFade(): Override {
  const { scrollY } = useScroll()
  const y = useSticky(scrollY, [220, 99999999])
  const opacity = useTransform(scrollY, [0, 220], [0, 1])
  return { y, opacity }
}
export function SubtitleHideOnScroll(): Override {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [25, 50], [1, 0])

  return { opacity }
}

export function SubtitleHide(): Override {
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, [0, 100], [0, -1000])
  const opacity = useTransform(scrollY, [0, 100], [1, 0])

  return { x, opacity }
}

export function DarkLogo(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll()
  // y is a MotionValue too
  const y = useSticky(scrollY, [72, 999999])
  const left = useTransform(scrollY, [0, 72], [10, -40])
  const scale = useTransform(scrollY, [0, 72], [1, 0.66])
  const color = useTransform(scrollY, [100, 200], ["#1a1a1a", "#1a1a1a"])
  const background = useTransform(
    scrollY,
    [100, 210],
    ["rgba(245, 245, 245, 0)", "rgba(245, 245, 245, 1)"]
  )

  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  return { y, left, scale, color, background }
}

export function ShowOnScroll(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll()
  // y is a MotionValue too
  const opacity = useTransform(scrollY, [180, 230], [0, 1])

  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  return { opacity }
}
