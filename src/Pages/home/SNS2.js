import styled from "styled-components";
import content from "../img/youtube.jpg"

const SNS2 = () => {
    return <>
        <Box>
        <img src={content} width="40px" height="40px"></img>
        </Box>
    </>
}

const Box = styled.div`
  height: 40px;
  width: 40px;
  background-color: #ffffff;
`;

export default SNS2;