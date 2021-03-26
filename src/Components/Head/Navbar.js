import { useState } from "react";
import styled from "styled-components";
import ButtonA from "../Shared/Button";

import {
  ExportSnippet,
  ChangeTheme,
  ChangeLenguage,
  Settings,
} from "./windowPopups/index.js";

const Nav = styled.nav`
  width: 90%;
  max-width: 900px;
  margin: auto;
  border-bottom: 1px solid silver;
  & .ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: white;
    margin: auto;
  }
  & .ul li {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 5px auto;
    font-family: "Helvetica";
  }
`;
const Icon = styled.i`
  margin-right: 5px;
`;

const Navbar = () => {
  const [inter, setInter] = useState({
    settings: false,
    changeTheme: false,
    changeLenguage: false,
    export: false,
  });

  const GenericShowPopUp = (e) => {
    //open any popup
    setInter({ ...inter, [e.target.parentNode.className]: !false });
  };
  const onBackInnerClosePopUp = () => {
    //it close popup
    Object.keys(inter).forEach((r) => {
      setInter({ r: false });
    });
  };

  return (
    <>
      <Nav>
        <ul className="ul">
          <li className="settings">
            <ButtonA onClick={(e) => GenericShowPopUp(e)}>
              <Icon className="fas fa-cog"></Icon>Settings
            </ButtonA>
            <Settings
              openItem={inter.settings}
              onBackInner={() => onBackInnerClosePopUp()}
            />
          </li>
          <li className="changeTheme">
            <ButtonA onClick={(e) => GenericShowPopUp(e)}>
              <Icon className="fas fa-palette"></Icon>Change theme
            </ButtonA>

            <ChangeTheme
              className="changeTheme"
              openItem={inter.changeTheme}
              onBackInner={() => onBackInnerClosePopUp()}
            />
          </li>
          <li className="changeLenguage">
            <ButtonA onClick={(e) => GenericShowPopUp(e)}>
              <Icon className="fas fa-language"></Icon> Change
              lenguage
            </ButtonA>
            <ChangeLenguage
              openItem={inter.changeLenguage}
              onBackInner={() => onBackInnerClosePopUp()}
            />
          </li>
          <li className="export">
            <ButtonA onClick={(e) => GenericShowPopUp(e)}>
              <Icon className="fas fa-download"></Icon>Export
            </ButtonA>

            <ExportSnippet
              className="drop"
              openItem={inter.export}
              onBackInner={() => onBackInnerClosePopUp()}
            />
          </li>
        </ul>
      </Nav>
    </>
  );
};

export default Navbar;
