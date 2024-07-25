import React from 'react';
import styled from 'styled-components';
import Menubar from "../../components/common/Menubar";

const Change = () => {
    return (
    <>
        <Header/>
        <Wrapper>
            <MainContent>
                <Container>
                    <p>오늘의 기분전환</p>
                    <Box></Box>
                </Container>
            </MainContent>
        </Wrapper>
        <Menubar/>
    </>
    );
};

export default Change;

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 70px;
    background :linear-gradient(${({theme}) => theme.backgroundColors.mainColor} 25%, white 100%)

`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  padding: 20px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    
    p{
        margin-top: -230px;
        font-family: 'LOTTERIACHAB';
        font-size: 40px;
        color: ${({theme})=>theme.colors.white};
        text-shadow: 4px 4px ${({theme}) => theme.backgroundColors.borderDark} ;
        text-align: center;
        margin-bottom: 20px;
        padding: 10px;
        
    }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-around; 
  align-items: center;
  width: 100%;
  border-radius: 30px 30px 0 0;
  padding: 10px;
  background-color: #FFFF;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);  
  position: fixed; 
  bottom: 0;
  left: 0;
`;

const Box = styled.div`
    width: 400px; 
    height: 300px; 
    background-color: #FFFF;
    border-radius: 10px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    display: flex;
    justify-content: center;
    align-items: center;
`;