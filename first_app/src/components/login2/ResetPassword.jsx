/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const buttonStyle = css`
  padding: 16px 0;
  color: #7d7d7d;
  text-decoration: underline;
  text-align: center;
  border: none;
  background-color: transparent;
`;
function ResetPassword() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: right;
      `}
    >
      <button
        css={buttonStyle}
        onClick={() => {
          console.log("reset button tap");
        }}
      >
        Reset Password
      </button>
    </div>
  );
}

export default ResetPassword;
