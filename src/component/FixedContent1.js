import styled from "styled-components";
import content from "../img/FixedContent.png"

const FixedContent1 = () =>{
    return <>
        <Box>
          <img src={content} width="230px" height="120px"></img>
        </Box>
    </>
};

const Box = styled.div`
  height: 120px;
  width: 230px;
  border: 2px solid;
  margin: 10px 10px 10px 10px;
  background-color: #00ffff;
`;
export default FixedContent1;