/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import UserCard from "../components/UserCard";

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding: 16px;
`;
function PromiseDetail() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");

  const fetchUsers = () => {
    setKeyword("");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  };

  const searchKeyword = () => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 16px;
      `}
    >
      <h1
        css={css`
          text-align: center;
        `}
      >
        User List
      </h1>
      <div
        css={css`
          display: flex;
          flex-direction: row;
        `}
      >
        <input
          css={css`
            padding: 16px;
            flex: 7;
            margin-right: 4px;
          `}
          onChange={(text) => setKeyword(text.target.value)}
          value={keyword}
        ></input>
        <button
          css={css`
            flex: 1;
            margin-right: 4px;
          `}
          onClick={searchKeyword}
        >
          검색
        </button>
        <button
          css={css`
            flex: 2;
          `}
          onClick={fetchUsers}
        >
          User Data 불러오기
        </button>
      </div>
      <div css={gridStyle}>
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            phone={user.phone}
            email={user.email}
            website={user.website}
            address={`${user.address.street}, ${user.address.city}`}
          ></UserCard>
        ))}
      </div>
    </div>
  );
}

export default PromiseDetail;
