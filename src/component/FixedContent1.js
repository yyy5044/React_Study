import styled from "styled-components";

const FixedContent1 = () =>{
    return <div className='FixedContent1'>
        <Box>FixedContent1</Box>
    </div>
};

const Box = styled.div`
  height: 120px;
  width: 230px;
  border: 2px solid;
  background-color: #00ffff;
`;
export default FixedContent1;