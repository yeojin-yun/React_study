import styled from "@emotion/styled";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <Overlay>
      <ModalBox>
        {children}
        <button onClick={onClose}>등록</button>
      </ModalBox>
    </Overlay>
  );
}

export default Modal;
