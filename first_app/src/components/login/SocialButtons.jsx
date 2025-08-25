import styled from "@emotion/styled/macro";
import SocialButton from "./SocialButton";

const SocialButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  width: 70%;
  margin-top: 20px;
`;

function SocialButtons() {
  const socialList = ["ONE-ID", "Google", "Apple"];
  return (
    <SocialButtonsContainer>
      {socialList.map((social, index) => (
        <SocialButton key={index} social={social}></SocialButton>
      ))}
    </SocialButtonsContainer>
  );
}

export default SocialButtons;
