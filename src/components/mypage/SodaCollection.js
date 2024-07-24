import styled from "styled-components";
import {DropOutPinIcon, SodaCollectionIcon} from "../icons/mypageIcons";

function SodaCollection() {
    return (
        <>
            <Wrapper>
                <TitleGotoSoDa>
                    <IconBox>
                        <SodaCollectionIcon/>
                    </IconBox>
                    <h1>소다 모음집 바로가기</h1>
                </TitleGotoSoDa>
                <BtnBox>
                    <GotoBtn>옆집 소다 보러가기</GotoBtn>
                </BtnBox>
                <BtnBox>
                    <GotoBtn>힐링 소다 모이보기</GotoBtn>
                </BtnBox>
                <BtnBox>
                    <LogoutBtn>로그아웃</LogoutBtn>
                </BtnBox>
                <InformDropOut>
                    <IconBox>
                        <DropOutPinIcon/>
                    </IconBox>
                    <span>
                    탈퇴 버튼을 누르면 계정은 삭제 되며 복구되지 않습니다.
                    </span>
                </InformDropOut>
                <DropOut>
                    회원 탈퇴
                </DropOut>
            </Wrapper>
        </>

    );
}

export default SodaCollection;

const Wrapper = styled.div`
    margin-top: 20px;
    height: 320px;
    width: ${({theme}) => theme.tablet};
    background:${({theme}) => theme.colors.white}; 
    border-radius: 10px;
    color: ${({theme}) => theme.colors.fontColor};
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 324px;
    }
`

const TitleGotoSoDa = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    h1{
        font-weight: bold;
        font-size: 20px;
    }
`

const IconBox = styled.div`
    margin: 0 10px;
`

const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    
`

const GotoBtn = styled.div`
    width: 90%;
    padding: 12px;
    background:${({theme}) => theme.backgroundColors.btnColor};
    border-radius: 10px;
    color: ${({theme}) => theme.colors.fontColor};
    height: 39px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    &:hover{
        background:${({theme}) => theme.colors.white};
        border: solid 2px ${({theme}) => theme.backgroundColors.borderColor};
        padding: 11px;
    }
    
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 290px;
    }
`
const LogoutBtn = styled.div`
    width: 50%;
    padding: 12px;
    background:${({theme}) => theme.backgroundColors.btnColor};
    border-radius: 10px;
    height: 39px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    &:hover{
        background:${({theme}) => theme.colors.white};
        border: solid 2px ${({theme}) => theme.backgroundColors.borderColor};
        padding: 11px;
    }
    
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 180px;
    }
`

const InformDropOut = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    padding-top: 20px;
    span{
        padding-top: 5px;
        font-size: 10px;
    }
`

const DropOut = styled.div`
    font-size: 12px;
    font-weight: bold;
`