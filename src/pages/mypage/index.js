import styled from "styled-components";
import MyPoint from "../../components/mypage/MyPoint";
import SodaCollection from "../../components/mypage/SodaCollection";
import InformThanks from "../../components/modal/InformThanks";
import InformDonation from "../../components/modal/InformDonation";
import MyDonationList from "../../components/mypage/MyDonationList";
import {useState} from "react";
import Header from "../../components/common/Header";
import Menubar from "../../components/common/Menubar";

function Mypage() {
    const [isOpenInformation, setIsOpenInformation] =useState(false);
    const handleOpenDonation = ()=>{
        setIsOpenInformation(!isOpenInformation)
    }
    return (
        <>
        <Header/>
            <Wrapper>
                <Container>
                <p>My page</p>
                    <ItemBox>
                        {isOpenInformation ? (
                            <>
                                <InformDonation onChangeInformation={handleOpenDonation}/>
                                <MyDonationList/>
                            </>
                        ):(
                        <>
                            <MyPoint onChangeInformation={handleOpenDonation}/>
                            <SodaCollection/>
                        </>
                        )}

                    </ItemBox>
                </Container>
            </Wrapper>
        <Menubar/>
        </>

    );
}

export default Mypage;

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 70px;
    display: flex;
    justify-content: center;
    height: 100vh;
    background :linear-gradient(${({theme}) => theme.backgroundColors.mainColor} 25%, white 100%);
`

const Container = styled.div`
    text-align: center;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    p{
        padding-top: 5px;
        padding-bottom: 15px;
        font-family: 'LOTTERIACHAB';
        font-size: 40px;
        color: ${({theme})=>theme.colors.white};
        text-shadow: 4px 4px ${({theme}) => theme.backgroundColors.borderDark} ;
    }
  
    
`
const ItemBox=styled.div`
    margin: 10px;
    width: ${({theme}) => theme.tablet};
    background: ${({theme}) => theme.backgroundColors.pageBC};
    border-radius: 13px;
    background: ${({theme}) => theme.backgroundColors.pageBC};
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 324px;
    }


    text-align: center;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    p{
        padding: 20px;
        font-family: 'LOTTERIACHAB';
        font-size: 40px;
        color: ${({theme})=>theme.colors.white};
        text-shadow: 4px 4px ${({theme}) => theme.backgroundColors.borderDark} ;
    }
`