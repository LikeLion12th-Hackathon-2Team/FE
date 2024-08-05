import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menubar from "../../components/common/Menubar";
import Header from '../../components/common/Header';
import { WaterLogo } from '../../components/icons/menuicons';
import instance from "../../api/axios";
import { getCookie } from "../../auth/cookie";

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

  const getMoodChange = async () => {
    try {
      const response = await instance.get('/api/today_recommend', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      console.log('response:', response.data);
      setTestData(response.data);
    } catch (e) {
      console.log('error:', e);
    }
  };

  useEffect(() => {
    getMoodChange();
  }, [accessToken]);

  // testData를 문단 단위로 나누기
  const paragraphs = testData ? testData.split('.').filter(paragraph => paragraph.trim() !== '') : [];

  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Title>오늘의 기분전환</Title>
          <Box1>
            {paragraphs.length > 0 ? (
              paragraphs.map((para, index) => (
                <Paragraph key={index}>{para.trim()}.</Paragraph>
              ))
            ) : (
              <LoadingText>로딩 중...</LoadingText>
            )}
          </Box1>
          <LogoWrapper>
            <WaterLogo />
          </LogoWrapper>
          <Box2>
            <Text1>기분전환에 도움이 되었나요?</Text1>
            <Text2>언제든지 필요할 때 찾아주세요.💕</Text2>
          </Box2>
        </Container>
      </Wrapper>
      <Menubar />
    </>
  );
}

export default MoodChange;

const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 70px;
  display: flex;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(${({ theme }) => theme.backgroundColors.mainColor} 25%, white 100%);
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
`;

const Title = styled.p`
  padding-top: 5px;
  padding-bottom: 15px;
  font-family: 'LOTTERIACHAB';
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 4px 4px ${({ theme }) => theme.backgroundColors.borderDark};
`;

const Box1 = styled.div`
  margin-top: 13px;
  padding: 15px;
  padding-bottom: 8px;
  background-color: #FFFF;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: ${({ theme }) => theme.tablet};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    border-radius: 15px;
    width: 324px;
  }
`;

const LoadingText = styled.h1`
  color: black;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 19px;
  text-align: center;
  font-weight: lighter;
  margin-bottom: 4px;
`;

const Paragraph = styled.p`
  color: black;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 19px;
  text-align: center;
  font-weight: lighter;
  margin-bottom: 4px;
`;

const Box2 = styled.div`
  padding: 13px;
  border-radius: 15px;
  background-color: #FFFF;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
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

const Text1 = styled.p`
  margin-top: 5px;
  font-size: 19px;
`;

const Text2 = styled.p`
  margin-top: -2px;
  font-size: 19px;
  line-height: 1.5; /* 라인 높이 조정 */
  display: inline; /* 인라인으로 설정하여 이모지가 잘리지 않도록 함 */
`;

const LogoWrapper = styled.div`
  margin-right: 260px;
  margin-top: 10px;
  margin-bottom: -16px;
  scroll-margin-top: 70px;
  width: 50px;
  height: 50px;
`;

