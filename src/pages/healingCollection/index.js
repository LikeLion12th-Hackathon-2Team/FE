import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../../components/card/card";
import Header from "../../components/common/Header";
import Menubar from "../../components/common/Menubar";
import Loading from "../../components/common/Loading";
import {
  PinImg,
  PinImgNone,
  BookmarkImg,
  BookmarkImgNone,
  PublicSwitch,
  PrivateSwitch,
} from "../../components/icons/cardIcons";
import instance from "../../api/axios";
import { getCookie } from "../../auth/cookie";
import { EmptySoda } from "../../components/icons/monthlyIcons";

function HealingCollection() {
  const [dailyData, setDailyData] = useState("");
  const accessToken = getCookie("accessToken");

  const getHealingData = async () => {
    try {
      const response = await instance.get("/api/diary/favorites", {
        headers: {
          Authorization: ` Bearer ${accessToken}`,
        },
      });
      console.log("response:", response.data);
      setDailyData(response.data);
    } catch (e) {
      console.error("Error:", e);
    }
  };

  useEffect(() => {
    getHealingData();
  }, []);

  if (!dailyData) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const isDiaryDataEmpty = (diary) => {
    return diary.diaryId === null && diary.content === null;
  };
  const shouldShowButton = dailyData.some(isDiaryDataEmpty);

  const CommentWriteData = true;

  return (
    <>
      <Header />
      <Wrapper>
        <Title>힐링소다 모음집</Title>
        {shouldShowButton ? (
          <EmptyDataBox>
            <EmptyDataItem>
              <SodaIconBox>
                <EmptySoda />
              </SodaIconBox>
              <h2>즐겨찾기된 일기가 없습니다.</h2>
            </EmptyDataItem>
          </EmptyDataBox>
        ) : (
          dailyData.map((data, index) => (
            <Diary key={index}>
              <DiaryHeader>
                <IconDiv>
                  {data.isRepresentative == true ? <PinImg /> : <PinImgNone />}
                </IconDiv>
                <IconDiv>
                  {data.isFavorite == true ? (
                    <BookmarkImg />
                  ) : (
                    <BookmarkImgNone />
                  )}
                </IconDiv>
                <IconDiv>
                  {data.isShared == true ? <PublicSwitch /> : <PrivateSwitch />}
                </IconDiv>
              </DiaryHeader>
              <Card dailyData={data} CommentWriteData={CommentWriteData} />
            </Diary>
          ))
        )}
      </Wrapper>
      <Menubar />
    </>
  );
}

export default HealingCollection;

const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 70px;
  background: linear-gradient(
    ${({ theme }) => theme.backgroundColors.mainColor} 25%,
    white 100%
  );

  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "LOTTERIACHAB";
  color: white;
  // @media (max-width: ${({ theme }) => theme.mobile}) {
  //   height: 100vh;
  // }
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

const EmptyDataBox = styled.div`
  color: ${({ theme }) => theme.colors.fontColor};
  height: 72vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EmptyDataItem = styled.div`
  font-family: "Noto Nastaliq Urdu";
  h2 {
    padding: 10px;
    font-size: 20px;
    color: white;
    text-align: center;
  }
`;

const SodaIconBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
