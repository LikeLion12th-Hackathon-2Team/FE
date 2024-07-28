import styled from "styled-components";
import {Circle, DonateIcon, InformIcon} from "../icons/mypageIcons";
import InformThanks from "../modal/InformThanks";
import {useState} from "react";
import {Link} from "react-router-dom";

function MyPoint({onChangeInformation}) {
    const [isThanksModalOpen, setIsThanksModalOpen] =useState(false)
    const handleThanksModal = ()=>{
        setIsThanksModalOpen(!isThanksModalOpen)
    }
    const handleOpenInformation =()=>{
        onChangeInformation()
    }

    return (
        <>
            <Wrapper>
                <InformIconBox onClick={handleOpenInformation}>
                    <InformIcon/>
                </InformIconBox>
                <Title>
                    나의 소다 포인트
                </Title>
                <CircleBox>
                    <h1>299999999p</h1>
                    <ImgWrap>
                        <Circle/>
                    </ImgWrap>
                </CircleBox>
                <InformPointBox onClick={handleThanksModal}>
                    <IconBox>
                        <DonateIcon/>

                    </IconBox>
                <h1>2000000점 기부하기</h1>
                </InformPointBox>
                <Link to={'https://www.nanumkorea.go.kr/main.do'}>
                    <AnotherDonation>
                        <h2>
                            기부 단체 알아보기 ▶
                        </h2>
                    </AnotherDonation>
                </Link>
                {isThanksModalOpen ? <InformThanks onChange={handleThanksModal}/>: null}
            </Wrapper>
        </>

    );
}

export default MyPoint;

const Wrapper =styled.div`
    padding: 10px;
`

const InformIconBox = styled.div`
    display: flex;
    justify-content: flex-start;
`
const Title = styled.div`
    color: ${({theme})=> theme.colors.fontColor};
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 20px;
`

const ImgWrap = styled.div`
    vertical-align: middle;
`


const CircleBox =styled.div`
    position: relative;
    h1{
        max-width: 150px;
        word-wrap: break-word;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${({theme})=>theme.colors.fontColor};
        font-size: 33px;
    }
`
const InformPointBox = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    height: 40px;
    border-radius:10px;
    background: white;
    margin: 20px auto;
    padding: 8px;
    h1{
        color: ${({theme})=>theme.colors.fontColor};
        font-weight: bold;
        font-size: 15px;
        padding-left: 10px;
        padding-top: 5px;
    }
`

const AnotherDonation = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 40px;
    color: ${({theme})=>theme.colors.fontColor};
    h2{
        font-size: 10px;
        font-weight: bold;
    }
    @media (min-width:${({theme}) => theme.tablet} ) {
        padding-right: 75px;
    }
    
`

const IconBox = styled.div`
    //padding: 10px;
`


