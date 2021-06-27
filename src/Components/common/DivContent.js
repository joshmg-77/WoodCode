import styled from "styled-components";
import ButtonA from "./Button";
import Particles from "react-particles-js";

const DivContent = styled.div.attrs((props) => ({
  openItem: props.openItem ? "flex" : "none",
}))`
  box-sizing: border-box;
  width: 90%;
  display: ${(props) => props.openItem};
  max-width: 600px;
  height: 480px;
  margin: auto;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  z-index: 20;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid silver;
  backdrop-filter: blur(3px);
  border-radius: 5px;
  overflow-y:auto;
  *::-webkit-scrollbar {
    width:3px;
  }
  *::-webkit-scrollbar-track  {
    background:rgb(255, 0, 102);
    border-radius: 10px;
  }
  *::-webkit-scrollbar-thumb  {           
    background:rgba(0,0,0,0.6);
    border-radius: 25px;
  }
  & .stylePersonalized {
    position: absolute;
    right: 5px;
    bottom: 5px;
    outline-color: red;
    border-color: red;
  }
  & .title {
    margin-top: 10px;
    color: white;
  }
  & .body {
    width: 90%;
    height: 80%;
    margin: 30px auto;
    display: flex;

    flex-flow: row wrap;
    justify-content: center;
    align-items: space-around;
    overflow-y: auto;
  }
  & .divBtns {
    width: 90%;
    display: flex;
    justify-content: center;
    margin: auto;
  }
`;
const BlackScreen = styled.div`
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  margin: 0;
  padding: 0;
  height: 100vmax;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
`;
function DivContents({ children, openItem, onBackInner }) {
  return (
    <>
      {openItem && <BlackScreen />}
      <DivContent openItem={openItem}>
        <div className="body">
          {children}
          <ButtonA
            className="stylePersonalized"
            onClick={onBackInner}
            background="#ff0000"
            hoverColor="#ff0000"
            borderRadius="7px"
            width="100px"
            height="30px"
          >
            Back
          </ButtonA>
        </div>
        {/*Opcional*/}
        <Particles
          params={{
            particles: {
              number: {
                value: 1080,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#FAF9F9",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: true,
                  speed: 0.5,
                  opacity_min: 0.1,
                  sync: true,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 100,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 50,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },

              retina_detect: true,
            },
          }}
          style={{
            width: "100%",
            bottom: "0",
            left: "0",
            position: "absolute",
            zIndex: "-1",
          }}
          height="150px"
        />
      </DivContent>
    </>
  );
}

export default DivContents;
