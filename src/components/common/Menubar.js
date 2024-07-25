import styled from "styled-components";
import DiaryItem from "../menu/DiaryItem";
import MoodItem from "../menu/MoodItem";
import MyPageItem from "../menu/MyPageItem";
import React from "react";

function Menubar() {
    return (
        <>
            <Footer>
                <DiaryItem/>
                <MoodItem/>
                <MyPageItem/>
            </Footer>
        </>

    );
}

export default Menubar;

const Footer = styled.footer`
  display: flex;
  justify-content: space-around; 
  align-items: center;
  width: 100%;
  border-radius: 30px 30px 0 0;
  padding: 10px;
  background-color: #FFFF;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);  
  position: fixed; 
  bottom: 0;
  left: 0;
    //z-index: 1;
    
`;

