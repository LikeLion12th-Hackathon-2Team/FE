import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Test from "./pages/test";
import styled from "styled-components";
import Mypage from "./pages/mypage";


function App() {

  return (
      <>
          <Wrapper>
              <Container>
                  <Routes>
                      <Route path="/" element={<Main/>}/>
                      <Route path='/test' element={<Test/>}/>
                      <Route path='/mypage' element={<Mypage/>}/>
                  </Routes>
              </Container>
          </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${({theme}) => theme.backgroundColors.mainColor};
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 100vw;
        height: 100vh;
    }
`