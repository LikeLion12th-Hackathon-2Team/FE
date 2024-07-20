import styled from "styled-components";

function Test() {
  return (
    <Wrapper>
      <div>
        <p>테두리 전체 감싸지 않기</p>
        <p> 7월의 소다</p>
        <span> 테투리 전체 감싸기 </span>
        <span> 7월의 소다 </span>
        <ItemBox></ItemBox>
      </div>
    </Wrapper>
  );
}

export default Test;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  font-family: "LOTTERIACHAB";
  color: white;
  p {
    text-shadow: 4px 4px ${({ theme }) => theme.backgroundColors.borderDark};
    font-size: 40px;
  }
  span {
    font-size: 40px;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: ${({ theme }) =>
      theme.backgroundColors.borderDark};
  }
`;
const ItemBox = styled.div`
  margin: auto;
  height: 100vh;
  width: ${({ theme }) => theme.tablet};
  background: ${({ theme }) => theme.backgroundColors.pageBC};
  border-radius: 20px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 324px;
    height: 100vh;
  }
`;
