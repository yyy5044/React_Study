import styled from "styled-components";

const Content1 = () =>{
    return <div className="Content1">
        <Box>Content1</Box>
    </div>
}

const Box = styled.div`
  height: 230px;
  width: 200px;
  border: 2px solid;
  background-color: #00ffff;
`;
export default Content1;