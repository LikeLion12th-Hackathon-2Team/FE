import { Link } from "react-router-dom";
import styled from "styled-components";
import { pinImg } from "../../components/icons/cardIcons";

function Detail() {
  return (
    <>
      <Wrapper>
        <Title>7월 14일의 소다</Title>
        <Diary>
          <DiaryHeader>
            <pinImg />
          </DiaryHeader>
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
`;

const DiaryHeader = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColors.mainColor};
  border-radius: 8;
  justify-content: center;
`;
