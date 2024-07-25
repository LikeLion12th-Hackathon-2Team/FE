import styled from "styled-components";
import {ChangeLogo} from "../icons/logo";
import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <Link to={'/soda'}>
            <Wrapper>
                <ChangeLogo/>
            </Wrapper>
        </Link>

    );
}

export default Header;
const Wrapper = styled.div`
    z-index: 1;
    position: fixed;
    background: ${({ theme }) => theme.backgroundColors.mainColor};
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px;
    border: none;
`