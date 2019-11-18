import * as React from "react";
import { Override, Data, useTransform } from "framer";
import { useSticky, useScroll } from "@framer/lintonye.parallax/code";

// Learn more: https://framer.com/docs/overrides/

const appState = Data({
  taps: 0
});

export function HeaderStickiness(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll();
  // y is a MotionValue too
  const y = useSticky(scrollY, [0, 999999]);
  const height = useTransform(scrollY, [0, 230], [280, 69]);
  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  return { y, height };
}

export function StickySubheading(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll();
  // y is a MotionValue too
  const y = useSticky(scrollY, [220, 999999]);

  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  return { y };
}

export function TitleEffects(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll();
  // y is a MotionValue too
  const y = useSticky(scrollY, [100, 999999]);
  const height = useTransform(scrollY, [0, 100], [90, 10]);

  return {
    y,
    height
  };
}

export function HideOnScroll(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll();
  // y is a MotionValue too
  const opacity = useTransform(scrollY, [0, 230], [1, 0]);

  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  return { opacity };
}

export function ShowOnScroll(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll();
  // y is a MotionValue too
  const opacity = useTransform(scrollY, [180, 230], [0, 1]);

  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  return { opacity };
}
