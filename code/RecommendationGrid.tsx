import {
  addPropertyControls,
  ControlType,
  Scroll,
  Stack,
  StackProperties,
  PropertyControls
} from "framer";
import * as React from "react";
import { useAirTable } from "./useAirtable";
import { showInstructions } from "./utils";

RecGrid.defaultProps = {
  width: 375,
  height: 810,
  direction: "vertical" as "vertical",
  onItemTapped: () => {}
};

export type Props = {
  component: any;
  width?: number;
  height?: number;
  url: string;
  imageSize: string;

  expandChildren: boolean;
  onItemTapped: (index: number, record: any) => void;
} & StackProperties;

// converts Airtable fields to a format that Framer understands
const normalizeFields = (fields: any, imageSize: string) => {
  const result = {};

  for (const key of Object.keys(fields)) {
    const value = fields[key];
    // string fields are passed as-is
    if (typeof value === "string") {
      result[key] = value;
    }
    // if there is a photo field, extract the first photo's URL
    if (Array.isArray(value) && value.length > 0 && !!value[0].thumbnails) {
      result[key] = value[0]["thumbnails"][imageSize]["url"];
    }
  }

  return result;
};

export function RecGrid({
  component,
  url,
  imageSize,
  onItemTapped,

  gap,
  padding,
  distribution,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  paddingPerSide,
  width,
  height,
  alignment,
  expandChildren
}: Props) {
  const items = useAirTable(url);

  const instructions = showInstructions(url, component);
  if (instructions) {
    return instructions;
  }

  return (
    <Stack
      width={width}
      height={height}
      gap={gap}
      padding={padding}
      distribution={distribution}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      paddingPerSide={paddingPerSide}
      alignment={alignment}
    >
      {items.map((record, index) => {
        const { fields } = record;

        const sizing = {};

        const ItemComponent = React.cloneElement(component[0], {
          key: index,
          ...sizing,
          onTap: () => {
            onItemTapped(index, record);
          },
          ...normalizeFields(fields, imageSize)
        });

        return ItemComponent;
      })}
    </Stack>
  );
}

const stackProps =
  // @ts-ignore
  Stack.propertyControls;

export const airtablePropertyControls: PropertyControls<Props> = {
  //ControlType.String is displayed as an input field with an optional placeholder value
  url: {
    type: ControlType.String,
    placeholder:
      "https://api.airtable.com/v0/appJuy4S2EAMijkNg/Colors?api_key=keyQL4Up7cLcFgVUs",
    defaultValue: "",
    title: "Airtable URL"
  },

  component: {
    type: ControlType.ComponentInstance,
    title: "Design Component"
  },

  imageSize: {
    type: ControlType.Enum,
    title: "Image Size",
    defaultValue: "large",
    options: ["small", "large", "full"],
    optionTitles: ["Small", "Large", "Full"]
  },

  gap: stackProps.gap,
  padding: stackProps.padding,
  direction: stackProps.direction,

  expandChildren: {
    type: ControlType.Boolean,
    title: "Expand Items",
    defaultValue: false,
    enabledTitle: "Yes",
    disabledTitle: "No"
  },

  distribution: {
    ...stackProps.distribution,
    hidden: props => props.expandChildren
  },

  alignment: {
    ...stackProps.alignment,
    hidden: props => props.expandChildren
  }
};

addPropertyControls(RecGrid, airtablePropertyControls);
