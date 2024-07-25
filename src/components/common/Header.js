import styled from "styled-components";
import {ChangeLogo} from "../icons/logo";
import React from "react";

function Header() {
    return (
        <Wrapper>
            <ChangeLogo>
            </ChangeLogo>
        </Wrapper>

    );
}

export default Header;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
`