import styled from "styled-components";

const FixedContent2 = () =>{
    return <div className='FixedContent2'>
        <Box>FixedContent2</Box>
    </div>
};

const Box = styled.div`
  height: 120px;
  width: 230px;
  border: 2px solid;
  background-color: #00ffff;
`;

export default FixedContent2;