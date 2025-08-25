import styled from "@emotion/styled/macro";

const LoginButtonStyle = styled.button`
  width: 70%;
  margin-top: 16px;
  padding: 12px 10px 12px 10px;
  background-color: #febf32;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  /* @media (max-width: 768px) {
    width: 80%;
  } */
`;
function LoginButton() {
  return <LoginButtonStyle>Log In</LoginButtonStyle>;
}

export default LoginButton;
