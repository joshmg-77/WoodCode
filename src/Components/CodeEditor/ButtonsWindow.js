import styled from "styled-components";

const Div = styled.div`
  & {
    position: absolute;
    left: 30px; 
    top: 30px; 
    z-index:1;
    
    width: 30%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    padding: 10px;
  }

  & span {
    counter-reset: linenumber;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    margin: 3px;
  }
  & span:first-child {
    background: red;
  }
  & span:nth-child(2) {
    background: orange;
  }
  & span:last-child {
    background: yellowgreen;
  }
`;
//ver que paso con los btns
const ButtonsWindow = () => {
  return (
    <Div className="btns prism-data-uri-highlight">
      <span></span>
      <span></span>
      <span></span>
    </Div>
  );
};

export default ButtonsWindow;
