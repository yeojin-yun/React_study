import styled from "@emotion/styled/macro";

const SocialButtonContainer = styled.button`
  flex: 1;
  border-color: #febf32;
  border: none;
  border-radius: 16px;
  padding: 8px 16px;
`;
function SocialButton({ social }) {
  return <SocialButtonContainer>{social}</SocialButtonContainer>;
}

export default SocialButton;
