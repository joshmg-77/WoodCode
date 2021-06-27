import styled from 'styled-components';

const MainDiv = styled.div`
  width: 90%;
  height: auto;
  margin: 10px auto;
  display: flex;
  border-bottom: solid 2px transparent;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;
const P = styled.p`
  font-family: 'Helvetica';
  font-size: 18px;
  font-weight: 700;
`;

const ContainerInput = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-end;
`;

export default function FrameOptionsBackground({ title, children }) {
  return (
    <MainDiv>
      <P>{title}:</P>
      <ContainerInput>{children}</ContainerInput>
    </MainDiv>
  );
}
