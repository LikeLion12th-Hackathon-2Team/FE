import styled from "styled-components";
import {MyDonationListIcon, WonIcon} from "../icons/mypageIcons";

function MyDonationList() {
    return (
        <>
            <Wrapper>
                <div>
                    <TitleText>
                        <IconBox>
                            <MyDonationListIcon/>
                        </IconBox>
                        <h1>나의 기부 내역</h1>
                    </TitleText>
                </div>
                <ListItemBox>
                    <TimeStamp>2024 07. 19 20:59:37</TimeStamp>
                    <DonationItems>
                        <GroupName>꽃동네</GroupName>
                        <Amount>
                            <IconBox>
                                <WonIcon/>
                            </IconBox>
                            <h1>
                                2000
                            </h1>
                        </Amount>
                    </DonationItems>
                </ListItemBox>
            </Wrapper>
        </>

    );
}

export default MyDonationList;

const Wrapper = styled.div`
    height: 320px;
    width: ${({theme}) => theme.tablet};
    background:${({theme}) => theme.colors.white}; 
    border-radius: 10px;
    color: ${({theme}) => theme.colors.fontColor};
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 324px;
    }
`

const TitleText = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 10px 0;
    margin: 10px;
    border-bottom: 1px solid ${({theme})=>theme.backgroundColors.borderBottom};
    h1{
        padding: 5px;
        font-weight: bold;
        font-size: 20px;
    }
`

const IconBox = styled.div`
    margin: 0 5px;
`

const ListItemBox = styled.div`
    padding: 10px;
`
const TimeStamp = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0 10px;
    color: ${({theme})=>theme.colors.timeColor};
`

const DonationItems = styled.div`
    padding: 0 10px;
    margin: 10px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid ${({theme})=>theme.backgroundColors.borderBottom};

`
const GroupName = styled.div`
    display: flex;
    justify-content: flex-start;
    color: ${({theme})=>theme.colors.fontColor};
    font-weight: bold;
    font-size: 17px;
    padding-bottom: 20px;
`
const Amount =styled.div`
    display: flex;
    justify-content: flex-end;
    color: ${({theme})=>theme.colors.red};
    h1{
        font-weight: bold;
        font-size: 20px;
    }
    
`
