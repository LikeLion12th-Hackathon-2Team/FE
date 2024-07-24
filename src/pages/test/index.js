import styled from "styled-components";
import {More} from "../../components/icons/weeklyIcons";
import {useState} from "react";

function Test() {
    const [color, setColor] = useState('#ffffff');

    const handleClick = () => {
        setColor('#ff0000'); // Change color to red on click
    };
  return (
    <Wrapper>
      <div>
        <p>테두리 전체 감싸지 않기</p>
        <p> 7월의 소다</p>
        <span> 테투리 전체 감싸기 </span>
        <span> 7월의 소다 </span>
        <ItemBox></ItemBox>
      </div>
        <TestIcon onClick={handleClick}>
            <More color={color} />
        </TestIcon>
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

const TestIcon =styled.div`
    &:hover {
        
        //svg {
        //    color: #87ceeb; // Sky blue on hover
        //    fill: #87ceeb; // Ensure fill changes too, if applicable
        //}
    }
 
`