import { useState } from 'react';
import styled from 'styled-components';
import ButtonA from '../common/Button';
import Settings from '../PopsSettings/index';
import ChangeLenguage from '../PopsChangeLenguage/index';
import ChangeTheme from '../PopsChangeTheme/index';
import ExportSnippet from '../PopsExport/index';

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
    font-family: 'Helvetica';
  }
`;
const Icon = styled.i`
  margin-right: 5px;
`;
const Button = styled(ButtonA)`
  font-style: italic;
  letter-spacing: 2.5px;
  font-weight: 600;
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
        <ul className='ul'>
          <li className='settings'>
            <Button onClick={(e) => GenericShowPopUp(e)}>
              <Icon className='fas fa-cog'></Icon>Settings
            </Button>
            <Settings
              openItem={inter.settings}
              onBackInner={() => onBackInnerClosePopUp()}
            />
          </li>
          <li className='changeTheme'>
            <Button onClick={(e) => GenericShowPopUp(e)}>
              <Icon className='fas fa-palette'></Icon>Change theme
            </Button>
            <ChangeTheme
              className='changeTheme'
              openItem={inter.changeTheme}
              onBackInner={() => onBackInnerClosePopUp()}
            />
          </li>
          <li className='changeLenguage'>
            <Button onClick={(e) => GenericShowPopUp(e)}>
              <Icon className='fas fa-language'></Icon> Change lenguage
            </Button>
            <ChangeLenguage
              openItem={inter.changeLenguage}
              onBackInner={() => onBackInnerClosePopUp()}
            />
          </li>
          <li className='export'>
            <Button onClick={(e) => GenericShowPopUp(e)}>
              <Icon className='fas fa-download'></Icon>Export
            </Button>
            <ExportSnippet
              className='drop'
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
