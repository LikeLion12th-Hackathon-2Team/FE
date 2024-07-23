import styled from "styled-components";
import {DonationHeartIcon} from "../icons/modalIcons";

function InformThanks({onChange}) {
    const handleOpen =()=>{
        onChange()
    }

    return (
        <>
            <Wrapper>
                <Container>
                    <InformText>
                        <DonationHeartIcon/>
                        <h1>소다와 함께 따뜻한 마음을 전해 주세요.</h1>
                        <h1>함께 나누는 기쁨이 더 큰 변화를 만듭니다.</h1>
                        <h1>귀하의 소중한 기부에 진심으로 감사드립니다.</h1>
                        <Btn onClick={handleOpen}>확인</Btn>
                    </InformText>
                </Container>
            </Wrapper>
        </>

    );
}

export default InformThanks;


const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

const Container = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    border: 3px solid ${({theme})=>theme.backgroundColors.borderColor};
    text-align: center;
    width: 326px;
    height: 209px;
    
`;

const InformText = styled.div`
    color: ${({theme})=>theme.colors.fontColor};
    h1{
        color: ${({theme})=> theme.colors.darkGray};
        font-weight: bolder;
        font-size: 15px;
        margin: 7px;
    }
 
`


const Btn = styled.button`
    color: ${({theme})=>theme.colors.fontColor};
    margin-top: 15px;
    background:  ${({theme})=> theme.backgroundColors.btnColor};
    width: 180px;
    height: 40px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 15px;
 
`