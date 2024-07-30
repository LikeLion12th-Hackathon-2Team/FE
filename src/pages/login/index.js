import React from 'react';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import NaverLogin from 'react-naver-login';
import {LoginPageLogo} from "../../components/icons/logo";
import {LoginPageLoginLogo} from "../../components/icons/logo";
import NaverButton from '../../components/login/NaverButton';
import KakaoButton from '../../components/login/KakaoButton';
import GoogleButton from '../../components/login/GoogleButton';


// 로그인 컴포넌트
const Login = () => {
  return (
    <Container>
      <LogoBox>
        <LoginPageLogo />
      </LogoBox>
      <p>로그인</p>
      <ButtonContainer>
        <NaverButton/>
        <KakaoButton/>
        <GoogleButton/>
      </ButtonContainer>
    </Container>
  );
};

export default Login;


// 전체 컨테이너 스타일
const Container = styled.div`
p{
    padding: 10px;
    font-family: 'LOTTERIACHAB';
    font-size: 70px;
    color: #2EA7FF;
    -webkit-text-stroke: 4px white;
    margin-top: -30px;
    }
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  height: 100vh;
  background :linear-gradient(${({theme}) => theme.backgroundColors.mainColor} 25%, white 100%);
`;

// 로고를 담는 박스 스타일
const LogoBox = styled.div`
  text-align: center;
  margin-bottom: 20px; 
`;


// 버튼들을 담는 컨테이너 스타일
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 10px; 
  width: 100%;
  max-width: 400px; 
`;




