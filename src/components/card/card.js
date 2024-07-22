import React from "react";
import styled from "styled-components";
import {
  PinImg,
  BookmarkImg,
  PublicSwitch,
  Stamp,
  More,
} from "../../components/icons/cardIcons";

function Card({ dailyData, comments }) {
  return (
    <Diary>
      <DiaryHeader>
        <PinImg />
        <BookmarkImg />
        <PublicSwitch />
      </DiaryHeader>
      <p style={{ marginTop: "10px" }}>{dailyData.title}</p>
      <hr style={{ height: "2px" }} />
      <Row>
        <p>오늘의 하루 탄산지수: {dailyData.percent}</p>
        <p>{dailyData.time}</p>
      </Row>
      <hr />
      <DiaryText>
        <p>{dailyData.content}</p>
      </DiaryText>
      <hr />
      <Row>
        <p style={{ fontSize: "20px" }}>당신을 위한 소다</p>
        <Stamp />
      </Row>
      <hr />
      <DiaryText>
        <p>{dailyData.advice}</p>
      </DiaryText>
      <hr />
      <Visible>
        <More />
        <hr />
        <div>
          <CommentWrite placeholder="댓글을 입력해주세요" />
          <Btn>작성</Btn>
        </div>
        {comments.map((comment, index) => (
          <>
            <Comment key={index}>{comment}</Comment>
          </>
        ))}
      </Visible>
    </Diary>
  );
}
export default Card;

const Diary = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme.backgroundColors.cardbackgroundColor};
  p {
    font-family: "Ownglyph_meetme-Rg";
    font-size: 20px;
    color: ${({ theme }) => theme.colors.fontColor};
  }
  hr {
    margin: 10px 0;
    border: 0;
    background-color: black;
    height: 1px;
  }
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

const Visible = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  flex-direction: column;
  div {
    display: flex;
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.card.btnColor};
    border-radius: 10px;
    width: 100%;
    justify-content: space-between;
  }
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

const Btn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 10px;
  width: 40px;
  background-color: ${({ theme }) => theme.card.btnColor};
`;

const Comment = styled.div`
  flex-direction: column;
  margin-top: 10px;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 15px;
  color: black;
`;
