/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Modal from "./Modal";

const InputContainer = ({ title, isNotValid, errorMessage, children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
        align-items: start;
        width: 40%;
      `}
    >
      <h4
        css={css`
          margin: 0px;
          width: 200px;
        `}
      >
        {title}
      </h4>
      {children}
      {isNotValid && <p css={errorStyle}>{errorMessage}</p>}
    </div>
  );
};

const inputStyle = css`
  width: 100%;
  padding: 8px 8px;
  margin: 0px;

  box-sizing: border-box;
`;

const errorStyle = css`
  padding: 0px;
  margin: 0px;
  color: red;
  font-size: 14px;
`;

function UserInputDetail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  //모달용
  const [modalOpen, setModalOpen] = useState(false);

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsEmailValid(emailRegex.test(value));
  };
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    setIsPasswordValid(passwordRegex.test(value));
  };

  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    const passwordMatch = password === value;
    setIsConfirmPasswordValid(passwordMatch);
  };

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleBirthDate = (e) => {
    const value = e.target.value;
    setBirthDate(value);
  };

  const handleAgreeChecked = (e) => {
    const value = e.target.checked;
    console.log(`agree check ${value}`);
    setPrivacyAgreed(value);
  };

  return (
    <div
      css={css`
        margin: 16px;
        justify-content: center;
        display: flex;
        flex-direction: column;
      `}
    >
      <InputContainer
        title={"이메일"}
        isNotValid={!isEmailValid && email !== ""}
        errorMessage="옳지 않은 이메일 형식입니다."
      >
        <input
          css={inputStyle}
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => handleEmail(e)}
        ></input>
      </InputContainer>

      <InputContainer
        title={"비밀번호"}
        isNotValid={!isPasswordValid && password !== ""}
        errorMessage="옳지 않은 비밀번호 형식입니다."
      >
        <input
          css={inputStyle}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => handlePassword(e)}
        ></input>
      </InputContainer>
      <InputContainer
        title={"비밀번호 확인"}
        isNotValid={!isConfirmPasswordValid && confirmPassword !== ""}
        errorMessage="비밀번호가 일치하지 않습니다."
      >
        <input
          css={inputStyle}
          type="password"
          placeholder="비밀번호를 재입력해주세요."
          value={confirmPassword}
          onChange={(e) => handleConfirmPassword(e)}
        ></input>
      </InputContainer>
      <InputContainer title={"이름"}>
        <input
          css={inputStyle}
          type="text"
          placeholder="성함을 입력해주세요."
          value={name}
          onChange={(e) => handleName(e)}
        ></input>
      </InputContainer>
      <InputContainer title={"생년월일"}>
        <input
          css={inputStyle}
          type="date"
          value={birthDate}
          onChange={(e) => handleBirthDate(e)}
        ></input>
      </InputContainer>
      <InputContainer title={"개인정보 처리방침"}>
        <input
          type="checkbox"
          checked={privacyAgreed}
          onChange={(e) => handleAgreeChecked(e)}
        ></input>
      </InputContainer>
      <InputContainer title="">
        <button
          css={css`
            ${inputStyle}
            border: none;
            outline: none;
          `}
          onClick={() => setModalOpen(true)}
        >
          회원가입
        </button>
      </InputContainer>
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <p>이메일: {email}</p>
          <p>이름: {name}</p>
          <p>생년월일: {birthDate}</p>
          <p>개인정보 처리방침: {privacyAgreed}</p>
          <p>위 정보를 등록하시겠습니까?</p>
        </Modal>
      )}
    </div>
  );
}

export default UserInputDetail;
