function UserList({ users }) {
    return <h2>
        <ul>
            {users.map((user, index) => (
                <li key={index}>이름 : {user.name} | 나이 {user.age}</li>
            ))}
        </ul>
    </h2>
}

export default UserList;