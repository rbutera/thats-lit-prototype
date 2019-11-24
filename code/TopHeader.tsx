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

export function HeaderStickiness(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll()
  // y is a MotionValue too
  const y = useSticky(scrollY, [0, 999999])
  const height = useTransform(scrollY, [0, 130], [280, 72])
  const width = useTransform(scrollY, [0, 130], [375, 200])
  const borderRadius = useTransform(scrollY, [0, 130], [0, 4])
  const marginTop = useTransform(scrollY, [0, 130], [0, 4])
  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  return { y, height, width, borderRadius, marginTop }
}

export function MenuButtonStickToTop(): Override {
  const { scrollY } = useScroll()
  const y = useSticky(scrollY, [0, 9999999999])
  const opacity = useTransform(scrollY, [0, 50], [1, 0])
  return { y, opacity }
}

export function LightMenuButton(): Override {
  const { scrollY } = useScroll()
  const y = useSticky(scrollY, [0, 9999999999])
  const opacity = useTransform(scrollY, [0, 50], [0, 1])
  return { y, opacity }
}
export function StickySubheading(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll()
  // y is a MotionValue too
  const y = useSticky(scrollY, [235, 1340])
  const opacity = useTransform(scrollY, [1345, 1360], [1, 0])

  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  return { y, opacity }
}

export function StickySubheading2(): Override {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [1200, 1410], [0.5, 1])
  const y = useSticky(scrollY, [1420, 999999])

  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  // return { y }
  return { y, opacity }
}

export function TitleEffects(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll()
  // y is a MotionValue too
  const y = useSticky(scrollY, [230, 999999])
  const height = useTransform(scrollY, [0, 230], [90, 10])

  return {
    y,
    height
  }
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

export function ShrinkOnScroll(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll()
  // y is a MotionValue too
  const left = useTransform(scrollY, [0, 125], [180, 100])
  const scale = useTransform(scrollY, [0, 125], [1, 0.5])
  const y = useSticky(scrollY, [125, 999999])
  console.log("scrollY:", scrollY)
  console.log("y:", y)

  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  return { y, left, scale }
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
