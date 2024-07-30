import styled from "styled-components";
import Calendar from "react-calendar";
import {useState} from "react";
import {EmptySoda, FullSoda} from "../../components/icons/monthlyIcons";
import {useNavigate} from "react-router-dom";
import Header from "../../components/common/Header";
import Menubar from "../../components/common/Menubar";
function MonthlySoda() {
    const [value, onChange] = useState(new Date());
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    
    // tileContent :월별 칸에 보여지는 콘텐츠
    const tileContent = ({ date, view }) => {

        if (view === 'year'&& date.getFullYear() === currentYear && date.getMonth() === currentMonth) {
            console.log('view:',view );
            console.log(date.getFullYear(), currentYear);
            return (
                <IconBox className="current-month">
                    <FullSoda />
                </IconBox>
            );
        }
            return (

                <IconBox>
                    <EmptySoda/>
                </IconBox>
               );
    };

    const handleMonthClick = (date) => {
        if (date instanceof Date) {
            const month = date.getMonth() + 1; // months are 0-indexed
            const year = date.getFullYear();
            navigate(`/calender/date/${year}/${month}`);
        }
    }

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
                            // tileDisabled={({ view }) => view === 'month'} // 연간 보기에서 월 선택 비활성화
                            tileContent={tileContent}
                            onClickMonth={handleMonthClick}
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

// //오늘 날짜
// const CurrentMonthIconBox =styled.div`
//     display: flex;
//     justify-content: center;
//     //padding: 10px;
//
// `