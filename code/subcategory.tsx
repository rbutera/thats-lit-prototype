const SOURCE_URL =
  "https://api.airtable.com/v0/appzWIcmWWhnfUEtf/Prototype?api_key=keyD9WDUfMMgSQkg0&maxRecords=999&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc"

import * as React from "react"
import { useState } from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import styled from "styled-components"

import { useAirTable } from "./useAirtable"
import { Recommendation } from "./Rec"
import { take } from "ramda"

function normalizeFields(fields) {
  const { Name, Tagline, Picture, Subcat } = fields

  const result = {
    name: Name,
    tagline: Tagline,
    category: Subcat,
    picture:
      Picture && Picture[0] ? Picture[0]["thumbnails"]["large"]["url"] : "none"
  }

  return result
}

const Section = styled.div`
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: center;
`

export function Subcategory(props) {
  const { filter = "Productivity" } = props
  const all = useAirTable(SOURCE_URL)

  const items = take(
    3,
    all.filter(({ fields }) => fields["Subcat"] === filter)
  )

  const [currentlyTappedIndex, setCurrentlyTappedIndex] = useState(-1)

  return (
    <Section>
      {items.map((record, index) => (
        <Recommendation
          height={375}
          key={index}
          onClick={() => setCurrentlyTappedIndex(index)}
          flipped={currentlyTappedIndex === index}
          {...normalizeFields(record.fields)}
        />
      ))}
    </Section>
  )
}

Subcategory.defaultProps = {
  filter: "Productivity"
}

addPropertyControls(Subcategory, {
  filter: {
    name: "Filter",
    type: ControlType.String,
    default: "Productivity"
  },
  quantity: {
    name: "Quantity",
    type: ControlType.Number,
    default: "3"
  }
})
