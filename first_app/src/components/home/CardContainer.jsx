/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
function CardContainer({ title, subTitle, children }) {
  return (
    <div
      css={css`
        background-color: white;
        color: black;
        padding: 16px;
        border-radius: 20px;
        margin-bottom: 16px;
        box-shadow: 1px 1px 9px grey;
      `}
    >
      <h3>{title}</h3>
      <p>{subTitle}</p>
      {children}
    </div>
  );
}

export default CardContainer;
