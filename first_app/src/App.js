/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/home/HomePage";
import Layout from "./components/LayoutWrapper";
import LoginPage from "./components/login/LoginPage";
import LoginPractice from "./components/login2/LoginPractice";
import ProfilePage from "./components/profile/ProfilePage";

const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #17171a;
    font-family: "Arial", sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

const NavListGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  list-style: none;
  padding: 20px 0;
  margin: 0;
`;
const NavItemGrid = styled.li`
  color: wheat;
  font-size: 18px;
  text-align: center;
`;
const StyledLink = styled(Link)`
  font-size: 18px;
  color: white; /* 핵심: 링크 글씨 색상을 흰색으로 설정 */
  text-decoration: none; /* 기본 밑줄 제거 (선택 사항) */

  &:hover {
    color: #007bff; /* 마우스 오버 시 색상 변경 (예: 파란색) */
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <nav>
          <NavListGrid>
            <NavItemGrid>
              <StyledLink to="/">홈</StyledLink>
            </NavItemGrid>
            <NavItemGrid>
              <StyledLink to="/login">로그인</StyledLink>
            </NavItemGrid>
            <NavItemGrid>
              <StyledLink to="/test">로그인 테스트</StyledLink>
            </NavItemGrid>
            <NavItemGrid>
              <StyledLink to="/contact">연락처</StyledLink>
            </NavItemGrid>
            <NavItemGrid>
              <StyledLink to="/profile">프로필</StyledLink>
            </NavItemGrid>
          </NavListGrid>
        </nav>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/test" element={<LoginPractice />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
