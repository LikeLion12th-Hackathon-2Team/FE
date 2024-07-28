import React, { useState } from "react";
import styled from "styled-components";
import {
  PinImg,
  BookmarkImg,
  PublicSwitch,
  Stamp,
  Stampred,
  Stampblue,
  Stampgreen,
  Stampyellow,
} from "../../components/icons/cardIcons";
import Header from "../../components/common/Header";
import Menubar from "../../components/common/Menubar";

function AddDiary() {
  const [inputData, setInputData] = useState({
    title: "",
    carbonationIndex: "",
    diaryText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <Wrapper isTall={true}>
        <Title>소다쓰기</Title>
        <Diary>
          <DiaryHeader>
            <PinImg />
            <BookmarkImg />
            <PublicSwitch />
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
              <Stampred />
              <Stampyellow />
              <Stampgreen />
              <Stampblue />
            </StampWrapper>
          </DiaryText>
          <hr />
          <ButtonContainer>
            <Btn>작성완료</Btn>
          </ButtonContainer>
        </Diary>
      </Wrapper>
      <Menubar />
    </>
  );
}

export default AddDiary;

const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 70px;
  background: linear-gradient(
    ${({ theme }) => theme.backgroundColors.mainColor} 25%,
    white 100%
  );
  height: ${(props) => (props.isTall ? "auto" : "100vh")};
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
  margin: 20px;
  color: white;
  font-size: 3em;
  text-align: center;
  text-shadow: 4px 4px ${({ theme }) => theme.backgroundColors.borderDark};
  font-family: "LOTTERIACHAB";
`;

const Diary = styled.div`
  display: flex;
  flex-direction: column;
  // padding: 10px;
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
  svg {
  }
`;

const Btn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px; /* 버튼 크기 조정 */
  border-radius: 5px;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 16px; /* 버튼 글씨 크기 조정 */
  width: 120px; /* 버튼 크기 조정 */
  background-color: ${({ theme }) => theme.card.btnColor};
  color: white; /* 버튼 글씨 색상 */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const CommentWrite = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 5px;
  border: none;
  border-radius: 4px;
`;

const Comment = styled.div`
  flex-direction: column;
  margin-top: 10px;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 15px;
  color: black;
`;
