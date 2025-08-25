import styled from "@emotion/styled/macro";

const StyledButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `background-color: `;
    }
  }}
`;
