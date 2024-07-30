import React from 'react';
import styled from 'styled-components';
import { GoogleLogo } from '../icons/buttonicons';

function GoogleButton() {
    const googleClientId = '1052338939325-qmjfc2tj5b1aakdkd3lv8kvdmh6ov4ie.apps.googleusercontent.com'; // 발급받은 클라이언트 아이디
    const googleredirect_uri ='http://localhost:3000/googleLogin';
    const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&scope=openid%20profile%20email&redirect_uri=${googleredirect_uri}`;

    const handleLogin3 = () => {
        window.location.href = googleURL;
    };
    return (
        <>
            <Button onClick={handleLogin3}>
                <GoogleLogo />
                Google 계정으로 로그인
            </Button>
        </>

    );
}

export default GoogleButton;


const Button = styled.button`
  width: 70%;
  padding: 17px;
  background-color: #FFFF;
  margin-top: 3px;
  color: black;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #357ae8;
  }
`;


