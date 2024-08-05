import React from 'react';
import styled from 'styled-components';
import { KakaoLogo } from '../icons/buttonicons';


function KakaoButton() {
    // const Rest_api_key = 'd5bac2ad75ed1005489d0d30a03c6c13';
    // const redirect_uri = 'http://localhost:3000/kakaoLogin'; // Redirect URI
// oauth 요청 URL
 const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=7ae2c4174f19e854c31dc918a2fe265e&redirect_uri=https://soda-rust.vercel.app/kakaoLogin&response_type=code`;

    const handleLogin2 = () => {
        window.location.href = kakaoURL;
    };
    return (
        <>
            <Button onClick={handleLogin2}>
                <KakaoLogoWrapper>
                    <KakaoLogo width={32} height={32} />
                </KakaoLogoWrapper> 
                카카오톡으로 로그인
            </Button>
        </>

    );
}

export default KakaoButton;


const Button = styled.button`
  width: 275px;
  height: 55px;
  padding: 17px;
  margin-top: 3px;
  background-color: #FEE500;
  color: #000000; 
  border: none;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center; 
  gap: 4px; 

  &:hover {
    background-color: #ECD800;
  }
`;

const KakaoLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;