import styled from "styled-components";
import Calendar from "react-calendar";
import {useEffect, useState} from "react";
import {EmptySoda} from "../../components/icons/weeklyIcons";
import {useParams} from "react-router-dom";

function WeeklySoda() {
    const { year, month } = useParams();
    console.log('year:',{year},'month:',{month});
    const [date, setDate] = useState(new Date());



    useEffect(() => {
        if (year && month) {
            setDate(new Date(year, month - 1)); // month is 0-indexed
        }
    }, [year, month]);

    const onChange = (date) => {
        setDate(date);
    };

    const tileContent = ({ date, view }) => {
        return (
            <IconBox>
                <EmptySoda />
            </IconBox>
        );
    };

    const formatDay = (locale, date) => {
        return date.getDate().toString();
    };




    return (
        <>
            <Wrapper>
                <Container>
                    <CalendarBox>
                        <Calendar
                            onChange={onChange}
                            value={date}
                            view="month"
                            // tileDisabled={({ view }) => view === 'month'} // 연간 보기에서 월 선택 비활성화
                            tileContent={tileContent}
                            formatDay={formatDay}
                        />
                    </CalendarBox>
                </Container>
            </Wrapper>
        </>

    );
}

export default WeeklySoda;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    //background :linear-gradient(${({theme}) => theme.backgroundColors.mainColor} 25%, white 100%);
    background:${({theme})=>theme.colors.white};;
`

const Container = styled.div`
    padding: 20px;
    text-align: center;
    span{
        font-size: 45px;
        color: ${({theme})=>theme.colors.white};
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: ${({theme}) => theme.backgroundColors.borderDark};
    }
`
const CalendarBox = styled.div`
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin: auto;
    height: 100vh;
    width: ${({theme}) => theme.tablet};
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 324px;
        height: 100vh;
    }
    
     //전체 틀
     .react-calendar {
         background: none;
         border: none;
         width: 100%;
         //줄간격 
         line-height: 40px;
         font-family: 'LOTTERIACHAB';
         &:hover{
             background: none;
         }
         &:focus{
             background: none;
         }
         
     }
     //네비게이션 
     .react-calendar__navigation {
         height: 80px;
         width: 100%;
         justify-content: center;
      
     }
    //네비게이션 폰트 설정 
    .react-calendar__navigation button {
        padding: 10px 0;
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
    }
    .calendar-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        
    }

    .react-calendar__tile--active {
        background: none;
        &:hover{
            background: none;
        }
        &:focus{
            background: none;
        }
    }
    .react-calendar__tile--now {
        background:none;
        border-radius: 20px;
        border: 2px solid  ${({theme})=>theme.colors.fontBorder};;
        //오늘날짜 글씨 바꾸기
        abbr {
            
        }
    }


    /* 년/월 상단 네비게이션 칸 크기 줄이기 */
    .react-calendar__navigation__label {
        flex-grow: 0 !important;
    }
  

    /* 요일 스타일 */
    .react-calendar__month-view__weekdays__weekday abbr {
        color: ${({theme})=>theme.colors.white};
        text-decoration: none;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${({theme}) => theme.colors.dailyColor};
        font-size: 30px;
        background: none;
        padding-top: 0;
        
    }

    /* 날짜의 글자 스타일 */
    .react-calendar__month-view__days__day-names,
    .react-calendar__month-view__days__day {
        font-family: 'LOTTERIACHAB';
        color: ${({theme})=>theme.colors.white};
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${({theme}) => theme.colors.dailyColor};
        font-size: 15px;
        text-align: center;
        
    }

    .react-calendar__tile:enabled:hover{
        background: none;
        border-radius: 20px;
        border: 2px solid ${({theme})=>theme.backgroundColors.borderColor};
    }
    
    .react-calendar__tile:enabled:focus{
        background: ${({theme})=>theme.backgroundColors.borderColor};
        border-radius: 20px;
        //border: 2px solid  ${({theme})=>theme.colors.fontBorder};;

    }
   
`



const IconBox =styled.div`
    display: flex;
    justify-content: center;
`

const TodayIconBox =styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 20px;
    border: solid 3px ;
    background:${({theme})=>theme.backgroundColors.mainColor} ;
`