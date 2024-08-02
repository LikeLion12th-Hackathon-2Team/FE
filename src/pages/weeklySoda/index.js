import styled from "styled-components";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { EmptySoda } from "../../components/icons/weeklyIcons";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import Menubar from "../../components/common/Menubar";

function WeeklySoda() {
  const { year, month } = useParams();
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

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

  const handleDateClick = (date) => {
    if (date instanceof Date) {
      const day = date.getDate();
      const month = date.getMonth() + 1; // months are 0-indexed
      const year = date.getFullYear();
      navigate(`/detail/date/${year}/${month}/${day}`);
    }
  };

  return (
    <>
      <Header />
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
              onClickDay={handleDateClick}
            />
          </CalendarBox>
        </Container>
      </Wrapper>
      <Menubar />
    </>
  );
}

export default WeeklySoda;

const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 80px;
  background: white;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  text-align: center;
  span {
    font-size: 45px;
    color: ${({ theme }) => theme.colors.white};
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: ${({ theme }) =>
      theme.backgroundColors.borderDark};
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 35px;
      -webkit-text-stroke-width: 2.5px;
      -webkit-text-stroke-color: ${({ theme }) =>
        theme.backgroundColors.borderDark};
    }
  }
`;
const CalendarBox = styled.div`
  margin: auto;
  height: 100vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: ${({ theme }) => theme.tablet};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 340px;
  }

  //전체 틀
  .react-calendar {
    background: none;
    border: none;
    width: 100%;
    line-height: 40px;
    font-family: "LOTTERIACHAB";
    &:hover {
      background: none;
    }
    &:focus {
      background: none;
    }
  }

  .react-calendar__navigation {
    //width: 100%;
    justify-content: center;
  }
  //네비게이션 폰트 설정
  .react-calendar__navigation button {
    //padding: 10px 0;
    padding: 20px 4px 10px 4px;
    font-size: 30px;
    font-family: "LOTTERIACHAB";
    color: white;
    -webkit-text-stroke-width: 2.5px;
    -webkit-text-stroke-color: ${({ theme }) =>
      theme.backgroundColors.borderDark};
    &:hover {
      background: none;
    }
    &:focus {
      background: none;
    }
    @media (min-width: ${({ theme }) => theme.tablet}) {
      padding: 20px 30px; /* Increase padding for larger screens */
      -webkit-text-stroke-width: 3px;
      font-size: 40px;
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
    &:hover {
      background: none;
    }
    &:focus {
      background: none;
    }
  }
  .react-calendar__tile--now {
    background: none;
    border-radius: 20px;
    background: ${({ theme }) => theme.backgroundColors.borderColor};
    //오늘날짜 글씨 바꾸기
    abbr {
    }
  }

  ///* 년/월 상단 네비게이션 칸 크기 줄이기 */
  //.react-calendar__navigation__label {
  //    flex-grow: 0 !important;
  //}
  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: center;
  }

  /* 요일 스타일 */
  .react-calendar__month-view__weekdays__weekday abbr {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.dailyColor};
    font-size: 30px;
    background: none;
    padding-top: 0;
  }

  /* 날짜의 글자 스타일 */
  .react-calendar__month-view__days__day-names,
  .react-calendar__month-view__days__day {
    font-family: "LOTTERIACHAB";
    color: ${({ theme }) => theme.colors.white};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.dailyColor};
    font-size: 15px;
    text-align: center;
    padding: 10px;
  }

  .react-calendar__tile:enabled:hover {
    background: none;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.backgroundColors.borderColor};
  }

  .react-calendar__tile:enabled:focus {
    background: ${({ theme }) => theme.backgroundColors.borderColor};
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.colors.fontBorder};
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
`;
