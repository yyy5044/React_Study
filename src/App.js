import './App.css';
import styled from "styled-components";
import Left from './component/Left';
import Right from './component/Right';


const App = () => {
  return (
    <div className="App">
      <TitleContainer>
        <LeftStyle>
          <Left />
        </LeftStyle>
        <RightStyle>
          <Right />
        </RightStyle>
      </TitleContainer>
    </div>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const LeftStyle = styled.div`
  height: 1000px;
  width: 30%;

  background-color: #0000ff;
`;

const RightStyle = styled.div`
  height: 100px;
  width: 70%;
  
  margin: 10px 50px 30px 50px;
  background-color: #ffffff;
`;

export default App;
