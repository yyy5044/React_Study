import styled from "styled-components";
import { useParams } from "react-router-dom";

const PostView = () => {
  const params = useParams();

  if(params.postID === "1"){
    return (
        <Margin>
          <p>1번 포스팅입니다.</p>
        </Margin>
    )
  }else if(params.postID === "2"){
    return (
        <Margin>
          <p>2번 포스팅입니다.</p>
        </Margin>
    )
  }
  else if(params.postID === "3"){
    return (
        <Margin>
          <p>3번 포스팅입니다.</p>
        </Margin>
    )
  }else if(params.postID === "4"){
    return (
        <Margin>
          <p>4번 포스팅입니다.</p>
        </Margin>
    )
  }
};


const Margin = styled.div`
    height: 100vh;
    width: 100vw;

    justify-content: flex-end;
    margin: 10px 50px 30px 50px;
    padding: 0px 0px 0px 30vw;
    background-color: #ffffff;
`;

export default PostView;