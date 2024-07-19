import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Test from "./pages/test";
import styled from "styled-components";


function App() {

  return (
      <>
          <Wrapper>
              <Container>
                  <Routes>
                      <Route path="/" element={<Main/>}/>
                      <Route path='/test' element={<Test/>}/>
                  </Routes>
              </Container>
          </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
    //overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F5F5F5;
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