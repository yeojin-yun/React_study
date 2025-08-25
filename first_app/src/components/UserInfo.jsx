import styled from "@emotion/styled/macro";

const StyledUserInfo = styled.div`
    background-color: hsl(0, 0%, 20%);
    padding: 20px;
`

const StyledFont = styled.p`
    font-size: 16px;
    color: white
`
function UserInfoComponent({ user }) {
    const { name, age, hobby} = user;
    return <StyledUserInfo>
        <StyledFont>내 이름: {name}</StyledFont>
        <StyledFont>내 나이: {age}</StyledFont>
        <StyledFont>내 취미: {hobby}</StyledFont>
    </StyledUserInfo>
}

export default UserInfoComponent;