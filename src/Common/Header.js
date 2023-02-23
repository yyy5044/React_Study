import styled from "styled-components";
import Left from "./component/Left";
import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <TitleContainer>
          <LeftStyle>
            <Left />
          </LeftStyle>
          <div>
            <Outlet />
          </div>
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

export default Header;