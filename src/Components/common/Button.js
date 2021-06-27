import styled from "styled-components";

export const Button = styled.a.attrs(props=>({
  className:props.className,
  color:!props.color?"white":props.color,
  background:!props.background?"none":props.background,
  borderRadius:!props.borderRadius?0:props.borderRadius,
  border:!props.border?"2px solid white":props.border,
  hoverColor:props.hoverColor || "purple",
}))`
  &{
    text-decoration:none;
    color:${props=>props.color};
    border-radius:${props=>props.borderRadius};
    background:${props=>props.background};
    cursor: pointer;
    width: ${props=>props.width};
    height: ${props=>props.height};
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-content:center;
    padding: 8px;
    margin: 5px auto;
    border:${props=>props.border};
  }

  &:hover {
    color: ${props=>props.hoverColor};
    background-color: white;
    border: 2px solid white;
  }
`;

const ButtonA =({className,children,...otherProps})=>{
    return(
        <Button 
          className={className}
          {...otherProps}
        >
            {children}
        </Button>
    )
}


export default ButtonA