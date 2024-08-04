import React from 'react';
import styled from 'styled-components';
import Menubar from "../../components/common/Menubar";
import Header from '../../components/common/Header';
import { WaterLogo } from '../../components/icons/menuicons';
import {useEffect, useState} from "react";
import instance from "../../api/axios";
import {getCookie} from "../../auth/cookie";

function MoodChange() {
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

const getMoodChange = async ()=>{
  try{
    const response = await  instance.get('/api/today_recommend',{
      headers:{
        Authorization:` Bearer ${accessToken}`
      }
    });
    console.log('response:', response.data);
    setTestData(response.data)
  } catch (e){
    console.log('error:', e);
  }
};

useEffect(() => {
  getMoodChange();
}, [accessToken]);

  return (
    <>
    <Header/>
        <Wrapper>
                <Container>
                    <p>오늘의 기분전환</p>
                    <Box1>
                    <h1>{testData ? testData : "로딩 중..."}</h1>
                    </Box1>
                    <LogoWrapper>
                    <WaterLogo></WaterLogo>
                    </LogoWrapper>
                    <Box2>
                    기분전환에 도움이 되었나요?<br></br>
                    언제든지 필요할 때 찾아주세요.💕
                    </Box2>
                </Container>
        </Wrapper>
        <Menubar/>
    </>
    );
};

export default MoodChange;

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 70px;
    display: flex;
    justify-content: center;
    height: 100vh;
    background :linear-gradient(${({theme}) => theme.backgroundColors.mainColor} 25%, white 100%);
`;

const Container = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  text-align: center;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  p {
      padding-top: 5px;
      padding-bottom: 15px;
      font-family: 'LOTTERIACHAB';
      font-size: 40px;
      color: ${({theme}) => theme.colors.white};
      text-shadow: 4px 4px ${({theme}) => theme.backgroundColors.borderDark};
  }
`;

const Box1 = styled.div` 
  margin-top: 20px;
  padding: 20px;
  background-color: #FFFF;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: ${({ theme }) => theme.tablet};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    border-radius: 15px; 
    width: 324px;
  }

  h1 {
    color: black; 
    font-family: "Ownglyph_meetme-Rg";
    font-size: 19px;
    text-align: center; 
    font-weight: lighter;
  }
`;


const Box2 = styled.div`
  height: 80px; 
  border-radius: 15px; 
  background-color: #FFFF;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  display: flex;
  justify-content: center;
  align-items: center;
  color: black; 
  font-family: "Ownglyph_meetme-Rg";
  font-size: 19px; 
  width: ${({ theme }) => theme.tablet};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    border-radius: 15px; 
    width: 324px;
  }
`;

const LogoWrapper = styled.div`
  margin-right: 260px;
  margin-top: 10px;
  margin-bottom: -16px;
  scroll-margin-top: 70px;
  width: 50px;
  height: 50px;
`;
