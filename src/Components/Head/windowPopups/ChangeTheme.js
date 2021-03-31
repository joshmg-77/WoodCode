/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DivContent from "../../Shared/DivContent";
import Select, { components } from "react-select";

const DivSection = styled.div`
  width: 100%;
  line-height: 1.7em;
`;
const DivContainerSelect = styled.div`
  width: inherit;
`;
const Paragraph = styled.p`
  font-size: 20px;
`;
const Pill = styled.span`
  color: yellowgreen;
  border: 1.5px solid #ffffff;
  background: #ffffff;
  border-radius: 7px;
  padding: 3px;
`;

const Control = ({ children, ...props }) => {
  const style = {
    cursor: "pointer",
    fontSize: "25px",
    padding: "5px",
  };
  
  return (
    <components.Control {...props}>
      <span style={style}>
        <i className="fas fa-palette"></i>
      </span>
      {children}
    </components.Control>
  );
};

const options = [
  { value: "a11y-dark", label: "a11y dark" },
  { value: "atom-dark", label: "atom-dark" },
  { value: "base16-ateliersulphurpool.light", label: "base16-light" },
  { value: "cb", label: "cb" },
  { value: "coldark-cold", label: "coldark cold" },
  { value: "coldark-dark", label: "coldark dark" },
  { value: "coy-without-shadows", label: "coy without shadow" },
  { value: "darcula", label: "darcula" },
  { value: "dracula", label: "dracula" },
  { value: "duotone-dark", label: "doutone dark" },
  { value: "duotone-earth", label: "doutone earth" },
  { value: "duotone-forest", label: "doutone forest" },
  { value: "duotone-sea", label: "sea" },
  { value: "duotone-space", label: "duotone space" },
  { value: "ghcolors", label: "ghcolors" },
  { value: "hopscotch", label: "hopscotch" },
  { value: "material-dark", label: "material dark" },
  { value: "material-light", label: "material light" },
  { value: "material-oceanic", label: "material oceanic" },
  { value: "nord", label: "nord" },
  { value: "pojoaque", label: "pojoaque" },
  { value: "shades-of-purple", label: "shades of purple" },
  { value: "synthwave84", label: "synthwave84" },
  { value: "vs", label: "vscode" },
  { value: "vsc-dark-plus", label: "vsc dark plus" },
  { value: "xonokai", label: "xonokai" },
];

function ChangeTheme({ openItem, onBackInner, className, props }) {
  const [Theme, setTheme] = useState({value:"a11y-dark",label:"a11y  dark"});

  useEffect(() => {
    // import(`prismjs/themes/prism-${Theme}.css`).then(()=>Prism.highlightAll());
    let doc = document.querySelector("#themesed");
    doc.setAttribute(
      "href",
      `https://cdn.jsdelivr.net/npm/prism-themes@1.5.0/themes/prism-${Theme.value}.css`
    );
  }, [Theme]);

  const ChangeThemes = (e) => {
    setTheme({value:e.value,label:e.label});
  };

  const AllStyleReactSelect = 
    {
      option: (base) => ({
        ...base,
        height: "100%",
        ":hover": {
          background: "#0f1123",
        },
        ":focus": {
          background: "#0f1123",
        },
        ":active": {
          background: "#0f1123",
        },
        background: "rgba(0,0,0,0.2)",
      }),
      menu: (vase) => ({
        ...vase,
        background: "rgba(0,0,0,1)",
        color: "#fff",
      }),
      control: (container) => ({
        ...container,
        paddingLeft: ".3rem",
        width: "100%",
        background: "rgba(0,0,0,0.3)",
        color: "#fff",
      }),
      input: (input) => ({
        ...input,
        color: "#fff",
      }),
      singleValue: (place) => ({
        ...place,
        color: "#ffffff",
      }),
    }
  

  return (
    <DivContent
      className={className}
      openItem={openItem}
      onBackInner={onBackInner}
    >
      <h2>Change Theme</h2>
      <DivSection>
        Important: if your theme not exist dont worry we're working in a new
        feature for improve a custom theme and if your theme is little
        bit generic then you should create a <Pill>pull request</Pill>{" "}
        at github for upload the custom theme
      </DivSection>
      <DivContainerSelect>
        <p>Choose your theme:</p>
        <Select
          {...props}
          isSearchable
          onChange={(e) => ChangeThemes(e)}
          defaultValue={options[0]}
          
          components={{ Control }}
          options={options}
          styles={AllStyleReactSelect}
        />
      </DivContainerSelect>
      {Theme?.value && <Paragraph>Theme actual {Theme.label}</Paragraph>}
    </DivContent>
  );
}

export default React.memo(ChangeTheme);
