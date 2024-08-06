import styled from "styled-components";
import {Circle, DonateIcon, InformIcon} from "../icons/mypageIcons";
import InformThanks from "../modal/InformThanks";
import {useState} from "react";
import {Link} from "react-router-dom";
import instance from "../../api/axios";

function MyPoint({onChangeInformation, point, donatePoint, accessToken,getPointDate}) {
    const [isThanksModalOpen, setIsThanksModalOpen] =useState(false)
    // const handleThanksModal = ()=>{
    //     if(point && point>=100000){
    //         setIsThanksModalOpen(!isThanksModalOpen)
    //     }
    // }
    const handleOpenInformation =()=>{
        onChangeInformation()
    }

    const postDonatePoint = async ()=>{
        if(point && donatePoint>=10000){
            try{
                const response = await instance.post('/api/donate-history/save',{
                    point:donatePoint,
                    location: '초록우산'
                },{
                    headers:{
                        Authorization:` Bearer ${accessToken}`
                    }
                })
                console.log('백엔드 응답:', response.data);
                setIsThanksModalOpen(!isThanksModalOpen)
                getPointDate()

            }catch (e){
                console.log('에러발생:', e);
            }
        }

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
                    <h1>{point}p</h1>
                    <ImgWrap>
                        <Circle/>
                    </ImgWrap>
                </CircleBox>
                <InformPointBox onClick={postDonatePoint}>
                    {point && donatePoint >= 10000 ? (
                        <>
                            <IconBox>
                                <DonateIcon/>
                            </IconBox>
                            <h1>{donatePoint}점 기부하기</h1>
                        </>
                    ): (
                        <h2>🤗  10000점부터 기부가 가능해요!</h2>
                    )}
                </InformPointBox>
                <Link to={'https://www.nanumkorea.go.kr/main.do'}>
                    <AnotherDonation>
                        <h2>
                            기부 단체 알아보기 ▶
                        </h2>
                    </AnotherDonation>
                </Link>
                {isThanksModalOpen ? <InformThanks onChange={handleOpenInformation}/>: null}
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
    h2{
        color: ${({theme})=>theme.colors.fontColor};
        font-weight: bold;
        font-size: 13px;
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


