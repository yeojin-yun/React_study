/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LogoColumn from "./LogoColumn";
import ResetPassword from "./ResetPassword";

const loginButtonStyle = css`
  background-color: #e60000;
  padding: 12px 0px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #e60000;
  color: #ffffff;
`;

const inputStyle = css`
  background-color: white;
  border: 1px solid #e0e0e0;
  padding: 16px 10px;

  border-radius: 4px;
  &::placeholder {
    color: #888daa;
    padding-left: 10px;
  }
`;
function LoginPractice() {
  return (
    <div
      css={css`
        background-color: white;
        width: 100%;
        height: 100%;
        padding: 100px;
        display: flex;
        flex-direction: column;
      `}
    >
      <LogoColumn></LogoColumn>
      <input css={inputStyle} type="text" placeholder="Email" />
      <ResetPassword></ResetPassword>
      <button
        css={loginButtonStyle}
        onClick={() => {
          console.log("login button tap");
        }}
      >
        Login
      </button>

      <button
        css={css`
          padding: 12px 0px;
          text-align: center;
          text-decoration: underline;
          border-radius: 4px;
          color: #666666;
          border: none;
          background-color: transparent;
        `}
        onClick={() => {
          console.log("sign up button tap");
        }}
      >
        Don't have an account?
      </button>
    </div>
  );
}

export default LoginPractice;
