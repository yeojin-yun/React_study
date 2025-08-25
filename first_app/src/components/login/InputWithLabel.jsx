import styled from "@emotion/styled/macro";

const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Label = styled.p`
  color: white;
  font-size: 16px;
`;
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const TextField = styled.input`
  width: 100%;
  padding: 12px 10px 12px 10px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  &::placeholder {
    color: #888daa;
    padding-left: 10px;
  }
`;
const Icon = styled.span`
  position: absolute;
  transform: translateY(-50%);
  right: 20px;
  top: 50%;
`;
function InputWithLabel({
  title,
  type,
  placeholder,
  value,
  showIcon = false,
  showPassword,
  onChange,
  passwordToggle,
}) {
  return (
    <BaseWrapper>
      <Label>{title}</Label>
      <InputWrapper>
        <TextField
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {showIcon && (
          <Icon onClick={passwordToggle}> {showPassword ? "🙈" : "👁️"}</Icon>
        )}
      </InputWrapper>
    </BaseWrapper>
  );
}

export default InputWithLabel;
