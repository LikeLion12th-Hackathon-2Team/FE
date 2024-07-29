import React from 'react';
import styled from 'styled-components';
import Menubar from "../../components/common/Menubar";
import Header from '../../components/common/Header';
import { WaterLogo } from '../../components/icons/menuicons';

const MoodChange = () => {
    return (
    <>
    <Header/>
        <Wrapper>
            <MainContent>
                <Container>
                    <p>오늘의 기분전환</p>
                    <Box1>
                    </Box1>
                    <LogoWrapper>
                    <WaterLogo></WaterLogo>
                    </LogoWrapper>
                    <Box2>
                    기분전환에 도움이 되었나요?<br></br>
                    언제든지 필요할 때 찾아주세요.💕
                    </Box2>
                </Container>
            </MainContent>
        </Wrapper>
        <Menubar/>
    </>
    );
};

export default MoodChange;

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 70px;
    background :linear-gradient(${({theme}) => theme.backgroundColors.mainColor} 25%, white 100%)

`;


const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px); 
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  width: ${({ theme }) => theme.tablet};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 324px;
  }
  
    
    p{
        top: 12px;
        position: absolute;
        font-family: 'LOTTERIACHAB';
        font-size: 40px;
        color: ${({theme})=>theme.colors.white};
        text-shadow: 4px 4px ${({theme}) => theme.backgroundColors.borderDark} ;
        text-align: center;
        margin-bottom: 20px;
        
    }
`;

const Box1 = styled.div`
  width: 324px; 
  height: 300px; 
  background-color: #FFFF;
  border-radius: 10px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
    
  position: absolute; 
  top: 90px;
  color: black; 
  font-family: "Ownglyph_meetme-Rg";
  font-size: 15px;
  text-align: center;  
  font-weight: bold; 
  width: ${({ theme }) => theme.tablet};

  
`;


const Box2 = styled.div`
  width: 290px; 
  height: 80px; 
  background-color: #FFFF;
  border-radius: 15px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.tablet};
  position: absolute; 
  top: 425px;
  color: black; 
  font-family: "Ownglyph_meetme-Rg";
  font-size: 19px;
  text-align: center;  
  gap: 100px;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 1px;
  top: 394px;
  width: 50px;
  height: 50px;
`;
