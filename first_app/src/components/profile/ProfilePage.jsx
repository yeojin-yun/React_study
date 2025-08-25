import styled from "@emotion/styled/macro";
import profileImage from "../../assets/images/avatar-jessica.jpeg";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProfileBack = styled.div`
  background-color: hsl(0, 0%, 12%);
  padding: 30px 30px;
  width: 50%;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CardButton = styled.button`
  background-color: hsl(0, 0%, 20%);
  font-size: 14px;
  width: 100%;
  color: hsl(0, 0%, 100%); //폰트 컬러
  padding: 10px 30px;
  border: none;
  border-radius: 8px;
  margin: 8px;
`;
const StyleName = styled.p`
  color: white;
  font-size: 26px;
  font-weight: 700;
  margin: 0;
`;

const StyledAddress = styled.p`
  color: hsl(75, 94%, 57%);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const StyledProfile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const StyledInfo = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 20px;
`;

function ProfilePage() {
  const linkList = [
    "Github",
    "Fronted Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  return (
    <Container>
      <ProfileBack>
        <StyledProfile src={profileImage} alt="profile_image" />
        <StyleName>Jessica Randall</StyleName>
        <StyledAddress>London, United Kingdom</StyledAddress>
        <StyledInfo>Front-end developer and avid reader</StyledInfo>
        {linkList.map((link, index) => (
          <CardButton>{link}</CardButton>
        ))}
      </ProfileBack>
    </Container>
  );
}

export default ProfilePage;
