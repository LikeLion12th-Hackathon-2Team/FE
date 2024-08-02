import styled from "styled-components";
import {MyDonationListIcon, WonIcon} from "../icons/mypageIcons";
import instance from "../../api/axios";
import {useEffect, useState} from "react";

function MyDonationList({accessToken}) {
    const [donationData, setDonationData] = useState([])
    const getDonationDate = async ()=>{
        try{
            const response = await  instance.get('/api/donate-history/get',{
                headers:{
                    Authorization:` Bearer ${accessToken}`
                }
            })
            console.log('response:', response.data);
            setDonationData(response.data)

        }catch (e){
            console.log('error:', e);
        }
    }
    

    useEffect(() => {
        getDonationDate();
    }, []);


    const isNotEmpty = donationData.some(item =>
        item && (item.donateHistoryId !== null || item.point !== null || item.location !== null || item.userId !== null || item.createdAt !== null)
    );

    console.log('isNotEmpty:', isNotEmpty);

    return (
        <>
            <Wrapper>
                    <TitleText>
                        <IconBox>
                            <MyDonationListIcon/>
                        </IconBox>
                        <h1>나의 기부 내역</h1>
                    </TitleText>

                {isNotEmpty? (
                        donationData && donationData.map((item)=>(
                        <ListItemBox>
                        <TimeStamp>{item.createdAt}</TimeStamp>
                        <DonationItems>
                            <GroupName>{item.location}</GroupName>
                            <Amount>
                                <IconBox>
                                    <WonIcon/>
                                </IconBox>
                                <h1>
                                    {item.point}
                                </h1>
                            </Amount>
                        </DonationItems>
                    </ListItemBox>
                ))
                ):(
                    <NoDataInform>기부 내역이 없습니다. </NoDataInform>
                )}

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

const NoDataInform = styled.div`
    font-weight: bold;
    font-size: 15px;
    display: flex;
    justify-content: center;
  

`
