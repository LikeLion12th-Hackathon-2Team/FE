import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { useLocation } from "react-router-dom";
import {
  PinImg,
  PinImgNone,
  BookmarkImg,
  BookmarkImgNone,
  PublicSwitch,
  PrivateSwitch,
  Stampred,
  Stampblue,
  Stampgreen,
  Stampyellow,
} from "../../components/icons/cardIcons";
import Header from "../../components/common/Header";
import Menubar from "../../components/common/Menubar";

function ModifyDiary() {
  const location = useLocation();
  const { dailyData } = location.state || { dailyData: {} }; // 기본값 설정
  const [inputData, setInputData] = useState({
    title: dailyData.title || "",
    carbonationIndex: dailyData.percent || "",
    diaryText: dailyData.content || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const todayDate = dailyData.date || "날짜 없음";

  const [pinned, setPinned] = useState(false);
  const handlePinClick = () => {
    setPinned(!pinned);
    console.log("📍 Pin toggled");
  };

  const [bookmarkIndex, setBookmarkIndex] = useState([]);
  const handleBookmarkClick = (index) => {
    setBookmarkIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
    console.log(index, " 📚");
  };

  const [switchIndex, setSwitchIndex] = useState([]);
  const handleSwitchClick = (index) => {
    setSwitchIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
    console.log(index, "🍀");
  };

  const [selectedStamp, setSelectedStamp] = useState(null);
  const handleStampClick = (stampColor) => {
    setSelectedStamp(stampColor);
    console.log(stampColor, " 🛑");
  };

  const handleSubmit = () => {
    const diaryData = {
      ...inputData,
      pinned,
      bookmarked: bookmarkIndex,
      switched: switchIndex,
      stamp: selectedStamp,
    };
    console.log("Diary Submitted: ", diaryData);
    // 데이터 전송 로직 추가
  };

  const stamps = [
    { color: "red", Component: Stampred },
    { color: "yellow", Component: Stampyellow },
    { color: "green", Component: Stampgreen },
    { color: "blue", Component: Stampblue },
  ];

  return (
    <>
      <Header />
      <Wrapper>
        <Title>{todayDate}의 소다</Title>
        <Diary>
          <DiaryHeader>
            <IconDiv
              color={pinned ? "#C9E8FF" : "#C9E8FF"}
              onClick={handlePinClick}
            >
              {pinned ? <PinImg /> : <PinImgNone />}
            </IconDiv>
            <IconDiv
              color={bookmarkIndex.includes(0) ? "#C9E8FF" : "#C9E8FF"}
              onClick={() => handleBookmarkClick(0)}
            >
              {bookmarkIndex.includes(0) ? (
                <BookmarkImg />
              ) : (
                <BookmarkImgNone />
              )}
            </IconDiv>
            <IconDiv
              color={switchIndex.includes(0) ? "#C9E8FF" : "#C9E8FF"}
              onClick={() => handleSwitchClick(0)}
            >
              {switchIndex.includes(0) ? <PrivateSwitch /> : <PublicSwitch />}
            </IconDiv>
          </DiaryHeader>
          <input
            type="text"
            name="title"
            value={inputData.title}
            onChange={handleChange}
            placeholder="제목을 입력하세요"
          />
          <hr style={{ height: "2px" }} />
          <Row>
            <p>오늘의 하루 탄산지수 :</p>
            <div>
              <input
                type="number"
                name="carbonationIndex"
                value={inputData.carbonationIndex}
                onChange={handleChange}
                style={{ width: "60px", padding: "5px", outline: "none" }}
              />
              <p>%</p>
            </div>
          </Row>
          <hr />
          <DiaryText>
            <textarea
              name="diaryText"
              value={inputData.diaryText}
              onChange={handleChange}
              placeholder="일기를 입력하세요"
              style={{
                width: "100%",
                height: "100px",
                padding: "5px",
                resize: "none",
              }}
            ></textarea>
          </DiaryText>
          <hr />
          <Row>
            <span>소다가 필요한 이유</span>
          </Row>
          <hr />
          <DiaryText>
            <StampWrapper>
              {stamps.map(({ color, Component }) => (
                <Stamp
                  key={color}
                  color={selectedStamp === color ? "#ffffff" : "#ffffff"}
                  isSelected={selectedStamp === color}
                  onClick={() => handleStampClick(color)}
                >
                  <Component />
                </Stamp>
              ))}
            </StampWrapper>
          </DiaryText>
          <hr />
          <ButtonContainer>
            <Btn onClick={handleSubmit}>삭제하기</Btn>
            <Btn onClick={handleSubmit}>수정하기</Btn>
          </ButtonContainer>
        </Diary>
      </Wrapper>
      <Menubar />
    </>
  );
}

export default ModifyDiary;

const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 70px;
  background: linear-gradient(
    ${({ theme }) => theme.backgroundColors.mainColor} 25%,
    white 100%
  );
  height: auto; /* isTall prop 제거 */
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "LOTTERIACHAB";
  color: white;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 100vh;
  }
`;

const Title = styled.p`
  display: flex;
  color: white;
  font-size: 40px;
  padding: 20px;
  text-align: center;
  text-shadow: 4px 4px ${({ theme }) => theme.backgroundColors.borderDark};
  font-family: "LOTTERIACHAB";
`;

const Diary = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 20px 30px;
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme.backgroundColors.cardbackgroundColor};
  p {
    font-family: "Ownglyph_meetme-Rg";
    font-size: 30px;
    color: ${({ theme }) => theme.colors.fontColor};
  }
  input {
    font-family: "Ownglyph_meetme-Rg";
    font-size: 30px;
    color: ${({ theme }) => theme.colors.fontColor};
    border-width: 0;
    width: 100%;
    padding: 5px;
    margin-top: 10px;
  }
  hr {
    margin: 30px 0;
    border: 0;
    background-color: black;
    height: 1px;
  }
  margin: 20px;
  width: ${({ theme }) => theme.tablet};
  border-radius: 13px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 324px;
    padding: 10px;
    p {
      font-size: 20px;
    }
    hr {
      margin: 10px 0;
    }
    input {
      font-size: 20px;
    }
  }
`;

const DiaryHeader = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColors.cardHeaderColor};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: space-between;
    padding: 5px;
    margin-bottom: 0px;
  }
`;

const IconDiv = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  span {
    font-size: 30px;
    font-weight: regular;
    margin: 0;
    color: ${({ theme }) => theme.colors.fontColor};
    font-family: "Ownglyph_meetme-Rg";
  }
  p {
    font-size: 20px;
    font-weight: regular;
    margin: 0 20px 0 0;
  }
  svg {
    cursor: pointer;
    margin-left: auto;
  }
  div {
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
  }
  div input {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    span {
      font-size: 20px;
    }
    p {
      font-size: 12px;
    }
  }
`;

const DiaryText = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 23px;
    font-weight: regular;
    margin: 10px;
    line-height: 2;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    p {
      font-size: 14px;
      line-height: 1;
    }
  }
`;

const StampWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  svg {
    cursor: pointer;
  }
`;

const grow = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

// 스타일드 컴포넌트 정의
const Stamp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ color }) => color};
  width: 90px
  height: 90px;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    animation: ${grow} 0.2s forwards;
    transition: transform 0.2s;
  }
  svg {
    width: 90px;
    height: 90px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 50px;
    height: 50px;
    svg {
      width: 50px;
      height: 50px;
    }
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      animation: ${grow} 0.2s forwards;
    `}
`;

const Btn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 16px;
  width: 120px;
  background-color: ${({ theme }) => theme.card.btnColor};
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
`;