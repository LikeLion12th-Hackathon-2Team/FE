import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  PinImg,
  BookmarkImg,
  PublicSwitch,
  PrivateSwitch,
  Stamp,
} from "../../components/icons/cardIcons";

function Detail() {
  return (
    <>
      <Wrapper>
        <Title>7월 14일의 소다</Title>
        <Diary>
          <DiaryHeader>
            <PinImg />
            <BookmarkImg />
            <PublicSwitch />
          </DiaryHeader>
          <p style={{ marginTop: "10px" }}> 오늘은 얼레벌레 나는 그냥 벌레</p>
          <hr style={{ height: "2px" }} />
          <Row>
            <p>오늘의 하루 탄산지수: 70%</p>
            <p>15:20:01</p>
          </Row>
          <hr />
          <DiaryText>
            <p>
              오늘도 늦잠을 잤다. 어제 할 일을 오늘로 미뤘다. 근데 내일 또
              미룰것. 왜냐면 인생은 얼레벌레.. 그 중에 나는 그냥 벌레이기
              때문이다. 유후~
            </p>
          </DiaryText>
          <hr />
          <Row>
            <p style={{ fontSize: "20px" }}>당신을 위한 소다</p>
            <Stamp />
          </Row>
          <hr />
          <DiaryText>
            <p>
              오늘도 늦잠을 잤다니! 충분한 휴식은 정말 중요해요. 어제 할 일을
              오늘로 미뤘어도 괜찮아요. 때로는 휴식이 필요할 때가 있으니까요.
              '인생은 얼레벌레'라는 말처럼 가끔은 여유롭게 살아가는 것도
              필요하답니다. 벌레처럼 소소하게 살아가도, 그 안에서 행복을 찾을 수
              있을 거예요. 유후~ 긍정적인 마음이 느껴져서 참 좋아요! 내일은 조금
              더 힘내서 할 일을 하나씩 해보는 건 어떨까요? 응원할게요!
            </p>
          </DiaryText>
          <hr />
        </Diary>
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
