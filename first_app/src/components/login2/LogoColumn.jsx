import LetterLogo from "../../assets/images/letter.svg";
import LogoImgae from "../../assets/images/logo.svg";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function LogoColumn() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <img
        css={css`
          width: 100px;
          height: 100px;
          padding-bottom: 20px;
        `}
        src={LogoImgae}
        alt="logo imgae"
      />
      <img
        css={css`
          width: 200px;
          padding-bottom: 20px;
        `}
        src={LetterLogo}
        alt="logo letter"
      />
    </div>
  );
}

export default LogoColumn;
