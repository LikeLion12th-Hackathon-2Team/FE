import React from 'react';
import styled from 'styled-components';
import { KakaoLogo } from '../icons/buttonicons';


const KakaoButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <KakaoLogo style={{ width: '24px', height: '24px' }} /> 
    카카오톡으로 로그인
  </Button>
);

export default KakaoButton;

const Button = styled.button`
  width: 70%;
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
  gap: 8px; 

  &:hover {
    background-color: #ECD800;
  }
`;

