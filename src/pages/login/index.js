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
    
    const NAVER_CLIENT_ID = 'g6klrCeO6cJZRv_7jVp1';// 발급받은 클라이언트 아이디
    const REDIRECT_URI = 'http://localhost:3000/naverLogin'; // Callback URL
    const STATE = "flase";
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;
  
    const handleLogin1 = () => {
      window.location.href = NAVER_AUTH_URL;
    };

    const Rest_api_key = 'd5bac2ad75ed1005489d0d30a03c6c13';
    const redirect_uri = 'http://localhost:3000/kakaoLogin'; // Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    
    const handleLogin2 = () => {
        
        window.location.href = kakaoURL;
    };

    const googleClientId = '1052338939325-qmjfc2tj5b1aakdkd3lv8kvdmh6ov4ie.apps.googleusercontent.com'; // 발급받은 클라이언트 아이디
    const googleredirect_uri ='http://localhost:3000/googleLogin';
    const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&scope=openid%20profile%20email&redirect_uri=${googleredirect_uri}`;

    const handleLogin3 = () => {
      window.location.href = googleURL;
    };

  return (
    <Container>
      <LogoBox>
        <LoginPageLogo />
      </LogoBox>
      <p>로그인</p>
      <ButtonContainer>
        <NaverButton onClick={handleLogin1} />
        <KakaoButton onClick={handleLogin2} />
        <GoogleButton onClick={handleLogin3} />
      </ButtonContainer>
        <Message>계정이 없으신가요?</Message>
        <JoinLink href="/join">회원가입</JoinLink>
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
  top: 17px;
  position: relative;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 10px; 
  width: 100%;
  max-width: 400px; 
`;


const Message = styled.div`
    align-items: center;
    top: 90px;
    position: relative;
    color: #8A8A8A;
    font-size: 13px;
`;


const JoinLink = styled.a`
    align-items: center;
    position: relative;
    top: 100px;
    color: #8A8A8A;
    cursor: pointer;
    font-family: 'inter';
    font-weight: bold;
    font-size: 15px;
    text-decoration: none;

    &:hover {
        color: #1E90FF;
    }
`;



