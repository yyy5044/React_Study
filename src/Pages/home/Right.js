import styled from "styled-components";
import FixedContent1 from "./FixedContent1";
import FixedContent2 from "./FixedContent2";
import FixedContent3 from "./FixedContent3";
import FixedContent4 from "./FixedContent4";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";

const Right = () =>{
    return <>
        <FixedStyle>
            <FixedContent1 />
            <FixedContent2 />
            <FixedContent3 />
            <FixedContent4 />
        </FixedStyle>
        <Border />
        <ContentStyle>
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
        </ContentStyle>
    </>
};

const FixedStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  align-content: flex-start;
  margin: 50px;
`;

const Border = styled.div`
  margin : 0px 5px 40px 5px;
  border-top : 1px solid #000000;
`;

const ContentStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  align-content: flex-start;
  margin: 50px;
`;

export default Right;