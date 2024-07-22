import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  PinImg,
  BookmarkImg,
  PublicSwitch,
  PrivateSwitch,
  Stamp,
} from "../../components/icons/cardIcons";

function Card({ dailyData }) {
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
