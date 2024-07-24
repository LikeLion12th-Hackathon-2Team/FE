import React from "react";
import styled from 'styled-components';
import { MoodLogo } from "../icons/menuicons";

const MoodItem = () => (
    <Footer href="changepage">
        <MoodLogo />
      <Text>기분전환</Text>
    </Footer>
  );
  
  export default MoodItem;

  const Footer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black}; 
  margin: 0 15px;
  font-size: 16px;
  transition: color 0.3s ease; 

  &:hover {
    color: #0184FF; 
  }
`;

const Text = styled.span`
  margin-top: 8px; 
  text-align: center;
  font-size: 10px;
  color: inherit; 
  transition: color 0.3s ease; 
`;