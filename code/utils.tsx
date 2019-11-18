import * as React from "react";

export function isAirtableUrl(url?: string): boolean {
  if (!!url) {
    return url.startsWith("https://api.airtable.com/");
  } else {
    return false;
  }
}

const isValidComponent = (component?: any): boolean => {
  if (!!component) {
    return !!component[0];
  } else {
    return false;
  }
};

const ComponentInstructions: React.SFC = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        fontSize: 15,
        fontWeight: 500,
        textAlign: "left",
        color: "#bb88ff",
        backgroundColor: "#2f2546",
        border: "1px solid #8855ff",
        padding: 20,
        paddingRight: 22,
        overflow: "hidden"
      }}
    >
      {children}
    </div>
  );
};

/**
 * @returns a component with usage instructions if any of the arguments are not valid. If all arguments are valid, returns undefined.
 */
export function showInstructions(
  url: string,
  component: any[]
): JSX.Element | undefined {
  if (isAirtableUrl(url) && isValidComponent(component)) {
    return undefined;
  }
  return (
    <ComponentInstructions>
      <h3>Instructions 🔎 </h3>
      <ol style={{ lineHeight: 2 }}>
        <li>
          <b>Create a design component</b>:<br />
          Enable the layers to be overriden. Make sure you name the design
          overrides the same as the columns you want to retrieve from your data
          base. <i>Note: Names cannot contain spaces and are case sensitive</i>
        </li>
        <br />
        <li>
          <b>{isAirtableUrl(url) ? "✅" : ""} Add Airtable URL</b>
          : <br />
          Enter your Airtable API url on the component’s properties section.
          Learn more about how to get the link here: airtable.com/api
        </li>
        <br />
        <li>
          <b>
            {isValidComponent(component) ? "✅" : ""} Connect the Airtable
            component to your design component ✨
          </b>
        </li>
      </ol>
    </ComponentInstructions>
  );
}
