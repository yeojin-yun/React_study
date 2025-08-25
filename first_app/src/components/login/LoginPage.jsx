import styled from "@emotion/styled/macro";
import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import LoginButton from "./LoginButton";
import SocialButtons from "./SocialButtons";

const LoginContainer = styled.div`
  background-color: #17171a;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const LoginTitle = styled.p`
  font-size: 16px;
  color: #888daa;
  font-weight: 700;
`;
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginContainer>
      <LoginTitle>Login To NFTs</LoginTitle>
      <InputWithLabel
        title="email"
        type="text"
        placeholder="text"
        value={email}
        onChange={handleEmailChange}
      ></InputWithLabel>
      <InputWithLabel
        title="password"
        type="password"
        placeholder="password"
        showIcon={true}
        showPassword={showPassword}
        value={password}
        onChange={handlePasswordChange}
        passwordToggle={handleTogglePasswordVisibility}
      ></InputWithLabel>
      <LoginButton />
      <SocialButtons />
    </LoginContainer>
  );
}

export default LoginPage;
