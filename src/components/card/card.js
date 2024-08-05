import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  More,
  Modify,
  CommentLogo,
  Stampred,
  Stampblue,
  Stampgreen,
  Stampyellow,
} from "../../components/icons/cardIcons";
import instance from "../../api/axios";
import { getCookie } from "../../auth/cookie";

function Card({ dailyData, CommentWriteData }) {
  // const [inputComment,setInputComment] = useState([]);

  const [cardColor, setCardColor] = useState("#96D3FF");
  const [isShowComments, setIsShowComments] = useState(false);
  const [editableCommentIndex, setEditableCommentIndex] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState("");
  const [comments, setComments] = useState(dailyData.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleMoreClick = () => {
    setIsShowComments(!isShowComments);
    setCardColor(cardColor === "#96D3FF" ? "#8A8A8A" : "#96D3FF");
  };

  const handleCommentModifyClick = (index, text) => {
    setEditableCommentIndex(index);
    setEditedCommentText(text);
  };

  const handleCommentSave = (index) => {
    const updatedComments = comments.map((comment, i) =>
      i === index ? editedCommentText : comment
    );
    setComments(updatedComments);
    setEditableCommentIndex(null);
    setEditedCommentText("");
  };

  const handleCommentChange = (e) => {
    setEditedCommentText(e.target.value);
  };

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleCommentDelete = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const stamps = [
    { color: "red", Component: Stampred },
    { color: "yellow", Component: Stampyellow },
    { color: "green", Component: Stampgreen },
    { color: "blue", Component: Stampblue },
  ];

  const StampWrapper = ({ purpose }) => {
    const stamp = stamps.find((stamp) => stamp.color === purpose);
    if (!stamp) {
      return null;
    }
    const StampComponent = stamp.Component;
    return <StampComponent />;
  };

  const updatedAt = dailyData.updatedAt ? dailyData.updatedAt.split("T")[1] : "정보 없음";

  return (
    <Diary>
      <p style={{ marginTop: "10px" }}>{dailyData.diaryTitle}</p>
      <hr style={{ height: "2px" }} />
      <Row>
        <p>오늘의 하루 탄산지수: {dailyData.sodaIndex}%</p>
        <p>{updatedAt}</p>
      </Row>
      <hr />
      <DiaryText>
        <p>{dailyData.content}</p>
      </DiaryText>
      <hr />
      <Row>
        <span>당신을 위한 소다</span>
        <StampWrapper purpose={dailyData.purpose} />
      </Row>
      <hr />
      <DiaryText>
        <p>{dailyData.gptComment}</p>
      </DiaryText>
      <hr />
      <Row>
        <MoreItems onClick={handleMoreClick}>
          <More cardColor={cardColor} />
        </MoreItems>
        <Link to="/modifydiary" state={{ dailyData }}>
          <ModifyIcon />
        </Link>
      </Row>
      {isShowComments ? (
        <>
          <hr />
          <CommentsSection>
            {CommentWriteData && (
              <CommentWrapper>
                <CommentWrite
                  value={newComment}
                  onChange={handleNewCommentChange}
                  placeholder="댓글을 입력해 주세요."
                />
                <Btn onClick={handleAddComment}>작성</Btn>
              </CommentWrapper>
            )}
            {comments.map((comment, index) => (
              <Comment key={index}>
                {editableCommentIndex === index ? (
                  <CommentWrapper>
                    <CommentWrite
                      value={editedCommentText}
                      onChange={handleCommentChange}
                      placeholder="수정할 댓글을 입력해 주세요."
                    />
                    <Btn onClick={() => handleCommentSave(index)}>저장</Btn>
                  </CommentWrapper>
                ) : (
                  <>
                    <CommentWrapper>
                      <CommentMenu>
                        <div>
                          <CommentLogo />
                          <span>l_yerimi</span>
                        </div>
                        <p>{comment}</p>
                        <div>
                          <CommentBtn
                            onClick={() =>
                              handleCommentModifyClick(index, comment)
                            }
                          >
                            수정하기
                          </CommentBtn>
                          <CommentBtn
                            onClick={() => handleCommentDelete(index)}
                          >
                            | 삭제하기
                          </CommentBtn>
                          <CommentBtn>| 채택하기</CommentBtn>
                        </div>
                      </CommentMenu>
                    </CommentWrapper>
                  </>
                )}
              </Comment>
            ))}
          </CommentsSection>
        </>
      ) : null}
    </Diary>
  );
}

export default Card;
// Styled components

const Diary = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
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
  @media (max-width: ${({ theme }) => theme.mobile}) {
    // div {
    //   padding: 5px;
    // }
  }
`;

const CommentWrapper = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.card.btnColor};
  border-radius: 10px;
  width: 100%;
  justify-content: row;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 5px;
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
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 20px;
  color: black;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 10px;
    // width: 40px;
  }
`;

const CommentMenu = styled.div`
  margin-left: 10px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  border: none;
  span {
    font-size: 15px;
    // margin: 10px 5px 10px 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 8px;
    // background-color: gray;
  }
  p {
    font-size: 20px;
    margin: 5px;
    // color: #848484;
  }
  div {
    display: flex;
    align-items: center;

    // justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    span {
      font-size: 15px;
      margin: 10px 5px 10px 5px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
`;
const CommentBtn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 15px;
  width: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #848484;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: auto;
  }
`;
