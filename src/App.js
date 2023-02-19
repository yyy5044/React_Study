import './App.css';
import styled from "styled-components";
import Left from './component/Left';
import Right from './component/Right';


const App = () => {
  return (
      <TitleContainer>
        <LeftStyle>
          <Left />
        </LeftStyle>
        <RightStyle>
          <Right />
        </RightStyle>
      </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const LeftStyle = styled.div`
  position: fixed;

  height: 100vh;
  width: 30vw;

  background-color: #0000ff;
`;

const RightStyle = styled.div`
  height: 100vh;
  width: 100vw;
  
  justify-content: flex-end;
  margin: 10px 50px 30px 50px;
  padding: 0px 0px 0px 30vw;
  background-color: #ffffff;
`;

export default App;
