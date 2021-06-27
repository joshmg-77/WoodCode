import styled from 'styled-components';
import logo from '../../assets/161677264542504006.png';

const TitleWd = styled.h1`
  color: white;
  font-family: 'Indie Flower', cursive;
  font-weight: 800;
  margin-right: 8px;
  &::first-letter {
    font-size: 55px;
  }
`;
const LogoIMG = styled.img`
  width: 60px;
  height: 60px;
`;
const Logo = styled.div`
  width: 90%;
  max-width: 900px;
  height: auto;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  @media (min-width: 800px) {
    ${TitleWd} {
      font-size: 32px;
    }
    ${LogoIMG} {
      width: 110px;
      height: 110px;
    }
  }
`;

export default function LogoHeader() {
  return (
    <>
      <Logo>
        <TitleWd>WoodCode</TitleWd>
        <LogoIMG src={logo} alt='woodcode' />
      </Logo>
    </>
  );
}
