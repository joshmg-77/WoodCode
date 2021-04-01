import { useState, useEffect, Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DivContent from "../../Shared/DivContent";
import SetBackground from "../../ComponentsSettingsEditor/Setbackground";
import FrameOptionsBackground from "../../ComponentsSettingsEditor/FrameOptionsBackground";
import useGenerateRandomHex from "../../../hooks/useGenerateRandomHex.js";
import { useSessionState } from "@dannyman/use-store";

const DivWrap = styled.div`
  width: 100%;
`;
const H2 = styled.h2`
  text-align:center;
`;
const Input = styled.input.attrs((props) => ({
  type: props.type,
  sizex: props.sizex || "100%",
  sizey: props.sizey || "50px",
}))`
  width: ${({ sizex }) => sizex || "50px"};
  height: ${({ sizey }) => sizey};
  border: 2px solid white;
  color: ${(color) => color || "white"};
  background-color: ${({ background }) => background};
  border-radius: ${({ radius }) => radius || "8px"};
  padding: ${({ padding }) => padding};
  outline: ${({ outline }) => outline || "2px solid transparent"};
  backdrop-filter: ${({ backdrop }) => backdrop && "blur(3px)"};
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="color"] {
    -webkit-appearance: none;
    overflow: hidden;
  }
  &[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &[type="color"]::-webkit-color-swatch {
    border: none;
  }
  &[type="checkbox"] {
    appearance: none;
    width: ${({ sizex }) => sizex};
    height: ${({ sizey }) => sizey};
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
  &[type="checkbox"]::before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    width: ${({ sizex }) => sizex};
    height: ${({ sizey }) => sizey};
    border-radius: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
  &[type="checkbox"]:checked::before {
    content: "\\2713";
    position: absolute;
    color: #ffffff;
    font-size: 20px;
    text-align: center;
  }
  &[type="text"] {
    color: #ffffff;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const GlobalStyle = createGlobalStyle`
  .primary-background{
    padding:${({ padding }) => padding};
    background:${({ backgroundColor }) => backgroundColor};
  }
  .watermark{
    color:${({ WatermarkColor }) => WatermarkColor};
    bottom:${({ bottom }) => bottom};
    right:${({ right }) => `${right} !important` };
  }
  .btns{
    left:${({leftSpace}) => leftSpace+"px !important"};
    top:${({ topSpace }) => topSpace};
  }
  pre[class*="language-"] {  /* override for line-number.css
       box-shadow:1px 1px 15px black;width:inherit;
     */    
    width:inherit !important;
    box-shadow:${({ boxShadow }) =>
       boxShadow && `0px 0px 15px 2px #000000 `};
    box-shadow:${({ boxShadowInset,backgroundColor }) =>
       boxShadowInset && `0px 0px 25px 0px ${backgroundColor} inset,0px 0px 25px 10px rgba(0,0,0,0.5) inset`}; 
        
  }
  ${({ lineNumbers }) =>!lineNumbers && `:not(pre) > code[class*="language-"], pre[class*="language-"] {
    padding-top:40px;
    padding-bottom: 30px ;
    padding-left: .5rem !important;

  }

  `}
   ${({ lineNumbers }) =>lineNumbers && `textarea.prism-live{padding-left:3.8em !important;}
  `}
  span.line-numbers-rows {
    display:${({ lineNumbers }) => (lineNumbers ? "block" : "none")};
  }
  pre[class*="language-"],code[class*="language-"],textarea.prism-live{
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace ,Menlo, "Courier New";
  }
`;



export default function Settings({ openItem, onBackInner }) {
  
  const [randoms] = useGenerateRandomHex();
  const [options, setOptions] = useState({
    color: randoms || "#547bc9",
    padding: 40,
    line_numbers: false,
    box_shadow: true,
    box_shadowInset:false,
    watermark: "",
  });
  const [WaterMark,setWaterMark] = useSessionState("LANG", {
    defaultValue: { label: "javascript", value: "javascript",Mark:options.watermark },
    isNew: true,
    autoRefresh: true,
  });

  const HandleChangeInputs = (event) => {
    let value =
      event.target.name === "line_numbers" ||
      event.target.name === "box_shadow" || event.target.name === "box_shadowInset"
        ? event.target.checked
        : event.target.value;
    setOptions({ ...options, [event.target.name]: value });
  };



  useEffect(() => {
    /* with context we pass all data to the context and we're cosume in every*/
   setWaterMark({...WaterMark,Mark:options.watermark})
  }, [...options]);

  useEffect(() => {
    setOptions({ ...options, color: randoms });
  }, [randoms]);


  return (
    <Fragment>
      <GlobalStyle
        backgroundColor={options.color}
        padding={`${options.padding}px`}
        WatermarkColor={options.color}
        bottom={`${(parseInt(options.padding) + 5).toString()}px`}
        right={`${parseInt(options.padding) + 5}px`}
        leftSpace={options.padding}
        topSpace={`${options.padding}px`}
        boxShadow={options.box_shadow}
        boxShadowInset={options.box_shadowInset}
        lineNumbers={options.line_numbers}
      />
      <DivContent openItem={openItem} onBackInner={onBackInner}>
        <DivWrap>
          <H2>Settings</H2>

          <SetBackground background={options.color} />

          <FrameOptionsBackground title="Change Background">
            <Input
              type="color"
              name="color"
              radius="100%"
              sizex="50px"
              outline="none"
              background={options.color}
              value={options.color}
              onInput={(e) => HandleChangeInputs(e)}
            />
          </FrameOptionsBackground>
          <FrameOptionsBackground title="Padding">
            <Input
              type="number"
              name="padding"
              sizex="50px"
              sizey="30px"
              padding="10px"
              background="rgba(0, 0, 0, 0.2)"
              color="white"
              value={options.padding}
              onChange={(e) => HandleChangeInputs(e)}
            />
          </FrameOptionsBackground>
          <FrameOptionsBackground title="Line Numbers">
            <Input
              type="checkbox"
              name="line_numbers"
              sizex="30px"
              sizey="30px"
              className="check"
              background="rgba(0, 0, 0, 0.2)"
              checked={options.line_numbers}
              onChange={(e) => HandleChangeInputs(e)}
            />
          </FrameOptionsBackground>
          <FrameOptionsBackground title="Box Shadow">
            <Input
              type="checkbox"
              name="box_shadow"
              sizex="30px"
              sizey="30px"
              checked={options.box_shadow}
              onChange={(e) => HandleChangeInputs(e)}
            />
          </FrameOptionsBackground>
          <FrameOptionsBackground title="Box Shadow Inset">
            <Input
              type="checkbox"
              name="box_shadowInset"
              sizex="30px"
              sizey="30px"
              checked={options.box_shadowInset}
              onChange={(e) => HandleChangeInputs(e)}
            />
          </FrameOptionsBackground>
          <FrameOptionsBackground title="Your waterMark">
            <Input
              type="text"
              name="watermark"
              padding="10px"
              value={options.watermark}
              onChange={(e) => HandleChangeInputs(e)}
            />
          </FrameOptionsBackground>
        </DivWrap>
      </DivContent>
    </Fragment>
  );
}