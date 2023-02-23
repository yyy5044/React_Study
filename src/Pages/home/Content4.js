import styled from "styled-components";
import content from "../img/Content.png"

const Content4 = () =>{
    return <>
        <Box>
          <img src={content} width="200px" height="230px"></img>
        </Box>
    </>
}

const Box = styled.div`
  height: 230px;
  width: 200px;
  border: 2px solid;
  margin: 10px 10px 10px 10px;
  background-color: #00ffff;
`;
export default Content4;