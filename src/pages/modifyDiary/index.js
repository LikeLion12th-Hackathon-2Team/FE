import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
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
import instance from "../../api/axios";
import { getCookie } from "../../auth/cookie";

function ModifyDiary() {
  const accessToken = getCookie("accessToken");
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state || { dailyData: {} };
  const { dailyData: initialDailyData } = locationState;

  const [dailyData, setDailyData] = useState(initialDailyData);
  const [inputData, setInputData] = useState({
    isRepresentative: dailyData.isRepresentative,
    isShared: dailyData.isShared,
    isFavorite: dailyData.isFavorite,
    diaryTitle: dailyData.diaryTitle || "",
    sodaIndex: dailyData.sodaIndex || "",
    content: dailyData.content || "",
    purpose: dailyData.purpose || "",
  });

  useEffect(() => {
    if (dailyData) {
      setInputData({
        isRepresentative: dailyData.isRepresentative,
        isShared: dailyData.isShared,
        isFavorite: dailyData.isFavorite,
        diaryTitle: dailyData.diaryTitle || "",
        sodaIndeㅌ: dailyData.sodaIndex || "",
        content: dailyData.content || "",
        purpose: dailyData.purpose || "",
      });
    }
  }, [dailyData]);

  useEffect(() => {
    console.log("dailyData:", dailyData);
    console.log("inputData:", inputData);
  }, [dailyData, inputData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: name === "sodaIndex" ? Number(value) : value,
    }));
  };

  const [pinned, setPinned] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const [switched, setSwitched] = useState(false);
  const [selectedStamp, setSelectedStamp] = useState(null);

  const handlePinClick = () => {
    setPinned(!pinned);
    setInputData((prevData) => ({
      ...prevData,
      isRepresentative: !pinned,
    }));
    console.log("📍 Pin toggled", pinned);
  };

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
    setInputData((prevData) => ({
      ...prevData,
      isFavorite: !bookmarked,
    }));
    console.log(" 📚", bookmarked);
  };

  const handleSwitchClick = () => {
    setSwitched(!switched);
    setInputData((prevData) => ({
      ...prevData,
      isShared: !switched,
    }));
    console.log(" 🍀", switched);
  };

  const handleDailyModifySubmit = async () => {
    try {
      const response = await instance.put(
          `/api/diary/${dailyData.diaryId}`,
          inputData,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
      );
      console.log("Diary Modified: ", response.data);
      setDailyData(response.data);
      navigate(-1); // 이전 페이지로 이동
      alert("수정 되었습니다.");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("수정 권한이 없습니다!");
      } else {
        console.error("Error deleting comment: ", error);
      }
    }
  };

  const handleDailyDeleteSubmit = async () => {
    try {
      const response = await instance.delete(
          `/api/diary/${dailyData.diaryId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
      );
      console.log("Diary Deleted: ", response.data);
      console.log("Diary Deleted: ", dailyData.diaryId);
      navigate(-1);
      alert("삭제 되었습니다.");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("삭제 권한이 없습니다!");
      } else {
        console.error("Error deleting comment: ", error);
      }
    }
  };

  const todayDate = dailyData.diaryDate
      ? `${dailyData.diaryDate.split("-")[1]}월 ${
          dailyData.diaryDate.split("-")[2]
      }일`
      : "날짜 없음";

  const handleStampClick = (stampColor) => {
    setSelectedStamp(stampColor);
    setInputData((prevData) => ({
      ...prevData,
      purpose: stampColor,
    }));
    console.log(stampColor, " 🛑");
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
              <IconDiv onClick={handlePinClick}>
                {inputData.isRepresentative ? <PinImg /> : <PinImgNone />}
              </IconDiv>
              <IconDiv onClick={() => handleBookmarkClick(0)}>
                {inputData.isFavorite ? <BookmarkImg /> : <BookmarkImgNone />}
              </IconDiv>
              <IconDiv onClick={() => handleSwitchClick(0)}>
                {inputData.isShared ? <PublicSwitch /> : <PrivateSwitch />}
              </IconDiv>
            </DiaryHeader>
            <input
                type="text"
                name="diaryTitle"
                value={inputData.diaryTitle}
                onChange={handleChange}
                placeholder="제목을 입력하세요"
            />
            <hr style={{ height: "2px" }} />
            <Row>
              <p>오늘의 하루 탄산지수 :</p>
              <div>
                <input
                    type="number"
                    name="sodaIndex"
                    value={inputData.sodaIndex}
                    onChange={handleChange}
                    style={{ width: "60px", padding: "5px", outline: "none" }}
                />
                <p>%</p>
              </div>
            </Row>
            <hr />
            <DiaryText>
            <textarea
                name="content"
                value={inputData.content}
                onChange={handleChange}
                placeholder="일기를 입력하세요"
                style={{
                  width: "100%",
                  height: "100px",
                  padding: "5px",
                  resize: "none",
                  fontFamily: "Ownglyph_meetme-Rg",
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
              <Btn onClick={handleDailyDeleteSubmit}>삭제하기</Btn>
              <Btn onClick={handleDailyModifySubmit}>수정하기</Btn>
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
    margin: 0;
    color: ${({ theme }) => theme.colors.fontColor};
    font-family: "Ownglyph_meetme-Rg";
  }
  p {
    font-size: 20px;
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
