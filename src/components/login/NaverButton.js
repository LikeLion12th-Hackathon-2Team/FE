import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { NaverLogo } from '../icons/buttonicons';
import { v4 as uuidv4 } from 'uuid';


function NaverButton() {
    // https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=X9wShuIX0XXcW2_LlG93&state=hLiDdL2uhPtsftcU&redirect_uri=http://54.180.217.161:8081/api/auth/naver
    // 원본
    // const NAVER_CLIENT_ID = 'g6klrCeO6cJZRv_7jVp1';// 발급받은 클라이언트 아이디
    // const REDIRECT_URI = 'http://localhost:3000/naverLogin'; // Callback URL
    // const [state, setState] = useState('');
    // const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${state}&redirect_uri=${REDIRECT_URI}`;
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=X9wShuIX0XXcW2_LlG93&state=hLiDdL2uhPtsftcU&redirect_uri=https://soda-rust.vercel.app/naverLogin`;

    const handleLogin1 = () => {
        window.location.href = NAVER_AUTH_URL;
    };


     // useEffect(() => {
     //   setState(uuidv4());
     // }, []);


    return (
        <>
            
            <Button onClick={handleLogin1}>
                <NaverLogoWrapper>
                 <NaverLogo width={35} height={35} />
                </NaverLogoWrapper>
                 네이버로 로그인
            </Button>
        </>

    );
}

export default NaverButton;


const Button = styled.button`
  width: 275px;
  height: 55px;
  padding: 17px;
  background-color: #03C75A;
  margin-top: 50px;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center; 
  gap: 1px; 
  
  &:hover {
    background-color: #029B48;
  }
`;

const NaverLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
