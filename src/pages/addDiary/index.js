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
          <p>오늘의 하루 탄산지수:</p>
          <div>
            <input
              type="number"
              name="carbonationIndex"
              value={inputData.carbonationIndex}
              onChange={handleChange}
              style={{ width: "60px", padding: "5px" }}
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
            }}
          ></textarea>
        </DiaryText>
        <hr />
        <Row>
          <p style={{ fontSize: "20px" }}>소다가 필요한 이유</p>
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
  );
}

export default AddDiary;

const Wrapper = styled.div`
  background: linear-gradient(
    ${({ theme }) => theme.backgroundColors.mainColor} 0%,
    white 83%
  );
  height: ${(props) => (props.isTall ? "auto" : "100vh")};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "LOTTERIACHAB";
  color: white;
  height: 100vh;
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
  width: 300px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme.backgroundColors.cardbackgroundColor};
  p {
    font-family: "Ownglyph_meetme-Rg";
    font-size: 20px;
    color: ${({ theme }) => theme.colors.fontColor};
  }
  input {
    font-family: "Ownglyph_meetme-Rg";
    font-size: 20px;
    color: ${({ theme }) => theme.colors.fontColor};
    border-width: 0;
    width: 100%;
    padding: 5px;
    margin-top: 10px;
  }
  hr {
    margin: 10px 0;
    border: 0;
    background-color: black;
    height: 1px;
  }
  margin: 20px;
`;

const DiaryHeader = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColors.cardHeaderColor};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  p {
    font-size: 12px;
    font-weight: regular;
    margin: 0;
  }
`;

const DiaryText = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    font-weight: regular;
    margin: 10px;
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
