import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Stamp,
  More,
  Modify,
  CommentDelete,
  CommentModify,
} from "../../components/icons/cardIcons";

function Card({ dailyData }) {
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

  return (
    <Diary>
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
        <Link to="/modifydiary" state={{ dailyData }}>
          <ModifyIcon />
        </Link>
      </Row>
      {isShowComments ? (
        <>
          <hr />
          <CommentsSection>
            <div>
              <CommentWrite
                value={newComment}
                onChange={handleNewCommentChange}
                placeholder="댓글을 입력해주세요"
              />
              <Btn onClick={handleAddComment}>작성</Btn>
            </div>
            {comments.map((comment, index) => (
              <Comment key={index}>
                {editableCommentIndex === index ? (
                  <div>
                    <CommentWrite
                      value={editedCommentText}
                      onChange={handleCommentChange}
                      placeholder="수정할 댓글을 입력하세요"
                    />
                    <Btn onClick={() => handleCommentSave(index)}>저장</Btn>
                  </div>
                ) : (
                  <>
                    <p>{comment}</p>
                    <div>
                      <CommentDelete
                        onClick={() => handleCommentDelete(index)}
                      />
                      <CommentModify
                        onClick={() => handleCommentModifyClick(index, comment)}
                      />
                    </div>
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
  flex-direction: row;
  margin-top: 10px;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 20px;
  color: black;
  width: 100%;
  align-items: center;
  div {
    display: flex;
    justify-content: space-around;
    padding: 5px;
    border: none;
    width: 100px;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 10px;
    width: 40px;
  }
`;
