import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  const [cardColor, setCardColor] = useState("#96D3FF");
  const [isShowComments, setIsShowComments] = useState(false);
  const [editableCommentIndex, setEditableCommentIndex] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState("");
  const [comments, setComments] = useState(dailyData.commentResponses || []);
  const [newComment, setNewComment] = useState("");
  const [inputCommentData, setInputCommentData] = useState({
    content: "",
    diaryId: dailyData.diaryId,
    commentId: "",
  });

  useEffect(() => {
    if (dailyData) {
      setInputCommentData({
        content: dailyData.commentResponses.content || "",
        diaryId: dailyData.diaryId,
        commentId: dailyData.commentResponses.commentId || "",
      });
    }
  }, [dailyData]);

  const handleMoreClick = () => {
    setIsShowComments(!isShowComments);
    setCardColor(cardColor === "#96D3FF" ? "#8A8A8A" : "#96D3FF");
  };

  const handleNewCommentChange = (e) => {
    const value = e.target.value;
    setNewComment(value);
  };

  const handleAddComment = async () => {
    if (newComment.trim()) {
      const commentData = {
        content: newComment,
        diaryId: dailyData.diaryId,
      };
      try {
        const response = await instance.post(`/api/comment`, commentData, {
          headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
        });

        setComments([...comments, response.data]);
        setNewComment("");
      } catch (error) {
        console.error("Error submitting comment: ", error);
      }
    } else {
      console.log("Comment is empty!");
    }
  };

  const handleCommentModifyClick = (index, text, commentId, diaryId) => {
    setEditableCommentIndex(index);
    setEditedCommentText(text);
    setInputCommentData((prevData) => ({
      ...prevData,
      content: text,
      commentId: commentId,
      diaryId: diaryId,
    }));
  };
  const handleCommentChange = (e) => {
    const newValue = e.target.value;
    setEditedCommentText(newValue);
    setInputCommentData((prevData) => ({
      ...prevData,
      content: newValue,
    }));
    console.log("newValue: ", newValue);
  };

  const handleCommentSave = async (index) => {
    console.log("Saving comment with data:", inputCommentData);
    try {
      const response = await instance.put(
        `/api/comment/update`,
        inputCommentData,
        {
          headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
        }
      );

      const updatedComments = comments.map((c, i) =>
        i === index ? response.data : c
      );
      setComments(updatedComments);
      setEditableCommentIndex(null);
      setEditedCommentText("");
    } catch (error) {
      console.error("Error updating comment: ", error);
    }
  };

  const handleCommentDelete = async (index) => {
    const comment = comments[index];
    console.log('comment.commentId:',comment.commentId);
    try {
      await instance.delete(`/api/comment/${comment.commentId}/delete`, {
        headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
      });

      const updatedComments = comments.filter((_, i) => i !== index);
      setComments(updatedComments);
    } catch (error) {
      console.error("Error deleting comment: ", error);
    }
  };

  const handleCommentChoose = async (index) => {
    const comment = comments[index];
    console.log('comment.commentId:',comment.commentId);
    try {
      await instance.put(`/api/comment/choose`, {
        diaryId: comment.diaryId,
        commentId: comment.commentId
      },{
        headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
      });
      alert("댓글이 채택 되었습니다!");

    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("이미 채택된 댓글입니다!");
      } else {
        console.error("Error deleting comment: ", error);
      }
    }
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

  const updatedAt = dailyData.updatedAt
    ? dailyData.updatedAt.split("T")[1]
    : "정보 없음";

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
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                />

                <Btn onClick={handleAddComment}>작성</Btn>
              </CommentWrapper>
            )}

            {comments.map((comment, index) => (
              <Comment key={index}>
                {editableCommentIndex === index ? (
                  <CommentWrapper>
                    <CommentMenu>
                      <div>
                        <CommentLogo />
                        <span key={index}>{comment.nickname}</span>
                      </div>
                      <div>
                        <CommentWrite
                          value={editedCommentText}
                          onChange={handleCommentChange}
                          placeholder="수정할 댓글을 입력해 주세요."
                        />
                        <Btn onClick={() => handleCommentSave(index)}>저장</Btn>
                      </div>
                    </CommentMenu>
                  </CommentWrapper>
                ) : (
                  <>
                    {comment.commentId  !== null ? (
                        <CommentWrapper>
                          <CommentMenu>
                            <div>
                              <CommentLogo />
                              <span key={index}>{comment.nickname}</span>
                            </div>
                            <p key={index}>{comment.content}</p>
                            <div>
                              {comment.updateButton && (
                                  <CommentBtn
                                      onClick={() =>
                                          handleCommentModifyClick(
                                              index,
                                              comment.content,
                                              comment.commentId,
                                              dailyData.diaryId // 여기에 diaryId를 전달
                                          )
                                      }
                                  >
                                    수정하기 |
                                  </CommentBtn>
                              )}
                              {comment.deleteButton && (
                                  <CommentBtn
                                      onClick={() => handleCommentDelete(index)}
                                  >
                                     삭제하기 |
                                  </CommentBtn>
                              )}
                              {comment.chooseButton && (
                                  <CommentBtn onClick={()=>handleCommentChoose(index)}> 채택하기</CommentBtn>
                              )}
                            </div>
                          </CommentMenu>
                        </CommentWrapper>
                    ): null}

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
    margin: 0;
    color: ${({ theme }) => theme.colors.fontColor};
    font-family: "Ownglyph_meetme-Rg";
  }
  p {
    font-size: 20px;
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
  //justify-content: row;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 5px;
  }
`;

const CommentWrite = styled.input.attrs({ type: "text" })`
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