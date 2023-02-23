import styled from "styled-components";
import content from "../img/fourth.png"
import { Link } from "react-router-dom";

const FixedContent4 = () =>{
    return <>
        <Box>
          <img src={content} width="120px" height="120px"></img>
          <Link to="/postview/4">
            <Margin>4번 포스팅</Margin>
          </Link>
        </Box>
    </>
};

const Margin = styled.p`
  padding: 30px 0px 0px 10px;
`;

const Box = styled.div`
  display: flex;
  height: 120px;
  width: 230px;
  border: 2px solid;
  margin: 10px 10px 10px 10px;
  background-color: #ffffff;
`;

export default FixedContent4;