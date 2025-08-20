/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardContainer = ({ backgroundColor, fontColor, children, onClick }) => {
  const buttonStyle = css`
    padding: 50px 24px;
    border: none;
    font-size: 20px;
    border-radius: 8px;
    background-color: ${backgroundColor};
    color: ${fontColor};
  `;

  return (
    <button css={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default CardContainer;
