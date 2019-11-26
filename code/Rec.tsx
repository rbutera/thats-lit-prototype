import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import styled from "styled-components"

const RecCard = styled.div`
  font-family: "Aktiv Grotesk";
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
  padding-bottom: 24pt;
`

const CardFooter = styled.div`
  display: flex;
  padding: 16pt;
  justify-content: flex-end;
  margin: 0;
  width: 100%;
`

const Spacer = styled.div`
  flex: auto;
`

const Category = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10pt;
  letter-spacing: 1pt;
  padding-left: 3pt;
  padding-top: 3pt;
  /* padding-top: 3pt; */
`

const CategoryBubble = styled.div`
  border-radius: 8pt;

  background-color: rgba(200, 200, 200, 0.5);
  color: rgba(0, 0, 0, 0.66);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10pt;
  letter-spacing: 1pt;
`

const CaptionBubble = styled.div`
  /* background: rgba(0, 0, 0, 0.3); */
  padding: 16pt;
  color: white;
  margin: 0;
  width: auto;
  backdrop-filter: contrast(0.9) brightness(0.7) blur(8pt);
  display: flex;
  flex-direction: column;
  /* border-radius: 0 0 8pt 8pt; */
  // border-radius: 0 8pt;
`

const Caption = styled.div`
  /* background: rgba(0, 0, 0, 0.3); */
  color: white;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  text-align: left;
  justify-content: flex-start;

  /* padding: 8pt; */
  /* border-radius: 0 0 8pt 8pt; */
`

const Name = styled.div`
  color: white;
  font-weight: 600;
  font-size: 28pt;
  /* text-transform: uppercase; */
  /* letter-spacing: 3pt; */
  font-family: "Aktiv Grotesk";
  line-height: 0.8em;
  letter-spacing: 0pt;
  text-align: left;
  text-shadow: 2px 2px 2px rgba(15, 15, 15, 0.2);
`

const Tagline = styled.div`
  font-size: 13pt;
  color: white;
  /* mix-blend-mode: difference; */
`

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  z-index: 5
  flex-direction: column-reverse;
  justify-content: flex-start;
  margin: 0;
`

const CardPostProcessing = styled.div`
  width: 100%;
  height: 375px;
  display: block;
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  backdrop-filter: contrast(1.1) brightness(0.8);
  mix-blend-mode: hard-light;
  opacity: 0.75;
  background: linear-gradient(
    to bottom,
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
  z-index: 2;
  // border-radius: 8pt;
  height: ${({ height }) => height};
`

export function Recommendation(props) {
  const { name, tagline, picture, category, height } = props
  return (
    <RecCard height={height + "px"} picture={picture}>
      <CardContent>
        {" "}
        <CardHeader>
          <Caption>
            <Category>{category}</Category>
            <Name>{name}</Name>
            {/* <Tagline>{tagline}</Tagline> */}
          </Caption>
          <Spacer />
        </CardHeader>
        <Spacer />
        <CardFooter></CardFooter>
      </CardContent>
      <CardPostProcessing height={height + "px"} />
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
