import React from 'react';
import styled from 'styled-components';
import { GoogleLogo } from '../icons/buttonicons';


const GoogleButton = ({ onClick }) => (
    <Button onClick={onClick}>
      <GoogleLogo />
      Google 계정으로 로그인
    </Button>
  );
  
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


