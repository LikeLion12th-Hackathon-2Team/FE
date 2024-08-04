import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Test from "./pages/test";
import Detail from "./pages/detail";
import HealingCollection from "./pages/healingCollection";
import NextDoor from "./pages/nextDoor";
import NextdoorDetail from "./pages/nextdoorDetail";
import AddDiary from "./pages/addDiary";
import ModifyDiary from "./pages/modifyDiary";
import styled from "styled-components";
import Mypage from "./pages/mypage";
import MonthlySoda from "./pages/monthlySoda";
import WeeklySoda from "./pages/weeklySoda";
import Login from "./pages/login";
import Join from "./pages/join";
import MoodChange from "./pages/moodChange" ;
import NaverLogin from "./components/login/redirectionPage/NaverLogin";
import KaKaoLoginRedirection from "./components/login/redirectionPage/KaKaoLoginRedirection";
import GoogleLoginRedirection from "./components/login/redirectionPage/GoogleLoginRedirection";
function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path={`/detail/date/:year/:month/:date`}
              element={<Detail />}
            />
            <Route path="/healingCollection" element={<HealingCollection />} />
            <Route path="/nextdoor" element={<NextDoor />} />
            <Route path="/nextdoordetail" element={<NextdoorDetail />} />
            <Route path="/writediary" element={<AddDiary />} />
            <Route path="/modifydiary" element={<ModifyDiary />} />
            <Route path="/test" element={<Test />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/soda" element={<MonthlySoda />} />
            <Route
              path={`/calender/date/:year/:month`}
              element={<WeeklySoda />}
            />
            <Route path="/moodchange" element={<MoodChange />} />
            <Route path={`/naverLogin`} element={<NaverLogin />} />
            <Route path={"/kakaoLogin"} element={<KaKaoLoginRedirection />} />
            <Route path={"/googleLogin"} element={<GoogleLoginRedirection />} />
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
  background: #f5f5f5;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.backgroundColors.mainColor};
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
    height: 100vh;
  }
`;
