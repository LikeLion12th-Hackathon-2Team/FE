import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/card/card";
import Header from "../../components/common/Header";
import Menubar from "../../components/common/Menubar";
import {
  BookmarkImg,
  BookmarkImgNone,
  PublicSwitch,
  PrivateSwitch,
  Closed,
} from "../../components/icons/cardIcons";

function NextdoorDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;

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

  const handleClosedClick = () => {
    navigate("/nextdoor");
  };

  return (
    <>
      <Header />
      <Wrapper isTall={true}>
        <Title>옆집 소다</Title>
        <Diary>
          <DiaryHeader>
            <IconDiv onClick={handleClosedClick}>
              <Closed />
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
          <Card dailyData={data} />
        </Diary>
      </Wrapper>
      <Menubar />
    </>
  );
}

export default NextdoorDetail;

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
  height: auto;
  padding: 30px 30px 20px 30px;
  border-radius: 8px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
