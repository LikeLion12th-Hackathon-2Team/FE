import React from 'react';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import NaverLogin from 'react-naver-login';
import { GoogleLogin } from '@react-oauth/google';
import {LoginPageLogo, SignupPageLogo} from "../../components/icons/logo";
import NaverButton from '../../components/login/NaverButton';
import KakaoButton from '../../components/login/KakaoButton';
import GoogleButton from '../../components/login/GoogleButton';


// 회원가입 컴포넌트
const Signup = () => {
    return (
      <Container>
        <LogoBox>
          <LoginPageLogo />
        </LogoBox>
        <p>회원가입</p>
        <ButtonContainer>
          <NaverButton />
          <KakaoButton />
          <GoogleButton />
        </ButtonContainer>
      </Container>
    );
  };

export default Signup;


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



const LogoBox = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`;

