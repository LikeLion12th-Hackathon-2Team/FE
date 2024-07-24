import styled from "styled-components";
import Calendar from "react-calendar";
import {useState} from "react";
import {EmptySoda} from "../../components/icons/monthlyIcons";
import {useNavigate} from "react-router-dom";
function MonthlySoda() {
    const [value, onChange] = useState(new Date());
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    // tileContent :월별 칸에 보여지는 콘텐츠
    const tileContent = ({ date, view }) => {
        if (view === 'year'&& date.getFullYear() === currentYear && date.getMonth() === currentMonth) {
            return (
                <CurrentMonthIconBox className="current-month">
                    <EmptySoda />
                </CurrentMonthIconBox>
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
            navigate(`/date/${year}/${month}`);
        }
    }

    return (
        <>
            <Wrapper>
                <Container>
                    {/*<h1>2024 소다</h1>*/}
                    {/*<span>2024 소다</span>*/}
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
        </>

    );
}

export default MonthlySoda;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    background :linear-gradient(${({theme}) => theme.backgroundColors.mainColor} 25%, white 100%);
`

const Container = styled.div`
    padding: 20px;
    text-align: center;
    h1{
        padding: 20px;
        //font-family: 'LOTTERIACHAB';
        font-size: 40px;
        color: ${({theme})=>theme.colors.white};
        text-shadow: 5px 5px ${({theme}) => theme.backgroundColors.borderDark} ;
    }
    span{
        font-size: 45px;
        //font-family: 'LOTTERIACHAB';
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
    
    //1월별
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
        height: 80px;
        width: 100%;
    }
   
    /* 네비게이션 가운데 정렬 */
    .react-calendar__navigation {
        justify-content: center;
    }
    // 네비게이션 사이 간격 줄임 
    .react-calendar__navigation__label {
        flex-grow: 0 !important;
    }
    
// 달력 네비게이션 CSS
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
    
    .react-calendar__year-view__months__month {
        color: white;
        font-size: 30px;
        display: grid;
        padding: 20px;
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
        //background: none;
        border-radius: 20px;
        
    }
    
`

const IconBox =styled.div`
    display: flex;
    justify-content: center;
`

//오늘 날짜
const CurrentMonthIconBox =styled.div`
    display: flex;
    justify-content: center;
    //padding: 10px;

`