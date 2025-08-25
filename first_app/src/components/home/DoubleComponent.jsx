import styled from "@emotion/styled/macro";
import CardContainer from "./CardContainer";
const ModalButton = styled.button`
  background-color: purple;
  padding: 8px 16px;
  border-radius: 16px;
  color: white;
  font-size: 16px;
  border: none;
`;
function DoubleComponent() {
  return (
    <CardContainer
      title="2. Children Props 활용"
      subTitle="Children을 통해 컴포넌트 내부에 다양한 내용 전달!"
    >
      <CardContainer
        title="중첩된 카드"
        subTitle="이 카드는 다른 카드 안에 들어있어요!"
      >
        <li>Children으로 HTML 요소 전달</li>
        <li>Children으로 다른 컴포넌트 전달</li>
        <li>Children으로 텍스트 전달</li>
      </CardContainer>
      <ModalButton>모달 열기</ModalButton>
    </CardContainer>
  );
}

export default DoubleComponent;
