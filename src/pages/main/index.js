import { Link } from "react-router-dom";
import styled from "styled-components";
import { MainPageLogo } from "../../components/icons/logo";



function Main() {
  return (
    <>
        <Link to={'/login'}>
            <Wrapper>
                <LogoBox>
                    <MainPageLogo />
                    <p>소소하지만 확실한 행복을 담은, 소확행 다이어리</p>
                </LogoBox>
            </Wrapper>
        </Link>
    </>
  );
}

export default Main;

const Wrapper = styled.div`
  background: linear-gradient(
    white 17%,
    ${({ theme }) => theme.backgroundColors.mainColor} 100%
  );
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const LogoBox = styled.div`
  margin: auto;
  text-align: center;
  p {
    font-family: "Ownglyph_meetme-Rg";
    font-size: 20px;
    color: ${({ theme }) => theme.colors.fontColor};
  }
`;
