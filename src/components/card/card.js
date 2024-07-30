import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  PinImg,
  PinImgNone,
  BookmarkImg,
  BookmarkImgNone,
  PublicSwitch,
  PrivateSwitch,
  Stamp,
  More,
  Modify,
} from "../../components/icons/cardIcons";

function Card({
  dailyData,
  // comments,
  // isPinned,
  // onPinClick,
  // isBookmarked,
  // onBookmarkClick,
  // isSwitched,
  // onSwitchClick,
}) {
  const [cardColor, setCardColor] = useState("#96D3FF");
  const [isShowComments, setIsShowComments] = useState(false);

  const handleMoreClick = () => {
    setIsShowComments(!isShowComments);
    setCardColor(cardColor === "#96D3FF" ? "#8A8A8A" : "#96D3FF");
    console.log("handleMoreClick 실행중");
  };

  return (
    <Diary>
      {/* 여기 다이어리 헤더 들어감 */}
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
        <span>당신을 위한 소다</span>
        <Stamp />
      </Row>
      <hr />
      <DiaryText>
        <p>{dailyData.advice}</p>
      </DiaryText>
      <hr />
      <Row>
        <MoreItems onClick={handleMoreClick}>
          <More cardColor={cardColor} />
        </MoreItems>
        <ModifyIcon />
      </Row>
      {isShowComments ? (
        <>
          <hr />
          <CommentsSection>
            <div>
              <CommentWrite placeholder="댓글을 입력해주세요" />
              <Btn>작성</Btn>
            </div>
            {dailyData.comments.map((comment, index) => (
              <Comment key={index}>{comment}</Comment>
            ))}
          </CommentsSection>
        </>
      ) : null}
    </Diary>
  );
}

export default Card;

const Diary = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  // padding: 30px 30px 20px 30px;
  // border-radius: 8px;
  background-color: ${({ theme }) =>
    theme.backgroundColors.cardbackgroundColor};
  p {
    font-family: "Ownglyph_meetme-Rg";
    font-size: 30px;
    color: ${({ theme }) => theme.colors.fontColor};
  }
  hr {
    margin: 30px 0;
    border: 0;
    background-color: black;
    height: 1px;
  }
  // margin: 20px;
  // width: ${({ theme }) => theme.tablet};
  border-radius: 13px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 304px;
    padding: 10px;
    p {
      font-size: 20px;
    }
    hr {
      margin: 10px 0;
    }
  }
`;

// const DiaryHeader = styled.div`
//   display: flex;
//   background-color: ${({ theme }) => theme.backgroundColors.cardHeaderColor};
//   border-radius: 8px;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px;
//   width: 100%;
//   margin-bottom: 20px;
//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     justify-content: space-between;
//     padding: 5px;
//     margin-bottom: 0px;
//   }
// `;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
    margin: 0;
  }
  svg {
    cursor: pointer;
    // margin-left: auto;
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

const MoreItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ModifyIcon = styled(Modify)`
  margin-left: auto;
  margin-right: 10px;
  display: flex;
  align-items: center;
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

const CommentsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  div {
    display: flex;
    padding: 15px;
    border: 1px solid ${({ theme }) => theme.card.btnColor};
    border-radius: 10px;
    width: 100%;
    justify-content: space-between;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    div {
      padding: 5px;
    }
  }
`;

const CommentWrite = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  padding: 5px;
  border: none;
  border-radius: 4px;
  outline: none;
`;

const Btn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 20px;
  width: 80px;
  background-color: ${({ theme }) => theme.card.btnColor};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 10px;
    width: 40px;
  }
`;

const Comment = styled.div`
  flex-direction: column;
  margin-top: 10px;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 20px;
  color: black;
`;
