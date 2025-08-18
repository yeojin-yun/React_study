/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const userCardStyle = css`
  display: flex;
  flex-direction: row;
  padding: 16px;
  border: none;
  border-radius: 16px;
  background-color: black;
  color: white;
`;

function UserCard({ name, email, address, phone, website }) {
  return (
    <div css={userCardStyle}>
      <div
        css={css`
          font-size: 20px;
          padding: 8px;

          display: flex; /* Flexbox를 사용합니다. */
          justify-content: center; /* 가로(수평) 방향으로 중앙 정렬합니다. */
          align-items: center; /* 세로(수직) 방향으로 중앙 정렬합니다. */
          flex: 40;
          text-align: center;
          background-color: white;
          color: black;
          margin-right: 16px;
          border-radius: 8px;
        `}
      >
        {name}
      </div>
      <div
        css={css`
          flex: 60;
        `}
      >
        <UserInfoRow title="phone" content={phone}></UserInfoRow>
        <UserInfoRow title="email" content={email}></UserInfoRow>
        <UserInfoRow title="address" content={address}></UserInfoRow>
        <UserInfoRow title="website" content={website}></UserInfoRow>
      </div>
    </div>
  );
}

function UserInfoRow({ title, content }) {
  return (
    <div
      css={css`
        margin-bottom: 8px;
      `}
    >
      <p
        css={css`
          margin: 0;
          padding: 0;
          font-size: 12px;
        `}
      >
        {title}
      </p>
      <p
        css={css`
          margin: 0;
          padding: 0;
          font-size: 16px;
          font-weight: 700;
        `}
      >
        {content}
      </p>
    </div>
  );
}

export default UserCard;
