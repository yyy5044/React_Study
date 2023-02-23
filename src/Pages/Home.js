import styled from "styled-components";
import Right from "./home/Right";

const Home = () => {
    return (
        <TitleContainer>
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

const RightStyle = styled.div`
  height: 100vh;
  width: 100vw;

  justify-content: flex-end;
  margin: 10px 50px 30px 50px;
  padding: 0px 0px 0px 30vw;
  background-color: #ffffff;
`;

export default Home;