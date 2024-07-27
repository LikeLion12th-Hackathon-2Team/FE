import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {DiaryLogo, MoodLogo, MyPageLogo} from "../icons/menuicons";
import {Link, useLocation} from "react-router-dom";


function Menubar() {
    const [isIconActive, setIsActive] =useState(0);
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        // Update the active icon based on the current path
        if (currentPath === '/writeDiary') {
            setIsActive(1);
        } else if (currentPath === '/changepage') {
            setIsActive(2);
        } else if (currentPath === '/mypage') {
            setIsActive(3);
        }
    }, [currentPath]);




    return (
        <>
            <Wrapper>
                {/*<StyledLink to="/writeDiary" onClick={() => handleClick(1)} >*/}
                <StyledLink to="/writeDiary"  >
                    <Footer isActive={isIconActive === 1} >
                        <DiaryLogo isActive={isIconActive === 1?  '#0184FF' : '#505050'} />
                        <Text isActive={ isIconActive === 1}>일기쓰기</Text>
                    </Footer>

                </StyledLink>
                <StyledLink to={'/changepage'}>
                    <Footer isActive={isIconActive === 2}>
                        <MoodLogo isActive={ isIconActive === 2 ? '#0184FF' : '#505050' }/>
                        <Text isActive={ isIconActive === 2}>기분전환</Text>
                    </Footer>
                </StyledLink>
                <StyledLink to={'/mypage'}>
                    <Footer isActive={isIconActive === 3} >
                        <MyPageLogo  isActive={isIconActive === 3? '#0184FF' : '#505050'}/>
                        <Text isActive={ isIconActive === 3}>마이페이지</Text>
                    </Footer>
                </StyledLink>
            </Wrapper>
        </>

    );
}

export default Menubar;

const Wrapper = styled.footer`
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




const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    //color: ${({ theme, isActive }) => (isActive ? '#0184FF' : theme.colors.fontColor)};
    color: ${({ isActive }) => (isActive ? '#0184FF' : '#505050')};
    margin: 0 15px;
    font-size: 16px;
    &:hover{
        pointer-events: visible;
    }
    
    
    
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ isActive }) => (isActive ? '#0184FF' : '#505050')};

`;


const Text = styled.span`
    margin-top: 8px;
    text-align: center;
    font-size: 10px;
    color: ${({ theme, isActive }) => (isActive ? '#0184FF' : theme.colors.fontColor)};
  
`;
