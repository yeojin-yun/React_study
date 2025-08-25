import CardContainer from "./CardContainer";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const BasicButton = ({ children, size = "medium" }) => {
  const sizeClasses = {
    small: css`
      padding: 12px 24px;
      font-size: 16px;
      background-color: yellow;
      border-radius: 16px;
      border: none;
    `,
    medium: css`
      padding: 12px 24px;
      font-size: 16px;
      background-color: pink;
      border-radius: 16px;
      border: none;
    `,
    large: css`
      padding: 12px 24px;
      font-size: 16px;
      background-color: green;
      border-radius: 16px;
      border: none;
    `,
  };

  return <button css={sizeClasses[size]}>{children}</button>;
};
function Card() {
  return (
    <CardContainer
      title="1. 기본 Props 사용"
      subTitle="같은 컴포넌트, 다른 props로 다양한 모습!"
    >
      <BasicButton size="small">small</BasicButton>
      <BasicButton size="medium">medium</BasicButton>
      <BasicButton size="large">large</BasicButton>
    </CardContainer>
  );
}

export default Card;
