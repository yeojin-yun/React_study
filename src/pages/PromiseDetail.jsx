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

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };
  return (
    <>
      <h1>User List</h1>
      <button onClick={fetchUsers}>User Data 불러오기</button>
      <div css={gridStyle}>
        {users.map((user) => (
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
    </>
  );
}

export default PromiseDetail;
