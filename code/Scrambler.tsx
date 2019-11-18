import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Scrambler(props) {
    const { options, ...rest } = props

    const currentOption = options[0]

    return (
        <Frame
            {...rest}
            // whileHover={{
            //     scale: 1.1,
            // }}
            style={{
                fontSize: 16,
                fontWeight: 600,
                background: "rgba(0,0,0,0)",
                textAlign: "left",
            }}
        >
            A {currentOption} of {}
        </Frame>
    )
}

Scrambler.defaultProps = {
    height: "auto",
    width: "auto",
    text: "Get stasfdsfsfrted!",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Scrambler, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Frsssamer!",
    },
    tint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: "#0099ff",
    },
    options: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
            title: "Lorem ipsum",
        },
    },
})
