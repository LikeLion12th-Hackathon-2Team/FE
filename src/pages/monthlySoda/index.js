import styled from "styled-components";
import Calendar from "react-calendar";
import {useEffect, useState} from "react";
import {EmptySoda, FullSoda, HalfSoda, Soda_25per, Soda_75per} from "../../components/icons/monthlyIcons";
import {useNavigate} from "react-router-dom";
import Header from "../../components/common/Header";
import Menubar from "../../components/common/Menubar";
import instance from "../../api/axios";
import {getCookie} from "../../auth/cookie";
function MonthlySoda() {
    const [value, onChange] = useState(new Date());
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const accessToken = getCookie('accessToken')
    const [year, setYear] = useState(currentYear)
    const [data, setData] = useState({});
    const testData = {1: 25, 2: 100, 3: 50, 4: 75, 5: 25, 6: 100, 7: 75, 8:100, 9: 50, 10: 25, 11: 75, 12: 0}
    const tileContent = ({ date, view }) => {
        if (view === 'year') {
            const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
            const value = data[month];

            if (date.getFullYear() === year) {
                if (value === 100) {
                    return (
                        <IconBox className="current-month">
                            <FullSoda />
                        </IconBox>
                    );
                } else if (value === 75) {
                    return (
                        <IconBox className="current-month">
                            <Soda_75per/>
                        </IconBox>
                    );
                } else if (value === 50) {
                    return (
                        <IconBox className="current-month">
                            <HalfSoda/>
                        </IconBox>
                    );
                }
                else if (value === 25) {
                    return (
                        <IconBox className="current-month">
                            <Soda_25per/>
                        </IconBox>
                    );
                }
                else if (value === 0) {
                    return (
                        <IconBox className="current-month">
                            <EmptySoda/>
                        </IconBox>
                    );
                }
            }
        }
        return (
            <IconBox className="current-month">
                <EmptySoda/>
            </IconBox>
        )
    };


const handleMonthClick = (date) => {
        if (date instanceof Date) {
            const month = date.getMonth() + 1; // months are 0-indexed
            const year = date.getFullYear();
            navigate(`/calender/date/${year}/${month}`);
        }
    }

    const getDateData = async (selectedYear)=>{
        try{
            const response = await  instance.get(`/api/diary/yearly-diaries/${selectedYear}`,{
                headers:{
                    Authorization:` Bearer ${accessToken}`
                }
            })
            console.log(selectedYear);
            console.log('response:', response.data);
            setData(response.data)

        }catch (e){
            console.log('error:', e);
        }
    }

    useEffect(() => {
        getDateData(year);
    }, [year]);

    const handleYearChange = ({ activeStartDate }) => {
        setYear(activeStartDate.getFullYear());
    };


    return (
        <>
            <Header/>
            <Wrapper>
                <Container>
                    <CalendarBox>
                        <Calendar
                            onChange={onChange}
                            value={value}
                            view="year"
                            tileContent={tileContent}
                            onClickMonth={handleMonthClick}
                            onActiveStartDateChange={handleYearChange}
                        />
                    </CalendarBox>
                </Container>
            </Wrapper>
            <Menubar/>
        </>

    );
}

export default MonthlySoda;

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 70px;
    background :linear-gradient(${({theme}) => theme.backgroundColors.mainColor} 25%, white 100%);
    display: flex;
    justify-content: center;
    //height: 100vh;
`

const Container = styled.div`
    //padding: 20px;
    text-align: center;
    span{
        font-size: 45px;
        color: ${({theme})=>theme.colors.white};
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: ${({theme}) => theme.backgroundColors.borderDark};
        @media (max-width: ${({theme}) => theme.mobile}) {
            font-size: 40px;
            -webkit-text-stroke-width: 2.5px;
            -webkit-text-stroke-color: ${({theme}) => theme.backgroundColors.borderDark};

        }
        
    }
    
`
const CalendarBox = styled.div`
    margin: auto;
    height: 100vh;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: ${({theme}) => theme.tablet};
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 340px;
    }
    
    .react-calendar {
        background: none;
        border: none;
        width: 100%;
        line-height: 40px;
        font-family: 'LOTTERIACHAB';
        &:hover{
            background: none;
        }
        &:focus{
            background: none;
        }
    }
    
    .react-calendar__navigation {
        justify-content: center;
        
    }
    

// 달력 네비게이션 CSS
    .react-calendar__navigation button {
        padding: 0 6px;
        font-size: 40px;
        font-family: 'LOTTERIACHAB';
        color: white;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: ${({theme}) => theme.backgroundColors.borderDark};
        &:hover{
            background: none;
        }
        &:focus{
            background: none;
        }
        @media (min-width: ${({theme}) => theme.tablet}) {
            padding: 20px 30px; /* Increase padding for larger screens */
        
        }
        
    }
    
    .react-calendar__year-view__months__month {
        color: white;
        font-size: 30px;
        display: grid;
        padding: 20px;
        font-family: 'LOTTERIACHAB';
        &:hover{
            background: none;
            border-radius: 20px;
            border: solid 3px ;
        }
        &:focus{
            background: none;
        }
    }
    
  
    .react-calendar__tile {
        border-radius: 20px;
        
    }
    .react-calendar__tile--now {
        background:none;
        border-radius: 20px;
        //background: ${({theme})=>theme.colors.white};
        border: 4px solid ${({theme})=>theme.backgroundColors.borderDark} ;
        //오늘날짜 글씨 바꾸기
        abbr {
            //color: ${({theme})=>theme.backgroundColors.borderDark};
        }
    }
`

const IconBox =styled.div`
    display: flex;
    justify-content: center;
`

