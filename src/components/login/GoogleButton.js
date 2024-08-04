import React from 'react';
import styled from 'styled-components';
import { GoogleLogo } from '../icons/buttonicons';

function GoogleButton() {
    // const googleClientId = '1052338939325-qmjfc2tj5b1aakdkd3lv8kvdmh6ov4ie.apps.googleusercontent.com'; // 발급받은 클라이언트 아이디
    // const googleredirect_uri ='http://localhost:3000/googleLogin';
    const googleURL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=34156811698-vmccfeb50jp3km48cbst17i7nbr0jcio.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FgoogleLogin&response_type=code&scope=email&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow`;
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
  width: 275px;
  height: 55px;
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


