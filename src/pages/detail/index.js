import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/card/card";

function Detail() {
  const dailyData = {
    date: "7월 14일의 소다",
    title: "오늘은 얼레벌레 나는 그냥 벌레",
    percent: "70%",
    time: "15:20:01",
    content:
      "오늘도 늦잠을 잤다. 어제 할 일을 오늘로 미뤘다. 근데 내일 또 미룰것. 왜냐면 인생은 얼레벌레.. 그 중에 나는 그냥 벌레이기 때문이다. 유후~",
    advice:
      "오늘도 늦잠을 잤다니! 충분한 휴식은 정말 중요해요. 어제 할 일을 오늘로 미뤘어도 괜찮아요. 때로는 휴식이 필요할 때가 있으니까요. '인생은 얼레벌레'라는 말처럼 가끔은 여유롭게 살아가는 것도 필요하답니다. 벌레처럼 소소하게 살아가도, 그 안에서 행복을 찾을 수 있을 거예요. 유후~ 긍정적인 마음이 느껴져서 참 좋아요! 내일은 조금 더 힘내서 할일을 하나씩 해보는 건 어떨까요? 응원할게요! ",
  };
  return (
    <>
      <Wrapper>
        <Title>{dailyData.date}</Title>
        <Card dailyData={dailyData} />
      </Wrapper>
    </>
  );
}

export default Detail;

const Wrapper = styled.div`
  background: linear-gradient(
    ${({ theme }) => theme.backgroundColors.mainColor} 0%,
    white 83%
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
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
  color: white;
`;
