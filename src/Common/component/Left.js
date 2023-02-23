import styled from "styled-components";
import SNS1 from "./SNS1";
import SNS2 from "./SNS2";
import SNS3 from "./SNS3";
import SNS4 from "./SNS4";

const Left = () => {
    return <>
        <TitleStyle>
            <TitleFontStyle>
              LR의<br />
              IT블로그
            </TitleFontStyle>
        </TitleStyle>
        <Border />
        <SnsStyle>
            <SNS1 />
            <SNS2 />
            <SNS3 />
            <SNS4 />
        </SnsStyle>
    </>;
}

const TitleStyle = styled.div`
  padding: 550px 10px 0px 30px;
`;

const Border = styled.div`
  margin : 0px 5px 40px 5px;
  border-top : 1px solid #ffffff;
`;

const TitleFontStyle = styled.p`
  color: #ffffff;
  text-align: left;
  font-size: 50px;
`;

const SnsStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;


export default Left;