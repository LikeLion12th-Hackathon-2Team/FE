import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../components/card/card";
import Header from "../../components/common/Header";
import Menubar from "../../components/common/Menubar";
import {
  PinImg,
  PinImgNone,
  BookmarkImg,
  BookmarkImgNone,
  PublicSwitch,
  PrivateSwitch,
} from "../../components/icons/cardIcons";

function HealingCollection() {
  const dailyData = [
    {
      date: "7월 14일",
      title: "오늘은 얼레벌레 나는 그냥 벌레",
      percent: "70%",
      time: "15:20:01",
      content:
        "오늘도 늦잠을 잤다. 어제 할 일을 오늘로 미뤘다. 근데 내일 또 미룰것. 왜냐면 인생은 얼레벌레.. 그 중에 나는 그냥 벌레이기 때문이다. 유후~",
      advice:
        "오늘도 늦잠을 잤다니! 충분한 휴식은 정말 중요해요. 어제 할 일을 오늘로 미뤘어도 괜찮아요. 때로는 휴식이 필요할 때가 있으니까요. '인생은 얼레벌레'라는 말처럼 가끔은 여유롭게 살아가는 것도 필요하답니다. 벌레처럼 소소하게 살아가도, 그 안에서 행복을 찾을 수 있을 거예요. 유후~ 긍정적인 마음이 느껴져서 참 좋아요! 내일은 조금 더 힘내서 할일을 하나씩 해보는 건 어떨까요? 응원할게요!",
      comments: [
        "결국 아무것도 못한 쓸애기 잇츠 미 ~! 등장..>! 누워있는게 최고야",
        "어쨌든 실컷 누웠으니 기분 째지고 너는 2팀이니까 완전 럭키비키잖아 ~",
      ],
    },
    {
      date: "7월 14일",
      title: "결국 아무것도 못한 쓸애기",
      percent: "20%",
      time: "15:40:01",
      content:
        "결국 아무것도 못한 쓸애기 잇츠 미 ~! 등장..>! 누워있는게 최고야",
      advice:
        "어쨌든 실컷 누웠으니 기분 째지고 너는 2팀이니까 완전 럭키비키잖아 ~",
      comments: [
        "결국 아무것도 못한 쓸애기 잇츠 미 ~! 등장..>! 누워있는게 최고야",
        "어쨌든 실컷 누웠으니 기분 째지고 너는 2팀이니까 완전 럭키비키잖아 ~",
      ],
    },
    {
      date: "7월 15일",
      title: "결국 아무것도 못한 쓸애기",
      percent: "20%",
      time: "15:40:01",
      content:
        "결국 아무것도 못한 쓸애기 잇츠 미 ~! 등장..>! 누워있는게 최고야",
      advice:
        "어쨌든 실컷 누웠으니 기분 째지고 너는 2팀이니까 완전 럭키비키잖아 ~",
      comments: [
        "결국 아무것도 못한 쓸애기 잇츠 미 ~! 등장..>! 누워있는게 최고야",
        "어쨌든 실컷 누웠으니 기분 째지고 너는 2팀이니까 완전 럭키비키잖아 ~",
      ],
    },
    {
      date: "7월 19일",
      title: "결국 아무것도 못한 쓸애기",
      percent: "20%",
      time: "15:40:01",
      content:
        "결국 아무것도 못한 쓸애기 잇츠 미 ~! 등장..>! 누워있는게 최고야",
      advice:
        "어쨌든 실컷 누웠으니 기분 째지고 너는 2팀이니까 완전 럭키비키잖아 ~",

      comments: [
        "결국 아무것도 못한 쓸애기 잇츠 미 ~! 등장..>! 누워있는게 최고야",
        "어쨌든 실컷 누웠으니 기분 째지고 너는 2팀이니까 완전 럭키비키잖아 ~",
      ],
    },
  ];

  const [pinnedIndex, setPinnedIndex] = useState(0);
  const handlePinClick = (index) => {
    setPinnedIndex(index);
    console.log(index, " 📍");
  };

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

  return (
    <>
      <Header />
      <Wrapper isTall={true}>
        <Title>힐링소다 모음집</Title>
        {dailyData.map((data, index) => (
          <Diary key={index}>
            <DiaryHeader>
              <IconDiv
                color={pinnedIndex === index ? "#C9E8FF" : "#C9E8FF"}
                onClick={() => handlePinClick(index)}
              >
                {pinnedIndex === index ? <PinImg /> : <PinImgNone />}
              </IconDiv>
              <IconDiv
                color={bookmarkIndex.includes(index) ? "#C9E8FF" : "#C9E8FF"}
                onClick={() => handleBookmarkClick(index)}
              >
                {bookmarkIndex.includes(index) ? (
                  <BookmarkImg />
                ) : (
                  <BookmarkImgNone />
                )}
              </IconDiv>
              <IconDiv
                color={switchIndex.includes(index) ? "#C9E8FF" : "#C9E8FF"}
                onClick={() => handleSwitchClick(index)}
              >
                {switchIndex.includes(index) ? (
                  <PrivateSwitch />
                ) : (
                  <PublicSwitch />
                )}
              </IconDiv>
            </DiaryHeader>
            <Card dailyData={data} />
          </Diary>
        ))}
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

  height: ${(props) => (props.isTall ? "auto" : "100vh")};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "LOTTERIACHAB";
  color: white;
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
