import styled from "styled-components";
import { More } from "../../components/icons/weeklyIcons";
import {useEffect, useState} from "react";
import instance from "../../api/axios";
import {getCookie} from "../../auth/cookie";

function Test() {
  const [color, setColor] = useState("");
  const accessToken = getCookie('accessToken');
  const [testData, setTestData] = useState(null);
  const handleClick = () => {
    if (color === "#96D3FF") {
      setColor("#ff0000");
    } else {
      setColor("#96D3FF");
    }
  };

  // api 연동 코드 - get 방식
  const getDonationDate = async ()=>{
    try{
      const response = await  instance.get('/api/diary',{
        headers:{
          Authorization:` Bearer ${accessToken}`
        }
      })
      console.log('response:', response.data);
      setTestData(response.data)
    }catch (e){
      console.log('error:', e);
    }
  }

  // useEffect(()=>{
  //  처음 렌더링할 때 실행시키고 싶은 함수, 변수 등
  // },[바뀌는 값 -> 얘가 바뀔때마다 useEffect가 다시 실행됨])

  useEffect(() => {
    getDonationDate();
  }, []);



  return (
    <Wrapper>
      <div>
        <p>테두리 전체 감싸지 않기</p>
        <p> 7월의 소다</p>
        <span> 테투리 전체 감싸기 </span>
        <span> 7월의 소다 </span>
        <ItemBox>
         <p>여기에서 부터 api 데이터</p>
          <div>
            {testData && testData.map((item)=>(
                <ApiDataBox>
                  <h1>{item.diaryId}</h1>
                  <h1>생성시간: {item.createdAt}</h1>
                  <h1>쥐피티왈: {item.gptComment}</h1>
                </ApiDataBox>
            ))}
          </div>
        </ItemBox>
      </div>
      <TestIcon onClick={handleClick}>
        <More color={color} />
      </TestIcon>
    </Wrapper>
  );
}

export default Test;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  font-family: "LOTTERIACHAB";
  color: white;
  p {
    text-shadow: 4px 4px ${({ theme }) => theme.backgroundColors.borderDark};
    font-size: 40px;
  }
  span {
    font-size: 40px;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: ${({ theme }) =>
      theme.backgroundColors.borderDark};
  }
`;
const ItemBox = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: auto;
  height: 100vh;
  width: ${({ theme }) => theme.tablet};
  background: ${({ theme }) => theme.backgroundColors.pageBC};
  border-radius: 20px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 324px;
    height: 100vh;
  }
  h1{
    padding: 10px;
    font-size: 12px;
    color:black;
    font-family:"Noto Nastaliq Urdu";
    
  }
`;

const TestIcon = styled.div`
  &:hover {
    // svg {
    //     color: #87ceeb; // 호버 시 스카이 블루
    //     fill: #87ceeb; // 필요한 경우 fill 속성도 변경
    // }
  }
`;

const ApiDataBox = styled.div`
  border: 2px solid blue;
`