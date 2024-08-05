import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import Menubar from "../../components/common/Menubar";
import Loading from "../../components/common/Loading";
import instance from "../../api/axios";
import { getCookie } from "../../auth/cookie";

function NextDoor() {
  const navigate = useNavigate();
  const [dailyData, setDailyData] = useState("");
  const accessToken = getCookie("accessToken");

  const getNextDoorData = async () => {
    try {
      const response = await instance.get("/api/diary/shared", {
        headers: {
          Authorization: ` Bearer ${accessToken}`,
        },
      });
      console.log("response:", response.data);
      setDailyData(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getNextDoorData();
  }, []);

  if (!dailyData) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Title>옆집 소다</Title>
        {dailyData.map((data, index) => (
          <TitleCard
            key={index}
            onClick={() => navigate("/nextdoordetail", { state: { data } })}
          >
            <p>{data.diaryTitle}</p>
            <p style={{ color: "#FC8D8D" }}>{data.diaryDate}</p>
          </TitleCard>
        ))}
      </Wrapper>
      <Menubar />
    </>
  );
}

export default NextDoor;

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

const TitleCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${({ theme }) => theme.tablet};
  height: auto;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme.backgroundColors.cardbackgroundColor};
  p {
    font-family: "Ownglyph_meetme-Rg";
    font-size: 25px;
    color: ${({ theme }) => theme.colors.fontColor};
  }
  margin: 10px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 300px;
    padding: 10px;
    p {
      font-size: 20px;
    }
  }
`;
