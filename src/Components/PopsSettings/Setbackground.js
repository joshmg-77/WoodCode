import styled from 'styled-components';

const SetBackground = styled.div`
  width: auto;
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
const MiniEditor = styled.div`
  border: 2px solid silver;
  width: 100%;
  height: 100px;
  background: ${(props) => props.background};
  border-radius: 5px;
  margin: auto;
  padding: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
`;
const Content = styled.div`
  background: #1e212d;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: center;
  color: yellowgreen;
`;
const Pre = styled.pre`
  border: 2px solid transparent;
  width: 90%;
  font-size: 8px;
  white-space: pre-wrap;
`;

export default function SettingsBackground({ background }) {
  return (
    <SetBackground>
      <MiniEditor background={background}>
        <Content>
          <Pre>
            {`
    
  p.{
    color: red;
  }
  .avatar{
    border-radius: 50%;
  }


`}
          </Pre>
        </Content>
      </MiniEditor>
    </SetBackground>
  );
}
