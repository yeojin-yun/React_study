/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const userCardStyle = css`
  padding: 16px;
  border: none;
  border-radius: 16px;
  background-color: black;
  color: white;
`;

function UserCard({ name, email, address, phone, website }) {
  return (
    <div css={userCardStyle}>
      <span
        css={css`
          font-size: 20px;
          padding: 0;
          margin: 0;
        `}
      >
        name: {name}
      </span>
      <p
        css={css`
          padding: 0;
          margin: 0;
        `}
      >
        phoneNumber: {phone}
      </p>
      <p>email: {email}</p>
      <p>address: {address}</p>
      <p>website: {website}</p>
    </div>
  );
}

export default UserCard;
