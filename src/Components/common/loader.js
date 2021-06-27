import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const waves = keyframes`
  25%{
    box-shadow:0px 0px 30px 10px aqua;
    transform:translate(-50%,-50%)  scale(0.4);
  }
  50%{
    box-shadow:0px 0px 40px 20px aqua;
    transform:translate(-50%,-50%)  scale(0.6);
  }
  75%{
    box-shadow:0px 0px 40px 10px aqua ;
    transform:translate(-50%,-50%)  scale(0.8);
  }
  100%{
    box-shadow:0px 0px 50px 5px aqua;
    transform:translate(-50%,-50%) scale(1.2);
  }
`;
const Div = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 4; //fix this
  background: black;
  &:before {
    content: "";
    width: 50px;
    height: 50px;

    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    box-shadow: 0px 0px 15px 5px aqua, 0px 0px 10px 4px #ffffff inset,
      0px 0px 4px 5px #7d00ec inset, 0px 0px 35px 20px #00fff1 inset;
    border: 1px solid aquamarine;
    border-radius: 50%;
  }

  &:after {
    content: "";
    width: 150px;
    height: 150px;

    position: absolute;
    top: 40%;
    left: 50%;

    filter: blur(10px);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    animation: ${waves} 0.8s linear infinite;
  }
`;
const P = styled.p`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  
  color: white;
  text-shadow: 0px 0px 5px aqua, 0px 0px 15px aquamarine,
    0px 0px 30px #099fff, 0px 0px 75px white;
  font-size: 40px;
`;

const Loader = ({ load }) => {
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    setLoad(load);
  }, [load]);

  return (
    <>
      {!isLoad ? (
        <Div>
          <P>Loading......</P>
        </Div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loader;
