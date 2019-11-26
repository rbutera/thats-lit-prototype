import * as React from "react"
import { useState } from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import styled from "styled-components"

const RecCard = styled.div`
  font-family: "aktiv-grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

  color: white;
  background-image: ${props => {
    return 'url("' + props.picture + '")'
  }};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: ${props => props.height};
  color: white;
  // border-radius: 8pt;
  // overflow: hidden;
  position: relative;
  // margin-bottom: 8pt;
  box-shadow: 2pt 2pt 4pt rgba(0, 0, 0, 0.2);
`

const CardHeader = styled.div`
  display: flex;
  /* height: 32px; */
  margin: 0;
  width: 100%;
  padding-left: 16pt;
  padding-right: 16pt;
`

const CardFooter = styled.div`
  font-weight: 500;

  display: flex;
  padding: 16pt;
  justify-content: flex-end;
  margin: 0;
  width: 100%;
  padding-bottom: 20pt;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(16pt) brightness(0.8) contrast(0.9);
`

const Spacer = styled.div`
  flex: auto;
`

const Category = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10pt;
  letter-spacing: 1pt;

  opacity: 0.5;
  /* padding-top: 3pt; */
`

const Caption = styled.div`
  /* background: rgba(0, 0, 0, 0.3); */
  color: white;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  padding: 18pt 0;

  /* padding: 8pt; */
  /* border-radius: 0 0 8pt 8pt; */
`

const Name = styled.div`
  color: white;
  font-weight: 600;
  font-size: 24pt;

  /* text-transform: uppercase; */
  /* letter-spacing: 3pt; */

  font-family: "aktiv-grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  margin-top: 2pt;
  margin-bottom: 4pt;
  line-height: 0.8em;
  letter-spacing: -0.5pt;
  text-align: left;
  text-shadow: 2px 2px 2px rgba(15, 15, 15, 0.2);
`

const Tagline = styled.div`
  font-size: 12pt;
  line-height: 12pt;
  color: white;
  margin-top: 4pt;
  opacity: ${props => {
    return props.opacity
  }};
  transition: all 0.5s ease-in-out;
  /* mix-blend-mode: difference; */
`

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  z-index: 5
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
`

const CardPostProcessing = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: block;
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  backdrop-filter: contrast(1.1) brightness(0.9);
  mix-blend-mode: hard-light;
  opacity: 0.75;
  background: linear-gradient(
    to top,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.013) 8.1%,
    hsla(0, 0%, 0%, 0.049) 15.5%,
    hsla(0, 0%, 0%, 0.104) 22.5%,
    hsla(0, 0%, 0%, 0.175) 29%,
    hsla(0, 0%, 0%, 0.259) 35.3%,
    hsla(0, 0%, 0%, 0.352) 41.2%,
    hsla(0, 0%, 0%, 0.45) 47.1%,
    hsla(0, 0%, 0%, 0.55) 52.9%,
    hsla(0, 0%, 0%, 0.648) 58.8%,
    hsla(0, 0%, 0%, 0.741) 64.7%,
    hsla(0, 0%, 0%, 0.825) 71%,
    hsla(0, 0%, 0%, 0.896) 77.5%,
    hsla(0, 0%, 0%, 0.951) 84.5%,
    hsla(0, 0%, 0%, 0.987) 91.9%,
    hsl(0, 0%, 0%) 100%
  );
};
`
const CardBlur = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(4px) brightness(0.8);
  background: rgba(0,0,0,0);
  opacity: ${props => props.opacity};
  transition: all 0.5s ease-in-out;
};
`

export function Recommendation(props) {
  const { name, tagline, picture, category, height } = props

  const [flipped, setFlipped] = useState(false)
  const toggleFlipped = () => setFlipped(!flipped)

  return (
    <RecCard height={height + "px"} picture={picture} onClick={toggleFlipped}>
      <CardContent>
        {" "}
        <CardHeader>
          <Caption>
            <Category>{category}</Category>
            <Name>{name}</Name>
            <Tagline opacity={flipped ? 1 : 0}>{tagline}</Tagline>
          </Caption>
          <Spacer />
        </CardHeader>
        <Spacer />
      </CardContent>
      <CardPostProcessing />
      <CardBlur opacity={flipped ? 1 : 0} />
    </RecCard>
  )
}

Recommendation.defaultProps = {
  name: "Sed euismod",
  tagline: "Lorem ipsum dolor sit amet."
}

addPropertyControls(Recommendation, {
  tagline: {
    title: "Tagline",
    type: ControlType.String,
    defaultValue: "Lorem ipsum dolor sit amet."
  },
  name: {
    title: "Name",
    type: ControlType.String,
    defaultValue: "Recommendation Name"
  },
  flipped: {
    title: "Flipped?",
    type: ControlType.Boolean,
    defaultValue: false
  },
  height: {
    title: "Height",
    type: ControlType.Number,
    defaultValue: 360
  },
  category: {
    title: "Category",
    type: ControlType.String,
    defaultValue: "Category"
  },
  picture: {
    title: "Picture",
    type: ControlType.Image
  }
})
