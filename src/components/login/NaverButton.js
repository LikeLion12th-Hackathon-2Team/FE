import React from 'react';
import styled from 'styled-components';
import { NaverLogo } from '../icons/buttonicons';


const NaverButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <NaverLogo style={{ width: '24px', height: '24px' }} /> 
    네이버로 로그인
  </Button>
);

export default NaverButton;


const Button = styled.button`
  width: 70%;
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
  gap: 8px; 
  
  &:hover {
    background-color: #029B48;
  }
`;
